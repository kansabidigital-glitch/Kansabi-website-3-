import type { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  admin: {
    group: "Settings",
  },
  access: {
    read: () => true,
    update: ({ req }) => Boolean(req.user?.role === "admin"),
  },
  fields: [
    {
      name: "siteName",
      type: "text",
      defaultValue: "Kansabi",
    },
    {
      name: "siteUrl",
      type: "text",
      required: true,
      admin: {
        description: "Production URL, e.g. https://kansabi.com",
      },
    },
    {
      name: "defaultMeta",
      type: "group",
      label: "Default SEO",
      fields: [
        {
          name: "title",
          type: "text",
          defaultValue: "Kansabi — Growth Infrastructure Partner",
        },
        {
          name: "description",
          type: "textarea",
          defaultValue:
            "We build acquisition infrastructure for B2B SaaS and high-LTV brands. Simple systems. Serious growth.",
        },
        {
          name: "ogImage",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "organization",
      type: "group",
      fields: [
        { name: "legalName", type: "text" },
        { name: "email", type: "email" },
        { name: "location", type: "text", defaultValue: "London, UK" },
      ],
    },
  ],
};
