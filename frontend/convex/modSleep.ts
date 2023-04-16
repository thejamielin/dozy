import { mutation } from "./_generated/server";
import { useMutation, useQuery } from "./_generated/react";
import { Id } from "./_generated/dataModel";

type sleepEnd = {
  userId : any,
  endTime : string
}

export default mutation(async ({ db } : any, {userId, endTime} : sleepEnd) => {
  const updateEndTime = await db.query("Sleeps").filter((q : any) => q.eq(q.field("userId"), userId)).order("desc").first()
  .then((sleep : any) => db.patch(sleep._id, {endTime}))

  const sleeps = await db.query("Sleeps").filter((q : any) => q.eq(q.field("userId"), userId)).order("desc").first();
  const startTime = sleeps.startTime;

  const time = (Date.parse(endTime) - Date.parse(startTime)) / (1000 * 60 * 60);

  const updateStreak = await db.get(new Id("Users", userId)).then((user : any) => {
    if (user.goalSleepTime < time) {
      const streakLength = user.streakLength + 1;
      db.patch(user._id, {streakLength});
    }
  })
});