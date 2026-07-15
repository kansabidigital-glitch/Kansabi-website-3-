import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { BlogPosts } from "./collections/BlogPosts";
import { Leads } from "./collections/Leads";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";
import { Users } from "./collections/Users";
import { SiteSettings } from "./globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: "— Kansabi CMS",
    },
  },
  collections: [Users, Media, Pages, BlogPosts, Leads],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
    push: process.env.NODE_ENV !== "production",
  }),
  sharp,
  cors: [
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ].filter(Boolean),
  csrf: [
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ].filter(Boolean),
});
