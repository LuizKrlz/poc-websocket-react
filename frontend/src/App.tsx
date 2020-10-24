import React, { useEffect, useState } from "react";

export default function App() {
  const [ws, setWs] = useState<any>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3333");
    setWs(ws);

    return () => {
      setWs(null);
    };
  }, []);

  return <h1>Teste</h1>;
}
