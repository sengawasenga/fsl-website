"use server";

import { createClient } from "@/lib/supabase/server";

export async function uploadFile(formData: FormData) {
  const file = formData.get("file") as File;
  if (!file) throw new Error("No file provided");

  const supabase = await createClient();
  
  const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  const { data, error } = await supabase.storage
    .from("gallery") // Reusing the same bucket for now, or we could create a 'projects' bucket
    .upload(`projects/${fileName}`, file);

  if (error) throw error;

  const { data: { publicUrl } } = supabase.storage
    .from("gallery")
    .getPublicUrl(data.path);

  return publicUrl;
}
