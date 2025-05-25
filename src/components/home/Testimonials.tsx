import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Container from '../ui/Container';

const testimonials = [
  {
    content:
      "This application exceeded all our expectations. The design is stunning and the functionality is top-notch. Our team loves using it every day.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
  {
    content:
      "The responsive design works flawlessly across all our devices. Implementation was quick and the support has been outstanding.",
    author: "Michael Chen",
    role: "CTO, StartupXYZ",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
  },
  {
    content:
      "We've seen a significant improvement in user engagement since launching our new site. The clean design and intuitive interface make all the difference.",
    author: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what people are saying about our application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm relative"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}