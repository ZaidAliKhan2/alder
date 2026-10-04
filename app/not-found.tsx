import { ButtonLink } from "@/components/ui/ButtonLink";
export default function NotFound() {
  return (
    <section className="container-shell py-28">
      <p className="eyebrow">404 / A little off course</p>
      <h1 className="my-7 text-6xl">
        Let’s find your
        <br />
        <em>way back.</em>
      </h1>
      <ButtonLink href="/">Back to home</ButtonLink>
    </section>
  );
}
