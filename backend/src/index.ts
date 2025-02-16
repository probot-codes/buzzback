import type { Core } from '@strapi/strapi';
import { Server } from "socket.io";

export default {
  register() {},

  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:5174",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
      },
    });

    io.on("connection", (socket) => {
      console.log("A user connected");
      
      socket.on("message", (msg) => {
        console.log("Message received: ", msg);
        io.emit("message", msg); // Broadcasting message to all clients
      });
      
      socket.on("disconnect", () => {
        console.log("A user disconnected");
      });
    });
  },
};
