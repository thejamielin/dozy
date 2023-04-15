import { mutation } from "./_generated/server";
type sleepEnd = {
  id : any,
  endTime : string
}

export default mutation(async ({ db } : any, {id, endTime} : sleepEnd) => {
  const tuple = await db.get(id);
  console.log(tuple); 
  await db.patch(id, {endTime});
  const task = await db.get(id);
  console.log(task);
});