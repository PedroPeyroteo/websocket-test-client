import React from "react";
import Chat from "./components/chat/Chat";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#121212] text-white">
      <div className="text-center pt-14">
        <p className="font-mono text-5xl">Welcome to the chat</p>
      </div>
      <div className="flex flex-grow items-center justify-center w-full mt-5 overflow-auto">
        <Chat />
      </div>
    </div>
  );
};

export default App;
