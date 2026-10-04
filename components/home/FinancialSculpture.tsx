import type { ReactNode } from "react";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import styles from "./FinancialSculpture.module.css";

type SheetProps = {
  variant: "ledger" | "chart" | "balance" | "note";
  service: string;
  children: ReactNode;
};
function Sheet({ variant, service, children }: SheetProps) {
  return (
    <div className={`${styles.sheet} ${styles[variant]}`}>
      <div className={styles.content}>{children}</div>
      <div className={styles.service}>
        <span>Thoughtful support</span>
        {service}
      </div>
    </div>
  );
}
export function FinancialSculpture() {
  return (
    <div
      className={styles.sculpture}
      role="img"
      aria-label="Layered financial papers organize into four areas of support: tax planning, bookkeeping, payroll, and business advisory."
    >
      <div className={styles.orbit} />
      <ParallaxLayer className={styles.object}>
        <Sheet variant="chart" service="Business advisory">
          <div className={styles.top}>
            THE BIG PICTURE <span>↗</span>
          </div>
          <div className={styles.grid}>
            <svg viewBox="0 0 300 140" aria-hidden="true">
              <path
                className={styles.chartLine}
                d="M0 115 L48 98 L85 107 L137 66 L179 75 L226 34 L300 12"
              />
            </svg>
          </div>
          <p className={styles.foot}>Perspective, not just paperwork.</p>
        </Sheet>
        <Sheet variant="ledger" service="Tax planning">
          <div className={styles.top}>
            ALDER & CO. <span>a.</span>
          </div>
          <div className={styles.paperTitle}>
            Everything.
            <br />
            In its place.
          </div>
          <div className={styles.rows}>
            {[
              ["Your books", "Organized"],
              ["Your plan", "Considered"],
              ["Your next step", "Clear"],
            ].map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <i />
                <b>{value}</b>
              </div>
            ))}
          </div>
          <p className={styles.foot}>✳ &nbsp; A clearer way forward</p>
        </Sheet>
        <Sheet variant="balance" service="Bookkeeping">
          <div className={styles.top}>
            ROOM TO GROW <span>↗</span>
          </div>
          <div className={styles.bars}>
            {[0, 1, 2, 3, 4].map((index) => (
              <i key={index} />
            ))}
          </div>
          <p className={styles.foot}>Built on a solid foundation.</p>
        </Sheet>
        <Sheet variant="note" service="Payroll">
          <div className={styles.noteContent}>
            <span>✓</span>
            <p>
              A little clarity.
              <br />
              <strong>A different outlook.</strong>
            </p>
          </div>
        </Sheet>
        <div className={styles.amber} />
      </ParallaxLayer>
      <span className={styles.caption}>A NEW PERSPECTIVE ON YOUR NUMBERS</span>
    </div>
  );
}
