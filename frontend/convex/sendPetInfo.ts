import { mutation } from "./_generated/server";

export enum statusEnum {
    healthy = "healthy",
    sick = "sick",
    sleeping = "sleeping"
}

type petInfo = {
  userId : string,
  petId : string,
  status : statusEnum,
  birth : string,
  choosen : boolean
}

export default mutation(async ({ db } : any, {userId, petId, status, birth, choosen} : petInfo) => {
  const message = {userId, petId, status, birth, choosen};
  await db.insert("PetInfos", message);
});