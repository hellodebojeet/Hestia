import { WebSocketServer } from "ws";
import { parseBearer } from "./lib/socket-auth.js";
import { allowConnection } from "./lib/connection-limiter.js";
const port = Number(process.env.REALTIME_PORT ?? 4001);
const wss = new WebSocketServer({ port });
let active = 0;
wss.on("connection", (socket, req) => {
  if (!allowConnection(active)) { socket.close(1013, "overloaded"); return; }
  const token = parseBearer(req.headers.authorization);
  if (!token) { socket.close(4401, "unauthorized"); return; }
  active += 1;
  socket.on("close", () => { active -= 1; });
});
console.log(`realtime listening on ${port}`);
