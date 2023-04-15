import { mutation } from "./_generated/server";
type sleepStart = {
  userId : string,
  startTime : string
}

export default mutation(async ({ db } : any, {userId, startTime} : sleepStart) => {
  const message = { userId, startTime};
  await db.insert("messages", message);
});