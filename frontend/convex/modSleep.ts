import { mutation } from "./_generated/server";
import { useMutation, useQuery } from "./_generated/react";

type sleepEnd = {
  id : any,
  endTime : string
}

export default mutation(async ({ db } : any, {id, endTime} : sleepEnd) => {
  const tuple = await db.query("sleeps").order("desc").first()
  .then((tuple : any) => db.patch(tuple._id, {endTime}));
});