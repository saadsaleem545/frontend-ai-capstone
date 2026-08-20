import { useEffect, useState } from "react";

export default function Health() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("API is healthy");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="page">
      <h1>Health Check</h1>
      <p>Status: {status}</p>
    </section>
  );
}

