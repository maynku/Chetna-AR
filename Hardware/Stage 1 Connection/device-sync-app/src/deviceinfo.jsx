import React, { useEffect, useState } from "react";

const DeviceSyncCard = () => {
  const [deviceData, setDeviceData] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    fetch("http://192.168.43.16:5000/device-info")  // Replace with your Pi's IP ////192.168.43.16:5000

      .then((res) => res.json())
      .then((data) => setDeviceData(data))
      .catch((err) => console.error("Error fetching device info:", err));
  }, []);

  console.log(deviceData);

  const handleSync = () => {
    setIsConnected(true);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border text-center">
      <h2 className="text-xl font-bold mb-4">🔧 Device: {deviceData?.device || "Loading..."}</h2>
      <p>📡 <strong>IP Address:</strong> {deviceData?.ip || "Loading..."}</p>
      <p>🧬 <strong>MAC Address:</strong> {deviceData?.mac || "Loading..."}</p>
      <p className="mt-2">
        {isConnected ? (
          <span className="text-green-600 font-semibold">✅ Connected</span>
        ) : (
          <span className="text-yellow-500 font-semibold">🕒 Ready to Sync</span>
        )}
      </p>

      <button
        className={`mt-4 px-6 py-2 rounded-xl font-medium text-white ${
          isConnected ? "bg-green-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
        onClick={handleSync}
        disabled={isConnected}
      >
        {isConnected ? "Synced" : "Tap to Sync"}
      </button>
    </div>
  );
};

export default DeviceSyncCard;
