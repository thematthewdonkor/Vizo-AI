import { db } from ".";
import { eq } from "drizzle-orm";
import { users as user } from "./schema";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const users = async () => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  //Check if user already exist in the database if not create new user
  const useUser = await db.select().from(user).where(eq(user.userId, userId));
  if (!useUser.length) {
    await db.insert(user).values({ userId });

    revalidatePath("/dashboard");
  }
};
