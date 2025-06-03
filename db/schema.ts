import {
  pgTable,
  integer,
  text,
  timestamp,
  uuid,
  //   pgSchema,
  //   pgEnum,
} from "drizzle-orm/pg-core";

// //Role
// export const rolesEnum = pgEnum("roles", [
//   "guest",
//   "admin",
//   "user",
//   "moderator",
// ]);

// //Custom schema
// export const customSchema = pgSchema("custom");

//Users
export const users = pgTable("users", {
  userId: text("user_id").notNull().unique().primaryKey(),
  //   lastName: text(),
  //   email: text(),
  //   //   role: rolesEnum().default("guest"), //Default role is "guest"
  //   created_at: timestamp(),
});

//User api limit
export const userApiLimit = pgTable("userApiLimit", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  userIdFK: text("fk_user_id")
    .references(() => users.userId, {
      onDelete: "cascade",
      onUpdate: "cascade",
    })
    .notNull(),
  count: integer().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

//User subscription
export const userSubscription = pgTable("userSubscription", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  userIdFK: text("fk_user_id")
    .references(() => users.userId, {
      onDelete: "cascade",
      onUpdate: "cascade",
    })
    .notNull(),

  //TODO:Other props here
});

// //query
// export const createEmail = async () => {
//   await db.insert(users).values({ email: "thematthewdonkor@gmail.com" });
// };

// export const updateEmail = async () => {
//   await db
//     .update(users)
//     .set({ email: "tmdmatthew@gmail.com" })
//     .where(eq(users.id, 1)); // Only the user on the first row  should be deleted
// };

// export const deleteEmail = async () => {
//   await db
//     .delete(users)

//     .where(eq(users.id, 1)); // Only the user on the first row  should be deleted
// };

// //Post
// export const posts = pgTable("posts", {
//   id: text("id"),
//   title: text("title"),
// });

// //Comment
// export const comments = pgTable("comment", {
//   id: timestamp(),
//   author_id: integer().references(() => users.id),
// });
