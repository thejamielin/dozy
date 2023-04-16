import { mutation } from "./_generated/server";

enum statusEnum {
    healthy,
    sick,
    sleeping
}

type petInfo = {
  userId : string,
  petId : string,
  status : statusEnum,
  birth : string
}

export default mutation(async ({ db } : any, {userId, petId, status, birth} : petInfo) => {
  const message = {userId, petId, status, birth};
  await db.insert("messages", message);
});