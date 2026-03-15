const PHONE_NUMBER = "6285691451094"; // GANTI dengan nomor WA kamu

export function createWaLink(section, data) {
  const prefixes = {
    shops: "🛒 *ORDER MJ SHOPS*",
    food: "🍜 *PESAN MJ FOOD*",
    studio: "🎨 *JASA MJ STUDIO*",
    news: "📰 *INFO MJ NEWS*",
    loker: "💼 *LAMAR MJ LOKER*",
    ojex: "🛵 *PAKAI MJ OJEX*",
  };

  let message = prefixes[section] || "Halo MJ Home,";
  
  if (section === 'shops' || section === 'food') {
    message += `
    
📦 ${data.nama}
💰 Rp ${data.harga_diskon?.toLocaleString('id-ID')}
🔢 Qty: [isi]
📏 Ukuran/Warna: [isi]

📍 Alamat pengiriman:
[Nama]
[Alamat lengkap]
[No. WA]

Mohon diproses, terima kasih! 🙏`;
  } else if (section === 'ojex') {
    message += `
    
📍 Ambil dari: [alamat]
🎯 Tujuan: [alamat]
📦 Barang: [deskripsi]
⏰ Waktu: [jam]

Mohon konfirmasi, terima kasih! 🙏`;
  } else {
    message += `\n\n${data.pesan || 'Saya ingin bertanya tentang...'}`;
  }

  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
