import type Redis from "ioredis";
export const realtimeChannel = (scope: string) => `rt:${scope}`;
export class RedisPubSub {
  constructor(private redis: Redis) {}
  publish(channel: string, message: string) { return this.redis.publish(channel, message); }
  subscribe(channel: string, handler: (msg: string) => void) {
    const sub = this.redis.duplicate();
    void sub.subscribe(channel);
    sub.on("message", (_ch, msg) => handler(msg));
    return () => { void sub.unsubscribe(channel); sub.disconnect(); };
  }
}
