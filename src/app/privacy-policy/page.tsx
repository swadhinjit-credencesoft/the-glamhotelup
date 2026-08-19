import type { Metadata } from "next";
import { PolicyPage } from "@/components/page/PolicyPage";
import { POLICY_PAGES } from "@/lib/data/pages";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for The Glam, Greater Noida.",
};

export default function PrivacyPolicyPage() {
  const page = POLICY_PAGES["privacy-policy"];
  return (
    <PolicyPage
      title={page.title}
      description="Your privacy matters to us. This policy explains how The Glam collects and uses your information."
      sections={page.sections}
    />
  );
}
