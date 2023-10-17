import { useEffect, useState } from "react";
import "./App.css";
function App() {


  const [link] = useState([
    "https://chat.whatsapp.com/LOYFMFBjRge0MPeUJAhMGV",
    "https://chat.whatsapp.com/KilAdPtmcZJKUxa5vhbPv0",
  ]);

  const [random, setRandom] = useState("");
  const randomLinks = () => {
    const random = Math.floor(Math.random() * link.length);
    setRandom(link[random])
  };
  useEffect(() => {
    randomLinks();
    window.location.href = random;
  });

  return <div className="spinner"></div>;
}

export default App;
