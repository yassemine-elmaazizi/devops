import { motion } from 'framer-motion';
import { Layout, Shield, Zap, Users } from 'lucide-react';
import Container from '../ui/Container';

const features = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Responsive Design',
    description:
      'Fully responsive layout that looks great on all devices, from mobile phones to large desktop screens.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Fast Performance',
    description:
      'Optimized for speed with modern best practices to ensure your application loads quickly.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Secure by Default',
    description:
      'Built with security in mind, following the latest web security best practices and guidelines.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'User-Centric',
    description:
      'Designed with user experience as the top priority, making your application intuitive and easy to use.',
  },
];

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Outstanding Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Our application comes with everything you need to create a professional web presence.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}