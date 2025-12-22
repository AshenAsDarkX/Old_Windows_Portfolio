"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function uploadProject(formData: FormData) {
  const supabase = await createClient();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const techStackRaw = formData.get("tech_stack") as string;
  const imageFile = formData.get("image") as File;
  const liveLink = formData.get("live_link") as string;
  const githubLink = formData.get("github_link") as string;

  // 1. Process Tech Stack into an array
  const tech_stack = techStackRaw.split(",").map((item) => item.trim());

  // 2. Upload Image to Supabase Storage
  const fileExt = imageFile.name.split(".").pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `project-thumbnails/${fileName}`;

  const { data, error: uploadError } = await supabase.storage
    .from("project-images")
    .upload(filePath, imageFile);

  if (uploadError) {
    console.error("Supabase Storage Error:", uploadError);
    throw new Error(uploadError.message);
  }

  // 3. Get the Public URL for the image
  const {
    data: { publicUrl },
  } = supabase.storage.from("project-images").getPublicUrl(filePath);

  // 4. Insert Metadata into PostgreSQL
  const { error: dbError } = await supabase.from("projects").insert([
    {
      title,
      description,
      tech_stack,
      image_url: publicUrl,
      live_link: liveLink,
      github_link: githubLink,
    },
  ]);

  if (dbError) throw new Error(dbError.message);

  // Refresh the portfolio page to show the new project immediately
  revalidatePath("/");
  return { success: true };
}
