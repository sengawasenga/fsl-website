"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function getMessages() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
  return data;
}

export async function sendMessage(formData: {
  sender: string;
  email: string;
  subject: string;
  content: string;
}) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("messages")
    .insert([formData]);

  if (error) throw error;
  revalidatePath("/admin/messages");
  return { success: true };
}

export async function markAsRead(id: string) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("messages")
    .update({ is_read: true })
    .eq("id", id);

  if (error) throw error;
  revalidatePath("/admin/messages");
}
