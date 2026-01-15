"use client";

import { Hero } from "../sections/Hero";
import { TopListing } from "../sections/TopListing";
import { Counting } from "../sections/Counter";
import { OurAgents } from "../sections/OurAgents";
import { Testimonials } from "../sections/Testimonial";
import { QuickAction } from "../sections/QuickAction";
import BaseLayout from "../components/BaseLayout";
import { SectionDivider } from "../components/SectionDivider";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Counting />
      <SectionDivider />
      <TopListing />
      <SectionDivider />
      <OurAgents />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <QuickAction/>
    </BaseLayout>
  );
}
