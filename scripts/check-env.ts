const required = ["DATABASE_URL", "REDIS_URL", "SESSION_SECRET"];
let ok = true;
for (const k of required) {
  if (!process.env[k]) { console.error(`missing ${k}`); ok = false; }
  else console.log(`ok ${k}`);
}
if (!ok) process.exit(1);
console.log("env ok");
