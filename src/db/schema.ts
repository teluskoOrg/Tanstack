import {pgTable,serial,text,timestamp} from 'drizzle-orm/pg-core';

export const todos = pgTable('todos',{
    id:serial('id').primaryKey(),
    title:text('title').notNull(),
    createAt:timestamp('create_at').defaultNow(),
})