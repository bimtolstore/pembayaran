// Tanggal akhir untuk countdown (dalam detik)
const countdownDate = new Date('June 30, 2024 00:00:00').getTime();

// Memperbarui timer setiap detik
const timer = setInterval(function() {
  // Dapatkan tanggal dan waktu saat ini
  const now = new Date().getTime();

  // Hitung selisih antara sekarang dan tanggal akhir
  const distance = countdownDate - now;

  // Hitung waktu yang tersisa dalam hari, jam, menit, dan detik
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan hasilnya di elemen dengan id "countdown"
  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Jika waktu hitung mundur selesai, tampilkan pesan
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerHTML = 'Waktu sudah habis!';
  }
}, 1000); // Update setiap 1 detik (1000 milidetik)