import React from "react";
import "./Message.css";

const Message = ({ message }) => {
  return message ? <div className="message">{message}</div> : null;
};

export default Message;
