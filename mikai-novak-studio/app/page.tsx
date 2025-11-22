import {
  Hero,
  Services,
  FeaturedWork,
  Testimonials,
  Stats,
  CTA,
} from "@/app/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedWork />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
