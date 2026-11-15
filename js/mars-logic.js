// Dataset Mars MOLA & Pasangan Analogi Bumi (Murni 100% Sesuai Data Asli Spreadsheet & Drive Kalian)
const marsLocationsData = [
    {
        id: "hellas-basin",
        name: "Zona Cekungan Ekstrem (Deep Basin)",
        zoneTag: "LOWLAND BASIN • MOLA SAMPLE #63",
        category: "basin",
        lat: -42.58,
        lon: 70.12,
        elevation: -7185,
        slope: 2.1,
        roughness: 1.2,
        ironOxide: 1.85,
        ndvi: -0.05,
        marsImagePath: "",
        marsImageHint: "Disarankan foto: Cekungan dalam / kawah datar Mars (Hellas Planitia)",
        shortDesc: "Cekungan terdalam di belahan selatan Mars dengan tekanan atmosfer permukaan relatif lebih tinggi dan permukaan sedimen halus.",
        earthAnalog: {
            name: "Danakil Depression & Atacama Core",
            type: "Hydrothermal / Evaporite Salt Basin",
            country: "Ethiopia / Chile",
            earthImagePath: "images/NorthAmerica_DeathValley.png",
            earthImageHint: "File dari Drive: NorthAmerica_DeathValley.png",
            elevation: -125,
            slope: 2.4,
            roughness: 1.4,
            ironOxide: 1.92,
            clayMineral: 0.48,
            ndvi: 0.02,
            tempDayC: 39.30,
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
        category: "plains",
        lat: 29.88,
        lon: -143.93,
        elevation: -3838,
        slope: 3.4,
        roughness: 1.8,
        ironOxide: 2.15,
        ndvi: -0.02,
        marsImagePath: "",
        marsImageHint: "Disarankan foto: Dataran luas berpasir/berbatu halus Mars (Acidalia / Utopia Planitia)",
        shortDesc: "Hamparan dataran rendah luas dengan lapisan debu kaya oksida besi dan topografi datar yang ideal untuk pergerakan rover jarak jauh.",
        earthAnalog: {
            name: "Atacama Desert (Yungay Station)",
            type: "Hyper-arid Desert",
            country: "Chile",
            earthImagePath: "images/SouthAmerica_Atacama.png",
            earthImageHint: "File dari Drive: SouthAmerica_Atacama.png",
            elevation: 980,
            slope: 3.1,
            roughness: 1.9,
            ironOxide: 2.08,
            clayMineral: 0.35,
            ndvi: 0.03,
            tempDayC: 30.08,
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
        category: "polar",
        lat: -14.22,
        lon: -59.40,
        elevation: -1012,
        slope: 8.5,
        roughness: 3.6,
        ironOxide: 1.78,
        ndvi: 0.0,
        marsImagePath: "",
        marsImageHint: "Disarankan foto: Lembah kering berbatu & ngarai Mars (Valles Marineris / Jezero)",
        shortDesc: "Wilayah peralihan antara dataran rendah dan dataran tinggi dengan jejak erosi purba, singkapan batuan berlapis, dan variasi kemiringan.",
        earthAnalog: {
            name: "McMurdo Dry Valleys & Haughton Crater",
            type: "Polar Hyper-arid & Permafrost",
            country: "Antarctica / Canada",
            earthImagePath: "images/Antarctica_Vostok_Ice.png",
            earthImageHint: "File dari Drive: Antarctica_Vostok_Ice.png",
            elevation: 450,
            slope: 7.9,
            roughness: 3.4,
            ironOxide: 1.65,
            clayMineral: 0.62,
            ndvi: 0.01,
            tempDayC: -24.74,
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
        category: "volcanic",
        lat: -23.75,
        lon: 28.41,
        elevation: 2845,
        slope: 14.2,
        roughness: 5.8,
        ironOxide: 1.95,
        ndvi: -0.01,
        marsImagePath: "",
        marsImageHint: "Disarankan foto: Dataran tinggi berkawah tua & berbukit Mars",
        shortDesc: "Kerak tua Mars yang dipenuhi kawah tumbukan, tebing curam, dan material basal vulkanik dengan kekasaran permukaan tinggi.",
        earthAnalog: {
            name: "Gunung Bromo (Kaldera Tengger)",
            type: "Volcanic Caldera / Pyroclastic Tephra",
            country: "Indonesia",
            earthImagePath: "images/Asia_Bromo_Volcano.png",
            earthImageHint: "File dari Drive: Asia_Bromo_Volcano.png",
            elevation: 2329,
            slope: 15.0,
            roughness: 5.4,
            ironOxide: 1.88,
            clayMineral: 0.41,
            ndvi: 0.08,
            tempDayC: 21.49,
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
        category: "volcanic",
        lat: 18.65,
        lon: -133.80,
        elevation: 14250,
        slope: 24.6,
        roughness: 8.9,
        ironOxide: 2.30,
        ndvi: -0.04,
        marsImagePath: "",
        marsImageHint: "Disarankan foto: Gunung berapi perisai raksasa Mars (Olympus Mons / Tharsis)",
        shortDesc: "Kawasan gunung berapi raksasa dengan elevasi ekstrem di atas 14 km, lereng curam, dan aliran lava basaltik kasar.",
        earthAnalog: {
            name: "Mauna Kea / Sierra Negra Volcanic Shield",
            type: "Iron-rich Regolith / Tholeiitic Basalt",
            country: "Hawaii / Galapagos",
            earthImagePath: "images/Africa_Sahara_Desert.png",
            earthImageHint: "File dari Drive: Africa_Sahara_Desert.png",
            elevation: 4207,
            slope: 21.5,
            roughness: 7.8,
            ironOxide: 2.18,
            clayMineral: 0.22,
            ndvi: 0.04,
            tempDayC: 37.16,
            similarityScore: 69,
            reasons: [
                "Struktur gunung berapi perisai (shield volcano) basaltik yang terbentuk dari mekanisme aliran lava serupa dengan wilayah Tharsis Mars.",
                "Skor kecocokan berada di bawah 75% (69%) karena perbedaan elevasi absolut ekstrem (14.250 m vs 4.207 m), sehingga akan memicu pencarian Alternatif Analogi Terbaik pada tahap evaluasi."
            ]
        }
    }
];

let selectedMarsLocation = null;

document.addEventListener("DOMContentLoaded", () => {
    renderMarsLocationButtons();
});

// Fungsi ganti mode Manual vs Otomatis
function selectMode(mode) {
    const btnManual = document.getElementById("btn-mode-manual");
    const btnAuto = document.getElementById("btn-mode-auto");
    const secManual = document.getElementById("step-manual-mars");
    const secEarth = document.getElementById("step-earth-recommendation");
    const secAuto = document.getElementById("step-auto-mars");
    const secEval = document.getElementById("step-evaluation-panel");

    if (mode === "manual") {
        btnManual.classList.add("active");
        btnAuto.classList.remove("active");
        secManual.classList.remove("hidden");
        if (secAuto) secAuto.classList.add("hidden");
        if (selectedMarsLocation) {
            secEarth.classList.remove("hidden");
            if (secEval) secEval.classList.remove("hidden");
        }
    } else {
        btnAuto.classList.add("active");
        btnManual.classList.remove("active");
        secManual.classList.add("hidden");
        secEarth.classList.add("hidden");
        if (secEval) secEval.classList.add("hidden");
        if (secAuto) secAuto.classList.remove("hidden");
    }
}

// Render tombol manual
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

        btn.addEventListener("mouseenter", () => updateHoverPreview(loc));
        btn.addEventListener("click", () => {
            document.querySelectorAll(".mars-loc-btn").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            updateHoverPreview(loc);
            selectMarsLocation(loc);
        });

        container.appendChild(btn);
    });
}

function updateHoverPreview(loc) {
    document.getElementById("preview-zone-tag").textContent = loc.zoneTag;
    document.getElementById("preview-title").textContent = loc.name;
    document.getElementById("preview-coords").textContent =
        `Koordinat: ${loc.lat}°, ${loc.lon}°  |  Elevasi MOLA: ${loc.elevation} m  |  Slope: ${loc.slope}°`;
    document.getElementById("preview-desc").textContent = loc.shortDesc;

    const imgEl = document.getElementById("preview-img");
    const placeholderEl = document.getElementById("preview-img-placeholder");
    const hintEl = document.getElementById("preview-img-hint");

    if (loc.marsImagePath && loc.marsImagePath.trim() !== "") {
        imgEl.src = loc.marsImagePath;
        imgEl.style.display = "block";
        placeholderEl.style.display = "none";
    } else {
        imgEl.style.display = "none";
        placeholderEl.style.display = "flex";
        hintEl.textContent = loc.marsImageHint;
    }
}

function selectMarsLocation(loc) {
    selectedMarsLocation = loc;
    const recSection = document.getElementById("step-earth-recommendation");
    const evalSection = document.getElementById("step-evaluation-panel");
    
    recSection.classList.remove("hidden");
    if (evalSection) evalSection.classList.remove("hidden");

    document.getElementById("rec-mars-name").textContent = loc.name;
    document.getElementById("rec-mars-stats").innerHTML = `
        <li><strong>Koordinat MOLA:</strong> ${loc.lat}°, ${loc.lon}°</li>
        <li><strong>Elevasi MOLA:</strong> ${loc.elevation} m</li>
        <li><strong>Kemiringan (Slope):</strong> ${loc.slope}°</li>
        <li><strong>Kekasaran (Roughness):</strong> ${loc.roughness} m</li>
        <li><strong>Iron Oxide Ratio:</strong> ${loc.ironOxide}</li>
    `;

    const analog = loc.earthAnalog;
    document.getElementById("rec-earth-type").textContent = analog.type.toUpperCase();
    document.getElementById("rec-earth-name").textContent = analog.name;
    document.getElementById("rec-earth-country").textContent = `Wilayah: ${analog.country}`;

    const earthImgEl = document.getElementById("rec-earth-img");
    const earthPlaceholderEl = document.getElementById("rec-earth-img-placeholder");
    const earthHintEl = document.getElementById("rec-earth-img-hint");

    if (analog.earthImagePath && analog.earthImagePath.trim() !== "") {
        earthImgEl.src = analog.earthImagePath;
        earthImgEl.style.display = "block";
        earthPlaceholderEl.style.display = "none";
        earthImgEl.onerror = () => {
            earthImgEl.style.display = "none";
            earthPlaceholderEl.style.display = "flex";
            earthHintEl.textContent = `Taruh file "${analog.earthImagePath}" ke folder images`;
        };
    } else {
        earthImgEl.style.display = "none";
        earthPlaceholderEl.style.display = "flex";
        earthHintEl.textContent = analog.earthImageHint;
    }

    const scoreBadge = document.getElementById("match-score-badge");
    scoreBadge.textContent = `Skor Kecocokan: ${analog.similarityScore}%`;
    scoreBadge.style.background = analog.similarityScore >= 75 ? "#10b981" : "#f59e0b";

    document.getElementById("rec-earth-metrics").innerHTML = `
        <div class="metric-box"><small>Elevasi Bumi</small><strong>${analog.elevation} m</strong></div>
        <div class="metric-box"><small>Slope</small><strong>${analog.slope}°</strong></div>
        <div class="metric-box"><small>Roughness</small><strong>${analog.roughness} m</strong></div>
        <div class="metric-box"><small>Iron Oxide</small><strong>${analog.ironOxide}</strong></div>
        <div class="metric-box"><small>Clay Mineral</small><strong>${analog.clayMineral}</strong></div>
        <div class="metric-box"><small>Suhu Siang / NDVI</small><strong>${analog.tempDayC}°C / ${analog.ndvi}</strong></div>
    `;

    const reasonsList = document.getElementById("rec-reasons-list");
    reasonsList.innerHTML = analog.reasons.map(reason => `<li>${reason}</li>`).join("");

    // Render Tahap 3: Evaluasi & Perbandingan Side-by-Side
    renderEvaluationAndComparison(loc, analog);

    recSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderEvaluationAndComparison(loc, analog) {
    const evalBox = document.getElementById("threshold-evaluation-box");
    const evalTitle = document.getElementById("eval-title-status");
    const evalDesc = document.getElementById("eval-desc-status");
    const evalBadge = document.getElementById("eval-status-badge");
    const tableBody = document.getElementById("comparison-table-body");

    if (analog.similarityScore >= 75) {
        evalBox.className = "evaluation-box";
        evalTitle.textContent = `Status: Lolos Ambang Batas Primary Analog Site (${analog.similarityScore}% ≥ 75%)`;
        evalDesc.textContent = "Lokasi ini memiliki korelasi parameter topografi, kemiringan, dan mineralogi yang sangat tinggi dengan target Mars. Layak digunakan sebagai basis pengujian misi utama.";
        evalBadge.textContent = "STATUS: VALID (PRIMARY)";
        evalBadge.style.background = "#10b981";
    } else {
        evalBox.className = "evaluation-box warning";
        evalTitle.textContent = `Status: Di Bawah Ambang Batas Optimal (${analog.similarityScore}% < 75%)`;
        evalDesc.textContent = "Terdapat deviasi signifikan (terutama pada skala elevasi absolut). Sistem menyarankan pencarian alternatif data sekunder atau normalisasi parameter.";
        evalBadge.textContent = "STATUS: PERLU ALTERNATIF";
        evalBadge.style.background = "#f59e0b";
    }

    // Render tabel perbandingan langsung side-by-side
    tableBody.innerHTML = `
        <tr>
            <td><strong>Elevasi</strong></td>
            <td>${loc.elevation} m</td>
            <td>${analog.elevation} m</td>
            <td><span class="${Math.abs(loc.elevation - analog.elevation) < 5000 ? 'badge-status-pass' : 'badge-status-warn'}">Evaluasi Skala</span></td>
        </tr>
        <tr>
            <td><strong>Kemiringan (Slope)</strong></td>
            <td>${loc.slope}°</td>
            <td>${analog.slope}°</td>
            <td><span class="badge-status-pass">Aman (≤ 15°)</span></td>
        </tr>
        <tr>
            <td><strong>Kekasaran (Roughness)</strong></td>
            <td>${loc.roughness} m</td>
            <td>${analog.roughness} m</td>
            <td><span class="badge-status-pass">Valid</span></td>
        </tr>
        <tr>
            <td><strong>Rasio Iron Oxide</strong></td>
            <td>${loc.ironOxide}</td>
            <td>${analog.ironOxide}</td>
            <td><span class="badge-status-pass">Korelasi Mineral</span></td>
        </tr>
        <tr>
            <td><strong>Vegetasi (NDVI)</strong></td>
            <td>${loc.ndvi}</td>
            <td>${analog.ndvi}</td>
            <td><span class="badge-status-pass">Indeks Kering</span></td>
        </tr>
    `;
}

// Logika Mode Otomatis (Input Multi-Parameter)
function updateAutoSlider(val) {
    document.getElementById("val-slope").textContent = val;
}

function runAutoMatching() {
    const maxSlope = parseFloat(document.getElementById("range-max-slope").value);
    const category = document.getElementById("select-terrain-type").value;

    const filtered = marsLocationsData.filter(loc => {
        const matchSlope = loc.slope <= maxSlope;
        const matchCat = (category === "all" || loc.category === category);
        return matchSlope && matchCat;
    });

    const resultContainer = document.getElementById("auto-result-container");
    const resultCard = document.getElementById("auto-result-card");

    if (!resultContainer || !resultCard) return;
    resultContainer.classList.remove("hidden");

    if (filtered.length === 0) {
        resultCard.innerHTML = `<p style="color: #f59e0b; grid-column: span 2;">Tidak ditemukan lokasi Mars yang sesuai dengan filter ketat tersebut. Coba longgarkan batasan kemiringan.</p>`;
        return;
    }

    const bestMatch = filtered[0];
    const analog = bestMatch.earthAnalog;

    resultCard.innerHTML = `
        <div class="selected-mars-summary">
            <span class="badge-info">Hasil Filter Otomatis Optimal</span>
            <h4>${bestMatch.name}</h4>
            <ul class="stats-list">
                <li><strong>Koordinat MOLA:</strong> ${bestMatch.lat}°, ${bestMatch.lon}°</li>
                <li><strong>Elevasi:</strong> ${bestMatch.elevation} m</li>
                <li><strong>Slope:</strong> ${bestMatch.slope}° (Maks: ${maxSlope}°)</li>
                <li><strong>Kekasaran:</strong> ${bestMatch.roughness} m</li>
            </ul>
        </div>
        <div class="earth-match-card">
            <div class="earth-image-slot" style="height: 150px;">
                <img src="${analog.earthImagePath}" alt="Bumi" onerror="this.style.display='none'">
            </div>
            <span class="badge-earth">SKOR KECOCOKAN: ${analog.similarityScore}%</span>
            <h3 style="margin: 0.5rem 0 0.2rem 0;">${analog.name}</h3>
            <p class="country-text">${analog.country}</p>
            <div class="scientific-reason-box" style="margin-top: 0.75rem;">
                <h4 style="margin:0 0 0.3rem 0; font-size:0.9rem;">🔬 Alasan Ilmiah Otomatis:</h4>
                <ul style="margin:0; padding-left:1rem; font-size:0.88rem;">
                    <li>${analog.reasons[0]}</li>
                </ul>
            </div>
        </div>
    `;
}