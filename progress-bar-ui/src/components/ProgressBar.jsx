import { useEffect, useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 1;
          if (next >= 100) {
            clearInterval(interval);
            setStatus("Complete ✅");
          }
          return next;
        });
      }, 100);
    }
  }, [progress]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-4">
      <h1 className="text-2xl font-bold mb-6">🔄 Progress Bar </h1>
      <div className="w-full max-w-md bg-gray-300 rounded-full h-6 overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="mt-4 text-lg font-medium">
        {status} ({progress}%)
      </div>
    </div>
  );
}

export default ProgressBar;
