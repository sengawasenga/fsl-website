const url = "https://fewhbwsdnnsyyczxaavj.supabase.co/rest/v1/";
const https = require("https");

const req = https.request(url, { method: "HEAD", timeout: 5000 }, (res) => {
  console.log("Status:", res.statusCode);
  process.exit(0);
});

req.on("error", (err) => {
  console.error("Error:", err.message);
  process.exit(1);
});

req.on("timeout", () => {
  console.error("Timeout!");
  req.destroy();
  process.exit(1);
});

req.end();
