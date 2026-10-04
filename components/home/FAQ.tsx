import { faqs } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
export function FAQ() {
  return (
    <section className="container-shell max-w-4xl py-20 lg:py-28">
      <Eyebrow>A few things you might be wondering</Eyebrow>
      <h2 className="mt-5 mb-10">
        Let’s clear <em>that up.</em>
      </h2>
      <div>
        {faqs.map((item) => (
          <details
            key={item.question}
            className="faq-item border-b border-line"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-base">
              {item.question}
              <span aria-hidden="true" className="faq-plus text-2xl">
                +
              </span>
            </summary>
            <div className="pb-6">
              <p className="max-w-2xl leading-relaxed text-muted">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
