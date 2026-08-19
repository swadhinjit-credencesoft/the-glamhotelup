import { PageHero } from "./PageHero";

interface PolicySection {
  heading: string;
  body: string;
}

export function PolicyPage({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: PolicySection[];
}) {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: title }]}
        title={title}
        height="h-[40vh] min-h-[320px]"
        overlayClass="bg-adani-dark opacity-80"
      />
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <p className="text-lg text-gray-600 mb-12">{description}</p>
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-bold font-heading text-adani-dark mb-4">{section.heading}</h2>
                <p className="text-gray-600 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
