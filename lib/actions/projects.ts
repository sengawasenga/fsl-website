"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function getProjects() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
  return data;
}

export async function createProject(formData: any) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .insert([formData])
    .select();

  if (error) throw error;
  revalidatePath("/admin/projects");
  revalidatePath("/projets");
  return data[0];
}

export async function updateProject(id: string, formData: any) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .update(formData)
    .eq("id", id)
    .select();

  if (error) throw error;
  revalidatePath("/admin/projects");
  revalidatePath("/projets");
  return data[0];
}

export async function deleteProject(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) throw error;
  revalidatePath("/admin/projects");
  revalidatePath("/projets");
}
