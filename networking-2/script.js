function toggleDetail(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}

function openPopup(tool) {
  const popup = document.getElementById("popup");
  const img = document.getElementById("popup-img");
  const text = document.getElementById("popup-text");

  if (tool === "router") {
    img.src = "https://swalayankomputer.com/wp-content/uploads/2024/03/Pengertian-Router-Wifi-Fungsi-dan-Cara-Kerjanya-blibli.com_.jpg";
    text.textContent = "Router adalah perangkat yang meneruskan data antar jaringan dan memilih jalur terbaik.";
  } else if (tool === "switch") {
    img.src = "https://s.alicdn.com/@sc04/kf/Hda72c20fe24e4c12bb8704a2b83ddcc3e.jpg_720x720q50.jpg";
    text.textContent = "Switch Layer 3 dapat melakukan routing dalam jaringan lokal.";
  } else if (tool === "pc") {
    img.src = "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//106/MTA-49799113/intel_paket_1_set_pc_komputer_office_sekolah_intel_i5_full01_uw0996bv.jpg";
    text.textContent = "PC dapat dikonfigurasi sebagai router menggunakan software tertentu seperti Mikrotik atau Linux.";
  }

  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
