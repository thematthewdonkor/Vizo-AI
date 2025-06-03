CREATE TABLE "userApiLimit" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"fk_user_id" text NOT NULL,
	"count" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "userSubscription" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"fk_user_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"user_id" text PRIMARY KEY NOT NULL,
	CONSTRAINT "users_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
ALTER TABLE "userApiLimit" ADD CONSTRAINT "userApiLimit_fk_user_id_users_user_id_fk" FOREIGN KEY ("fk_user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "userSubscription" ADD CONSTRAINT "userSubscription_fk_user_id_users_user_id_fk" FOREIGN KEY ("fk_user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;