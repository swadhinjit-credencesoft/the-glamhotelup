import type { Metadata } from "next";
import { PolicyPage } from "@/components/page/PolicyPage";
import { POLICY_PAGES } from "@/lib/data/pages";

export const metadata: Metadata = {
  title: "Guest Policies",
  description:
    "Guest policies at The Glam — check-in 12:00 PM, check-out 11:00 AM, ID requirements, pets and smoking policy.",
};

export default function GuestPoliciesPage() {
  const page = POLICY_PAGES["guest-policies"];
  return (
    <PolicyPage
      title={page.title}
      description="The following policies apply to stays at The Glam."
      sections={page.sections}
    />
  );
}
