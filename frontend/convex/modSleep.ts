import { mutation } from "./_generated/server";
type sleepEnd = {
  id : string,
  endTime : string
}

export default mutation(async ({ db } : any, {id, endTime} : sleepEnd) => {
  const tuple = await db.get(id);
  console.log(tuple); // prints {name: "Foo"}
  await db.patch("endTime", id, {endTime});
  const task = await db.get(id);
  console.log(task);
});