import { Metadata } from "next";
import { Container } from "@/app/components/layout";
import { PortfolioGallery } from "@/app/components/features";
import { portfolioItems } from "@/app/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio | Mikai Novak Studio",
  description:
    "Explore our portfolio of professional photography and video production work. Weddings, events, portraits, commercials, and more.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">
              Our Work
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mt-3 mb-6">
              Portfolio
            </h1>
            <p className="text-lg text-primary-600">
              A curated collection of our best photography and video production
              projects. Each piece tells a unique story crafted with passion and
              precision.
            </p>
          </div>
        </Container>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16">
        <Container>
          <PortfolioGallery items={portfolioItems} />
        </Container>
      </section>
    </>
  );
}
