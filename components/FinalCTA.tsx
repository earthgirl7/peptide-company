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
      className="py-16 md:py-20 bg-gradient-to-b from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900"
    >
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
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
              className="w-full px-4 py-3 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
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
              className="w-full px-4 py-3 rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              required
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            aria-label="Subscribe to the waitlist"
          >
            {isSubmitting ? "Submitting..." : "→ Subscribe"}
          </button>
        </form>

        {submitMessage && (
          <p
            className="text-white text-lg mb-6"
            role="status"
            aria-live="polite"
          >
            {submitMessage}
          </p>
        )}

        <p className="text-blue-100 dark:text-blue-200 text-lg mb-2">
          Early waitlist members get priority access and founding member pricing.
        </p>

        <p className="text-sm text-blue-200 dark:text-blue-300">
          We respect your privacy. Unsubscribe anytime.<br />
          No spam, just updates on cohort launches.
        </p>
      </div>
    </section>
  );
}
