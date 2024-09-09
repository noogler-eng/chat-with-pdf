import { integer, pgTable, serial, text, varchar, timestamp, boolean, pgEnum } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum('system_message_role' , ['system', 'user']);

export const chat = pgTable('User', {
    id: serial('id').primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    userId: varchar('userId', {length: 256}).notNull(),
    fileKey: text('fileKey').notNull()
  });

export const messages = pgTable("Messages", {
    id: serial('id').primaryKey(),
    chatId: integer('chatId').references(()=>chat.id).notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    role: roleEnum("role").notNull()
})