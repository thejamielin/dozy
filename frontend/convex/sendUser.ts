import { mutation } from "./_generated/server";
type user = {
    name: string,
    email: string,
    password: string,
    goalSleepTime: string,
    streakLength: string,
}

export default mutation(async ({ db } : any, {name, email, password, goalSleepTime, streakLength} : user) => {
  const user = {name, email, password, goalSleepTime, streakLength};
  await db.insert("users", user);
});