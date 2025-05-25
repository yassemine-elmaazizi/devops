import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="mt-1 p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
            <MapPin size={20} />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Our Location</h4>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              123 Business Avenue <br />
              Suite 456 <br />
              San Francisco, CA 94107
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="mt-1 p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
            <Phone size={20} />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Phone Number</h4>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              +1 (555) 123-4567
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="mt-1 p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
            <Mail size={20} />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Email Address</h4>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              info@modernapp.com
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="mt-1 p-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
            <Clock size={20} />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">Business Hours</h4>
            <p className="mt-1 text-gray-600 dark:text-gray-300">
              Monday - Friday: 9:00 AM - 5:00 PM <br />
              Saturday: 10:00 AM - 2:00 PM <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}