import { Hero } from "@/components/home/Hero";
import { AudienceSection } from "@/components/home/AudienceSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/ButtonLink";
export default function HomePage() {
  return (
    <>
      <Hero />
      <AudienceSection />
      <ServicesOverview />
      <ProcessSection />
      <section className="container-shell py-20 text-center lg:py-28">
        <Eyebrow>Numbers are our expertise. People are our purpose.</Eyebrow>
        <h2 className="my-8 text-[clamp(2rem,3.5vw,3.3rem)]">
          Good accounting balances the books.
          <br />
          <em>Great accounting opens doors.</em>
        </h2>
        <ButtonLink href="/about" variant="text">
          Get to know us
        </ButtonLink>
      </section>
      <FinalCTA />
    </>
  );
}
