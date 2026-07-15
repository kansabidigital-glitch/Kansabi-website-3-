import type { CollectionConfig } from "payload";

export const Leads: CollectionConfig = {
  slug: "leads",
  admin: {
    useAsTitle: "email",
    group: "CRM",
    defaultColumns: ["name", "email", "company", "status", "createdAt"],
  },
  access: {
    // Writes go through /api/lead (Payload local API) only — the public
    // REST/GraphQL API cannot create, read, update or delete leads.
    create: () => false,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => req.user?.role === "admin",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
      index: true,
    },
    {
      name: "company",
      type: "text",
      required: true,
    },
    {
      name: "message",
      type: "textarea",
    },
    {
      name: "source",
      type: "text",
      admin: {
        description: "Page or section the lead came from, e.g. / or /contact",
      },
    },
    {
      name: "utm",
      type: "json",
      admin: {
        description: "utm_source / utm_medium / utm_campaign captured on submit",
      },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "new",
      index: true,
      options: [
        { label: "New", value: "new" },
        { label: "Contacted", value: "contacted" },
        { label: "Qualified", value: "qualified" },
      ],
    },
  ],
};
