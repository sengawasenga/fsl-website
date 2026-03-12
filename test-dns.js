const dns = require('dns');
dns.lookup('fewhbwsdnnsyyczxaavj.supabase.co', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});
