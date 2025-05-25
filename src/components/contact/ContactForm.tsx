import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, Send } from 'lucide-react';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset,
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-800"
        >
          <div className="flex items-center space-x-3 text-green-600 dark:text-green-400">
            <CheckCircle size={24} />
            <h3 className="text-lg font-medium">Message Sent Successfully!</h3>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Thank you for your message. We'll get back to you as soon as possible.
          </p>
          <Button
            className="mt-4"
            variant="outline"
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <Input
            label="Full Name"
            id="name"
            placeholder="Your name"
            {...register('name', { 
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters'
              }
            })}
            error={errors.name?.message}
          />
          
          <Input
            label="Email Address"
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            error={errors.email?.message}
          />
          
          <TextArea
            label="Message"
            id="message"
            placeholder="Your message..."
            rows={5}
            {...register('message', { 
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters'
              }
            })}
            error={errors.message?.message}
          />
          
          <Button
            type="submit"
            fullWidth
            isLoading={isSubmitting}
          >
            <Send size={18} className="mr-2" />
            Send Message
          </Button>
        </motion.form>
      )}
    </div>
  );
}