import type { Metadata } from "next";
import { services } from "@/lib/content";
import { PageIntro } from "@/components/ui/PageIntro";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
export const metadata: Metadata = {
  title: "Thoughtful accounting services",
  description:
    "Explore tax planning, bookkeeping, payroll, and business advisory at Alder & Co.",
};
export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our services"
        description="The everyday details and the bigger decisions. Thoughtful support that meets you where you are, and grows with where you’re going."
      >
        Less to carry.
        <br />
        <em>More room to grow.</em>
      </PageIntro>
      <div className="container-shell border-t border-line">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="service-detail grid scroll-mt-10 gap-6 border-b border-line py-16 md:grid-cols-[.2fr_1fr_.8fr] md:gap-12 lg:py-20"
          >
            <span className="font-display text-5xl text-sage">
              0{index + 1}
            </span>
            <div>
              <Eyebrow>{service.title}</Eyebrow>
              <h2 className="my-5 text-[clamp(2rem,3.5vw,3rem)]">
                {service.headline}
              </h2>
              <p className="mb-7 max-w-lg leading-relaxed text-muted">
                {service.description}
              </p>
              <ButtonLink href={`/contact?service=${service.id}`}>
                Let’s discuss your needs
              </ButtonLink>
            </div>
            <ul className="self-center">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-line py-5 text-sm"
                >
                  <span aria-hidden="true" className="text-sage">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <FAQ />
      <FinalCTA />
    </>
  );
}
