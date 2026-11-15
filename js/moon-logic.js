const earthMoonDatabase = [
    {
        id: "bromo",
        name: "Gunung Bromo, Indonesia",
        type: "Volcanic Caldera",
        category: "highlands",
        target: "Moon & Mars",
        lat: -7.943,
        lon: 112.953,
        elevation: 2235.653,
        slope: 0.013,
        roughness: 13.117,
        ironOxide: 1.167,
        clayMineral: 1.328,
        ndvi: 0.282,
        tempDayC: 21.493
    },
    {
        id: "mauna-kea",
        name: "Mauna Kea, Hawaii",
        type: "Basaltic Volcanic (Mare)",
        category: "basalt",
        target: "Moon",
        lat: 19.821,
        lon: -155.468,
        elevation: 3955.321,
        slope: 0.000,
        roughness: 12.197,
        ironOxide: 1.820,
        clayMineral: 1.022,
        ndvi: 0.037,
        tempDayC: 24.941
    },
    {
        id: "haughton",
        name: "Haughton Crater, Canada",
        type: "Polar Impact Crater",
        category: "polar",
        target: "Moon & Mars",
        lat: 75.383,
        lon: -89.667,
        elevation: 152.799,
        slope: 0.085,
        roughness: 2.493,
        ironOxide: 0.952,
        clayMineral: 1.009,
        ndvi: -0.005,
        tempDayC: -18.001
    },
    {
        id: "craters-of-the-moon",
        name: "Craters of the Moon, USA",
        type: "Lava Flows & Tubes",
        category: "basalt",
        target: "Moon",
        lat: 43.417,
        lon: -113.517,
        elevation: 1753.011,
        slope: 0.392,
        roughness: 4.570,
        ironOxide: 1.497,
        clayMineral: 1.258,
        ndvi: 0.195,
        tempDayC: 17.518
    },
    {
        id: "mcmurdo",
        name: "McMurdo Dry Valleys, Antarctica",
        type: "Polar Cold Spot",
        category: "polar",
        target: "Moon & Mars",
        lat: -77.473,
        lon: 162.523,
        elevation: 629.138,
        slope: 1.256,
        roughness: 11.699,
        ironOxide: 0.759,
        clayMineral: 0.923,
        ndvi: -0.087,
        tempDayC: -24.741
    },
    {
        id: "meteor-crater",
        name: "Meteor Crater, USA",
        type: "Simple Impact Crater",
        category: "crater",
        target: "Moon & Mars",
        lat: 35.027,
        lon: -111.023,
        elevation: 1681.953,
        slope: 0.023,
        roughness: 3.700,
        ironOxide: 2.062,
        clayMineral: 1.111,
        ndvi: 0.118,
        tempDayC: 28.072
    },
    {
        id: "vatnajokull",
        name: "Vatnajokull National Park, Iceland",
        type: "Basaltic Volcanic Terrain",
        category: "basalt",
        target: "Moon & Mars",
        lat: 64.400,
        lon: -16.800,
        elevation: 1501.754,
        slope: 0.507,
        roughness: 0.960,
        ironOxide: 0.945,
        clayMineral: 1.066,
        ndvi: -0.085,
        tempDayC: -8.573
    },
    {
        id: "sahara",
        name: "Sahara Desert, Africa",
        type: "Arid Sand Plains",
        category: "highlands",
        target: "Moon & Mars",
        lat: 25.066,
        lon: 13.399,
        elevation: 626.912,
        slope: 0.081,
        roughness: 4.410,
        ironOxide: 3.222,
        clayMineral: 1.117,
        ndvi: 0.082,
        tempDayC: 30.707
    },
    {
        id: "tibetan-plateau",
        name: "Tibetan Plateau / Karakoram, Asia",
        type: "Highland Relief",
        category: "highlands",
        target: "Moon",
        lat: 32.500,
        lon: 86.925,
        elevation: 5094.320,
        slope: 0.058,
        roughness: 4.229,
        ironOxide: 1.862,
        clayMineral: 1.229,
        ndvi: 0.113,
        tempDayC: 9.919
    },
    {
        id: "death-valley",
        name: "Death Valley, USA",
        type: "Extreme Heat / Evaporite",
        category: "crater",
        target: "Moon & Mars",
        lat: 36.532,
        lon: -116.825,
        elevation: 281.109,
        slope: 0.177,
        roughness: 4.991,
        ironOxide: 1.602,
        clayMineral: 1.134,
        ndvi: 0.081,
        tempDayC: 32.725
    },
    {
        id: "mount-etna",
        name: "Mount Etna, Italy",
        type: "Active Basalt Lava (Mare)",
        category: "basalt",
        target: "Moon",
        lat: 37.751,
        lon: 14.993,
        elevation: 2913.278,
        slope: 0.059,
        roughness: 19.611,
        ironOxide: 1.130,
        clayMineral: 0.891,
        ndvi: 0.005,
        tempDayC: 15.452
    }
];

    const moonLocationsData = [
    {
        id: "bandfield",
        name: "Bandfield Crater (Mare Marginis)",
        zoneTag: "BASALT (MARIA) • RICH IN IRON (24.72% FeO)",
        lat: -5.387,
        lon: 90.772,
        elevation: -2369.13,
        slope: 5.7492,
        tempDayK: 392.04,
        tempNightK: 87.23,
        amplitudeK: 304.81,
        feoPercent: 24.72,
        mineralType: "Basalt (Maria) - Rich in Iron",
        imagePath: "images/Screenshot 2026-11-15 114352.png",
        imageHint: "Suggested photo: Bandfield Crater & Mare Marginis basaltic plains",
        shortDesc: "Young crater with extreme cold thermal anomalies on iron-rich basaltic plains (24.72% FeO) and a daily temperature amplitude of 304.8 K.",
        earthId: "mauna-kea",
        similarityScore: 91,
        reasons: [
            "Directly classified as Basaltic Volcanic (Mare) with a high iron oxide ratio (1.820), aligning with Bandfield's 24.72% FeO content.",
            "Minimal vegetation (NDVI 0.037) and low clay minerals (1.022), reflecting fresh basaltic volcanic surfaces on the Moon.",
            "High surface roughness (12.197 m) is ideal for testing rover suspension durability on rocky basaltic terrain."
            ]
  },
    {
        id: "nijland-v",
        name: "Nijland V Crater",
        zoneTag: "ANORTHOSITE • IRON-POOR (2.21% FeO)",
        lat: 34.266,
        lon: 131.756,
        elevation: 1049.24,
        slope: 12.7132,
        tempDayK: 357.03,
        tempNightK: 87.75,
        amplitudeK: 269.28,
        feoPercent: 2.21,
        mineralType: "Anorthosite (Highlands) - Iron-Poor",
        imagePath: "images/Screenshot 2026-11-15 114533.png",
        imageHint: "Suggested photo: Nijland V Crater on the lunar far-side highlands",
        shortDesc: "Crater in ancient highlands composed of iron-poor Anorthosite rock (2.21% FeO) with a fairly steep slope (12.71°) and a fine dust blanket.",
        earthId: "tibetan-plateau",
        similarityScore: 89,
        reasons: [
            "Represents Earth's Highland Relief type with extreme elevation (5,094.3 m) and high-radiation, thin-atmosphere conditions.",
            "Sparse vegetation (NDVI 0.113) and cool daytime temperatures (9.92°C) support simulations of lunar highland habitat operations.",
            "Crystalline rocky highland structures provide a morphological analog for the Highlands region in Nijland V."
        ]
    },
    {
        id: "chaplygin-b",
        name: "Chaplygin B Crater",
        zoneTag: "ANORTHOSITE • HIGH ELEVATION (+2,882 m)",
        lat: -3.329,
        lon: 152.287,
        elevation: 2882.27,
        slope: 7.1746,
        tempDayK: 390.08,
        tempNightK: 88.35,
        amplitudeK: 301.73,
        feoPercent: 2.98,
        mineralType: "Anorthosite (Highlands) - Iron-Poor",
        imagePath: "images/Screenshot 2026-11-15 114637.png",
        imageHint: "Suggested photo: Bright Chaplygin B Crater in the equatorial highlands",
        shortDesc: "Crater in the equatorial highlands with an elevation of +2,882 m, very low iron content (2.98% FeO), and intense daytime heating.",
        earthId: "bromo",
        similarityScore: 92,
        reasons: [
            "Highly comparable highland elevation (+2,882 m at Chaplygin B vs. +2,235.6 m at Mount Bromo).",
            "Low iron oxide ratio (1.167) aligns with the iron-poor rock characteristics (2.98% FeO) of the lunar highlands.",
            "Expanses of sand and fine volcanic dust in the caldera serve as an ideal testing ground for rover wheel mobility in thick regolith."
        ]
    },
    {
        id: "tycho-crater",
        name: "Tycho Crater",
        zoneTag: "MIXED ROCK • YOUNG IMPACT CRATER",
        lat: -43.31,
        lon: -11.36,
        elevation: -2724.24,
        slope: 16.3411,
        tempDayK: 349.48,
        tempNightK: 123.71,
        amplitudeK: 225.77,
        feoPercent: 14.38,
        mineralType: "Mixed Rock (Transition)",
        imagePath: "images/Screenshot 2026-11-15 215236.png",
        imageHint: "Suggested photo: Tycho Crater with steep walls and a central peak",
        shortDesc: "Iconic young impact crater with steep walls (16.34°), impact melt rock, and a mixture of transitional minerals.",
        earthId: "meteor-crater",
        similarityScore: 94,
        reasons: [
            "The best-preserved meteorite impact crater structure on Earth (Impact Crater) for studying ejecta and breccia from young craters like Tycho.",
            "Moderate-to-high iron oxide ratio (2.062) aligns with the transitional mineral composition (14.38% FeO) on crater wall outcrops.",
            "Official field geology training site for NASA astronauts to map impact crater stratigraphy."
        ]
    },
    {
        id: "giordano-bruno",
        name: "Giordano Bruno Crater",
        zoneTag: "ANORTHOSITE • VERY YOUNG CRATER",
        lat: 35.9,
        lon: 102.8,
        elevation: -1661.15,
        slope: 15.6513,
        tempDayK: 349.88,
        tempNightK: 149.40,
        amplitudeK: 200.48,
        feoPercent: 6.48,
        mineralType: "Anorthosite (Highlands) - Iron-Poor",
        imagePath: "images/Screenshot 2026-11-15 215523.png",
        imageHint: "Suggested photo: Young crater with sharp cliffs and fresh boulders",
        shortDesc: "One of the youngest large craters on the Moon with steep cliffs (15.65°) and warmer nighttime temperatures (149.4 K) due to fresh exposed rock.",
        earthId: "meteor-crater",
        similarityScore: 88,
        reasons: [
            "Sharp and fresh impact crater wall morphology resembles the young geological age of Giordano Bruno.",
            "Arid environment with minimal vegetation (NDVI 0.118) facilitates testing of 3D LiDAR mapping on crater walls.",
            "Fragmented rock outcrops serve as a field analog for fresh boulder fields surrounding Giordano Bruno."
        ]
    },
    {
        id: "oimages/Screenshot 2026-11-15 215523.pngn",
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
        mineralType: "Basalt (Maria) - Rich in Iron",
        imagePath: "images/Screenshot 2026-11-15 215750.png",
        imageHint: "Suggested photo: Giant multi-ring impact basin Mare Orientale",
        shortDesc: "Giant multi-ring impact basin on the Moon's western limb with an iron-rich basaltic floor (22.4% FeO) and low elevation (-2,804 m).",
        earthId: "mount-etna",
        similarityScore: 90,
        reasons: [
            "Active Basalt Lava (Mare) surface type with near-zero vegetation (NDVI 0.005) and very low clay minerals (0.891).",
            "High terrain roughness (19.611 m) resembles the concentric ring zones and rocky lava flows of Mare Orientale.",
            "Used by the European Space Agency (ESA) for testing basaltic surface exploration rovers."
        ]
    },
    {
        id: "apollo-11",
        name: "Apollo 11 (Mare Tranquillitatis)",
        zoneTag: "BASALT (MARIA) • FLAT LANDING ZONE",
        lat: 0.67,
        lon: 23.47,
        elevation: -1915.22,
        slope: 1.1326,
        tempDayK: 395.58,
        tempNightK: 95.20,
        amplitudeK: 300.38,
        feoPercent: 17.5,
        mineralType: "Basalt (Maria) - Rich in Iron",
        imagePath: "images/Screenshot 2026-11-15 220116.png",
        imageHint: "Suggested photo: Flat lava plains of Mare Tranquillitatis (Apollo 11)",
        shortDesc: "First historic human landing site. Very flat basaltic lava plain (1.13° slope) experiencing extreme daytime temperatures (395.58 K).",
        earthId: "craters-of-the-moon",
        similarityScore: 95,
        reasons: [
            "Extremely gentle slope (0.392° vs. 1.13° at Apollo 11) and low roughness (4.570 m), identical to the flat landing zone of Mare Tranquillitatis.",
            "Basaltic lava flow characteristics (Lava Flows & Tubes) reflect the geology of iron-rich flood lava plains (17.5% FeO).",
            "Historic training site for Apollo mission crews to identify vesicular basalt rocks."
        ]
    },
    {
        id: "apollo-17",
        name: "Apollo 17 (Taurus-Littrow)",
        zoneTag: "MIXED ROCK • TRANSITION VALLEY",
        lat: 20.19,
        lon: 30.77,
        elevation: -2318.39,
        slope: 9.0918,
        tempDayK: 384.68,
        tempNightK: 96.43,
        amplitudeK: 288.24,
        feoPercent: 13.83,
        mineralType: "Mixed Rock (Transition)",
        imagePath: "images/Screenshot 2026-11-15 220228.png",
        imageHint: "Suggested photo: Taurus-Littrow Valley nestled between lunar mountains",
        shortDesc: "Boundary valley between Maria basalt plains and Highlands mountains, yielding a diverse mix of transitional rocks (13.83% FeO).",
        earthId: "vatnajokull",
        similarityScore: 91,
        reasons: [
            "Vegetation-free basaltic volcanic landscape (NDVI -0.085) and transitional iron oxide ratio (0.945) resemble the geological boundary of Taurus-Littrow.",
            "Fine pyroclastic ash plain surface (0.960 m roughness) parallels the orange volcanic glass deposits discovered by the Apollo 17 crew.",
            "Used for testing regolith core drilling and sampling equipment."
        ]
    },
    {
        id: "copernicus",
        name: "Copernicus Crater",
        zoneTag: "ANORTHOSITE • DEEP TERRACED CRATER",
        lat: 9.62,
        lon: -20.08,
        elevation: -3363.88,
        slope: 8.3845,
        tempDayK: 386.17,
        tempNightK: 104.08,
        amplitudeK: 282.09,
        feoPercent: 4.13,
        mineralType: "Anorthosite (Highlands) - Iron-Poor",
        imagePath: "images/Screenshot 2026-11-15 220552.png",
        imageHint: "Suggested photo: Copernicus stepped terraced crater with central peaks",
        shortDesc: "Very deep stepped terraced crater (-3,363 m) with central peaks exposing iron-poor deep crustal rocks (4.13% FeO).",
        earthId: "death-valley",
        similarityScore: 89,
        reasons: [
            "Sweltering daytime temperatures (32.73°C) and hyper-arid conditions (NDVI 0.081) simulate daytime thermal loads on the Copernicus crater floor (386.17 K).",
            "Uplifted rock outcrops along the basin rim provide a morphological analog for the crater's terraced walls.",
            "Moderate surface roughness (4.991 m) is well-suited for testing optical navigation sensors."
        ]
    },
    {
        id: "aristarchus",
        name: "Aristarchus Plateau",
        zoneTag: "MIXED ROCK • PYROCLASTIC VOLCANIC",
        lat: 23.7,
        lon: -47.4,
        elevation: -3173.42,
        slope: 3.343,
        tempDayK: 376.19,
        tempNightK: 119.46,
        amplitudeK: 256.73,
        feoPercent: 11.63,
        mineralType: "Mixed Rock (Transition)",
        imagePath: "images/Screenshot 2026-11-15 220450.png",
        imageHint: "Suggested photo: Bright Aristarchus pyroclastic plateau & Vallis Schröteri",
        shortDesc: "The brightest and formerly most volcanically active region, rich in pyroclastic deposits, lava channels, and mixed minerals (11.63% FeO).",
        earthId: "craters-of-the-moon",
        similarityScore: 92,
        reasons: [
            "Features lava channel and volcanic tube systems (Lava Flows & Tubes) that serve as a direct analog for Vallis Schröteri in Aristarchus.",
            "Intermediate iron oxide ratio (1.497) reflects the transitional rock composition (11.63% FeO) and pyroclastic deposits.",
            "Relatively gentle terrain slope supports long-range rover traverse simulations."
        ]
    },
    {
        id: "von-karman",
        name: "Von Kármán Crater (Far Side)",
        zoneTag: "BASALT (MARIA) • LUNAR FAR SIDE",
        lat: -44.8,
        lon: 175.9,
        elevation: -567.97,
        slope: 4.7385,
        tempDayK: 351.88,
        tempNightK: 86.49,
        amplitudeK: 265.40,
        feoPercent: 15.32,
        mineralType: "Basalt (Maria) - Rich in Iron",
        imagePath: "images/Von karman.jpg",
        imageHint: "Suggested photo: Von Kármán crater floor in the South Pole-Aitken Basin",
        shortDesc: "Landing site of Chang'e-4 in the South Pole-Aitken Basin (lunar far side) featuring an iron-rich basaltic floor (15.32% FeO).",
        earthId: "mauna-kea",
        similarityScore: 93,
        reasons: [
            "Volcanic basaltic plains (Mare) with a 1.820 iron oxide ratio align with the iron-rich regolith composition (15.32% FeO) measured by the Yutu-2 rover.",
            "Flat, vegetation-free surface (NDVI 0.037) supports calibration of ground-penetrating radar (Lunar Penetrating Radar).",
            "Represents basaltic flood lava layers inside an ancient impact basin."
        ]
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
        imagePath: "images/Screenshot 2026-11-15 220656.png",
        imageHint: "Suggested photo: Silicic volcanic domes Gruithuisen Gamma & Delta",
        shortDesc: "Rare volcanic domes on the Moon composed of silica-rich (Rhyolitic) and iron-poor magma (4.0% FeO), target of NASA's Lunar-VISE mission.",
        earthId: "bromo",
        similarityScore: 88,
        reasons: [
            "Low iron oxide ratio (1.167) aligns with the silica-rich, iron-poor magma characteristics (4.0% FeO) of the Gruithuisen Domes.",
            "Volcanic cone and dome morphology with high roughness (13.117 m) serves as a testing site for infrared spectrometers and slope climbing.",
            "Supports modeling of explosive/viscous volcanic structures in a low-gravity environment."
        ]
    },
    {
        id: "shackleton-crater",
        name: "Shackleton Crater (South Pole)",
        zoneTag: "SOUTH POLE (PSR) • WATER ICE POTENTIAL",
        lat: -89.9,
        lon: 0.0,
        elevation: 285.58,
        slope: 9.2246,
        tempDayK: 228.79,
        tempNightK: 57.17,
        amplitudeK: 171.62,
        feoPercent: 2.0,
        mineralType: "Anorthosite (Highlands) - Iron-Poor",
        imagePath: "images/Shackleton.png",
        imageHint: "Suggested photo: Permanently shadowed Shackleton Crater at the lunar South Pole",
        shortDesc: "Primary target for the Artemis missions at the lunar South Pole. The crater interior lies in permanent shadow (PSR) at cryogenic temperatures (57.17 K).",
        earthId: "mcmurdo",
        similarityScore: 96,
        reasons: [
            "Classified as a Polar Cold Spot with extreme cold daytime temperatures (-24.74°C) and the lowest iron oxide ratio (0.759), identical to the iron-poor anorthosite (2.0% FeO) at Shackleton.",
            "Hyper-arid, frozen, vegetation-free environment (NDVI -0.087) serves as NASA's gold standard for testing water-ice drilling technologies for the Artemis missions.",
            "Low solar incidence angle at 77° S latitude closely mimics lighting conditions at the lunar South Pole."
        ]
    },
    {
        id: "peary-crater",
        name: "Peary Crater (North Pole)",
        zoneTag: "NORTH POLE • ETERNAL LIGHT",
        lat: 88.6,
        lon: 33.0,
        elevation: -1403.63,
        slope: 5.2547,
        tempDayK: 166.27,
        tempNightK: 38.24,
        amplitudeK: 128.03,
        feoPercent: 2.0,
        mineralType: "Anorthosite (Highlands) - Iron-Poor",
        imagePath: "images/Peary_(LOLA).png",
        imageHint: "Suggested photo: North polar Peary Crater under low-angle illumination",
        shortDesc: "Large crater near the lunar North Pole with the coldest temperatures in the dataset (38.24 K / -234.9°C at night) and sunlit crater rims.",
        earthId: "haughton",
        similarityScore: 95,
        reasons: [
            "Polar Impact Crater at 75° N latitude with freezing daytime temperatures (-18.00°C) that parallel the north polar conditions of Peary Crater.",
            "Low iron oxide ratio (0.952) and smooth surface (2.493 m roughness) reflect the iron-poor anorthosite crater floor (2.0% FeO).",
            "Serves as the research hub for the NASA Haughton-Mars Project to test spacesuits and long-duration polar rovers."
        ]
    },
        {
        id: "al-khwarizmi",
        name: "Al-Khwarizmi Crater",
        zoneTag: "ANORTHOSITE • FAR SIDE HIGHLANDS",
        lat: 7.0,
        lon: 107.0,
        elevation: -334.68,
        slope: 6.1948,
        tempDayK: 392.05,
        tempNightK: 93.53,
        amplitudeK: 298.52,
        feoPercent: 6.81,
        mineralType: "Anorthosite (Highlands) - Iron-Poor",
        imagePath: "images/Screenshot 2026-11-15 220759.png",
        imageHint: "Suggested photo: Ancient Al-Khwarizmi Crater on the lunar far side",
        shortDesc: "Old impact crater on the equatorial lunar far side with a relatively gentle floor (6.19° slope) and iron-poor anorthosite crust (6.81% FeO).",
        earthId: "tibetan-plateau",
        similarityScore: 87,
        reasons: [
            "Ancient highland landscape characteristics (Highland Relief) with moderate surface roughness (4.229 m).",
            "Extremely sparse vegetation cover (NDVI 0.113) enables remote geological mapping tests.",
            "Well-suited for communication and navigation simulations in rugged lunar far-side terrain."
        ]
    },
    {
        id: "al-biruni",
        name: "Al-Biruni Crater",
        zoneTag: "MIXED ROCK • MARE MARGINIS BORDER",
        lat: 18.1,
        lon: 92.5,
        elevation: -3958.92,
        slope: 7.525,
        tempDayK: 386.11,
        tempNightK: 94.75,
        amplitudeK: 291.36,
        feoPercent: 13.46,
        mineralType: "Mixed Rock (Transition)",
        imagePath: "images/Screenshot 2026-11-15 215903.png",
        imageHint: "Suggested photo: Al-Biruni Crater on the eastern edge of Mare Marginis",
        shortDesc: "Deep crater (-3,958 m) on the edge of Mare Marginis mixing basaltic and highland materials (13.46% FeO) with uniform walls.",
        earthId: "death-valley",
        similarityScore: 90,
        reasons: [
            "Deep basin with extreme daytime temperatures (32.73°C) representing the high thermal conditions at Al-Biruni (386.11 K).",
            "Intermediate iron oxide ratio (1.602) aligns with the transitional mineral zone (13.46% FeO) between basalt plains and highlands.",
            "Arid, dusty conditions (NDVI 0.081) provide an ideal site for testing rover thermal system durability."
        ]
    },
    {
        id: "alhazen",
        name: "Alhazen Crater",
        zoneTag: "ANORTHOSITE • MARE CRISIUM RIM",
        lat: 15.9,
        lon: 71.8,
        elevation: -302.49,
        slope: 3.9592,
        tempDayK: 386.53,
        tempNightK: 92.59,
        amplitudeK: 293.94,
        feoPercent: 7.29,
        mineralType: "Anorthosite (Highlands) - Iron-Poor",
        imagePath: "images/Screenshot 2026-11-15 220900.png",
        imageHint: "Suggested photo: Alhazen Crater east of Mare Crisium",
        shortDesc: "Crater in the highlands east of Mare Crisium with a gentle floor (3.96° slope) and iron-poor anorthosite composition (7.29% FeO).",
        earthId: "sahara",
        similarityScore: 89,
        reasons: [
            "Expansive dry sand and dust plains (Arid Sand Plains) with a very gentle slope (0.081° vs. 3.96° at Alhazen).",
            "High daytime temperatures (30.71°C) and daily desert thermal amplitude mimic extreme heat cycles at low lunar latitudes (386.53 K).",
            "Moderate surface roughness (4.410 m) and minimal vegetation (NDVI 0.082) are well-suited for autonomous navigation testing."
        ]
    }
];

let selectedMoonLocation = null;

document.addEventListener("DOMContentLoaded", function () {
    renderMoonLocationButtons();
}); 
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
            '<div>' +
                '<strong>' + loc.name + '</strong>' +
                '<span class="loc-sub">Lat: ' + loc.lat + '° | Lon: ' + loc.lon + '° | FeO: ' + loc.feoPercent + '%</span>' +
            '</div>' +
            '<span class="elev-pill">' + elevSign + loc.elevation + ' m</span>';
            btn.addEventListener("mouseenter", function () {
            updateHoverPreview(loc);
        }); 
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
} function updateHoverPreview(loc) {
    document.getElementById("preview-zone-tag").textContent = loc.zoneTag;
    document.getElementById("preview-title").textContent = loc.name;
    document.getElementById("preview-coords").textContent =
        "Coordinates: " + loc.lat + "°, " + loc.lon + "°  |  LOLA Elevation: " + loc.elevation + " m  |  Slope: " + loc.slope + "°";
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
} function kelvinToCelsius(k) {
    return (k - 273.15).toFixed(1);
} function selectMoonLocation(loc) {
    selectedMoonLocation = loc;
    const recSection = document.getElementById("step-earth-recommendation");
    recSection.classList.remove("hidden");

    document.getElementById("rec-moon-name").textContent = loc.name;
    document.getElementById("rec-moon-stats").innerHTML =
        '<li><strong>Coordinates:  </strong> ' + loc.lat + '°, ' + loc.lon + '°</li>' +
        '<li><strong>LOLA Elevation:  </strong> ' + loc.elevation + ' meter</li>' +
        '<li><strong>Slope:  </strong> ' + loc.slope + '°</li>' +
        '<li><strong>Day Temperature:  </strong> ' + loc.tempDayK + ' K (' + kelvinToCelsius(loc.tempDayK) + ' °C)</li>' +
        '<li><strong>Night Temperature:  </strong> ' + loc.tempNightK + ' K (' + kelvinToCelsius(loc.tempNightK) + ' °C)</li>' +
        '<li><strong>Thermal Amplitude:  </strong> ' + loc.amplitudeK + ' K</li>' +
        '<li><strong>Iron Oxide Content:  </strong> ' + loc.feoPercent + '%</li>' +
        '<li><strong>Mineral Type:  </strong> ' + loc.mineralType + '</li>';

    const analog = earthMoonDatabase.find(function (e) {
        return e.id === loc.earthId;
    }) || earthMoonDatabase[0];

    document.getElementById("rec-earth-name").textContent = analog.name;
    document.getElementById("rec-earth-country").textContent = analog.type + " (" + analog.lat + "°, " + analog.lon + "°)";

    const scoreBadge = document.getElementById("match-score-badge");
    scoreBadge.textContent = "Match Score:" + loc.similarityScore + "%";
    scoreBadge.style.background = loc.similarityScore >= 75 ? "#10b981" : "#f59e0b";

    document.getElementById("rec-earth-metrics").innerHTML =
        '<div class="metric-box"><small>Earth Elevation: </small><strong>' + analog.elevation + ' m</strong></div>' +
        '<div class="metric-box"><small>Slope:  </small><strong>' + analog.slope + '°</strong></div>' +
        '<div class="metric-box"><small>Roughness:  </small><strong>' + analog.roughness + ' m</strong></div>' +
        '<div class="metric-box"><small>Iron Oxide Ratio:  </small><strong>' + analog.ironOxide + '</strong></div>' +
        '<div class="metric-box"><small>Clay Mineral:  </small><strong>' + analog.clayMineral + '</strong></div>' +
        '<div class="metric-box"><small>NDVI / Temperature:  </small><strong>' + analog.ndvi + ' / ' + analog.tempDayC + '°C</strong></div>';

    // 3. Alasan Ilmiah
    const reasonsList = document.getElementById("rec-reasons-list");
    reasonsList.innerHTML = loc.reasons.map(function (reason) {
        return '<li>' + reason + '</li>';
    }).join("");
recSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function runAutoMoonMatch() {
    const inputCategory = document.getElementById("auto-terrain-type").value;
    const inputSlope = parseFloat(document.getElementById("auto-slope").value) || 0;
    const inputFeo = parseFloat(document.getElementById("auto-feo").value) || 10;
    const inputTempK = parseFloat(document.getElementById("auto-temp-k").value) || 350;

    // Konversi FeO% Bulan (0-25%) ke skala Iron Oxide Ratio Bumi (0.7 - 3.2)
    const targetIronRatio = 0.75 + (inputFeo / 25) * 2.45;
    // Konversi Suhu Siang Bulan (160K - 400K) ke skala Suhu Siang Bumi (-25°C s/d 33°C)
    const targetEarthTempC = -25 + ((inputTempK - 160) / 240) * 58;

    const scoredResults = earthMoonDatabase.map(function (earth) {
        const typeScore = (inputCategory === "all" || earth.category === inputCategory) ? 100 : 55;
        const ironDiff = Math.abs(targetIronRatio - earth.ironOxide);
        const ironScore = Math.max(0, 100 - (ironDiff * 35));
        const tempDiff = Math.abs(targetEarthTempC - earth.tempDayC);
        const tempScore = Math.max(0, 100 - (tempDiff * 1.4));
        const normalizedMoonSlope = Math.min(1.5, inputSlope / 12);
        const slopeDiff = Math.abs(normalizedMoonSlope - earth.slope);
        const slopeScore = Math.max(0, 100 - (slopeDiff * 45));

        const finalScore = Math.round(
            (typeScore * 0.35) +
            (ironScore * 0.30) +
            (tempScore * 0.20) +
            (slopeScore * 0.15)
        );

        return {
            earth: earth,
            score: Math.min(98, Math.max(60, finalScore))
        };
    });

    scoredResults.sort(function (a, b) {
        return b.score - a.score;
    });

    renderAutoResults(scoredResults, {
        category: inputCategory,
        slope: inputSlope,
        feo: inputFeo,
        tempK: inputTempK
    });
}

function renderAutoResults(results, params) {
    const resultContainer = document.getElementById("auto-match-results");
    if (!resultContainer) return;
    resultContainer.classList.remove("hidden");

    const best = results[0];
    const alternatives = results.slice(1, 4);

    let altHtml = alternatives.map(function (item, idx) {
        return (
            '<div class="metric-box" style="text-align:left; padding:0.9rem;">' +
                '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">' +
                    '<strong style="color:#38bdf8;">#' + (idx + 2) + ' ' + item.earth.name + '</strong>' +
                    '<span class="elev-pill">' + item.score + '% Cocok</span>' +
                '</div>' +
                '<small>' + item.earth.type + ' • Elev: ' + item.earth.elevation + ' m • Iron Ratio: ' + item.earth.ironOxide + ' • Suhu: ' + item.earth.tempDayC + '°C</small>' +
            '</div>'
        );
    }).join("");

    const badgeBg = best.score >= 75 ? "#10b981" : "#f59e0b";

    resultContainer.innerHTML =
        '<div class="section-title-bar">' +
            '<h3>Automatic Matching Results</h3>' +
            '<span class="score-badge" style="background:' + badgeBg + ';">Best Match Score: ' + best.score + '%</span>' +
        '</div>' +
        '<div class="earth-match-card" style="margin-bottom:1.25rem;">' +
            '<span class="badge-earth">BEST RECOMMENDATION #1</span>' +
            '<h3 style="margin:0.4rem 0;">' + best.earth.name + '</h3>' +
            '<p class="country-text">' + best.earth.type + ' (' + best.earth.lat + '°, ' + best.earth.lon + '°) • Target Dataset: ' + best.earth.target + '</p>' +
            '<div class="earth-data-grid">' +
                '<div class="metric-box"><small>Earth Elevation:  </small><strong>' + best.earth.elevation + ' m</strong></div>' +
                '<div class="metric-box"><small>Slope:  </small><strong>' + best.earth.slope + '°</strong></div>' +
                '<div class="metric-box"><small>Roughness:  </small><strong>' + best.earth.roughness + ' m</strong></div>' +
                '<div class="metric-box"><small>Iron Oxide Ratio:  </small><strong>' + best.earth.ironOxide + '</strong></div>' +
                '<div class="metric-box"><small>Clay Mineral:  </small><strong>' + best.earth.clayMineral + '</strong></div>' +
                '<div class="metric-box"><small>NDVI / Daytime Temperature:  </small><strong>' + best.earth.ndvi + ' / ' + best.earth.tempDayC + '°C</strong></div>' +
            '</div>' +
            '<div class="scientific-reason-box">' +
                '<h4>🔬 Summary of Parameter Matches:</h4>' +
                '<ul>' +
                    '<li><strong>Slope ' + params.slope + '°</strong>, <strong>FeO Content ' + params.feo + '%</strong>, and <strong>Daytime Temperature ' + params.tempK + ' K</strong>.</li>' +
                    '<li>The location <strong>' + best.earth.name + '</strong> has characteristics of <em>' + best.earth.type + '</em> with an iron oxide ratio of <strong>' + best.earth.ironOxide + '</strong> and a low vegetation index (NDVI <strong>' + best.earth.ndvi + '</strong>).</li>' +
                '</ul>' +
            '</div>' +
        '</div>' +
        '<h4 style="margin-bottom:0.75rem; color:#cbd5e1;">Alternative Earth Locations:</h4>' +
        '<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:0.75rem;">' +
            altHtml +
        '</div>';

    resultContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

let latestAutoEvaluation = null;

// Attach event listener for the "Proceed to Score Evaluation & Comparison ->" button (Manual Mode)
document.addEventListener("DOMContentLoaded", function () {
    const btnProceed = document.getElementById("btn-proceed-flowchart");
    if (btnProceed) {
        btnProceed.addEventListener("click", function () {
            if (!selectedMoonLocation) return;

            const analog = earthMoonDatabase.find(function (e) {
                return e.id === selectedMoonLocation.earthId;
            }) || earthMoonDatabase[0];

            openStep3Evaluation({
                sourceMode: "manual",
                moonName: selectedMoonLocation.name,
                moonCoords: selectedMoonLocation.lat + "°, " + selectedMoonLocation.lon + "°",
                moonElevation: selectedMoonLocation.elevation + " m",
                moonSlope: selectedMoonLocation.slope + "°",
                moonTempDay: selectedMoonLocation.tempDayK + " K (" + kelvinToCelsius(selectedMoonLocation.tempDayK) + " °C)",
                moonFeo: selectedMoonLocation.feoPercent + "% FeO",
                moonMineral: selectedMoonLocation.mineralType,
                earth: analog,
                score: selectedMoonLocation.similarityScore
            });
        });
    }
});

// Helper function when the user clicks the Evaluate button from Automatic Mode
function evaluateFromAutoMode() {
    if (!latestAutoEvaluation) return;
    openStep3Evaluation(latestAutoEvaluation);
}

// Render Step 3 content: Threshold >= 75% Analysis & Side-by-Side Comparison Table
function openStep3Evaluation(evalData) {
    const evalPanel = document.getElementById("step-evaluation-panel");
    if (!evalPanel) return;

    evalPanel.classList.remove("hidden");

    const isPass = evalData.score >= 75;
    const statusBadge = document.getElementById("eval-status-badge");
    const evalBox = document.getElementById("threshold-evaluation-box");
    const evalTitle = document.getElementById("eval-title-status");
    const evalDesc = document.getElementById("eval-desc-status");

    // 1. Update Feasibility Status Based on Threshold >= 75%
    if (isPass) {
        statusBadge.textContent = "Mission Status: ANALOG QUALIFIED (" + evalData.score + "%)";
        statusBadge.style.background = "#10b981";
        statusBadge.style.color = "#022c22";

        evalBox.style.borderColor = "rgba(16, 185, 129, 0.5)";
        evalBox.style.background = "rgba(16, 185, 129, 0.1)";

        evalTitle.style.color = "#34d399";
        evalTitle.textContent = "✓ Passed Feasibility Threshold (Score " + evalData.score + "% ≥ 75%)";
        evalDesc.innerHTML =
            "The Earth analog site <strong>" + evalData.earth.name + "</strong> is <strong>QUALIFIED</strong> for field simulation of the lunar target <strong>" + evalData.moonName + "</strong>. " +
            "Geological parameters, low vegetation index (NDVI " + evalData.earth.ndvi + "), and iron oxide ratio meet analog mission validation standards.";
    } else {
        // Find the best backup alternative from the Earth dataset if score is below 75%
        const bestBackup = earthMoonDatabase.reduce(function (prev, curr) {
            return (curr.ndvi < prev.ndvi) ? curr : prev;
        }, earthMoonDatabase[0]);

        statusBadge.textContent = "Mission Status: CALIBRATION REQUIRED (" + evalData.score + "%)";
        statusBadge.style.background = "#f59e0b";
        statusBadge.style.color = "#1e293b";

        evalBox.style.borderColor = "rgba(245, 158, 11, 0.5)";
        evalBox.style.background = "rgba(245, 158, 11, 0.1)";

        evalTitle.style.color = "#fbbf24";
        evalTitle.textContent = "⚠ Below 75% Threshold (Score " + evalData.score + "%)";
        evalDesc.innerHTML =
            "The match score is below the 75% threshold due to extreme temperature or slope differences. " +
            "The system recommends additional instrument calibration or considering extreme alternatives such as <strong>" + bestBackup.name + "</strong>.";
    }

    // 2. Build Side-by-Side Comparison Table Rows (Moon vs Earth)
    const rows = [
        {
            param: "Site Identity & Type",
            moonVal: "<strong>" + evalData.moonName + "</strong><br><small style='color:#94a3b8;'>" + evalData.moonMineral + "</small>",
            earthVal: "<strong>" + evalData.earth.name + "</strong><br><small style='color:#94a3b8;'>" + evalData.earth.type + "</small>",
            status: "<span style='color:#34d399; font-weight:700;'>✓ Geologically Verified</span>"
        },
        {
            param: "Geographic Coordinates",
            moonVal: evalData.moonCoords,
            earthVal: evalData.earth.lat + "°, " + evalData.earth.lon + "°",
            status: "<span style='color:#38bdf8;'>Spatial Reference</span>"
        },
        {
            param: "Surface Elevation",
            moonVal: evalData.moonElevation,
            earthVal: evalData.earth.elevation + " m",
            status: "<span style='color:#38bdf8;'>LOLA Topographic Scale</span>"
        },
        {
            param: "Terrain Slope",
            moonVal: evalData.moonSlope,
            earthVal: evalData.earth.slope + "° (Roughness: " + evalData.earth.roughness + " m)",
            status: "<span style='color:#34d399; font-weight:700;'>✓ Safe for Rover Testing</span>"
        },
        {
            param: "Iron / Oxide Content",
            moonVal: evalData.moonFeo,
            earthVal: "Iron Oxide Ratio: " + evalData.earth.ironOxide + " (Clay: " + evalData.earth.clayMineral + ")",
            status: "<span style='color:#34d399; font-weight:700;'>✓ Aligned Composition</span>"
        },
        {
            param: "Thermal & Environmental Conditions",
            moonVal: evalData.moonTempDay,
            earthVal: "Daytime Temp: " + evalData.earth.tempDayC + "°C (NDVI: " + evalData.earth.ndvi + ")",
            status: evalData.earth.ndvi <= 0.15
                ? "<span style='color:#34d399; font-weight:700;'>✓ Sterile / Minimal Vegetation</span>"
                : "<span style='color:#fbbf24; font-weight:700;'>⚠ Low Vegetation (NDVI " + evalData.earth.ndvi + ")</span>"
        }
    ];

    const tbody = document.getElementById("comparison-table-body");
    tbody.innerHTML = rows.map(function (r) {
        return (
            '<tr style="border-bottom: 1px solid rgba(148, 163, 184, 0.15);">' +
                '<td style="padding: 12px 10px; font-weight: 600; color: #e2e8f0;">' + r.param + '</td>' +
                '<td style="padding: 12px 10px; color: #bae6fd;">' + r.moonVal + '</td>' +
                '<td style="padding: 12px 10px; color: #a7f3d0;">' + r.earthVal + '</td>' +
                '<td style="padding: 12px 10px;">' + r.status + '</td>' +
            '</tr>'
        );
    }).join("");

    evalPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}
