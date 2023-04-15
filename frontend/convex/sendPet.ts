import { mutation } from "./_generated/server";
type pet = {
    petname:string,
    imagename : string
}

export default mutation(async ({ db } : any, {petname, imagename} : pet) => {
  const message = { petname, imagename};
  await db.insert("messages", message);
});