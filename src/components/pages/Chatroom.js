import Sidebar from "../Sidebar";
import Chat from "../Chat";
import React from "react";
import "./Chatroom.css";

export default function Chatroom() {
  return (
    <div className="chatroom-container">
      <Sidebar />
      <Chat />
    </div>
  );
}
