// Dataset Mars MOLA & Pasangan Analogi Bumi (Berdasarkan Data NASA Drive)
const marsLocationsData = [
    {
        id: "hellas-basin",
        name: "Zona Cekungan Ekstrem (Deep Basin)",
        zoneTag: "LOWLAND BASIN • MOLA SAMPLE #63",
        lat: -42.58,
        lon: 70.12,
        elevation: -7185,
        slope: 2.1,
        roughness: 1.2,
        ironOxide: 1.85,
        ndvi: -0.05,
        // NANTI ISI PATH FOTO KAMU DI SINI (contoh: "assets/img/mars-basin.jpg")
        imagePath: "",
        imageHint: "Disarankan foto: Cekungan dalam / kawah datar Mars (Hellas Planitia)",
        shortDesc: "Cekungan terdalam di belahan selatan Mars dengan tekanan atmosfer permukaan relatif lebih tinggi dan permukaan sedimen halus.",
        earthAnalog: {
            name: "Danakil Depression & Atacama Core",
            country: "Ethiopia / Chile",
            elevation: -125,
            slope: 2.4,
            roughness: 1.4,
            ironOxide: 1.92,
            clayMineral: 0.48,
            ndvi: 0.02,
            similarityScore: 86,
            reasons: [
                "Topografi cekungan ekstrem (elevasi negatif) dengan kemiringan sangat landai (2.1° vs 2.4°) sehingga aman untuk pendaratan wahana.",
                "Tingkat kegersangan hiper-arid (NDVI mendekati 0) meniru kondisi tanpa vegetasi dan kelembapan ekstrem di dasar cekungan Mars.",
                "Kandungan mineral evaporit dan oksida besi (Iron Oxide Ratio ~1.9) merepresentasikan endapan kimia purba di dasar kawah Mars."
            ]
        }
    },
    {
        id: "northern-lowlands",
        name: "Zona Dataran Rendah Utara (Northern Plains)",
        zoneTag: "SEDIMENTARY PLAINS • MOLA SAMPLE #1",
        lat: 29.88,
        lon: -143.93,
        elevation: -3838,
        slope: 3.4,
        roughness: 1.8,
        ironOxide: 2.15,
        ndvi: -0.02,
        imagePath: "",
        imageHint: "Disarankan foto: Dataran luas berpasir/berbatu halus Mars (Acidalia / Utopia Planitia)",
        shortDesc: "Hamparan dataran rendah luas dengan lapisan debu kaya oksida besi dan topografi datar yang ideal untuk pergerakan rover jarak jauh.",
        earthAnalog: {
            name: "Atacama Desert (Yungay Station)",
            country: "Chile",
            elevation: 980,
            slope: 3.1,
            roughness: 1.9,
            ironOxide: 2.08,
            clayMineral: 0.35,
            ndvi: 0.03,
            similarityScore: 91,
            reasons: [
                "Rasio Iron Oxide sangat tinggi (2.15 vs 2.08) yang menghasilkan karakteristik tanah merah berdebu identik dengan regolith Mars.",
                "Kekasaran permukaan (Roughness 1.8 m vs 1.9 m) dan sudut kemiringan rendah sangat cocok untuk simulasi navigasi rover.",
                "Radiasi UV tinggi dan tanah hiper-kering menjadikannya standar utama NASA untuk pengujian sensor deteksi kehidupan mikroba."
            ]
        }
    },
    {
        id: "mid-transition-plateau",
        name: "Zona Transisi & Lembah Kering (Mid-Elevation)",
        zoneTag: "TRANSITION ZONE • MOLA SAMPLE #12",
        lat: -14.22,
        lon: -59.40,
        elevation: -1012,
        slope: 8.5,
        roughness: 3.6,
        ironOxide: 1.78,
        ndvi: 0.0,
        imagePath: "",
        imageHint: "Disarankan foto: Lembah kering berbatu & ngarai Mars (Valles Marineris / Jezero)",
        shortDesc: "Wilayah peralihan antara dataran rendah dan dataran tinggi dengan jejak erosi purba, singkapan batuan berlapis, dan variasi kemiringan.",
        earthAnalog: {
            name: "McMurdo Dry Valleys & Haughton Crater",
            country: "Antarctica / Canada",
            elevation: 450,
            slope: 7.9,
            roughness: 3.4,
            ironOxide: 1.65,
            clayMineral: 0.62,
            ndvi: 0.01,
            similarityScore: 82,
            reasons: [
                "Kombinasi suhu dingin ekstrem dan kelembapan sangat rendah menyerupai kondisi permafrost di zona lintang menengah Mars.",
                "Rasio Clay Mineral tinggi (0.62) menunjukkan struktur pelapukan batuan akibat interaksi air purba (fluvial/lacustrine).",
                "Kemiringan lereng moderat (8.5° vs 7.9°) ideal untuk menguji kemampuan panjat dan stabilitas roda rover di medan berbatu."
            ]
        }
    },
    {
        id: "southern-highlands",
        name: "Zona Dataran Tinggi Berkawah (Cratered Highlands)",
        zoneTag: "ANCIENT HIGHLANDS • MOLA SAMPLE #3",
        lat: -23.75,
        lon: 28.41,
        elevation: 2845,
        slope: 14.2,
        roughness: 5.8,
        ironOxide: 1.95,
        ndvi: -0.01,
        imagePath: "",
        imageHint: "Disarankan foto: Dataran tinggi berkawah tua & berbukit Mars",
        shortDesc: "Kerak tua Mars yang dipenuhi kawah tumbukan, tebing curam, dan material basal vulkanik dengan kekasaran permukaan tinggi.",
        earthAnalog: {
            name: "Gunung Bromo (Kaldera Tengger)",
            country: "Indonesia",
            elevation: 2329,
            slope: 15.0,
            roughness: 5.4,
            ironOxide: 1.88,
            clayMineral: 0.41,
            ndvi: 0.08,
            similarityScore: 78,
            reasons: [
                "Ketinggian dataran tinggi yang hampir setara (2.845 m di Mars vs 2.329 m di Kaldera Tengger) dengan bentang alam lautan pasir vulkanik.",
                "Komposisi material piroklastik/basaltik dan kemiringan lereng (~14°–15°) menyerupai tepian kawah tumbukan di dataran tinggi Mars.",
                "Minim vegetasi di zona kaldera aktif (NDVI rendah 0.08) memungkinkan pengujian mobilitas wahana di atas pasir halus dan kerikil lepas."
            ]
        }
    },
    {
        id: "tharsis-volcanic-peak",
        name: "Zona Puncak Vulkanik Ekstrem (Tharsis Rise)",
        zoneTag: "VOLCANIC SUMMIT • MOLA SAMPLE #89",
        lat: 18.65,
        lon: -133.80,
        elevation: 14250,
        slope: 24.6,
        roughness: 8.9,
        ironOxide: 2.30,
        ndvi: -0.04,
        imagePath: "",
        imageHint: "Disarankan foto: Gunung berapi perisai raksasa Mars (Olympus Mons / Tharsis)",
        shortDesc: "Kawasan gunung berapi raksasa dengan elevasi ekstrem di atas 14 km, lereng curam, dan aliran lava basaltik kasar.",
        earthAnalog: {
            name: "Mauna Kea / Sierra Negra Volcanic Shield",
            country: "Hawaii / Galapagos",
            elevation: 4207,
            slope: 21.5,
            roughness: 7.8,
            ironOxide: 2.18,
            clayMineral: 0.22,
            ndvi: 0.04,
            similarityScore: 69,
            reasons: [
                "Struktur gunung berapi perisai (shield volcano) basaltik yang terbentuk dari mekanisme aliran lava serupa dengan wilayah Tharsis Mars.",
                "Skor kecocokan berada di bawah 75% (69%) karena perbedaan elevasi absolut ekstrem (14.250 m vs 4.207 m), sehingga akan memicu pencarian Alternatif Analogi Terbaik pada tahap evaluasi."
            ]
        }
    }
];

let selectedMarsLocation = null;

// Inisialisasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    renderMarsLocationButtons();
});

// Fungsi ganti mode Manual / Otomatis
function selectMode(mode) {
    const btnManual = document.getElementById("btn-mode-manual");
    const btnAuto = document.getElementById("btn-mode-auto");
    const secManual = document.getElementById("step-manual-mars");
    const secEarth = document.getElementById("step-earth-recommendation");
    const secAuto = document.getElementById("step-auto-placeholder");

    if (mode === "manual") {
        btnManual.classList.add("active");
        btnAuto.classList.remove("active");
        secManual.classList.remove("hidden");
        secAuto.classList.add("hidden");
        if (selectedMarsLocation) secEarth.classList.remove("hidden");
    } else {
        btnAuto.classList.add("active");
        btnManual.classList.remove("active");
        secManual.classList.add("hidden");
        secEarth.classList.add("hidden");
        secAuto.classList.remove("hidden");
    }
}

// Render daftar tombol lokasi Mars + Event Hover (mouseenter) & Click
function renderMarsLocationButtons() {
    const container = document.getElementById("mars-location-buttons");
    container.innerHTML = "";

    marsLocationsData.forEach((loc) => {
        const btn = document.createElement("button");
        btn.className = "mars-loc-btn";
        btn.dataset.id = loc.id;
        btn.innerHTML = `
            <div>
                <strong>${loc.name}</strong>
                <span class="loc-sub">Lat: ${loc.lat}° | Lon: ${loc.lon}°</span>
            </div>
            <span class="elev-pill">${loc.elevation > 0 ? "+" : ""}${loc.elevation} m</span>
        `;

        // EVENT HOVER: Kursor menyentuh tombol (belum diklik) -> Tampilkan foto & penjelasan
        btn.addEventListener("mouseenter", () => {
            updateHoverPreview(loc);
        });

        // EVENT CLICK: User memilih lokasi -> Tampilkan rekomendasi Bumi & alasannya
        btn.addEventListener("click", () => {
            document.querySelectorAll(".mars-loc-btn").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            updateHoverPreview(loc);
            selectMarsLocation(loc);
        });

        container.appendChild(btn);
    });
}

// Update panel pratinjau saat tombol disentuh kursor
function updateHoverPreview(loc) {
    document.getElementById("preview-zone-tag").textContent = loc.zoneTag;
    document.getElementById("preview-title").textContent = loc.name;
    document.getElementById("preview-coords").textContent =
        `Koordinat: ${loc.lat}°, ${loc.lon}°  |  Elevasi MOLA: ${loc.elevation} m  |  Slope: ${loc.slope}°`;
    document.getElementById("preview-desc").textContent = loc.shortDesc;

    const imgEl = document.getElementById("preview-img");
    const placeholderEl = document.getElementById("preview-img-placeholder");
    const hintEl = document.getElementById("preview-img-hint");

    // Jika kamu sudah mengisi imagePath, gambar langsung tampil; jika belum, tampilkan slot placeholder
    if (loc.imagePath && loc.imagePath.trim() !== "") {
        imgEl.src = loc.imagePath;
        imgEl.style.display = "block";
        placeholderEl.style.display = "none";
    } else {
        imgEl.style.display = "none";
        placeholderEl.style.display = "flex";
        hintEl.textContent = loc.imageHint;
    }
}

// Tampilkan Rekomendasi Analogi Bumi + Alasan Ilmiah setelah tombol diklik
function selectMarsLocation(loc) {
    selectedMarsLocation = loc;
    const recSection = document.getElementById("step-earth-recommendation");
    recSection.classList.remove("hidden");

    // Isi ringkasan data Mars
    document.getElementById("rec-mars-name").textContent = loc.name;
    document.getElementById("rec-mars-stats").innerHTML = `
        <li><strong>Koordinat:</strong> ${loc.lat}°, ${loc.lon}°</li>
        <li><strong>Elevasi MOLA:</strong> ${loc.elevation} meter</li>
        <li><strong>Kemiringan (Slope):</strong> ${loc.slope}°</li>
        <li><strong>Kekasaran (Roughness):</strong> ${loc.roughness} m</li>
        <li><strong>Iron Oxide Ratio:</strong> ${loc.ironOxide}</li>
    `;

    // Isi data Rekomendasi Bumi
    const analog = loc.earthAnalog;
    document.getElementById("rec-earth-name").textContent = analog.name;
    document.getElementById("rec-earth-country").textContent = `Lokasi Bumi: ${analog.country}`;

    const scoreBadge = document.getElementById("match-score-badge");
    scoreBadge.textContent = `Skor Kecocokan: ${analog.similarityScore}%`;
    scoreBadge.style.background = analog.similarityScore >= 75 ? "#10b981" : "#f59e0b";

    document.getElementById("rec-earth-metrics").innerHTML = `
        <div class="metric-box"><small>Elevasi Bumi</small><strong>${analog.elevation} m</strong></div>
        <div class="metric-box"><small>Slope</small><strong>${analog.slope}°</strong></div>
        <div class="metric-box"><small>Roughness</small><strong>${analog.roughness} m</strong></div>
        <div class="metric-box"><small>Iron Oxide</small><strong>${analog.ironOxide}</strong></div>
        <div class="metric-box"><small>Clay Mineral</small><strong>${analog.clayMineral}</strong></div>
        <div class="metric-box"><small>NDVI</small><strong>${analog.ndvi}</strong></div>
    `;

    // Isi Alasan Ilmiah
    const reasonsList = document.getElementById("rec-reasons-list");
    reasonsList.innerHTML = analog.reasons.map(reason => `<li>${reason}</li>`).join("");

    // Scroll halus ke bagian hasil rekomendasi
    recSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
}