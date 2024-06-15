// Durasi countdown dalam menit
const countdownMinutes = 10;
const countdownSeconds = countdownMinutes * 60;

// Dapatkan waktu sekarang
const now = new Date().getTime();

// Tambahkan waktu countdown ke waktu sekarang
const countdownDate = now + countdownSeconds * 1000;

// Memperbarui timer setiap detik
const timer = setInterval(function() {
  // Dapatkan tanggal dan waktu saat ini
  const now = new Date().getTime();

  // Hitung selisih antara sekarang dan tanggal akhir
  const distance = countdownDate - now;

  // Hitung waktu yang tersisa dalam menit dan detik
  const minutes = Math.floor(distance / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan hasilnya di elemen dengan id "countdown"
  document.getElementById('countdown').innerHTML = `${minutes}m ${seconds}s`;

  // Jika waktu hitung mundur selesai, arahkan ke link lain
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerHTML = 'Waktu sudah habis!';
    // Arahkan ke link lain (ganti dengan URL yang diinginkan)
    window.location.href = 'https://mez.ink/bistore';
  }
}, 1000); // Update setiap 1 detik (1000 milidetik)
