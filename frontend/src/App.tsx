import "./App.css";
import { useState } from "react";

function App() {
  const [isSendActive, setIsSendActive] = useState<boolean>(false);

  const handleSendClick = () => {
    setIsSendActive(true);
  };

  const handleReceiveState = () => {
    setIsSendActive(false);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <button
          onClick={handleSendClick}
          className={`font-bold py-2 px-6 rounded ${isSendActive ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"}`}
        >
          Send
        </button>
        <button
          onClick={handleReceiveState}
          className={`font-bold py-2 px-6 rounded ${isSendActive ? "bg-white text-black hover:bg-gray-100" : "bg-black text-white"}`}
        >
          Receive
        </button>
      </div>
    </div>
  );
}

export default App;
