const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h2>
        <button className="btn btn-primary">New Case</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Recent Cases</h3>
          {/* Content */}
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Upcoming Events</h3>
          {/* Content */}
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Tasks</h3>
          {/* Content */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 