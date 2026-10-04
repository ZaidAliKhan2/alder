"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ConsultationForm() {
  const params = useSearchParams();
  const requested = params.get("service");
  const initialService = services.some((service) => service.id === requested)
    ? requested!
    : "";
  const [submitted, setSubmitted] = useState(false);
  const firstInput = useRef<HTMLInputElement>(null);
  const confirmation = useRef<HTMLDivElement>(null);
  const wasSubmitted = useRef(false);
  useEffect(() => {
    if (submitted) {
      confirmation.current?.focus({ preventScroll: true });
      wasSubmitted.current = true;
    } else if (wasSubmitted.current) firstInput.current?.focus();
  }, [submitted]);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setSubmitted(true);
  };
  if (submitted)
    return (
      <div
        ref={confirmation}
        tabIndex={-1}
        role="status"
        className="confirmation py-12 outline-none"
      >
        <span aria-hidden="true" className="mb-7 block text-3xl text-sage">
          ✓
        </span>
        <Eyebrow>A clear first step</Eyebrow>
        <h2 className="my-6 text-4xl">
          That’s how a good
          <br />
          <em>conversation begins.</em>
        </h2>
        <p className="mb-7 leading-relaxed text-muted">
          Your demo request is complete. Nothing has been sent or stored.
        </p>
        <button
          type="button"
          className="button-link button-text"
          onClick={() => setSubmitted(false)}
        >
          Try the form again <span aria-hidden="true">↗</span>
        </button>
      </div>
    );
  return (
    <form onSubmit={submit} className="consultation-form">
      <Eyebrow className="mb-8">A little about you</Eyebrow>
      <div className="grid gap-x-6 sm:grid-cols-2">
        <label htmlFor="first-name">
          First name
          <input
            ref={firstInput}
            id="first-name"
            name="firstName"
            autoComplete="given-name"
            placeholder="Your first name"
            required
            maxLength={80}
          />
        </label>
        <label htmlFor="last-name">
          Last name
          <input
            id="last-name"
            name="lastName"
            autoComplete="family-name"
            placeholder="Your last name"
            required
            maxLength={80}
          />
        </label>
      </div>
      <label htmlFor="email">
        Email address
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@yourbusiness.com"
          required
          maxLength={200}
        />
      </label>
      <label htmlFor="business">
        Business name <span className="text-muted">(optional)</span>
        <input
          id="business"
          name="business"
          autoComplete="organization"
          placeholder="Your business name"
          maxLength={150}
        />
      </label>
      <label htmlFor="service">
        What can we help with?
        <select
          key={initialService}
          id="service"
          name="service"
          defaultValue={initialService}
          required
        >
          <option value="">Choose a service</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
          <option value="guidance">I’d like some guidance</option>
        </select>
      </label>
      <label htmlFor="message">
        What’s on your mind?
        <textarea
          id="message"
          name="message"
          placeholder="A little context goes a long way…"
          rows={3}
          required
          maxLength={2500}
          aria-describedby="form-note"
        />
      </label>
      <button
        className="button-link button-solid w-full text-left"
        type="submit"
      >
        Preview your consultation request <span aria-hidden="true">↗</span>
      </button>
      <p id="form-note" className="mt-4 text-xs leading-relaxed text-muted">
        Please leave out sensitive financial or personal information.
      </p>
    </form>
  );
}
