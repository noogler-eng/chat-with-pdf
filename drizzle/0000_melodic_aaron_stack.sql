DO $$ BEGIN
 CREATE TYPE "public"."system_message_role" AS ENUM('system', 'user');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "User" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"userId" varchar(256) NOT NULL,
	"fileKey" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"chatId" integer NOT NULL,
	"content" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"role" "system_message_role" NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Messages" ADD CONSTRAINT "Messages_chatId_User_id_fk" FOREIGN KEY ("chatId") REFERENCES "public"."User"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
