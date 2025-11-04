"use client";

import { FormEvent, useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Dummy handler for now - will use NEXT_PUBLIC_FORM_ACTION later
      const formAction = process.env.NEXT_PUBLIC_FORM_ACTION || "#";

      if (formAction === "#") {
        // Simulate submission for demo
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setSubmitMessage("Thank you! You're on the waitlist.");
        setEmail("");
        setFirstName("");
      } else {
        const response = await fetch(formAction, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, firstName }),
        });

        if (response.ok) {
          setSubmitMessage("Thank you! You're on the waitlist.");
          setEmail("");
          setFirstName("");
        } else {
          setSubmitMessage("Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="py-16 md:py-20 bg-ink"
    >
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-whisper mb-8">
          Join the Founding Cohort Waitlist
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <label htmlFor="firstName" className="sr-only">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-lg text-ink bg-white border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg text-ink bg-white border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              required
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent text-ink font-medium px-8 py-4 rounded-lg text-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink"
            aria-label="Subscribe to the waitlist"
          >
            {isSubmitting ? "Submitting..." : "→ Subscribe"}
          </button>
        </form>

        {submitMessage && (
          <p
            className="text-whisper text-lg mb-6"
            role="status"
            aria-live="polite"
          >
            {submitMessage}
          </p>
        )}

        <p className="text-whisper text-lg mb-2">
          Early waitlist members get priority access and founding member pricing.
        </p>

        <p className="text-sm text-stone">
          We respect your privacy. Unsubscribe anytime.<br />
          No spam, just updates on cohort launches.
        </p>
      </div>
    </section>
  );
}
