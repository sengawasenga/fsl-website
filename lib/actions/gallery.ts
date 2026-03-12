"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function getGallery() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("gallery_photos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching gallery:", error);
    return [];
  }
  return data;
}

export async function uploadToGallery(file: File, category: string) {
  const supabase = await createClient();
  
  const fileName = `${Date.now()}-${file.name}`;
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("gallery")
    .upload(fileName, file);

  if (uploadError) throw uploadError;

  const { data: { publicUrl } } = supabase.storage
    .from("gallery")
    .getPublicUrl(uploadData.path);

  const { data: dbData, error: dbError } = await supabase
    .from("gallery_photos")
    .insert([{ url: publicUrl, category }])
    .select();

  if (dbError) throw dbError;

  revalidatePath("/admin/gallery");
  revalidatePath("/galerie");
  return dbData[0];
}

export async function deleteFromGallery(id: string, url: string) {
  const supabase = await createClient();
  
  // Extract file name from URL
  const parts = url.split("/");
  const fileName = parts[parts.length - 1];

  const { error: storageError } = await supabase.storage
    .from("gallery")
    .remove([fileName]);

  if (storageError) console.error("Error removing from storage:", storageError);

  const { error: dbError } = await supabase
    .from("gallery_photos")
    .delete()
    .eq("id", id);

  if (dbError) throw dbError;

  revalidatePath("/admin/gallery");
  revalidatePath("/galerie");
}
