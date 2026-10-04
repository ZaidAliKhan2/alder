import { Eyebrow } from "@/components/ui/Eyebrow";
export function AudienceSection() {
  return (
    <section
      id="perspective"
      className="container-shell grid gap-8 border-t border-line py-20 lg:grid-cols-[1fr_2fr] lg:py-28"
    >
      <Eyebrow className="lg:pt-3">A partner in your corner</Eyebrow>
      <div>
        <h2>
          Your finances shouldn’t
          <br className="hidden sm:block" /> feel like a <em>guessing game.</em>
        </h2>
        <div className="mt-9 flex items-center gap-8 md:gap-16">
          <span aria-hidden="true" className="text-7xl text-sage">
            ✳
          </span>
          <p className="max-w-md leading-relaxed text-muted">
            Running a business asks a lot of you. Making sense of your finances
            shouldn’t add to the weight. We bring structure to the details and
            perspective to the decisions — so you can get back to what you do
            best.
          </p>
        </div>
      </div>
    </section>
  );
}
