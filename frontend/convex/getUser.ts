import { query } from "./_generated/server";

type retrieveUser = {
  name: string;
  email: string;
};

export default query(async ({ db }: any, { name, email }: retrieveUser) => {
  return await db
    .query("Users")
    .filter((q: any) => q.gte(q.field("name"), name))
    .filter((q: any) => q.gte(q.field("email"), email))
    .collect()
    .first();
});
