export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="flex flex-col items-center justify-center max-w-lg mx-4 space-y-6 bg-white text-gray-800 shadow-xl rounded-2xl p-12 transition-all duration-300 hover:shadow-2xl">
        <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-center text-blue-600">Coming Soon!</h1>
        <p className="text-xl text-center text-gray-600">
          We&#39;re crafting something extraordinary for you. Our team is working hard to bring you
          an amazing experience.
        </p>
        <p className="text-sm text-center text-gray-500">
          Stay tuned for updates and exciting features.
        </p>
      </div>
    </div>
  )
}
