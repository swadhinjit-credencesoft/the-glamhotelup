import type { Metadata } from "next";
import { PolicyPage } from "@/components/page/PolicyPage";
import { POLICY_PAGES } from "@/lib/data/pages";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the The Glam website.",
};

export default function TermsOfUsePage() {
  const page = POLICY_PAGES["terms-of-use"];
  return (
    <PolicyPage
      title={page.title}
      description="Please read these terms carefully before using this website."
      sections={page.sections}
    />
  );
}
