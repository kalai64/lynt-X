export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <span className="text-gray-600">Loading...</span>
      </div>
    </div>
  );
}