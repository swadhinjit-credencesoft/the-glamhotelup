import type { Metadata } from "next";
import { PolicyPage } from "@/components/page/PolicyPage";
import { POLICY_PAGES } from "@/lib/data/pages";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "Free cancellation for direct bookings at The Glam if cancelled at least 24 hours prior to check-in.",
};

export default function CancellationPolicyPage() {
  const page = POLICY_PAGES["cancellation-policy"];
  return (
    <PolicyPage
      title={page.title}
      description="Free cancellation for direct bookings made at least 24 hours before check-in. Other terms may apply by rate and booking channel."
      sections={page.sections}
    />
  );
}
