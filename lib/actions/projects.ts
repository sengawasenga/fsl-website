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
  revalidatePath("/nos-projets");
  revalidatePath(`/nos-projets/${formData.slug}`);
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
  revalidatePath("/nos-projets");
  revalidatePath(`/nos-projets/${formData.slug}`);
  return data[0];
}

export async function deleteProject(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) throw error;
  revalidatePath("/admin/projects");
  revalidatePath("/nos-projets");
}

export async function getProjectBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching project by slug:", error);
    return null;
  }
  return data;
}

export async function getRelatedProjects(category: string, currentId: string) {
  const supabase = await createClient();
  
  // Try to find projects in same category
  const { data: sameCategory, error: err1 } = await supabase
    .from("projects")
    .select("*")
    .eq("category", category)
    .neq("id", currentId)
    .limit(3);

  if (err1) {
    console.error("Error fetching related projects:", err1);
    return [];
  }

  if (sameCategory && sameCategory.length >= 3) {
    return sameCategory;
  }

  // If not enough, fill with others
  const sameCategoryCount = sameCategory?.length || 0;
  const { data: others, error: err2 } = await supabase
    .from("projects")
    .select("*")
    .neq("id", currentId)
    .not("category", "eq", category)
    .limit(3 - sameCategoryCount);

  if (err2) {
    console.error("Error fetching more projects:", err2);
    return sameCategory || [];
  }

  return [...(sameCategory || []), ...(others || [])];
}

