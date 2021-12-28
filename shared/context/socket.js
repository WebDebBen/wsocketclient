import React from "react"
import io from "socket.io-client";

export const socket = io.connect("http://72.167.48.154:9000");
export const SocketContext = React.createContext();