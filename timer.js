document.addEventListener('DOMContentLoaded', (event) => {
    const countdownElement = document.getElementById('countdown');
    const redirectUrl = 'https://contoh.com'; // Ganti dengan URL tujuan setelah timer habis
    const totalTime = 2 * 60 * 60 * 1000; // 2 jam dalam milidetik
    const now = new Date().getTime();

    // Cek apakah waktu akhir sudah disimpan di localStorage
    let endTime = localStorage.getItem('endTime');

    if (!endTime) {
        // Jika belum ada waktu akhir, hitung dan simpan waktu akhir
        endTime = now + totalTime;
        localStorage.setItem('endTime', endTime);
    }

    function updateCountdown() {
        const currentTime = new Date().getTime();
        const remainingTime = endTime - currentTime;

        if (remainingTime <= 0) {
            // Jika waktu sudah habis
            countdownElement.innerHTML = "Waktu habis!";
            alert("Waktu habis! Anda akan diarahkan ke halaman lain.");
            localStorage.removeItem('endTime');
            window.location.href = redirectUrl;
        } else {
            // Hitung waktu yang tersisa
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            // Tampilkan waktu yang tersisa
            countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
        }
    }

    // Update countdown setiap detik
    setInterval(updateCountdown, 1000);
    // Inisiasi tampilan countdown
    updateCountdown();
});