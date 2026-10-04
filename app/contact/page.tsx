import type { Metadata } from "next";
import { Suspense } from "react";
import { ConsultationForm } from "@/components/contact/ConsultationForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
export const metadata: Metadata = {
  title: "Let’s start a conversation",
  description:
    "Tell us about your business and the support you need. Explore the Alder & Co. demo consultation experience.",
};
export default function ContactPage() {
  return (
    <section className="container-shell page-entrance grid gap-12 py-16 lg:grid-cols-2 lg:gap-24 lg:py-24">
      <div>
        <Eyebrow>Let’s talk</Eyebrow>
        <h1 className="my-7 text-[clamp(3rem,5vw,4.8rem)]">
          Your next chapter
          <br />
          starts with a<br />
          <em>conversation.</em>
        </h1>
        <p className="max-w-sm leading-relaxed text-muted">
          Tell us a little about yourself and what’s on your mind. We’ll take it
          from there.
        </p>
        <ol className="mt-10 hidden max-w-sm md:block">
          {["Share your story", "Find your focus", "Plan your next step"].map(
            (label, index) => (
              <li
                key={label}
                className="border-t border-line py-4 text-xs tracking-widest uppercase"
              >
                0{index + 1} / {label}
              </li>
            ),
          )}
        </ol>
        <p className="mt-8 text-sm leading-relaxed text-muted">
          Alder & Co. is a portfolio concept.
          <br />
          This demo form doesn’t send or store your information.
        </p>
      </div>
      <div className="bg-mint p-6 sm:p-10">
        <Suspense
          fallback={
            <p className="py-10" role="status">
              Preparing your consultation form…
            </p>
          }
        >
          <ConsultationForm />
        </Suspense>
      </div>
    </section>
  );
}
