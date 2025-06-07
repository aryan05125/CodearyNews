import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialAlerts = [
  {
    id: 1,
    message: "New Instagram algorithm update rolling out soon!",
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 mins ago
    read: false,
  },
  {
    id: 2,
    message: "YouTube influencer 'JaneDoe' just hit 1M subscribers!",
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    read: false,
  },
  {
    id: 3,
    message: "Twitter bans several spam accounts targeting influencers.",
    timestamp: new Date(Date.now() - 1000 * 60 * 90), // 1.5 hours ago
    read: false,
  },
];

function formatTime(date) {
  const now = new Date();
  const diff = Math.floor((now - date) / 1000); // seconds

  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return date.toLocaleDateString();
}

const Notifications = () => {
  const [alerts, setAlerts] = useState(initialAlerts);

  const refreshAlerts = () => {
    // Simulate fetching new alert by adding one randomly
    if (alerts.length >= 10) return; // max 10 alerts

    const newAlert = {
      id: alerts.length + 1,
      message:
        "Breaking: TikTok introduces new monetization features for creators!",
      timestamp: new Date(),
      read: false,
    };
    setAlerts([newAlert, ...alerts]);
  };

  const toggleRead = (id) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === id ? { ...alert, read: !alert.read } : alert
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 text-gray-900 dark:text-gray-100">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <button
          onClick={refreshAlerts}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          aria-label="Refresh notifications"
          title="Refresh notifications"
          disabled={alerts.length >= 10}
        >
          Refresh
        </button>
      </div>

      {alerts.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No notifications yet.
        </p>
      )}

      <AnimatePresence>
        {alerts.slice(0, 10).map(({ id, message, timestamp, read }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`flex justify-between items-center p-4 rounded-lg shadow-md transition-colors duration-300
              ${read ? "bg-gray-200 dark:bg-gray-700" : "bg-yellow-100 dark:bg-yellow-900"}
            `}
          >
            <div>
              <p className="font-medium">{message}</p>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {formatTime(timestamp)}
              </span>
            </div>
            <button
              onClick={() => toggleRead(id)}
              className={`text-sm font-semibold px-3 py-1 rounded-full border transition
                ${
                  read
                    ? "border-gray-500 text-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600"
                    : "border-yellow-600 text-yellow-700 hover:bg-yellow-300 dark:hover:bg-yellow-800"
                }
              `}
              aria-label={read ? "Mark as unread" : "Mark as read"}
              title={read ? "Mark as unread" : "Mark as read"}
            >
              {read ? "Read" : "Mark Read"}
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Notifications;
