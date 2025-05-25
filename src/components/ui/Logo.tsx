import { Activity } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary-600 dark:bg-primary-500 text-white">
      <Activity size={20} />
    </div>
  );
}