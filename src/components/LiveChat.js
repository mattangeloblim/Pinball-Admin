import React, { useState, useEffect, useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";

import { io } from "socket.io-client";
import Cookies from "js-cookie";

function LiveChat() {
  //chat states
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const messagesListRef = useRef(null);

  const userId = Cookies.get("userToken");

  //chat hook
  useEffect(() => {
    // Connect to the Socket.IO server
    const baseURL = process.env.REACT_APP_BACKEND_URL;
    const newSocket = io(baseURL, { query: { userId } });

    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, []);

  //chat hook
  useEffect(() => {
    if (socket) {
      // Listen for 'chatMessage' events from the server
      socket.on("chatMessage", ({ userId, message }) => {
        console.log("Received chat message from user", userId, ":", message);
        setMessages((prevMessages) => [...prevMessages, { userId, message }]);
      });
    }

    // Clean up the socket listener when the component unmounts
    return () => {
      if (socket) {
        socket.off("chatMessage");
      }
    };
  }, [socket]); // Make sure to include socket in the dependency array

  useEffect(() => {
    // Scroll to the bottom of the messages list when it updates
    if (messagesListRef.current) {
      messagesListRef.current.scrollTop = messagesListRef.current.scrollHeight;
    }
  }, [messages]);

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    const firstTwoLetters = name.substring(0, 2);

    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: firstTwoLetters,
    };
  }

  return (
    <>
      <div className="h-full chat-feed flex flex-col gap-2  py-2 px-2 bg-gray-300 rounded-lg">
        <p className="text-lg font-semibold uppercase">live chat:</p>
        <ul className="h-full w-full overflow-y-auto" ref={messagesListRef}>
          {messages.map((message, index) => (
            <li key={index} className="p-1 w-fit rounded-md break-words">
              <div className="flex justify-center items-center">
                <Avatar
                  {...stringAvatar(message.userId)}
                  style={{ width: "2rem", height: "2rem" }}
                />
                {/* <AccountCircleIcon style={{ color: "white" }} /> */}
                <p>
                  <strong className="ml-1 text-white font-semibold">
                    {message.userId}:{" "}
                  </strong>{" "}
                  <span className="text-white">{message.message.message}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default LiveChat;
