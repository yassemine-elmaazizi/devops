import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Modern React Application with{' '}
              <span className="text-primary-600 dark:text-primary-400">Beautiful Design</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              A professional, responsive frontend built with React, Tailwind CSS, and modern web
              technologies. Perfect for showcasing your products or services.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg">
                Get Started
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 opacity-30 blur"></div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/16129877/pexels-photo-16129877/free-photo-of-modern-office-building-with-glass-facade.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Modern Application"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}