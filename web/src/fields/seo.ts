import type { Field } from "payload";

export const seoFields: Field[] = [
  {
    name: "meta",
    type: "group",
    label: "SEO",
    fields: [
      {
        name: "title",
        type: "text",
        label: "Meta title",
        maxLength: 70,
      },
      {
        name: "description",
        type: "textarea",
        label: "Meta description",
        maxLength: 160,
      },
      {
        name: "ogImage",
        type: "upload",
        relationTo: "media",
        label: "OG image",
      },
      {
        name: "canonicalUrl",
        type: "text",
        label: "Canonical URL",
      },
      {
        name: "noIndex",
        type: "checkbox",
        label: "Hide from search engines (noindex)",
        defaultValue: false,
      },
    ],
  },
];
