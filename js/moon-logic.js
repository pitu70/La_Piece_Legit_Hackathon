// Dataset Bulan LRO LOLA/Diviner & Pasangan Analogi Bumi (14 Lokasi dari Dataset Anda)
const moonLocationsData = [
    {
        id: "cold-spot-1",
        name: "Cold Spot 1 (Mare Marginis)",
        zoneTag: "BASALT (MARIA) • KAYA BESI (24.72% FeO)",
        lat: -5.75,
        lon: 90.75,
        elevation: -2369.13,
        slope: 6.7617,
        tempDayK: 392.04,
        tempNightK: 87.23,
        amplitudeK: 304.81,
        feoPercent: 24.72,
        mineralType: "Basalt (Maria) - Kaya Besi",
        imagePath: "",
        imageHint: "Disarankan foto: Dataran basaltik gelap kaya besi (Mare Marginis)",
        shortDesc: "Titik anomali termal dingin di dataran basaltik kaya besi (24.72% FeO) dengan amplitudo suhu harian ekstrem sebesar 304.8 K.",
        earthAnalog: {
            name: "Kawah Craters of the Moon (Idaho)",
            country: "Amerika Serikat",
            elevation: 1800,
            slope: 7.2,
            tempRangeC: "-15°C s/d 32°C",
            feoPercent: 14.5,
            mineralType: "Aliran Lava Basaltik Muda",
            similarityScore: 89,
            reasons: [
                "Kesamaan komposisi batuan basaltik dengan kandungan besi (FeO) tinggi yang menyerupai regolith Maria Bulan.",
                "Kemiringan lereng (~6.8° vs 7.2°) dan morfologi permukaan berbatu sangat ideal untuk pengujian mobilitas rover penambang regolit.",
                "Digunakan oleh NASA untuk simulasi eksplorasi geologi lapangan dan pemetaan komposisi mineral vulkanik."
            ]
        }
    },
    {
        id: "cold-spot-2",
        name: "Cold Spot 2 (Highlands Utara)",
        zoneTag: "ANORTHOSITE • MISKIN BESI (2.21% FeO)",
        lat: 34.25,
        lon: 131.75,
        elevation: 1049.24,
        slope: 12.7581,
        tempDayK: 357.03,
        tempNightK: 87.75,
        amplitudeK: 269.28,
        feoPercent: 2.21,
        mineralType: "Anorthosite (Highlands) - Miskin Besi",
        imagePath: "",
        imageHint: "Disarankan foto: Dataran tinggi purba berbatuan terang (Lunar Highlands)",
        shortDesc: "Dataran tinggi purba berbatuan Anorthosite miskin besi (2.21% FeO) dengan lereng cukup curam (12.76°) dan selimut debu halus.",
        earthAnalog: {
            name: "Kompleks Anorthosite Stillwater (Montana)",
            country: "Amerika Serikat",
            elevation: 2400,
            slope: 13.5,
            tempRangeC: "-20°C s/d 24°C",
            feoPercent: 2.8,
            mineralType: "Plagioclase Anorthosite",
            similarityScore: 93,
            reasons: [
                "Kadar besi (FeO 2.21% vs 2.8%) dan dominasi mineral plagioklas anortosit hampir identik dengan kerak purba dataran tinggi Bulan.",
                "Kemiringan lereng curam (~12.8° vs 13.5°) menjadi medan uji realistis untuk stabilitas wahana pendarat di zona Highlands.",
                "Menjadi lokasi rujukan utama studi ekstraksi oksigen dan aluminium dari batuan anortosit."
            ]
        }
    },
    {
        id: "cold-spot-3",
        name: "Cold Spot 3 (Highlands Ekuator)",
        zoneTag: "ANORTHOSITE • ELEVASI TINGGI (+2.882 m)",
        lat: -3.25,
        lon: 152.25,
        elevation: 2882.27,
        slope: 6.734,
        tempDayK: 390.08,
        tempNightK: 88.35,
        amplitudeK: 301.73,
        feoPercent: 2.98,
        mineralType: "Anorthosite (Highlands) - Miskin Besi",
        imagePath: "",
        imageHint: "Disarankan foto: Dataran tinggi ekuatorial terang dengan regolit halus",
        shortDesc: "Dataran tinggi ekuatorial dengan elevasi +2.882 m dan kandungan besi sangat rendah (2.98% FeO) yang mengalami pemanasan siang tinggi.",
        earthAnalog: {
            name: "Dataran Tinggi Anorthosite Nain (Labrador)",
            country: "Kanada",
            elevation: 850,
            slope: 6.5,
            tempRangeC: "-25°C s/d 18°C",
            feoPercent: 3.1,
            mineralType: "Anorthosite Masif",
            similarityScore: 91,
            reasons: [
                "Kandungan FeO (2.98% vs 3.1%) mencerminkan kemurnian batuan anortosit kerak primer Bulan.",
                "Kemiringan topografi yang landai (~6.7° vs 6.5°) cocok untuk simulasi penempatan habitat dan panel surya di dataran tinggi.",
                "Struktur pelapukan fisik batuan memberikan analogi akurat untuk pembentukan regolit non-vulkanik."
            ]
        }
    },
    {
        id: "tycho-crater",
        name: "Tycho Crater",
        zoneTag: "MIXED ROCK • KAWAH TUMBUKAN MUDA",
        lat: -43.31,
        lon: -11.36,
        elevation: -2724.24,
        slope: 16.3411,
        tempDayK: 349.48,
        tempNightK: 123.71,
        amplitudeK: 225.77,
        feoPercent: 14.38,
        mineralType: "Mixed Rock (Transisi)",
        imagePath: "",
        imageHint: "Disarankan foto: Kawah Tycho dengan dinding terjal dan puncak tengah",
        shortDesc: "Kawah tumbukan muda yang ikonik dengan dinding curam (16.34°), batuan lelehan tumbukan (impact melt), dan campuran mineral transisi.",
        earthAnalog: {
            name: "Kawah Tumbukan Ries (Nördlinger Ries)",
            country: "Jerman",
            elevation: 430,
            slope: 15.8,
            tempRangeC: "-5°C s/d 25°C",
            feoPercent: 12.1,
            mineralType: "Suevite & Breccia (Mixed Rock)",
            similarityScore: 88,
            reasons: [
                "Memiliki struktur kawah kompleks dengan puncak tengah dan batuan lelehan tumbukan (impact melt) seperti Tycho.",
                "Komposisi batuan campuran (Mixed Rock) mencerminkan pencampuran lapisan kerak dan mantel akibat energi tumbukan meteorit.",
                "Lokasi pelatihan resmi astronaut Apollo 14 dan misi ESA Pangaea untuk identifikasi batuan breksi."
            ]
        }
    },
    {
        id: "giordano-bruno",
        name: "Giordano Bruno Crater",
        zoneTag: "ANORTHOSITE • KAWAH SANGAT MUDA",
        lat: 35.9,
        lon: 102.8,
        elevation: -1661.15,
        slope: 15.6513,
        tempDayK: 349.88,
        tempNightK: 149.40,
        amplitudeK: 200.48,
        feoPercent: 6.48,
        mineralType: "Anorthosite (Highlands) - Miskin Besi",
        imagePath: "",
        imageHint: "Disarankan foto: Kawah muda dengan tebing tajam dan bongkahan batu segar",
        shortDesc: "Salah satu kawah besar termuda di Bulan dengan tebing terjal (15.65°) dan suhu malam lebih hangat (149.4 K) akibat batuan segar berbatu.",
        earthAnalog: {
            name: "Kawah Tumbukan Lonar (Maharashtra)",
            country: "India",
            elevation: 480,
            slope: 16.0,
            tempRangeC: "12°C s/d 40°C",
            feoPercent: 8.5,
            mineralType: "Breksi Tumbukan Segar",
            similarityScore: 86,
            reasons: [
                "Morfologi dinding kawah yang masih sangat tajam dan belum tererosi berat menyerupai usia geologis muda Giordano Bruno.",
                "Kemiringan lereng (~15.7° vs 16.0°) menguji navigasi otonom pada medan berbatu tajam (boulder fields).",
                "Menunjukkan retensi panas tinggi pada batuan segar, mirip anomali suhu malam 149.4 K di Giordano Bruno."
            ]
        }
    },
    {
        id: "orientale-basin",
        name: "Mare Orientale Basin",
        zoneTag: "BASALT (MARIA) • MULTI-RING BASIN",
        lat: -19.0,
        lon: -93.0,
        elevation: -2804.62,
        slope: 9.67,
        tempDayK: 387.26,
        tempNightK: 93.27,
        amplitudeK: 293.98,
        feoPercent: 22.4,
        mineralType: "Basalt (Maria) - Kaya Besi",
        imagePath: "",
        imageHint: "Disarankan foto: Cekungan tumbukan multi-cincin raksasa Mare Orientale",
        shortDesc: "Cekungan tumbukan multi-cincin raksasa di tepi barat Bulan dengan lantai basaltik kaya besi (22.4% FeO) dan elevasi rendah (-2.804 m).",
        earthAnalog: {
            name: "Struktur Tumbukan Manicouagan (Quebec)",
            country: "Kanada",
            elevation: 360,
            slope: 9.1,
            tempRangeC: "-22°C s/d 20°C",
            feoPercent: 16.8,
            mineralType: "Lembaran Lelehan Multi-Cincin",
            similarityScore: 87,
            reasons: [
                "Merupakan salah satu struktur cekungan tumbukan multi-cincin paling terawat di Bumi yang sejajar dengan morfologi Orientale Basin.",
                "Kemiringan teras cincin (~9.7° vs 9.1°) sesuai untuk pemodelan lintasan lintas-cincin (cross-ring traverse).",
                "Komposisi batuan kaya besi-magnesium mencerminkan pengangkatan material kerak dalam akibat tumbukan raksasa."
            ]
        }
    },
    {
        id: "apollo-11",
        name: "Apollo 11 (Mare Tranquillitatis)",
        zoneTag: "BASALT (MARIA) • ZONA PENDARATAN DATAR",
        lat: 0.67,
        lon: 23.47,
        elevation: -1915.22,
        slope: 1.1326,
        tempDayK: 395.58,
        tempNightK: 95.20,
        amplitudeK: 300.38,
        feoPercent: 17.5,
        mineralType: "Basalt (Maria) - Kaya Besi",
        imagePath: "",
        imageHint: "Disarankan foto: Dataran lava datar Mare Tranquillitatis (Apollo 11)",
        shortDesc: "Lokasi pendaratan bersejarah pertama manusia. Dataran lava basaltik sangat datar (slope 1.13°) dengan suhu siang ekstrem (395.58 K).",
        earthAnalog: {
            name: "Dataran Lava Lanzarote (Kepulauan Canary)",
            country: "Spanyol",
            elevation: 310,
            slope: 1.5,
            tempRangeC: "14°C s/d 34°C",
            feoPercent: 15.2,
            mineralType: "Basalt Kaya Titanium & Besi",
            similarityScore: 95,
            reasons: [
                "Topografi dataran lava yang sangat landai (slope 1.13° vs 1.5°) meniru zona pendaratan aman misi Apollo 11.",
                "Kandungan mineral ilmenite dan basalt kaya besi (17.5% FeO) menjadi standar pengujian ekstraksi oksigen dan air (ISRU).",
                "Digunakan oleh ESA sebagai lokasi pelatihan astronaut untuk pengambilan sampel inti (core sampling) di permukaan basaltik."
           ]
        }
    },
    {
        id: "apollo-17",
        name: "Apollo 17 (Taurus-Littrow)",
        zoneTag: "MIXED ROCK • LEMBAH TRANSISI",
        lat: 20.19,
        lon: 30.77,
        elevation: -2318.39,
        slope: 9.0918,
        tempDayK: 384.68,
        tempNightK: 96.43,
        amplitudeK: 288.24,
        feoPercent: 13.83,
        mineralType: "Mixed Rock (Transisi)",
        imagePath: "",
        imageHint: "Disarankan foto: Lembah Taurus-Littrow di antara pegunungan Bulan",
        shortDesc: "Lembah perbatasan antara dataran basalt Maria dan pegunungan Highlands, menghasilkan variasi batuan transisi (13.83% FeO) dan kaca vulkanik.",
        earthAnalog: {
            name: "Gorge Rio Grande & Taos Plateau (New Mexico)",
            country: "Amerika Serikat",
            elevation: 2100,
            slope: 8.8,
            tempRangeC: "-10°C s/d 29°C",
            feoPercent: 12.9,
            mineralType: "Basalt & Endapan Piroklastik",
            similarityScore: 92,
            reasons: [
                "Memadukan dataran vulkanik dengan tebing pegunungan curam, identik dengan struktur lembah Taurus-Littrow.",
                "Kandungan besi transisi (13.83% vs 12.9%) dan endapan kaca vulkanik piroklastik menjadi lokasi pelatihan asli kru Apollo 17.",
                "Sangat cocok untuk simulasi misi gabungan (eksplorasi lembah dan pendakian lereng kaki bukit)."
            ]
        }
    },
    {
        id: "copernicus",
        name: "Copernicus Crater",
        zoneTag: "ANORTHOSITE • KAWAH TERAS DALAM",
        lat: 9.62,
        lon: -20.08,
        elevation: -3363.88,
        slope: 8.3845,
        tempDayK: 386.17,
        tempNightK: 104.08,
        amplitudeK: 282.09,
        feoPercent: 4.13,
        mineralType: "Anorthosite (Highlands) - Miskin Besi",
        imagePath: "",
        imageHint: "Disarankan foto: Kawah teras bertingkat Copernicus dengan puncak tengah",
        shortDesc: "Kawah teras bertingkat yang sangat dalam (-3.363 m) dengan puncak tengah yang menyingkap batuan kerak dalam miskin besi (4.13% FeO).",
        earthAnalog: {
            name: "Kawah Tumbukan Gosses Bluff (Tnorala)",
            country: "Australia",
            elevation: 620,
            slope: 8.5,
            tempRangeC: "5°C s/d 42°C",
            feoPercent: 4.8,
            mineralType: "Batuan Kristalin Terangkat",
            similarityScore: 90,
            reasons: [
                "Memiliki struktur cincin puncak tengah (central uplift) yang menyingkap lapisan batuan bawah permukaan seperti Copernicus.",
                "Kadar besi rendah (4.13% vs 4.8%) dan kemiringan lereng teras (~8.4°) sangat mirip secara morfometri.",
                "Kondisi lingkungan gersang dan berdebu mendukung uji ketahanan instrumen spektrometer mineral."
            ]
        }   
    },
    {
        id: "aristarchus",
        name: "Aristarchus Plateau",
        zoneTag: "MIXED ROCK • VULKANIK PIROKLASTIK",
        lat: 23.7,
        lon: -47.4,
        elevation: -3173.42,
        slope: 3.343,
        tempDayK: 376.19,
        tempNightK: 119.46,
        amplitudeK: 256.73,
        feoPercent: 11.63,
        mineralType: "Mixed Rock (Transisi)",
        imagePath: "",
        imageHint: "Disarankan foto: Dataran tinggi piroklastik terang Aristarchus & Vallis Schröteri",
        shortDesc: "Wilayah paling terang dan aktif secara vulkanik di masa lalu, kaya endapan piroklastik, saluran lava (rilles), dan mineral campuran (11.63% FeO).",
        earthAnalog: {
            name: "Dataran Tinggi Vulkanik Askja & Krafla",
            country: "Islandia",
            elevation: 1100,
            slope: 3.8,
            tempRangeC: "-12°C s/d 14°C",
            feoPercent: 11.2,
            mineralType: "Tephra Piroklastik & Saluran Lava",
            similarityScore: 94,
            reasons: [
                "Kadar FeO (11.63% vs 11.2%) dan melimpahnya endapan abu vulkanik piroklastik sangat mirip dengan Aristarchus Plateau.",
                "Memiliki saluran lava berkelok (lava channels) yang menjadi analogi langsung bagi Vallis Schröteri di dekat Aristarchus.",
                "Medan landai (~3.3°) memudahkan pengujian penjelajah jarak jauh (long-range rover)."
            ]
        }
    },
    {
        id: "von-karman",
        name: "Von Kármán Crater (Sisi Jauh)",
        zoneTag: "BASALT (MARIA) • SISI JAUH BULAN",
        lat: -44.8,
        lon: 175.9,
        elevation: -567.97,
        slope: 4.7385,
        tempDayK: 351.88,
        tempNightK: 86.49,
        amplitudeK: 265.40,
        feoPercent: 15.32,
        mineralType: "Basalt (Maria) - Kaya Besi",
        imagePath: "",
        imageHint: "Disarankan foto: Lantai kawah Von Kármán di Cekungan Kutub Selatan-Aitken",
        shortDesc: "Lokasi pendaratan Chang'e-4 di Cekungan Kutub Selatan-Aitken (sisi jauh Bulan) dengan lantai basaltik kaya besi (15.32% FeO).",
        earthAnalog: {
            name: "Dataran Tinggi Basaltik Deccan",
            country: "India",
            elevation: 650,
            slope: 4.5,
            tempRangeC: "15°C s/d 38°C",
            feoPercent: 14.9,
            mineralType: "Flood Basalt Kaya FeO",
            similarityScore: 94,
            reasons: [
                "Komposisi kimiawi basaltik (15.32% vs 14.9% FeO) sangat sejalan dengan sampel regolit yang diukur oleh rover Yutu-2.",
                "Kemiringan permukaan landai (~4.7° vs 4.5°) mendukung uji radar penembus tanah (Lunar Penetrating Radar).",
                "Merepresentasikan sejarah vulkanisme banjir lava di cekungan tumbukan tua."
            ]
        }
    },
    {
        id: "gruithuisen-domes",
        name: "Gruithuisen Domes",
        zoneTag: "SILICIC / RHYOLITIC DOMES • LOW FeO",
        lat: 36.3,
        lon: -39.8,
        elevation: -1272.43,
        slope: 8.6223,
        tempDayK: 362.32,
        tempNightK: 87.86,
        amplitudeK: 274.46,
        feoPercent: 4.0,
        mineralType: "Silicic/Rhyolitic Domes (Low FeO)",
        imagePath: "",
        imageHint: "Disarankan foto: Kubah vulkanik silisik Gruithuisen Gamma & Delta",
        shortDesc: "Kubah vulkanik langka di Bulan yang tersusun dari magma kaya silika (Rhyolitic) dan rendah besi (4.0% FeO), target misi NASA Lunar-VISE.",
        earthAnalog: {
            name: "Kubah Riolit Mono-Inyo Craters (California)",
            country: "Amerika Serikat",
            elevation: 2300,
            slope: 9.2,
            tempRangeC: "-10°C s/d 26°C",
            feoPercent: 3.5,
            mineralType: "Kubah Lava Riolit / Silisik",
            similarityScore: 91,
            reasons: [
                "Satu-satunya analogi geologis langsung di Bumi untuk kubah vulkanik non-basaltik yang kaya silika dan miskin besi (4.0% vs 3.5% FeO).",
                "Morfologi kubah viskositas tinggi dengan kemiringan lereng (~8.6°) menyerupai struktur Mons Gruithuisen.",
                "Digunakan untuk mengkalibrasi spektrometer inframerah sebelum misi pendaratan robotik NASA ke Gruithuisen Domes."
            ]
        }
    },
    {
        id: "shackleton-crater",
        name: "Shackleton Crater (Kutub Selatan)",
        zoneTag: "KUTUB SELATAN (PSR) • POTENSI ES AIR",
        lat: -89.9,
        lon: 0.0,
        elevation: 285.58,
        slope: 9.2246,
        tempDayK: 228.79,
        tempNightK: 57.17,
        amplitudeK: 171.62,
        feoPercent: 2.0,
        mineralType: "Anorthosite (Highlands) - Miskin Besi",
        imagePath: "",
        imageHint: "Disarankan foto: Kawah bayangan abadi Shackleton di Kutub Selatan Bulan",
        shortDesc: "Target utama misi Artemis di Kutub Selatan Bulan. Bagian dalam kawah berada dalam bayangan abadi (PSR) bersuhu kriogenik (57.17 K).",
        earthAnalog: {
            name: "Lembah Kering McMurdo (Antartika)",
            country: "Antartika",
            elevation: 350,
            slope: 9.5,
            tempRangeC: "-55°C s/d -15°C",
            feoPercent: 3.2,
            mineralType: "Permafrost Kriogenik & Anortosit",
            similarityScore: 89,
            reasons: [
                "Suhu kriogenik ekstrem dan sudut datang cahaya matahari yang sangat rendah (low sun angle) meniru kondisi pencahayaan Kutub Selatan Bulan.",
                "Kandungan es tersembunyi di bawah regolit kering (permafrost) menjadi analogi terbaik untuk ekstraksi es air di kawah PSR.",
                "Kadar besi rendah (~2.0%) dan kemiringan lereng (~9.2°) sesuai untuk uji robot pengebor es NASA."
            ]
        }
    },
    {
        id: "peary-crater",
        name: "Peary Crater (Kutub Utara)",
        zoneTag: "KUTUB UTARA • CAHAYA ABADI",
        lat: 88.6,
        lon: 33.0,
        elevation: -1403.63,
        slope: 5.2547,
        tempDayK: 166.27,
        tempNightK: 38.24,
        amplitudeK: 128.03,
        feoPercent: 2.0,
        mineralType: "Anorthosite (Highlands) - Miskin Besi",
        imagePath: "",
        imageHint: "Disarankan foto: Kawah kutub utara Peary dengan pencahayaan rendah",
        shortDesc: "Kawah besar di dekat Kutub Utara Bulan dengan suhu terdingin dalam dataset (malam 38.24 K / -234.9°C) dan bibir kawah terang.",
        earthAnalog: {
            name: "Kawah Tumbukan Haughton (Pulau Devon)",
            country: "Kanada",
            elevation: 220,
            slope: 5.4,
            tempRangeC: "-45°C s/d 5°C",
            feoPercent: 2.5,
            mineralType: "Breksi Tumbukan Arktik & Es Tanah",
            similarityScore: 88,
            reasons: [
                "Terletak di lintang kutub tinggi (75° N) dengan kondisi permafrost dan siklus pencahayaan ekstrem yang menyerupai kutub Bulan.",
                "Kemiringan medan yang relatif landai (~5.3° vs 5.4°) dan kadar besi rendah (~2.0%) ideal untuk pengujian pakaian antariksa dan rover kutub.",
                "Lokasi pangkalan riset NASA Haughton-Mars Project untuk simulasi habitat kutub jangka panjang."
            ]
        }
    }
];

let selectedMoonLocation = null;

// Inisialisasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    renderMoonLocationButtons();
});

// Fungsi ganti mode Manual / Otomatis
function selectMode(mode) {
    const btnManual = document.getElementById("btn-mode-manual");
    const btnAuto = document.getElementById("btn-mode-auto");
    const secManual = document.getElementById("step-manual-moon");
    const secEarth = document.getElementById("step-earth-recommendation");
    const secAuto = document.getElementById("step-auto-placeholder");
    if (mode === "manual") {
        btnManual.classList.add("active");
        btnAuto.classList.remove("active");
        secManual.classList.remove("hidden");
        secAuto.classList.add("hidden");
    if (selectedMoonLocation) secEarth.classList.remove("hidden");
    } else {
        btnAuto.classList.add("active");
        btnManual.classList.remove("active");
        secManual.classList.add("hidden");
        secEarth.classList.add("hidden");
        secAuto.classList.remove("hidden");
    }
}

// Render daftar tombol lokasi Bulan + Event Hover (mouseenter) & Click
function renderMoonLocationButtons() {
    const container = document.getElementById("moon-location-buttons");
    if (!container) return;
    container.innerHTML = "";

    moonLocationsData.forEach(function (loc) {
        const btn = document.createElement("button");
        btn.className = "mars-loc-btn";
        btn.dataset.id = loc.id;
        
        const elevSign = loc.elevation > 0 ? "+" : "";
        btn.innerHTML = 
            "<div>" +
                "<strong>" + loc.name + "</strong>" +
                "<span class='loc-sub'>Lat: " + loc.lat + "° | Lon: " + loc.lon + "° | FeO: " + loc.feoPercent + "%</span>" +
            "</div>" +
            "<span class='elev-pill'>" + elevSign + loc.elevation + " m</span>";

        // EVENT HOVER: Kursor menyentuh tombol (belum diklik) -> Tampilkan foto & penjelasan
        btn.addEventListener("mouseenter", function () {
            updateHoverPreview(loc);
        });

        // EVENT CLICK: User memilih lokasi -> Tampilkan rekomendasi Bumi & alasannya
        btn.addEventListener("click", function () {
            document.querySelectorAll(".mars-loc-btn").forEach(function (b) {
                b.classList.remove("selected");
            });
            btn.classList.add("selected");
            updateHoverPreview(loc);
            selectMoonLocation(loc);
        });

        container.appendChild(btn);
    });
}

// Update panel pratinjau saat tombol disentuh kursor
function updateHoverPreview(loc) {
    document.getElementById("preview-zone-tag").textContent = loc.zoneTag;
    document.getElementById("preview-title").textContent = loc.name;
    document.getElementById("preview-coords").textContent =
        "Koordinat: " + loc.lat + "°, " + loc.lon + "°  |  Elevasi LOLA: " + loc.elevation + " m  |  Slope: " + loc.slope + "°";
    document.getElementById("preview-desc").textContent = loc.shortDesc;

    const imgEl = document.getElementById("preview-img");
    const placeholderEl = document.getElementById("preview-img-placeholder");
    const hintEl = document.getElementById("preview-img-hint");

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

// Helper konversi Kelvin ke Celsius
function kelvinToCelsius(k) {
    return (k - 273.15).toFixed(1);
}

// Tampilkan Rekomendasi Analogi Bumi + Alasan Ilmiah setelah tombol diklik
function selectMoonLocation(loc) {
    selectedMoonLocation = loc;
    const recSection = document.getElementById("step-earth-recommendation");
    recSection.classList.remove("hidden");

    // Isi ringkasan data Bulan
    document.getElementById("rec-moon-name").textContent = loc.name;
    document.getElementById("rec-moon-stats").innerHTML = 
        "<li><strong>Koordinat:</strong> " + loc.lat + "°, " + loc.lon + "°</li>" +
        "<li><strong>Elevasi LOLA:</strong> " + loc.elevation + " meter</li>" +
        "<li><strong>Kemiringan (Slope):</strong> " + loc.slope + "°</li>" +
        "<li><strong>Suhu Siang:</strong> " + loc.tempDayK + " K (" + kelvinToCelsius(loc.tempDayK) + " °C)</li>" +
        "<li><strong>Suhu Malam:</strong> " + loc.tempNightK + " K (" + kelvinToCelsius(loc.tempNightK) + " °C)</li>" +
        "<li><strong>Amplitudo Termal:</strong> " + loc.amplitudeK + " K</li>" +
        "<li><strong>Kadar Besi (FeO):</strong> " + loc.feoPercent + "%</li>" +
        "<li><strong>Tipe Mineral:</strong> " + loc.mineralType + "</li>";

    // Isi data Rekomendasi Bumi
    const analog = loc.earthAnalog;
    document.getElementById("rec-earth-name").textContent = analog.name;
    document.getElementById("rec-earth-country").textContent = "Lokasi Bumi: " + analog.country;

    const scoreBadge = document.getElementById("match-score-badge");
    scoreBadge.textContent = "Skor Kecocokan: " + analog.similarityScore + "%";
    scoreBadge.style.background = analog.similarityScore >= 75 ? "#10b981" : "#f59e0b";

    document.getElementById("rec-earth-metrics").innerHTML = 
        "<div class='metric-box'><small>Elevasi Bumi</small><strong>" + analog.elevation + " m</strong></div>" +
        "<div class='metric-box'><small>Slope</small><strong>" + analog.slope + "°</strong></div>" +
        "<div class='metric-box'><small>Suhu Bumi</small><strong>" + analog.tempRangeC + "</strong></div>" +
        "<div class='metric-box'><small>Kadar Besi (FeO)</small><strong>" + analog.feoPercent + "%</strong></div>" +
        "<div class='metric-box'><small>Mineral Utama</small><strong>" + analog.mineralType + "</strong></div>";

    // Isi Alasan Ilmiah
    const reasonsList = document.getElementById("rec-reasons-list");
    reasonsList.innerHTML = analog.reasons.map(function (reason) {
        return "<li>" + reason + "</li>";
    }).join("");

    // Scroll halus ke bagian hasil rekomendasi
    recSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
