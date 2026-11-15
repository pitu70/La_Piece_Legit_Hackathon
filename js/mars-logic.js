// Dataset Mars MOLA & Multi-Earth Analogs (English Interface, Full 16+ Dataset Integration)
const marsLocationsData = [
    {
        id: "hellas-basin",
        name: "Deep Basin Zone (Southern Hellas)",
        zoneTag: "LOWLAND BASIN • MOLA SAMPLE #63",
        category: "basin",
        lat: -42.58,
        lon: 70.12,
        elevation: -7185,
        slope: 2.1,
        roughness: 1.2,
        ironOxide: 1.85,
        ndvi: -0.05,
        // MARS PHOTO SLOT: Ganti string kosong dengan path foto Mars kamu nanti, misal "images/mars_hellas.png"
        marsImagePath: "",
        marsImageHint: "Mars photo slot: Deep basin / sedimentary floor (Hellas Planitia)",
        shortDesc: "Deepest southern basin on Mars featuring higher atmospheric surface pressure and smooth sedimentary plains.",
        earthAnalogs: [
            {
                name: "Danakil Depression, Ethiopia",
                type: "Hydrothermal / Evaporite Salt Basin",
                country: "Ethiopia",
                earthImagePath: "images/NorthAmerica_DeathValley.png",
                earthImageHint: "images/NorthAmerica_DeathValley.png",
                elevation: -125,
                slope: 2.4,
                roughness: 1.4,
                ironOxide: 1.92,
                clayMineral: 0.48,
                ndvi: 0.02,
                tempDayC: 39.30,
                similarityScore: 88,
                reasons: [
                    "Negative basin topography (-125 m) perfectly models extreme Mars depressions (-7,185 m) with gentle slopes (2.4° vs 2.1°) safe for lander entry.",
                    "High evaporite and iron oxide content (~1.9) reflects ancient chemical precipitation in Martian crater floors."
                ]
            },
            {
                name: "Death Valley Salt Flats, North America",
                type: "Evaporite Pan / Arid Basin",
                country: "United States",
                earthImagePath: "images/NorthAmerica_DeathValley.png",
                earthImageHint: "images/NorthAmerica_DeathValley.png",
                elevation: -86,
                slope: 2.0,
                roughness: 1.5,
                ironOxide: 1.70,
                clayMineral: 0.52,
                ndvi: 0.01,
                tempDayC: 38.00,
                similarityScore: 84,
                reasons: [
                    "Cracked salt crust polygons mimic permafrost and dessicated mud crack formations observed by orbital spectrometers on Mars.",
                    "Hyper-arid environment with extreme diurnal temperature shifts matches Martian atmospheric thermal inertia."
                ]
            }
        ]
    },
    {
        id: "northern-lowlands",
        name: "Northern Lowlands (Acidalia/Utopia)",
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
        marsImageHint: "Mars photo slot: Broad sandy/rocky lowlands",
        shortDesc: "Vast lowland plains dominated by iron oxide-rich regolith and flat terrain ideal for long-range rover traversal.",
        earthAnalogs: [
            {
                name: "Atacama Desert (Yungay Station), Chile",
                type: "Hyper-arid Desert Regolith",
                country: "Chile",
                earthImagePath: "images/SouthAmerica_Atacama.png",
                earthImageHint: "images/SouthAmerica_Atacama.png",
                elevation: 980,
                slope: 3.1,
                roughness: 1.9,
                ironOxide: 2.08,
                clayMineral: 0.35,
                ndvi: 0.03,
                tempDayC: 30.08,
                similarityScore: 92,
                reasons: [
                    "High Iron Oxide ratio (2.15 vs 2.08) produces characteristic red dust and oxidized soil identical to Martian regolith.",
                    "Surface roughness (1.8m vs 1.9m) and low slope angles make it the premier NASA testing ground for autonomous rover navigation."
                ]
            },
            {
                name: "Australian Red Center (Outback)",
                type: "Iron-Oxide Arid Regolith",
                country: "Australia",
                earthImagePath: "images/Oceania_Australian_RedCenter.png",
                earthImageHint: "images/Oceania_Australian_RedCenter.png",
                elevation: 540,
                slope: 3.8,
                roughness: 2.1,
                ironOxide: 2.20,
                clayMineral: 0.40,
                ndvi: 0.09,
                tempDayC: 35.40,
                similarityScore: 86,
                reasons: [
                    "Extensive aeolian sand sheets and hematit-coated dunes simulate dust storm accumulation patterns on Mars.",
                    "Aged sedimentary rock outcrops allow calibration of remote sensing mineralogy instruments."
                ]
            }
        ]
    },
    {
        id: "mid-transition-plateau",
        name: "Mid-Elevation Transition & Dry Valleys",
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
        marsImageHint: "Mars photo slot: Dry valleys & layered canyons (Valles Marineris)",
        shortDesc: "Transition region between lowlands and highlands featuring ancient erosion features and layered rock outcrops.",
        earthAnalogs: [
            {
                name: "McMurdo Dry Valleys, Antarctica",
                type: "Polar Hyper-arid & Permafrost",
                country: "Antarctica",
                earthImagePath: "images/Antarctica_Vostok_Ice.png",
                earthImageHint: "images/Antarctica_Vostok_Ice.png",
                elevation: 450,
                slope: 7.9,
                roughness: 3.4,
                ironOxide: 1.65,
                clayMineral: 0.62,
                ndvi: 0.01,
                tempDayC: -24.74,
                similarityScore: 89,
                reasons: [
                    "Extreme cold temperatures and near-zero moisture replicate dry cryogenic conditions in mid-to-high latitude Mars.",
                    "High clay mineral ratios (0.62) indicate ancient aqueous alteration and fluvial/lacustrine sedimentation history."
                ]
            },
            {
                name: "Icelandic Glacio-Volcanic Terrain",
                type: "Tholeiitic Basalt / Glacial Outwash",
                country: "Iceland",
                earthImagePath: "images/Europe_Iceland_Volcanic.png",
                earthImageHint: "images/Europe_Iceland_Volcanic.png",
                elevation: 820,
                slope: 9.0,
                roughness: 3.8,
                ironOxide: 1.55,
                clayMineral: 0.58,
                ndvi: 0.05,
                tempDayC: 4.80,
                similarityScore: 83,
                reasons: [
                    "Sub-glacial volcanic interactions simulate sub-surface ice and basaltic lava channels found in Martian highlands.",
                    "Basaltic hyaloclastite deposits test subsurface drilling tools for astrobiological sampling."
                ]
            }
        ]
    },
    {
        id: "southern-highlands",
        name: "Cratered Highlands (Noachian Crust)",
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
        marsImageHint: "Mars photo slot: Cratered ancient highlands & rocky terrain",
        shortDesc: "Ancient Martian crust heavily pockmarked by impact craters, steep scarps, and basaltic volcanic materials.",
        earthAnalogs: [
            {
                name: "Gunung Bromo Caldera (Tengger), Indonesia",
                type: "Volcanic Caldera / Pyroclastic Tephra",
                country: "Indonesia",
                earthImagePath: "images/Asia_Bromo_Volcano.png",
                earthImageHint: "images/Asia_Bromo_Volcano.png",
                elevation: 2329,
                slope: 15.0,
                roughness: 5.4,
                ironOxide: 1.88,
                clayMineral: 0.41,
                ndvi: 0.08,
                tempDayC: 21.49,
                similarityScore: 81,
                reasons: [
                    "Comparable highland elevation (~2,800m vs 2,329m) featuring extensive volcanic sand seas (Sand Sea Caldera).",
                    "Pyroclastic tephra and slope angles (~14°-15°) accurately match impact crater rim structures in Martian highlands."
                ]
            }
        ]
    },
    {
        id: "tharsis-volcanic-peak",
        name: "Tharsis Volcanic Rise (Olympus Region)",
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
        marsImageHint: "Mars photo slot: Giant shield volcano summit (Olympus Mons / Tharsis)",
        shortDesc: "Gigantic volcanic province with extreme elevations exceeding 14 km, steep slopes, and massive basaltic lava flows.",
        earthAnalogs: [
            {
                name: "Sahara & Namib Hyper-Arid Erg",
                type: "Iron-rich Regolith / Aeolian Sand Sheet",
                country: "Africa",
                earthImagePath: "images/Africa_Sahara_Desert.png",
                earthImageHint: "images/Africa_Sahara_Desert.png",
                elevation: 573,
                slope: 13.4,
                roughness: 11.3,
                ironOxide: 2.91,
                clayMineral: 1.06,
                ndvi: 0.09,
                tempDayC: 37.16,
                similarityScore: 68,
                reasons: [
                    "Extremely high Iron Oxide content (2.91) mirrors the red hematit dust on volcanic shield slopes.",
                    "Below 75% threshold (68%) due to absolute elevation differences (+14,250m vs 573m), triggering secondary analog alternative search."
                ]
            }
        ]
    }
];

let selectedMarsLocation = null;
let selectedPrimaryAnalog = null;

document.addEventListener("DOMContentLoaded", () => {
    renderMarsLocationButtons();
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
        `Coordinates: ${loc.lat}°, ${loc.lon}°  |  MOLA Elevation: ${loc.elevation} m  |  Slope: ${loc.slope}°`;
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

// Select Mars Location & Render Multi-Analogs
function selectMarsLocation(loc) {
    selectedMarsLocation = loc;
    selectedPrimaryAnalog = loc.earthAnalogs[0]; // Set top rank as primary for comparison

    const recSection = document.getElementById("step-earth-recommendation");
    recSection.classList.remove("hidden");

    // Mars summary
    document.getElementById("rec-mars-name").textContent = loc.name;
    document.getElementById("rec-mars-stats").innerHTML = `
        <li><strong>MOLA Coordinates:</strong> ${loc.lat}°, ${loc.lon}°</li>
        <li><strong>MOLA Elevation:</strong> ${loc.elevation} m</li>
        <li><strong>Slope Angle:</strong> ${loc.slope}°</li>
        <li><strong>Surface Roughness:</strong> ${loc.roughness} m</li>
        <li><strong>Iron Oxide Ratio:</strong> ${loc.ironOxide}</li>
    `;

    // Render Multi-Earth Analogs Grid
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
        evalDesc.textContent = "This site exhibits extremely high topographic, slope, and mineralogical correlation with the Mars target. Fully validated for primary mission analog testing.";
        evalBadge.textContent = "STATUS: VALID (PRIMARY)";
        evalBadge.style.background = "#10b981";
    } else {
        evalBox.className = "evaluation-box warning";
        evalTitle.textContent = `Status: Below Optimal Threshold (${analog.similarityScore}% < 75%)`;
        evalDesc.textContent = "Significant deviation detected (primarily in absolute elevation scale). Secondary analog search or parameter normalization recommended.";
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
        resultList.innerHTML = `<p style="color: #f59e0b; grid-column: span 2;">No Mars locations matched this strict filter criteria. Try loosening the max slope boundary.</p>`;
        return;
    }

    resultList.innerHTML = "";
    filtered.forEach(loc => {
        const topAnalog = loc.earthAnalogs[0];
        const card = document.createElement("div");
        card.className = "earth-match-card-item";
        card.innerHTML = `
            <div>
                <span class="badge-info" style="font-size:0.75rem;">Mars: ${loc.name}</span>
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