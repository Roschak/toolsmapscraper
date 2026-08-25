export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500">Total Prospects</h3>
          <p className="text-3xl font-bold mt-2">12,450</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500">High Confidence Matches</h3>
          <p className="text-3xl font-bold mt-2 text-green-600">8,102</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500">No Website Listed</h3>
          <p className="text-3xl font-bold mt-2 text-amber-600">4,231</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-gray-500">Active Search Jobs</h3>
          <p className="text-3xl font-bold mt-2 text-blue-600">3</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 min-h-[400px]">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Discovery Activity</h3>
        <p className="text-gray-500 text-sm">Waiting for data ingestion...</p>
      </div>
    </div>
  );
}
