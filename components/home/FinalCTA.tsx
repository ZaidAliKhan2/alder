import { EditorialHeading } from "@/components/motion/EditorialHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
export function FinalCTA() {
  return (
    <section className="container-shell relative mb-16 overflow-hidden bg-mint px-7 py-12 md:px-14 md:py-16">
      <div className="relative z-10">
        <Eyebrow>Good things start with a conversation</Eyebrow>
        <EditorialHeading
          className="my-7"
          lines={[
            "Let’s make room",
            <span key="emphasis">
              for <em>what’s next.</em>
            </span>,
          ]}
        />
        <ButtonLink href="/contact">Let’s talk</ButtonLink>
      </div>
      <span aria-hidden="true" className="cta-monogram">
        a.
      </span>
    </section>
  );
}
