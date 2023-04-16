import { mutation } from "./_generated/server";
import { useMutation, useQuery } from "./_generated/react";
import { statusEnum } from "./sendPetInfo";

type status = {
  userId : string,
  status : statusEnum 
}

export default mutation(async ({ db } : any, {userId, status} : status) => {
  const tuple = await db.query("PetInfos").filter((q : any) => q.eq(q.field("userId"), userId))
    .filter((q : any) => q.eq(q.field("choosen"), true)).first()
    .then((tuple : any) => db.patch(tuple._id, {status}));

});