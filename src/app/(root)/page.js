"use client";

import { Hero } from "../sections/Hero";
import { Counting } from "../sections/Counter";
import BaseLayout from "../components/BaseLayout";
import { OurAgents } from "../sections/OurAgents";
import { TopListing } from "../sections/TopListing";
import { QuickAction } from "../sections/QuickAction";
import { ComingSoon } from "../sections/ComingSoon";
import { Testimonials } from "../sections/Testimonial";
import { SectionDivider } from "../components/SectionDivider";

export default function Home() {
  return (
    <BaseLayout>
      {/* <ComingSoon /> */}
      <Hero />
      <Counting />
      <SectionDivider />
      <TopListing />
      <SectionDivider />
      <OurAgents />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <QuickAction />
    </BaseLayout>
  );
}
