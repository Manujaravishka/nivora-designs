"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Invalid email address";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center border border-black/10 px-8 py-20 text-center">
        <p className="text-3xl font-bold tracking-[-0.02em] text-black">THANK YOU</p>
        <p className="mt-3 text-xs tracking-[0.2em] text-black/40">
          YOUR MESSAGE HAS BEEN RECEIVED. WE&apos;LL BE IN TOUCH.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex h-10 items-center justify-center border border-black/20 px-8 text-[10px] tracking-[0.2em] text-black/60 transition-all hover:border-black hover:text-black"
        >
          SEND ANOTHER
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="mb-2 block text-[10px] tracking-[0.25em] text-black/40">
          NAME
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={`w-full border bg-transparent px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-black/20 focus:border-black ${
            errors.name ? "border-red-500/50" : "border-black/20"
          }`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-[10px] tracking-wider text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-[10px] tracking-[0.25em] text-black/40">
          EMAIL
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={`w-full border bg-transparent px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-black/20 focus:border-black ${
            errors.email ? "border-red-500/50" : "border-black/20"
          }`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-[10px] tracking-wider text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-[10px] tracking-[0.25em] text-black/40">
          MESSAGE
        </label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`w-full border bg-transparent px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-black/20 focus:border-black ${
            errors.message ? "border-red-500/50" : "border-black/20"
          }`}
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="mt-1 text-[10px] tracking-wider text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center border border-black text-xs tracking-[0.2em] text-black transition-all hover:bg-black hover:text-white"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}
