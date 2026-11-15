// Planetary Dataset (Mars MOLA, 17 Moon Lunar Reconnaissance & 16 Earth Analogs)
const marsLocationsData = [
    {
        id: "mars-candidate-1",
        name: "Acidalia Planitia Basin Zone",
        zoneTag: "LOWLAND BASIN • MARS MOLA",
        category: "basin",
        lat: 55.23,
        lon: 22.26,
        elevation: -4125,
        slope: 0.19,
        roughness: 1.2,
        ironOxide: 1.85,
        ndvi: -0.05,
        marsImagePath: "images/Center Latitude_ 55.234375, Center Longitude_ 22.265625.jpeg",
        marsImageHint: "Mars photo slot: Acidalia region",
        shortDesc: "Lowland sedimentary basin featuring smooth topography and high ice-consistency scoring.",
        earthAnalogs: [
            {
                name: "Danakil Depression, Ethiopia",
                type: "Hydrothermal / Salt",
                country: "Ethiopia",
                earthImagePath: "images/Danakil_Depression_Ethiopia.png",
                elevation: -111,
                slope: 0.57,
                roughness: 1.67,
                ironOxide: 1.77,
                similarityScore: 88,
                reasons: ["Negative basin topography models extreme Mars depressions with gentle slopes safe for lander entry."]
            },
            {
                name: "Death Valley, USA",
                type: "Extreme Heat / Evaporite",
                country: "United States",
                earthImagePath: "images/DeathValley_USA.png",
                elevation: 281,
                slope: 0.18,
                roughness: 4.99,
                ironOxide: 1.60,
                similarityScore: 84,
                reasons: ["Cracked salt crust polygons mimic permafrost and desiccated mud crack formations."]
            },
            {
                name: "Atacama Desert, Chile",
                type: "Hyper-arid Desert",
                country: "Chile",
                earthImagePath: "images/Atacama_Desert_Chile.png",
                elevation: 2638,
                slope: 0.66,
                roughness: 4.80,
                ironOxide: 1.75,
                similarityScore: 81,
                reasons: ["High iron oxide ratios produce characteristic red dust and oxidized soil identical to Martian regolith."]
            }
        ]
    },
    {
        id: "mars-candidate-2",
        name: "Hellas Planitia Deep Floor",
        zoneTag: "CRATER BASIN • MARS MOLA",
        category: "basin",
        lat: 42.73,
        lon: 176.17,
        elevation: -4046,
        slope: 0.28,
        roughness: 1.4,
        ironOxide: 1.92,
        ndvi: -0.02,
        marsImagePath: "images/Center Latitude_ 42.734375, Center Longitude_ 176.171875.jpeg",
        marsImageHint: "Mars photo slot: Hellas region",
        shortDesc: "Deep impact crater floor with high thermal stability and optimized landing safety scores.",
        earthAnalogs: [
            {
                name: "Death Valley, USA",
                type: "Extreme Heat / Evaporite",
                country: "United States",
                earthImagePath: "images/DeathValley_USA.png",
                elevation: 281,
                slope: 0.18,
                roughness: 4.99,
                ironOxide: 1.60,
                similarityScore: 89,
                reasons: ["Extreme arid depression with high evaporation rates mimicking ancient Martian lake beds."]
            },
            {
                name: "Rio Tinto, Spain",
                type: "Hematite/Sulfate Terrain",
                country: "Spain",
                earthImagePath: "images/Rio_Tinto_Spain.png",
                elevation: 366,
                slope: 0.09,
                roughness: 2.10,
                ironOxide: 3.10,
                similarityScore: 85,
                reasons: ["Abundant ferric iron oxides and extreme acidic water simulate subsurface mineral precipitation."]
            }
        ]
    },
    {
        id: "mars-candidate-3",
        name: "Arcadia Planitia Northern Plains",
        zoneTag: "VOLCANIC PLAINS • MARS MOLA",
        category: "plains",
        lat: 52.10,
        lon: 167.57,
        elevation: -3838,
        slope: 3.4,
        roughness: 1.8,
        ironOxide: 2.15,
        ndvi: -0.02,
        marsImagePath: "images/Center Latitude_ 52.109375, Center Longitude_ 167.578125.jpeg",
        marsImageHint: "Mars photo slot: Arcadia plains region",
        shortDesc: "Vast lowland plains dominated by iron oxide-rich regolith and flat terrain ideal for rover traversal.",
        earthAnalogs: [
            {
                name: "Atacama Desert, Chile",
                type: "Hyper-arid Desert",
                country: "Chile",
                earthImagePath: "images/Atacama_Desert_Chile.png",
                elevation: 2638,
                slope: 0.66,
                roughness: 4.80,
                ironOxide: 1.75,
                similarityScore: 92,
                reasons: ["Low slope angles make it a premier testing ground for autonomous rover navigation."]
            },
            {
                name: "Namib Desert, Namibia",
                type: "Iron-rich Dunes",
                country: "Namibia",
                earthImagePath: "images/Namib_Desert_Namibia.png",
                elevation: 573,
                slope: 0.40,
                roughness: 8.41,
                ironOxide: 2.90,
                similarityScore: 87,
                reasons: ["Extensive linear sand dunes and iron-stained quartz grains simulate aeolian transport mechanics."]
            },
            {
                name: "Sahara Desert, Africa",
                type: "Arid Sand Plains",
                country: "North Africa",
                earthImagePath: "images/Sahara_Desert_Africa.png",
                elevation: 626,
                slope: 0.08,
                roughness: 4.41,
                ironOxide: 3.22,
                similarityScore: 83,
                reasons: ["Vast flat desert expanses test long-range autonomous rover deployment capabilities."]
            }
        ]
    },
    {
        id: "mars-candidate-4",
        name: "Utopia Planitia Sedimentary Tract",
        zoneTag: "SEDIMENTARY PLAINS • MARS MOLA",
        category: "plains",
        lat: 56.01,
        lon: 25.39,
        elevation: -3876,
        slope: 0.31,
        roughness: 1.5,
        ironOxide: 2.08,
        ndvi: -0.01,
        marsImagePath: "images/Center Latitude_ 56.015625, Center Longitude_ 25.390625.jpeg",
        marsImageHint: "Mars photo slot: Utopia region",
        shortDesc: "Subsurface ice-rich mantle plains with low surface slope angles.",
        earthAnalogs: [
            {
                name: "McMurdo Dry Valleys, Antarctica",
                type: "Polar Cold Spot",
                country: "Antarctica",
                earthImagePath: "images/McMurdo_Dry_Valleys_Antarctica.png",
                elevation: 629,
                slope: 1.25,
                roughness: 11.69,
                ironOxide: 0.76,
                similarityScore: 90,
                reasons: ["Dry permafrost conditions test robotic drilling and subsurface ice detection tools."]
            },
            {
                name: "Haughton Crater, Canada",
                type: "Polar Impact Crater",
                country: "Canada",
                earthImagePath: "images/Haughton_Crater_Canada.png",
                elevation: 152,
                slope: 0.08,
                roughness: 2.49,
                ironOxide: 0.95,
                similarityScore: 86,
                reasons: ["Continuous permafrost environment simulating high-latitude Martian regolith properties."]
            }
        ]
    },
    {
        id: "mars-candidate-5",
        name: "Elysium Planitia Volcanic Rise",
        zoneTag: "VOLCANIC PLAIN • MARS MOLA",
        category: "volcanic",
        lat: 38.82,
        lon: 113.67,
        elevation: -4508,
        slope: 0.31,
        roughness: 2.2,
        ironOxide: 2.20,
        ndvi: -0.03,
        marsImagePath: "images/Latitude_ 38.828125, Longitude_ 113.671875.jpeg",
        marsImageHint: "Mars photo slot: Elysium region",
        shortDesc: "Smooth volcanic smooth plains representing recent basaltic lava inundations.",
        earthAnalogs: [
            {
                name: "Mauna Kea, Hawaii",
                type: "Basaltic Volcanic",
                country: "United States",
                earthImagePath: "images/Mauna_Kea_Hawaii.png",
                elevation: 3955,
                slope: 0.00,
                roughness: 12.19,
                ironOxide: 1.82,
                similarityScore: 88,
                reasons: ["Tholeiitic basalt flows match chemical composition of volcanic plains."]
            },
            {
                name: "Craters of the Moon, USA",
                type: "Lava Flows & Basalt",
                country: "United States",
                earthImagePath: "images/Craters_of_the_Moon_USA.png",
                elevation: 1753,
                slope: 0.39,
                roughness: 6.50,
                ironOxide: 1.50,
                similarityScore: 85,
                reasons: ["Rough basalt terrain provides excellent traction testing for rover mobility systems."]
            }
        ]
    }
];

// Complete dataset for Google Drive Preview Modal (Mars, 17 Moon, 16 Earth)
const completeMoonDataset = [
    { name: "Lunar South Pole / Shackleton Crater", ref: "Lunar Reconnaissance", lat: -89.90, lon: 0.00, elev: 4200, slope: 5.2 },
    { name: "Aitken Basin (South Pole-Aitken)", ref: "Lunar Reconnaissance", lat: -53.75, lon: 169.90, elev: -2410, slope: 4.8 },
    { name: "Mare Tranquillitatis (Apollo 11)", ref: "Lunar Reconnaissance", lat: 0.67, lon: 23.47, elev: -850, slope: 1.5 },
    { name: "Mare Imbrium (Sinus Iridum)", ref: "Lunar Reconnaissance", lat: 32.80, lon: -31.50, elev: -2500, slope: 2.1 },
    { name: "Oceanus Procellarum", ref: "Lunar Reconnaissance", lat: 18.40, lon: -57.40, elev: -2700, slope: 1.2 },
    { name: "Mare Serenitatis", ref: "Lunar Reconnaissance", lat: 28.00, lon: 18.70, elev: -2300, slope: 1.8 },
    { name: "Mare Crisium", ref: "Lunar Reconnaissance", lat: 17.00, lon: 59.10, elev: -3900, slope: 2.5 },
    { name: "Tycho Crater", ref: "Lunar Reconnaissance", lat: -43.30, lon: -11.20, elev: -100, slope: 12.5 },
    { name: "Copernicus Crater", ref: "Lunar Reconnaissance", lat: 9.70, lon: -20.00, elev: -900, slope: 11.2 },
    { name: "Aristarchus Plateau", ref: "Lunar Reconnaissance", lat: 23.70, lon: -47.40, elev: 1200, slope: 6.1 },
    { name: "Mare Fecunditatis", ref: "Lunar Reconnaissance", lat: -7.80, lon: 51.30, elev: -2500, slope: 1.3 },
    { name: "Mare Nectaris", ref: "Lunar Reconnaissance", lat: -15.20, lon: 35.50, elev: -2800, slope: 2.0 },
    { name: "Sinus Aestuum", ref: "Lunar Reconnaissance", lat: 10.90, lon: -8.80, elev: -1400, slope: 1.6 },
    { name: "Mare Orientale", ref: "Lunar Reconnaissance", lat: -19.80, lon: -92.80, elev: -3000, slope: 3.5 },
    { name: "Kepler Crater", ref: "Lunar Reconnaissance", lat: 8.10, lon: -38.00, elev: -1100, slope: 9.8 },
    { name: "Plato Crater", ref: "Lunar Reconnaissance", lat: 51.60, lon: -9.30, elev: -2000, slope: 2.2 },
    { name: "Atlas Crater", ref: "Lunar Reconnaissance", lat: 46.70, lon: 44.40, elev: -600, slope: 8.1 }
];

const completeDriveDataset = [
    { name: "Gunung Bromo, Indonesia", type: "Volcanic Caldera", target: "Mars", lat: -7.9425, lon: 112.953, elev: 2235.65, slope: 0.013 },
    { name: "Mauna Kea, Hawaii", type: "Basaltic Volcanic", target: "Mars", lat: 19.8207, lon: -155.4681, elev: 3955.32, slope: 0.00 },
    { name: "Atacama Desert, Chile", type: "Hyper-arid Desert", target: "Mars", lat: -23.8634, lon: -69.1328, elev: 2638.53, slope: 0.66 },
    { name: "Haughton Crater, Canada", type: "Polar Impact Crater", target: "Mars", lat: 75.3833, lon: -89.6667, elev: 152.79, slope: 0.08 },
    { name: "Craters of the Moon, USA", type: "Lava Flows & Tubes", target: "Mars", lat: 43.4167, lon: -113.5167, elev: 1753.01, slope: 0.39 },
    { name: "Namib Desert, Namibia", type: "Iron-rich Dunes", target: "Mars", lat: -24.7575, lon: 15.2764, elev: 573.71, slope: 0.40 },
    { name: "McMurdo Dry Valleys, Antarctica", type: "Polar Cold Spot", target: "Mars", lat: -77.4728, lon: 162.5228, elev: 629.13, slope: 1.25 },
    { name: "Meteor Crater, USA", type: "Simple Impact Crater", target: "Mars", lat: 35.0272, lon: -111.0225, elev: 1681.95, slope: 0.02 },
    { name: "Rio Tinto, Spain", type: "Hematite/Sulfate Terrain", target: "Mars", lat: 37.7022, lon: -6.5514, elev: 366.22, slope: 0.09 },
    { name: "Danakil Depression, Ethiopia", type: "Hydrothermal/Salt", target: "Mars", lat: 14.2417, lon: 40.30, elev: -111.18, slope: 0.57 },
    { name: "Vatnajokull National Park, Iceland", type: "Basaltic Volcanic Terrain", target: "Mars", lat: 64.40, lon: -16.80, elev: 1501.75, slope: 0.51 },
    { name: "Sahara Desert, Africa", type: "Arid Sand Plains", target: "Mars", lat: 25.066, lon: 13.399, elev: 626.91, slope: 0.08 },
    { name: "Tibetan Plateau / Karakoram, Asia", type: "Highland Relief", target: "Mars", lat: 32.50, lon: 86.925, elev: 5094.32, slope: 0.06 },
    { name: "Pinnacles Desert, Australia", type: "Karst / Rugged Limestone", target: "Mars", lat: -30.60, lon: 115.16, elev: 65.52, slope: 0.12 },
    { name: "Death Valley, USA", type: "Extreme Heat / Evaporite", target: "Mars", lat: 36.532, lon: -116.825, elev: 281.11, slope: 0.18 },
    { name: "Mount Etna, Italy", type: "Active Basalt Lava", target: "Mars", lat: 37.751, lon: 14.9934, elev: 2913.28, slope: 0.06 }
];

let selectedMarsLocation = null;
let selectedPrimaryAnalog = null;

document.addEventListener("DOMContentLoaded", () => {
    renderMarsLocationButtons();
    populateDriveModalTable();
});

// Mode Switcher
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

// Render Manual Buttons
function renderMarsLocationButtons() {
    const container = document.getElementById("mars-location-buttons");
    if (!container) return;
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
        `Coordinates: ${loc.lat}°, ${loc.lon}°  |  Elevation: ${loc.elevation} m  |  Slope: ${loc.slope}°`;
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

// Select Target Location & Render Multi-Analogs
function selectMarsLocation(loc) {
    selectedMarsLocation = loc;
    selectedPrimaryAnalog = loc.earthAnalogs[0];

    const recSection = document.getElementById("step-earth-recommendation");
    recSection.classList.remove("hidden");

    document.getElementById("rec-mars-name").textContent = loc.name;
    document.getElementById("rec-mars-stats").innerHTML = `
        <li><strong>Coordinates:</strong> ${loc.lat}°, ${loc.lon}°</li>
        <li><strong>Elevation:</strong> ${loc.elevation} m</li>
        <li><strong>Slope Angle:</strong> ${loc.slope}°</li>
        <li><strong>Surface Roughness:</strong> ${loc.roughness} m</li>
        <li><strong>Iron Oxide Ratio:</strong> ${loc.ironOxide}</li>
    `;

    const gridContainer = document.getElementById("earth-cards-grid");
    document.getElementById("match-count-badge").textContent = `Matching Analogs: ${loc.earthAnalogs.length} Sites`;
    gridContainer.innerHTML = "";

    loc.earthAnalogs.forEach((analog) => {
        const card = document.createElement("div");
        card.className = "earth-match-card-item";
        card.innerHTML = `
            <div>
                <div class="earth-image-slot">
                    <img src="${analog.earthImagePath}" alt="${analog.name}" onerror="this.style.display='none'">
                </div>
                <span class="badge-earth" style="background:${analog.similarityScore >= 75 ? '#10b981' : '#f59e0b'}; color:#fff; padding:3px 8px; border-radius:4px; font-size:0.75rem; font-weight:600;">
                    SIMILARITY: ${analog.similarityScore}%
                </span>
                <h3 style="margin: 0.5rem 0 0.2rem 0; font-size: 1.1rem; color: #f8fafc;">${analog.name}</h3>
                <p class="country-text" style="color: #94a3b8; font-size: 0.85rem; margin-bottom: 0.5rem;">Region: ${analog.country} (${analog.type})</p>
                <div class="scientific-reason-box" style="font-size: 0.85rem; color: #cbd5e1;">
                    <strong>🔬 Key Scientific Reason:</strong>
                    <p style="margin: 0.3rem 0 0 0;">${analog.reasons[0]}</p>
                </div>
            </div>
            <div style="margin-top: 0.75rem; font-size: 0.8rem; color: #38bdf8;">
                Elevation: ${analog.elevation}m | Slope: ${analog.slope}° | FeOx: ${analog.ironOxide}
            </div>
        `;
        gridContainer.appendChild(card);
    });

    recSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function showEvaluationSection() {
    const evalSection = document.getElementById("step-evaluation-panel");
    evalSection.classList.remove("hidden");
    renderEvaluationAndComparison(selectedMarsLocation, selectedPrimaryAnalog);
    evalSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderEvaluationAndComparison(loc, analog) {
    const evalBox = document.getElementById("threshold-evaluation-box");
    const evalTitle = document.getElementById("eval-title-status");
    const evalDesc = document.getElementById("eval-desc-status");
    const evalBadge = document.getElementById("eval-status-badge");
    const tableBody = document.getElementById("comparison-table-body");

    if (analog.similarityScore >= 75) {
        evalBox.className = "evaluation-box";
        evalTitle.textContent = `Status: Qualified Primary Analog Site (${analog.similarityScore}% ≥ 75%)`;
        evalDesc.textContent = "This site exhibits extremely high topographic, slope, and mineralogical correlation with the Mars target.";
        evalBadge.textContent = "STATUS: VALID (PRIMARY)";
        evalBadge.style.background = "#10b981";
    } else {
        evalBox.className = "evaluation-box warning";
        evalTitle.textContent = `Status: Below Optimal Threshold (${analog.similarityScore}% < 75%)`;
        evalDesc.textContent = "Significant deviation detected. Secondary analog search or parameter normalization recommended.";
        evalBadge.textContent = "STATUS: ALTERNATIVE REQUIRED";
        evalBadge.style.background = "#f59e0b";
    }

    tableBody.innerHTML = `
        <tr>
            <td><strong>Elevation</strong></td>
            <td>${loc.elevation} m</td>
            <td>${analog.elevation} m</td>
            <td><span class="${Math.abs(loc.elevation - analog.elevation) < 5000 ? 'badge-status-pass' : 'badge-status-warn'}">Scale Evaluation</span></td>
        </tr>
        <tr>
            <td><strong>Slope Angle</strong></td>
            <td>${loc.slope}°</td>
            <td>${analog.slope}°</td>
            <td><span class="badge-status-pass">Safe (≤ 15°)</span></td>
        </tr>
        <tr>
            <td><strong>Surface Roughness</strong></td>
            <td>${loc.roughness} m</td>
            <td>${analog.roughness} m</td>
            <td><span class="badge-status-pass">Valid</span></td>
        </tr>
        <tr>
            <td><strong>Iron Oxide Ratio</strong></td>
            <td>${loc.ironOxide}</td>
            <td>${analog.ironOxide}</td>
            <td><span class="badge-status-pass">Mineral Correlation</span></td>
        </tr>
        <tr>
            <td><strong>Vegetation (NDVI)</strong></td>
            <td>${loc.ndvi}</td>
            <td>${analog.ndvi}</td>
            <td><span class="badge-status-pass">Arid Index</span></td>
        </tr>
    `;
}

// Automatic Mode Logic
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
    const resultList = document.getElementById("auto-result-list");

    if (!resultContainer || !resultList) return;
    resultContainer.classList.remove("hidden");

    if (filtered.length === 0) {
        resultList.innerHTML = `<p style="color: #f59e0b; grid-column: span 2;">No Mars target locations matched this strict filter criteria.</p>`;
        return;
    }

    resultList.innerHTML = "";
    filtered.forEach(loc => {
        const topAnalog = loc.earthAnalogs[0];
        const card = document.createElement("div");
        card.className = "earth-match-card-item";
        card.innerHTML = `
            <div>
                <span class="badge-info" style="font-size:0.75rem;">Mars Target: ${loc.name}</span>
                <div class="earth-image-slot" style="height: 120px; margin-top: 0.5rem;">
                    <img src="${topAnalog.earthImagePath}" alt="Earth" onerror="this.style.display='none'">
                </div>
                <h4 style="margin: 0.3rem 0; color: #f8fafc;">${topAnalog.name}</h4>
                <p style="font-size: 0.82rem; color: #94a3b8;">Elevation: ${loc.elevation}m | Slope: ${loc.slope}°</p>
                <span style="background: #10b981; color:#fff; padding:2px 6px; border-radius:4px; font-size:0.7rem; font-weight:600;">
                    Similarity: ${topAnalog.similarityScore}%
                </span>
            </div>
        `;
        resultList.appendChild(card);
    });
}

// Google Drive Dataset Viewer Modal Functions
function openDriveDataModal() {
    const modal = document.getElementById("drive-data-modal");
    if (modal) modal.classList.remove("hidden");
}

function closeDriveDataModal() {
    const modal = document.getElementById("drive-data-modal");
    if (modal) modal.classList.add("hidden");
}

function populateDriveModalTable() {
    // 1. Render Mars Table
    const marsTbody = document.getElementById("modal-mars-table-body");
    if (marsTbody) {
        marsTbody.innerHTML = "";
        marsLocationsData.forEach(loc => {
            const tr = document.createElement("tr");
            tr.style.borderBottom = "1px solid rgba(148, 163, 184, 0.15)";
            tr.innerHTML = `
                <td style="padding: 8px; font-weight: 600; color: #f8fafc;">${loc.name}</td>
                <td style="padding: 8px; color: #38bdf8;">MOLA Sample</td>
                <td style="padding: 8px; font-family: monospace;">${loc.lat}°, ${loc.lon}°</td>
                <td style="padding: 8px;">${loc.elevation > 0 ? "+" : ""}${loc.elevation} m</td>
                <td style="padding: 8px;">${loc.slope}°</td>
            `;
            marsTbody.appendChild(tr);
        });
    }

    // 2. Render Moon Table (17 Complete Sites)
    const moonTbody = document.getElementById("modal-moon-table-body");
    if (moonTbody) {
        moonTbody.innerHTML = "";
        completeMoonDataset.forEach(item => {
            const tr = document.createElement("tr");
            tr.style.borderBottom = "1px solid rgba(148, 163, 184, 0.15)";
            tr.innerHTML = `
                <td style="padding: 8px; font-weight: 600; color: #f8fafc;">${item.name}</td>
                <td style="padding: 8px; color: #38bdf8;">${item.ref}</td>
                <td style="padding: 8px; font-family: monospace;">${item.lat}°, ${item.lon}°</td>
                <td style="padding: 8px;">${item.elev > 0 ? "+" : ""}${item.elev} m</td>
                <td style="padding: 8px;">${item.slope}°</td>
            `;
            moonTbody.appendChild(tr);
        });
    }

    // 3. Render Earth Table (16 Complete Sites)
    const earthTbody = document.getElementById("modal-earth-table-body");
    if (earthTbody) {
        earthTbody.innerHTML = "";
        completeDriveDataset.forEach(item => {
            const tr = document.createElement("tr");
            tr.style.borderBottom = "1px solid rgba(148, 163, 184, 0.15)";
            tr.innerHTML = `
                <td style="padding: 8px; font-weight: 600; color: #f8fafc;">${item.name}</td>
                <td style="padding: 8px; color: #94a3b8;">${item.type}</td>
                <td style="padding: 8px; color: #38bdf8;">${item.target}</td>
                <td style="padding: 8px; font-family: monospace;">${item.lat}°, ${item.lon}°</td>
                <td style="padding: 8px;">${item.elev} m</td>
            `;
            earthTbody.appendChild(tr);
        });
    }
}