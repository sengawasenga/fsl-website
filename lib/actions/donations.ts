"use server";

import { createClient } from "@/lib/supabase/server";

export async function getDonations() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("donations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching donations:", error);
    return [];
  }
  return data;
}

export async function getDonationsStats() {
  const supabase = await createClient();
  const { data: donations } = await supabase
    .from("donations")
    .select("amount, status, donor_email");

  const totalDonations =
    donations
      ?.filter((d) => d.status === "completed" || d.status === "success")
      .reduce((acc, curr) => acc + Number(curr.amount), 0) || 0;

  const uniqueDonors = new Set(donations?.map((d) => d.donor_email)).size;
  
  const totalCompleted = donations?.filter((d) => d.status === "completed" || d.status === "success").length || 0;
  const totalAttempted = donations?.length || 0;
  
  const successRate = totalAttempted > 0 ? Math.round((totalCompleted / totalAttempted) * 100) : 0;

  return {
    totalDonations,
    uniqueDonors,
    successRate,
  };
}
