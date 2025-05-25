import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-primary-600 dark:bg-primary-700">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Join thousands of satisfied users who have already transformed their online presence.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100 dark:bg-white dark:text-primary-600 dark:hover:bg-gray-100"
              >
                Contact Us Today <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}