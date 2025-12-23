function executeInjection() {
    // Hapus semua riwayat browsing
    if (window.history) {
        window.history.replaceState(null, null, "about:blank");
    }

    // Force redirect ke halaman kosong
    window.location.href = "about:blank";

    // Ganti User-Agent Chrome biar keliatan "AnonAds"
    Object.defineProperty(navigator, 'userAgent', {
        value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/AnonAds Safari/537.36",
        configurable: false,
        writable: false
    });

    // Blokir akses ke situs judi & porno
    const blockedKeywords = ["judi", "porn", "slot", "bokep", "casino"];
    setInterval(() => {
        if (blockedKeywords.some(keyword => window.location.href.includes(keyword))) {
            window.location.href = "about:blank";
        }
    }, 100);

    // Hancurin fungsi pencarian judi di Chrome
    const originalSearch = window.chrome.search;
    window.chrome.search = function(query) {
        if (blockedKeywords.some(keyword => query.includes(keyword))) {
            return null; // Pencarian judi langsung di-TERBANGIN
        }
        return originalSearch(query);
    };

    // Auto-trigger popup judi palsu (biar korban tambah stress)
    setTimeout(() => {
        window.open("about:blank", "_blank", "width=500,height=500");
    }, 3000);
               }
