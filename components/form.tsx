"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent } from "react";
import { toast } from "sonner";

export default function Form() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email"),
    };

    event.currentTarget.reset();

    const res = await fetch("/api/formSubmit", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      toast("Failed to send message.", {
        description: "Please try again later.",
      });
    } else {
      toast("Your message has been sent!", {
        description: "Thank you! We will get back to you as soon as possible.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative h-16 w-fit min-w-full md:min-w-[350px]"
    >
      <label htmlFor="email" hidden>
        Email address
      </label>
      <input
        id="email-field"
        name="email"
        type="email"
        required
        placeholder="john@example.com"
        className="field-sizing-content h-full w-full rounded-full bg-stone-200 pr-20 pl-6 outline-none dark:bg-stone-800"
      />
      <button className="group bg-foreground text-background absolute top-2 right-2 flex h-12 w-12 flex-none cursor-pointer items-center justify-center rounded-full border border-solid border-transparent text-sm font-medium transition-colors hover:bg-[#383838] sm:text-base dark:hover:bg-[#ccc]">
        <ArrowRight
          className="transition-transform duration-100 ease-in-out group-hover:-rotate-45"
          size={24}
        />
      </button>
    </form>
  );
}
