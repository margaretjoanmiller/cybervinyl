import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const albumsTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  year: text().notNull(),
  artist: text().notNull(),
  genre: text().notNull(),
  rating: int().notNull(),
});
