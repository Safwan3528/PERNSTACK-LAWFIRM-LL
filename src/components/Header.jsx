import { BellIcon, UserCircleIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              className="md:hidden p-2 rounded-md hover:bg-gray-100 mr-2"
              onClick={onMenuClick}
            >
              <Bars3Icon className="h-6 w-6 text-gray-500" />
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <BellIcon className="h-6 w-6 text-gray-500" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <UserCircleIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 