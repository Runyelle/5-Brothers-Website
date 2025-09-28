import { useState } from "react";

let listeners = [];

export function useToast() {
  const [toasts, setToasts] = useState([]);

  function notify(toast) {
    const id = Date.now();
    const newToast = { id, ...toast };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);

    listeners.forEach((cb) => cb(newToast));
  }

  return {
    toast: notify,
    toasts
  };
}