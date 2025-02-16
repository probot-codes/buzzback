import { Server } from "socket.io";
import { Strapi } from "@strapi/strapi";

declare module "@strapi/strapi" {
  interface Strapi {
    io?: Server;
  }
}
