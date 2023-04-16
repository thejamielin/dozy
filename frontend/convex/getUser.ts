import { mutation, query } from "./_generated/server";

type retrieveUser = {
  name: string;
  email: string;
};

export default mutation(async ({ db }: any, { name, email }: retrieveUser) => {
  return await db
    .query("Users")
    .filter((q: any) => q.eq(q.field("name"), name))
    .filter((q: any) => q.eq(q.field("email"), email))
    .first();
});
