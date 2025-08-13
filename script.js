function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll(".content-section");
    sections.forEach((section) => {
        section.classList.remove("active");
    });

    // Remove active class from all nav buttons
    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    // Show selected section
    document.getElementById(sectionId).classList.add("active");

    // Add active class to clicked button
    event.target.classList.add("active");
}

// TMS Data
const tmsData = {
    "tinggi-tinggi-tinggi": {
        id: "TMS-01",
        name: "High-Tech Modular Unit",
        size: "24 m² (6x4 meter)",
        material: "Rangka baja ringan, panel sandwich, atap spandek",
        technology: "Rakit cepat dengan bor listrik, 4-5 teknisi",
        sdm: "Tenaga ahli bangunan ringan dengan SOP ketat",
        transport: "Truk logistik besar, sistem flat-pack",
        description:
            "Solusi high-tech untuk kondisi ideal dengan SDM terampil, lokasi mudah diakses, dan material berlimpah.",
    },
    "tinggi-tinggi-sedang": {
        id: "TMS-02",
        name: "Hybrid Local-Industrial",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: "Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Kombinasi teknologi modern dan material lokal untuk efisiensi optimal.",
    },
    "tinggi-tinggi-rendah": {
        id: "TMS-03",
        name: "Lightweight Import-Local Mix",
        size: "9 m² (3x3 meter)",
        material: "Rangka aluminium, terpal UV-resistant, alas modular",
        technology: "Buka-lipat, dirakit 2-3 orang tanpa alat berat",
        sdm: "SDM semi-terampil atau relawan terlatih",
        transport: "Dibawa tim kecil, muat dalam mobil pickup",
        description:
            "Solusi ringan dan portable untuk area dengan material terbatas.",
    },
    "tinggi-sedang-tinggi": {
        id: "TMS-04",
        name: "Eco-Friendly Expert Build",
        size: "12 m² (4x3 meter)",
        material: "Bambu, papan kayu lokal, atap ijuk atau spandek",
        technology: "Dirakit manual oleh 4 orang dengan alat tukang dasar",
        sdm: "Warga lokal dengan pelatihan singkat",
        transport: "Material lokal, selebihnya diangkut motor roda tiga",
        description:
            "Solusi ramah lingkungan dengan memanfaatkan material dan SDM lokal.",
    },
    "tinggi-sedang-sedang": {
        id: "TMS-05",
        name: " Balanced Eco Modular",
        size: "12 m² (4x3 meter)",
        material: "Bambu, papan kayu lokal, atap ijuk atau spandek",
        technology: "Dirakit manual oleh 4 orang dengan alat tukang dasar",
        sdm: "Warga lokal dengan pelatihan singkat",
        transport: "Material lokal, selebihnya diangkut motor roda tiga",
        description:
            "Unit seimbang yang mengoptimalkan SDM ahli dengan material dan transportasi sedang, cocok untuk daerah semi-urban.",
    },
    "tinggi-sedang-rendah": {
        id: "TMS-06",
        name: " Compact Transportable Unit",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Unit kompak yang memanfaatkan keahlian tinggi untuk mengatasi keterbatasan material dan akses transportasi.",
    },
    "tinggi-rendah-tinggi": {
        id: "TMS-07",
        name: " Rugged Terrain Shelter",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Shelter tahan banting untuk medan sulit dengan SDM ahli yang dapat mengoptimalkan material terbatas.",
    },
    "tinggi-rendah-sedang": {
        id: "TMS-08",
        name: " Remote Smart Shelter",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Shelter cerdas untuk area terpencil yang mengandalkan keahlian tinggi dalam kondisi material dan akses terbatas.",
    },
    "tinggi-rendah-sedang": {
        id: "TMS-09",
        name: " Low-Material Tech Shelter",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Solusi teknologi tinggi dengan material minimal, mengandalkan inovasi dan keahlian untuk area sangat terpencil.",
    },
    "sedang-tinggi-tinggi": {
        id: "TMS-10",
        name: "Community Build Eco-Hut",
        size: "12 m² (4x3 meter)",
        material: "Bambu, papan kayu lokal, atap ijuk atau spandek",
        technology: "Dirakit manual oleh 4 orang dengan alat tukang dasar",
        sdm: "Warga lokal dengan pelatihan singkat",
        transport: "Material lokal, selebihnya diangkut motor roda tiga",
        description:
            "Pembangunan gotong royong dengan material lokal untuk SDM sedang.",
    },
    "sedang-tinggi-sedang": {
        id: "TMS-11",
        name: "Mixed Resource Shelter",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Shelter dengan perpaduan sumber daya yang seimbang, cocok untuk daerah dengan material cukup namun akses transportasi sedang.",
    },
    "sedang-tinggi-rendah": {
        id: "TMS-12",
        name: "Adaptive Lightweight Unit",
        size: "9 m² (3x3 meter)",
        material: "Rangka aluminium, terpal UV-resistant, alas modular",
        technology: "Buka-lipat, dirakit 2-3 orang tanpa alat berat",
        sdm: "SDM semi-terampil atau relawan terlatih",
        transport: "Dibawa tim kecil, muat dalam mobil pickup",
        description: "Unit adaptif yang mudah dirakit dengan SDM terbatas.",
    },
    "sedang-sedang-tinggi": {
        id: "TMS-13",
        name: "Terrain-Adapted Hut",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Pondok yang disesuaikan dengan kondisi medan untuk area dengan sumber daya seimbang namun akses transportasi baik.",
    },
    "sedang-sedang-sedang": {
        id: "TMS-14",
        name: " Balanced Rural Shelter",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Shelter pedesaan yang seimbang, solusi standar untuk kondisi menengah di semua aspek sumber daya.",
    },
    "sedang-sedang-rendah": {
        id: "TMS-15",
        name: " Simple Survival Shelter",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Shelter survival sederhana untuk area dengan akses transportasi terbatas namun SDM dan material cukup tersedia.",
    },
    "sedang-rendah-tinggi": {
        id: "TMS-16",
        name: "Steep Slope Bamboo Shelter",
        size: "12 m² (4x3 meter)",
        material: "Bambu, papan kayu lokal, atap ijuk atau spandek",
        technology: "Dirakit manual oleh 4 orang dengan alat tukang dasar",
        sdm: "Warga lokal dengan pelatihan singkat",
        transport: "Material lokal, selebihnya diangkut motor roda tiga",
        description:
        "Shelter bambu khusus untuk area berlereng dengan akses terbatas.",
    },
    "sedang-rendah-sedang": {
        id: "TMS-17",
        name: " Remote Area Shelter",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description: 
            "Shelter untuk area terpencil dengan sumber daya material dan transportasi terbatas namun SDM cukup kompeten.",
    },
    "sedang-rendah-rendah": {
        id: "TMS-18",
        name: "  Low-Input Emergency Tent",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Tenda darurat dengan input rendah untuk situasi krisis dengan SDM sedang namun material dan transportasi sangat terbatas.",
    },
    "rendah-tinggi-tinggi": {
        id: "TMS-19",
        name: "Basic Natural Material Hut",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: "Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
        "Shelter dasar dengan material alami untuk SDM terbatas.",
    },
    "rendah-tinggi-sedang": {
        id: "TMS-20",
        name: "  Minimalist Survival Shelter",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Shelter survival minimalis yang mengandalkan ketersediaan material dengan SDM dan transportasi terbatas.",
    },
    "rendah-tinggi-rendah": {
        id: "TMS-21",
        name: "  Emergency Tarps & Sticks",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Shelter darurat sederhana menggunakan terpal dan kayu/bambu tersedia, untuk kondisi SDM dan transportasi sangat terbatas.",
    },
    "rendah-sedang-tinggi": {
        id: "TMS-22",
        name: "   Hilly Area Grass Shelter",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Shelter sederhana untuk area berbukit menggunakan material lokal seperti rumput dan kayu dengan transportasi yang memadai.",
    },
    "rendah-sedang-sedang": {
        id: "TMS-23",
        name: "    Intermediate Survival Shed",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Gudang survival menengah untuk kondisi sumber daya terbatas dengan material dan transportasi yang cukup memadai.",
    },
    "rendah-sedang-rendah": {
        id: "TMS-24",
        name: "    Very Low-Resource Shelter",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "",
    },
    "rendah-rendah-tinggi": {
        id: "TMS-25",
        name: "    Remote Village Shelter",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "",
    },
    "rendah-rendah-sedang": {
        id: "TMS-26",
        name: "     Sparse Resource Hut",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: " Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Pondok dengan sumber daya langka, dibangun dengan material dan SDM minimal serta transportasi terbatas.",
    },
    "rendah-rendah-rendah": {
        id: "TMS-27",
        name: "Ultra-Low Input Shelter",
        size: "15 m² (5x3 meter)",
        material: "Kombinasi bambu, baja ringan, dan GRC",
        technology: "Prefabrikasi ringan, dirakit 3-4 orang",
        sdm: "Semi-terampil dengan panduan teknis",
        transport: "Dikirim dalam komponen modular via truk kecil",
        description:
            "Solusi darurat untuk kondisi sangat terbatas di semua aspek.",
    },
};

function assessTMS() {
    const location = document.getElementById("location-access").value;
    const sdm = document.getElementById("sdm-availability").value;
    const material = document.getElementById("material-availability").value;

    if (!location || !sdm || !material) {
        alert(
            "Mohon lengkapi semua pilihan sebelum mendapatkan rekomendasi!"
        );
        return;
    }

    const key = `${sdm}-${location}-${material}`;
    const recommendation = tmsData[key];

    let resultHtml = "";

    if (recommendation) {
        resultHtml = `
                    <div class="result-card">
                        <h3>🏆 Rekomendasi TMS</h3>
                        <div style="font-size: 1.1rem; margin: 10px 0;">
                            <strong>${recommendation.id}: ${recommendation.name}</strong>
                        </div>
                        <p style="margin-bottom: 15px; font-size: 0.9rem;">${recommendation.description}</p>
                    </div>
                    
                    <div class="card">
                        <h3>📋 Detail Spesifikasi</h3>
                        <div class="responsive-grid">
                            <div style="background: white; padding: 10px; border-radius: 8px; border-left: 3px solid #667eea;">
                                <strong style="color: #667eea; font-size: 0.8rem;">🏠 Ukuran Bangunan:</strong><br>
                                <span style="font-size: 0.85rem;">${recommendation.size}</span>
                            </div>
                            <div style="background: white; padding: 10px; border-radius: 8px; border-left: 3px solid #667eea;">
                                <strong style="color: #667eea; font-size: 0.8rem;">🧱 Material:</strong><br>
                                <span style="font-size: 0.85rem;">${recommendation.material}</span>
                            </div>
                            <div style="background: white; padding: 10px; border-radius: 8px; border-left: 3px solid #667eea;">
                                <strong style="color: #667eea; font-size: 0.8rem;">⚒️ Teknologi Perakitan:</strong><br>
                                <span style="font-size: 0.85rem;">${recommendation.technology}</span>
                            </div>
                            <div style="background: white; padding: 10px; border-radius: 8px; border-left: 3px solid #667eea;">
                                <strong style="color: #667eea; font-size: 0.8rem;">👷 Persiapan SDM:</strong><br>
                                <span style="font-size: 0.85rem;">${recommendation.sdm}</span>
                            </div>
                            <div style="background: white; padding: 10px; border-radius: 8px; border-left: 3px solid #667eea;">
                                <strong style="color: #667eea; font-size: 0.8rem;">🚛 Transportasi:</strong><br>
                                <span style="font-size: 0.85rem;">${recommendation.transport}</span>
                            </div>
                        </div>
                    </div>
                `;
    } else {
        // Default recommendation for other combinations
        resultHtml = `
                    <div class="result-card">
                        <h3>🏆 Rekomendasi TMS</h3>
                        <div style="font-size: 1.1rem; margin: 10px 0;">
                            <strong>TMS-14: Balanced Rural Shelter</strong>
                        </div>
                        <p style="margin-bottom: 15px; font-size: 0.9rem;">Solusi seimbang untuk kondisi lapangan dengan kombinasi faktor yang belum terdefinisi secara spesifik.</p>
                    </div>
                    
                    <div class="card">
                        <h3>📋 Detail Spesifikasi</h3>
                        <div class="responsive-grid">
                            <div style="background: white; padding: 10px; border-radius: 8px; border-left: 3px solid #667eea;">
                                <strong style="color: #667eea; font-size: 0.8rem;">🏠 Ukuran Bangunan:</strong><br>
                                <span style="font-size: 0.85rem;">15 m² (5x3 meter), bentuk standar modular</span>
                            </div>
                            <div style="background: white; padding: 10px; border-radius: 8px; border-left: 3px solid #667eea;">
                                <strong style="color: #667eea; font-size: 0.8rem;">🧱 Material:</strong><br>
                                <span style="font-size: 0.85rem;">Kombinasi bambu, baja ringan, dan GRC</span>
                            </div>
                            <div style="background: white; padding: 10px; border-radius: 8px; border-left: 3px solid #667eea;">
                                <strong style="color: #667eea; font-size: 0.8rem;">⚒️ Teknologi Perakitan:</strong><br>
                                <span style="font-size: 0.85rem;">Prefabrikasi ringan, dirakit 3-4 orang</span>
                            </div>
                            <div style="background: white; padding: 10px; border-radius: 8px; border-left: 3px solid #667eea;">
                                <strong style="color: #667eea; font-size: 0.8rem;">👷 Persiapan SDM:</strong><br>
                                <span style="font-size: 0.85rem;">Semi-terampil dengan panduan teknis</span>
                            </div>
                            <div style="background: white; padding: 10px; border-radius: 8px; border-left: 3px solid #667eea;">
                                <strong style="color: #667eea; font-size: 0.8rem;">🚛 Transportasi:</strong><br>
                                <span style="font-size: 0.85rem;">Dikirim dalam komponen modular via truk kecil</span>
                            </div>
                        </div>
                    </div>
                `;
    }

    document.getElementById("assessment-result").innerHTML = resultHtml;
    document.getElementById("assessment-result").style.display = "block";
    document
        .getElementById("assessment-result")
        .scrollIntoView({ behavior: "smooth", block: "start" });
}

// Touch-friendly navigation for mobile
document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach((button) => {
        button.addEventListener("touchstart", function () {
            this.style.transform = "translateY(-1px)";
        });
        button.addEventListener("touchend", function () {
            setTimeout(() => {
                this.style.transform = "";
            }, 150);
        });
    });
});

// Prevent zoom on double tap for iOS
let lastTouchEnd = 0;
document.addEventListener(
    "touchend",
    function (event) {
        const now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    },
    false
);
