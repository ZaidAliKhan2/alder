import Image from "next/image";
import Link from "next/link";
export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Alder and Co. home"
      className="brand flex shrink-0 items-center gap-3"
    >
      <Image
        src="/brand-mark.svg"
        alt=""
        width={42}
        height={49}
        loading={inverse ? "lazy" : "eager"}
        style={{ width: 42, height: "auto" }}
        className={inverse ? "shrink-0 brightness-0 invert" : "shrink-0"}
      />
      <span className="border-l border-current/25 pl-3 font-display text-[1.7rem] leading-none tracking-[-0.055em]">
        alder & co.
        <span className="mt-2 block font-sans text-[0.5rem] font-medium tracking-[0.16em]">
          ACCOUNTING & ADVISORY
        </span>
      </span>
    </Link>
  );
}
