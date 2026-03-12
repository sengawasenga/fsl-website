async function test() {
  try {
    console.log("Fetching...");
    const res = await fetch("https://fewhbwsdnnsyyczxaavj.supabase.co");
    console.log("Status:", res.status);
  } catch (err) {
    console.error("Error:", err);
  }
}
test();
