import { mutation } from "./_generated/server";
type pet = {
    petname: string,
    imagename: string
}

export default mutation(async ({ db } : any, {petname, imagename} : pet) => {
  const pet = { petname, imagename};
  await db.insert("pets", pet);
});