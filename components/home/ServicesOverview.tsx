import Link from "next/link";
import { services } from "@/lib/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
function ServiceIcon({ index }: { index: number }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
      className="service-icon"
    >
      <rect x="6" y="5" width="24" height="26" rx="1" />
      {index % 2 === 0 ? (
        [12, 18, 24].map((y) => <path key={y} d={`M11 ${y}h14`} />)
      ) : (
        <>
          <path d="M18 5v26M6 18h24" />
          <path d={index === 1 ? "M11 11h3m9 13h3" : "m10 24 5-8 5 3 6-8"} />
        </>
      )}
    </svg>
  );
}
export function ServicesOverview() {
  return (
    <section id="services" className="container-shell pb-20 lg:pb-28">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>The right support, at the right time</Eyebrow>
          <h2 className="mt-4">
            Consider it <em>taken care of.</em>
          </h2>
        </div>
        <ButtonLink href="/services" variant="text">
          All services
        </ButtonLink>
      </div>
      <div className="services-grid grid grid-cols-1 border border-line bg-mint sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Link
            className="service-card group flex flex-col"
            href={`/services#${service.id}`}
            key={service.id}
          >
            <div className="flex items-center justify-between text-sage">
              <span className="text-sm text-muted">0{index + 1} /</span>
              <ServiceIcon index={index} />
            </div>
            <h3 className="mt-10 font-display text-[1.75rem] tracking-tight transition-transform group-hover:-translate-y-1">
              {service.title}
            </h3>
            <p className="mt-3 grow text-sm leading-relaxed text-muted transition-transform group-hover:-translate-y-1">
              {service.headline}
            </p>
            <span className="mt-8 flex justify-between text-sm">
              Explore service{" "}
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-5 text-sm text-muted">
        Connected expertise. One thoughtful partnership.
      </p>
    </section>
  );
}
