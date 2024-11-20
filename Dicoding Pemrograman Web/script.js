function myFunction() {
    const dropdown = document.getElementById("myDropdown");

    // Toggle class "show" untuk memunculkan/menghilangkan animasi
    if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
        setTimeout(() => {
            dropdown.style.display = "none"; // Pastikan sembunyikan menu setelah transisi
        }, 300); // Sama dengan waktu transisi di CSS
    } else {
        dropdown.style.display = "block"; // Tampilkan menu sebelum animasi dimulai
        setTimeout(() => dropdown.classList.add("show"), 10); // Tambahkan delay kecil agar transisi terlihat
    }
}

// Tutup dropdown ketika klik di luar area
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                setTimeout(() => openDropdown.style.display = "none", 300);
            }
        }
    }
};
