import { BellIcon, UserCircleIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';

const Header = ({ onMenuClick }) => {
  const location = useLocation();
  
  // Convert path to title (e.g., "/cases" -> "Cases")
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Dashboard';
    return path.charAt(1).toUpperCase() + path.slice(2);
  };

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
            <h1 className="text-2xl font-semibold text-gray-900">{getPageTitle()}</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <BellIcon className="h-6 w-6 text-gray-500" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
            </button>
            <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
              <UserCircleIcon className="h-6 w-6 text-gray-500" />
              <span className="text-sm text-gray-700">John Doe</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 