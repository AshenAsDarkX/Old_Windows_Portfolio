"use client";

import { useState, useRef } from "react";
import { uploadProject } from "./action";
import { useRouter } from "next/navigation"; // Added for cleaner navigation
import { SubmitButton } from "@/components/SubmitButton";

export default function ProjectForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // State-based feedback instead of alert
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        setLoading(true);
        setMessage("");

        try {
          const result = await uploadProject(formData);
          setMessage("Success! Project added.");
          formRef.current?.reset();

          // Refresh the page or redirect to home to see the result
          router.refresh();
        } catch (error) {
          setMessage("Error: Upload failed.");
          console.error(error);
        } finally {
          setLoading(false);
        }
      }}
      className="mx-auto flex max-w-2xl flex-col gap-4 p-6"
    >
      <input
        name="title"
        placeholder="Project Title"
        required
        className=" border p-2 text-black"
      />

      <textarea
        name="description"
        placeholder="Description"
        required
        className=" border p-2 text-black"
      />

      <input
        name="tech_stack"
        placeholder="Tech Stack (comma separated: React, Tailwind)"
        className=" border p-2 text-black"
      />

      <div className="flex flex-col gap-2">
        <label className="font-bold">Project Image:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          required
          className="cursor-pointer"
        />
      </div>

      <input
        name="live_link"
        placeholder="Live Demo URL"
        className="border p-2 text-black"
      />
      <input
        name="github_link"
        placeholder="GitHub Repository URL"
        className="border p-2 text-black"
      />
      {message && (
        <div
          className={`p-2 text-center font-bold ${message.includes("Success!") ? "text-green-600" : "text-red-600"}`}
        >
          {message}
        </div>
      )}

      <SubmitButton />
    </form>
  );
}
