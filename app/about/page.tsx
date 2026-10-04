import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/ui/PageIntro";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
export const metadata: Metadata = {
  title: "A head for numbers. A heart for people.",
  description:
    "The Alder approach: clarity, connection, and thoughtful financial guidance.",
};
const values = [
  {
    lead: "Clarity over",
    word: "complexity.",
    description:
      "Clear explanations. Useful answers. A shared understanding of what the numbers mean for you.",
  },
  {
    lead: "People before",
    word: "paperwork.",
    description:
      "We make room for questions and take the time to understand the person behind the business.",
  },
  {
    lead: "Always looking",
    word: "ahead.",
    description:
      "The books tell a story about where you’ve been. We help you think about where you’re going.",
  },
];
export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="The Alder approach">
        A head for numbers.
        <br />
        <em>A heart for people.</em>
      </PageIntro>
      <section className="container-shell grid items-center gap-12 pb-24 md:grid-cols-2 md:gap-24">
        <div className="ledger-background flex min-h-80 items-center justify-center">
          <Image
            src="/brand-mark.svg"
            width={168}
            height={196}
            alt="Alder’s lowercase a brand mark"
            loading="eager"
            style={{ width: 168, height: "auto" }}
            className="opacity-60"
          />
        </div>
        <div>
          <h2 className="mb-7 text-4xl">Built around the bigger picture.</h2>
          <p className="mb-5 leading-relaxed text-muted">
            Behind a business is a person who had an idea, took a chance, and
            kept going. That’s the person we want to understand.
          </p>
          <p className="leading-relaxed text-muted">
            Our approach brings careful financial thinking and real conversation
            to the same table. Because the most useful advice starts with
            knowing what matters to you.
          </p>
          <Eyebrow className="mt-8">
            Thoughtful by nature. Personal by design.
          </Eyebrow>
        </div>
      </section>
      <section className="bg-mint py-20">
        <div className="container-shell">
          <Eyebrow>What we come back to</Eyebrow>
          {values.map((value, index) => (
            <ScrollReveal
              key={value.word}
              className="value-row grid items-center gap-7 border-b border-line py-12 md:grid-cols-[.15fr_1.3fr_1fr]"
            >
              <span className="text-sm text-muted">0{index + 1}</span>
              <h2 className="text-[clamp(2.2rem,4vw,3.3rem)]">
                {value.lead} <em>{value.word}</em>
              </h2>
              <p className="max-w-sm leading-relaxed text-muted">
                {value.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <section className="container-shell max-w-4xl py-24">
        <Eyebrow>A relationship, not a handoff</Eyebrow>
        <h2 className="my-7">
          Someone who knows
          <br />
          <em>your side of the story.</em>
        </h2>
        <p className="mb-8 max-w-xl leading-relaxed text-muted">
          A consistent point of contact. Conversations in plain language.
          Support that connects the day-to-day details with your long-term
          plans. That’s the kind of partnership we believe in.
        </p>
        <ButtonLink href="/contact">Start a conversation</ButtonLink>
      </section>
      <FinalCTA />
    </>
  );
}
