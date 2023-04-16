import { mutation } from "./_generated/server";
export type user = {
    name: string,
    email: string,
    goalSleepTime: number,
    streakLength: number,
    lastGoodSleep: string
}

export default mutation(async ({ db } : any, {name, email, goalSleepTime, streakLength, lastGoodSleep} : user) => {
  const user = {name, email, goalSleepTime, streakLength, lastGoodSleep};
  const id = await db.insert("Users", user);
});