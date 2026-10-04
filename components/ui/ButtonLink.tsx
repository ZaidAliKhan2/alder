import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  variant?: "solid" | "text" | "outline";
};
export function ButtonLink({
  children,
  variant = "solid",
  className = "",
  ...props
}: Props) {
  return (
    <Link
      {...props}
      className={`button-link button-${variant} group ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="inline-block text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        ↗
      </span>
    </Link>
  );
}
