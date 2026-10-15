import { z } from "zod";
export const reactionType = z.enum(["LIKE","LOVE","HAHA","WOW","SAD","ANGRY"]);
export const setReactionDto = z.object({ type: reactionType.default("LIKE") });
