// ===== KODE YANG SUDAH ADA =====
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

// TMS Data (tetap sama)
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

// ===== KODE BARU YANG DITAMBAHKAN =====

// Variabel global untuk menyimpan kategori
window.currentLocationCategory = null;
window.currentSdmCategory = null;
window.currentMaterialCategory = null;

// Fungsi untuk menghitung skor berdasarkan pilihan radio button
function calculateScore(criteriaPrefix, count) {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    const selected = document.querySelector(`input[name="${criteriaPrefix}-${i}"]:checked`);
    if (selected) {
      total += parseInt(selected.value);
    }
  }
  return total;
}

// Fungsi untuk menentukan kategori berdasarkan skor
function determineCategory(score, maxScore) {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 80) return "tinggi";
  if (percentage >= 60) return "sedang";
  return "rendah";
}

// Fungsi untuk memperbarui tampilan skor dan kategori
function updateScoreDisplay(scoreElement, categoryElement, score, maxScore) {
  scoreElement.textContent = score;
  const category = determineCategory(score, maxScore);
  let categoryText = "";
  
  if (category === "tinggi") {
    categoryText = "Tinggi";
    categoryElement.style.color = "#28a745";
  } else if (category === "sedang") {
    categoryText = "Sedang";
    categoryElement.style.color = "#ffc107";
  } else {
    categoryText = "Rendah";
    categoryElement.style.color = "#dc3545";
  }
  
  categoryElement.textContent = categoryText;
  return category;
}

// Event listener untuk radio buttons
function setupRadioListeners() {
  // Untuk lokasi (6 kriteria)
  for (let i = 1; i <= 6; i++) {
    const radios = document.querySelectorAll(`input[name="location-${i}"]`);
    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        const score = calculateScore("location", 6);
        const category = updateScoreDisplay(
          document.getElementById("location-score"),
          document.getElementById("location-category"),
          score, 30
        );
        window.currentLocationCategory = category;
      });
    });
  }
  
  // Untuk SDM (6 kriteria)
  for (let i = 1; i <= 6; i++) {
    const radios = document.querySelectorAll(`input[name="sdm-${i}"]`);
    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        const score = calculateScore("sdm", 6);
        const category = updateScoreDisplay(
          document.getElementById("sdm-score"),
          document.getElementById("sdm-category"),
          score, 30
        );
        window.currentSdmCategory = category;
      });
    });
  }
  
  // Untuk Material (6 kriteria)
  for (let i = 1; i <= 6; i++) {
    const radios = document.querySelectorAll(`input[name="material-${i}"]`);
    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        const score = calculateScore("material", 6);
        const category = updateScoreDisplay(
          document.getElementById("material-score"),
          document.getElementById("material-category"),
          score, 30
        );
        window.currentMaterialCategory = category;
      });
    });
  }
}

// Modifikasi fungsi assessTMS
function assessTMS() {
  // Pastikan semua sudah dinilai
  if (!window.currentLocationCategory || !window.currentSdmCategory || !window.currentMaterialCategory) {
    alert("Mohon lengkapi semua penilaian sebelum mendapatkan rekomendasi!");
    return;
  }

  const key = `${window.currentSdmCategory}-${window.currentLocationCategory}-${window.currentMaterialCategory}`;
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
            <strong style="color: #667eea; font-size: 0.8rem;">👷 Tenaga Kerja:</strong><br>
            <span style="font-size: 0.85rem;">${recommendation.sdm}</span>
          </div>
          <div style="background: white; padding: 10px; border-radius: 8px; border-left: 3px solid #667eea;">
            <strong style="color: #667eea; font-size: 0.8rem;">🚛 Transportasi:</strong><br>
            <span style="font-size: 0.85rem;">${recommendation.transport}</span>
          </div>
        </div>
      </div>
      
      <div class="card">
        <h3>📊 Hasil Penilaian Anda</h3>
        <div class="responsive-grid">
          <div style="background: white; padding: 10px; border-radius: 8px; border-left: 3px solid #667eea;">
            <strong style="color: #667eea; font-size: 0.8rem;">📍 Lokasi:</strong><br>
            <span style="font-size: 0.85rem;">${window.currentLocationCategory.toUpperCase()}</span>
          </div>
          <div style="background: white; padding: 10px; border-radius: 8px; border-left: 3px solid #667eea;">
            <strong style="color: #667eea; font-size: 0.8rem;">👷 SDM:</strong><br>
            <span style="font-size: 0.85rem;">${window.currentSdmCategory.toUpperCase()}</span>
          </div>
          <div style="background: white; padding: 10px; border-radius: 8px; border-left: 3px solid #667eea;">
            <strong style="color: #667eea; font-size: 0.8rem;">🧱 Material:</strong><br>
            <span style="font-size: 0.85rem;">${window.currentMaterialCategory.toUpperCase()}</span>
          </div>
        </div>
      </div>
    `;
  } else {
    resultHtml = `
      <div class="result-card">
        <h3>❌ Tidak Ada Rekomendasi TMS</h3>
        <p>Berdasarkan kondisi yang Anda input, belum tersedia rekomendasi TMS yang sesuai.</p>
        <p>Silakan hubungi administrator untuk konsultasi lebih lanjut.</p>
      </div>
    `;
  }

  document.getElementById("assessment-result").innerHTML = resultHtml;
  document.getElementById("assessment-result").style.display = "block";
  
  // Scroll ke hasil
  document.getElementById("assessment-result").scrollIntoView({ behavior: "smooth" });
}

// ===== KODE YANG SUDAH ADA (lanjutan) =====

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
  
  // Panggil setup radio listeners
  setupRadioListeners();
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

// lainnya form
document.addEventListener('DOMContentLoaded', function () {
  // Mengaktifkan input "Lainnya" ketika checkbox lainnya dipilih
  const lainnyaCheckbox = document.getElementById('lainnya');
  const lainnyaInput = document.getElementById('lainnya_teks');

  lainnyaCheckbox.addEventListener('change', function () {
    lainnyaInput.disabled = !this.checked;
    if (this.checked) {
      lainnyaInput.focus();
    }
  });
});
