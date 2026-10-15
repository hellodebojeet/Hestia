import { setOffline, setOnline, isOnline } from "@hestia/cache";
import type Redis from "ioredis";
export class PresenceManager {
  constructor(private redis: Redis) {}
  heartbeat(userId: string) { return setOnline(this.redis, userId); }
  disconnect(userId: string) { return setOffline(this.redis, userId); }
  status(userId: string) { return isOnline(this.redis, userId); }
}
