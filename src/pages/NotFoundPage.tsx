import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="py-16 md:py-24">
        <Container className="text-center">
          <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">404</h1>
          <h2 className="mt-8 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="mt-8">
            <Link to="/">
              <Button size="lg">
                <ArrowLeft size={18} className="mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </motion.div>
  );
}