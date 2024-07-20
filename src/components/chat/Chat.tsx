import React, { useState, useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

interface Message {
  clientId: string;
  msg: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const socketRef = useRef<Socket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null); // Ref for scrolling to the bottom

  useEffect(() => {
    const socket = io("http://192.168.1.187:3000"); // Replace with your backend's IP and port

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Socket connected");
    });

    socket.on("ping", (data: Message) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on("pong", (data: Message) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = () => {
    if (socketRef.current && input.trim() !== "") {
      socketRef.current.emit("ping", input);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-5/6 w-9/12 border-2 border-slate-500 rounded-lg p-4 mx-4 mb-5">
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <strong className="text-red-600 mr-1">{message.clientId}: </strong>
            {message.msg}
          </div>
        ))}
        {/* Empty div to maintain scroll position */}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex space-x-2 mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          className="flex-grow p-2 border border-gray-600 rounded bg-gray-700 text-white"
        />
        <button
          onClick={sendMessage}
          className="p-2 bg-purple-600 hover:bg-purple-700 rounded"
        >
          <FontAwesomeIcon icon={faPaperPlane} width={"2rem"} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
