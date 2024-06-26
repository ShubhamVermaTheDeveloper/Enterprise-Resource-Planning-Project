import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
    <div className='container mt-4'>
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-lg font-semibold">Total Products</p>
          <p className="text-2xl text-blue-600">10</p>
          <Link to="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block mt-2">Manage Products</Link>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <p className="text-lg font-semibold">Total Orders</p>
          <p className="text-2xl text-blue-600">5</p>
          <Link to="/orders" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block mt-2">Manage Orders</Link>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Dashboard;
