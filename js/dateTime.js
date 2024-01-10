function updateDateTime() {
    const currentDateTime = new Date();
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'Asia/Jakarta'
    };

    // Array nama-nama hari dalam bahasa Indonesia
    const days = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];

    // Array nama-nama bulan dalam bahasa Indonesia
    const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
    ];

    // Mendapatkan nama hari dan bulan sesuai dengan bahasa Indonesia
    const day = days[currentDateTime.getDay()];
    const month = months[currentDateTime.getMonth()];

    // Format tanggal sesuai dengan permintaan
    const formattedDate = `${day}, ${currentDateTime.getDate()} ${month} | `;

    // Format waktu sesuai dengan permintaan
    const formattedTime = currentDateTime.toLocaleTimeString('id-ID', options);

    // Menggabungkan tanggal dan waktu
    const formattedDateTime = formattedDate + formattedTime;

    // Menampilkan hasil di elemen dengan ID 'dateTime'
    document.getElementById('dateTime').textContent = formattedDateTime + ' WIB';
}

// Memanggil fungsi updateDateTime() untuk pertama kali
updateDateTime();

// Memperbarui waktu setiap detik
setInterval(updateDateTime, 1000);

