"use client";

import { FormEvent, useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
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
      } else {
        const response = await fetch(formAction, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          setSubmitMessage("Thank you! You're on the waitlist.");
          setEmail("");
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
      className="py-16 md:py-20 px-6 md:px-8"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light text-ink mb-3">
          Not ready to apply?
        </h2>

        <p className="text-stone mb-8">
          Join the waitlist for early cohort access and updates
        </p>

        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="flex-1 px-4 py-3 text-ink bg-whisper border border-border focus:outline-none focus:ring-2 focus:ring-ink focus:border-transparent"
            required
            aria-required="true"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-ink text-whisper text-sm tracking-[0.2em] uppercase hover:bg-stone transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Subscribe to the waitlist"
          >
            {isSubmitting ? "..." : "Subscribe"}
          </button>
        </form>

        {submitMessage && (
          <p
            className="text-ink text-sm mt-4"
            role="status"
            aria-live="polite"
          >
            {submitMessage}
          </p>
        )}
      </div>
    </section>
  );
}
