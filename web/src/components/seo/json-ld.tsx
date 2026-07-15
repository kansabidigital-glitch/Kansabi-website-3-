type JsonLdProps = {
  schemas: Record<string, unknown>[];
};

/*
 * Server component — schemas land in the SSR HTML so crawlers read them
 * without executing JS (GEO requirement).
 */
export function JsonLd({ schemas }: JsonLdProps) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
