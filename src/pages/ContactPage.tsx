import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll respond as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <ContactInfo />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </motion.div>
  );
}