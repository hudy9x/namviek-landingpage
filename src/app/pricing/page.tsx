import Comparison from "@/containers/Comparison";
import Pricing from "@/containers/Pricing";
import PricingComparison from "@/containers/Pricing/PricingComparision";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Pay a one-time fee for lifetime access',
}

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <PricingComparison />
      <Comparison />
    </>
  );
}
