// ===================================
// GHOSTING TRACKER LIKERT - REFACTOR (FINAL FIX)
// ===================================

// ===================================
// 1. DATA & KONFIGURASI
// ===================================

/**
 * Daftar pertanyaan untuk kuesioner.
 * Setiap pertanyaan memiliki ID, teks, dan kategori.
 */
const questions = [
    { id: 1, text: 'Pasangan saya sudah berhenti merespon chat selama berhari-hari atau bahkan berminggu-minggu.', cat: 'zombie' },
    { id: 2, text: 'Percakapan menjadi dangkal dan terasa membosankan, sehingga pesan-pesan yang dia kirimkan jadi singkat dan tidak lagi menunjukkan ketertarikan.', cat: 'zombie' },
    { id: 3, text: 'Orang tersebut tidak lagi menginisiasi topik pembicaraan yang menarik dan cenderung membutuhkan waktu yang lama untuk membalas pesan saya.', cat: 'zombie' },
    { id: 4, text: 'Setelah periode menghilang (tidak berkomunikasi), orang tersebut tiba-tiba menghubungi saya seolah-olah tidak pernah terjadi sesuatu.', cat: 'zombie' },
    { id: 5, text: 'Saya merasa percakapan menjadi dipaksakan dan dia cenderung membatasi komunikasi kami secara perlahan.', cat: 'zombie' },
    { id: 6, text: 'Saya merasa sering dijanjikan sesuatu namun tidak pernah terpenuhi/diwujudkan.', cat: 'curving' },
    { id: 7, text: 'Orang tersebut selalu menghindar ketika ditanyai kepastian atas hubungan kami.', cat: 'curving' },
    { id: 8, text: 'Saya merasa pasangan saya bersikap manis di awal, lalu menghilang tanpa alasan.', cat: 'curving' },
    { id: 9, text: 'Terkadang Saya merasa di perlakukan secara spesial di satu waktu, namun merasa tidak dianggap di waktu yang lain.', cat: 'curving' },
    { id: 10, text: 'Dia selalu menunjukkan sikap seolah-olah tidak tertarik lagi, namun saya merasa dia selalu memberikan perhatian/ harapan.', cat: 'curving' },
    { id: 11, text: 'Hubungan saya dan pasangan di rahasiakan (backstreet), sehingga tidak diketahui oleh orang lain.', cat: 'stashing' },
    { id: 12, text: 'Pasangan saya tidak ingin hubungan kami dipublikasi ke publik.', cat: 'stashing' },
    { id: 13, text: 'Dia tidak pernah memperkenalkan saya kepada teman-teman atau keluarganya.', cat: 'stashing' },
    { id: 14, text: 'Dia tidak pernah mengunggah foto atau cerita tentang hubungan atau kebersamaan kami di media sosial.', cat: 'stashing' },
    { id: 15, text: 'Dia tidak pernah mengajak saya ke acara-acara yang dihadiri oleh teman-temannya.', cat: 'stashing' },
    { id: 16, text: 'Orang tersebut hanya menghubungi saya pada waktu-waktu tertentu (misalnya saat larut malam atau saat dia merasa bosan) tanpa memperhatikan kenyamanan saya.', cat: 'haunting' },
    { id: 17, text: 'Saya merasa diri saya hanya menjadi "pilihan cadangan" atau opsi yang dihubungi ketika orang tersebut tidak memiliki rencana lain yang lebih baik.', cat: 'haunting' },
    { id: 18, text: 'Orang tersebut memutus komunikasi (tidak membalas pesan/telepon) untuk sementara waktu, namun kemudian menghubungi lagi seolah-olah tidak ada masalah.', cat: 'haunting' },
    { id: 19, text: 'Saya sering merasa seperti berada dalam hubungan yang tidak stabil karena dia selalu datang dan pergi.', cat: 'haunting' },
    { id: 20, text: 'Orang tersebut kerap memberikan harapan untuk melanjutkan hubungan atau pertemuan, tetapi tidak pernah merealisasikannya dengan sungguh-sungguh.', cat: 'haunting' },
    { id: 21, text: 'Saya merasa hanya dihubungi ketika dibutuhkan.', cat: 'benching' },
    { id: 22, text: 'Dia sering hilang kabar setelah saya mencoba memastikan status hubungan kami.', cat: 'benching' },
    { id: 23, text: 'Saya merasa pesan saya hanya dibalas ketika pasangan saya membutuhkan sesuatu.', cat: 'benching' },
    { id: 24, text: 'Saya merasa dia ragu-ragu untuk benar-benar berkomitmen pada saya.', cat: 'benching' },
    { id: 25, text: 'Pola komunikasi kami tidak konsisten; kadang sangat intens, tetapi terkadang hilang dan tidak dapat diprediksi.', cat: 'benching' },
];

/**
 * Informasi detail tentang setiap kategori hasil, termasuk judul, deskripsi, dan solusi.
 */
const categoryInfo = {

    // 3
    zombie: {
        title: 'Zombie-ing', emoji: '🧟',
        desc: 'Berdasarkan penelitian, tipe ini muncul dalam pola hilang—muncul lagi—hilang lagi. Read receipt tanpa balasan terasa mengganggu; seperti kata narasumber, chat-ku bukan novel yang hanya dibaca.',
        dampak: 'Siklus datang–harap–lenyap–kecewa membuat emosi naik turun tajam. Kamu jadi sering menebak-nebak, menunggu, dan akhirnya lelah hati. Notifikasi kecil bisa memicu harapan, tetapi kerap berakhir kecewa lagi. Fokus harian pun terpecah karena pikiran kembali ke percakapan yang arah dan konsistensinya tidak jelas.',
        solusi: [
            'Kirim satu pesan untuk minta kejelasan—cukup sekali—lalu tetapkan aturan pribadi yang tegas (misalnya, jika pola ini terulang 2–3 kali, komunikasi dihentikan).\n\
            Setelah itu, ikuti ritme yang lebih sehat: balas secukupnya, arsipkan chat bila perlu, dan pindahkan energi ke orang yang konsisten hadir.'
        ]
    },
    //2
    curving: {
        title: 'Curving', emoji: '📉',
        desc: 'Berdasarkan penelitian, tipe ini tampak dari hubungan yang pelan-pelan mendingin; ia masih aktif di media sosial, tetapi chat ke kamu semakin pendek, datar, dan tidak berkembang.',
        dampak: 'Rasanya seperti dilihat publik namun diabaikan secara personal. Perasaan sedih dan kecewa muncul, lalu berubah menjadi ragu terhadap diri sendiri. Melihat dia aktif di medsos sementara pesanmu diabaikan membuat hati makin tidak tenang dan mendorong kebiasaan membandingkan diri dengan orang lain.',
        solusi: [
            'Kurangi paparan pemicu overthinking: mute atau sembunyikan akunnya sementara agar pikiran tenang. \n\
            Ungkapkan perasaanmu singkat dan jelas, tanpa drama dan tanpa menekan. Setelah itu, kecilkan investasi emosi. Jika tidak ada perubahan, akhiri dengan sopan dan kembalikan energi ke hal-hal yang kamu kuasai—belajar, kerja, olahraga, dan berkumpul dengan orang yang responsnya nyata.'
        ]
    },
    //5
    stashing: {
        title: 'Stashing', emoji: '🙈',
        desc: 'Berdasarkan penelitian, tipe ini terasa seperti disembunyikan: kamu tidak dikenalkan ke lingkungannya, balasan singkat lalu senyap lama. Read receipt sering ditafsir sebagai pertanda ketidakcocokan, bukan niat menyakiti.',
        dampak: 'Di awal terasa sedih dan bingung karena status tidak jelas, tetapi banyak orang kemudian lebih cepat masuk fase menerima. Yang mengganjal biasanya soal visibilitas—merasa hubungan tidak setara karena tidak diakui. Jika dibiarkan, hal ini membuatmu ragu melangkah dan sulit merasa aman dalam relasi.',
        solusi: [
           'Sebutkan standar yang kamu butuhkan dengan tenang: hubungan yang diakui, komunikasi yang jelas, dan waktu yang wajar untuk perkenalan. \n\
           Tetapkan tenggat realistis; jika tidak terpenuhi, akhiri dengan kepala tegak. Jangan bernegosiasi dengan batas pentingmu—lebih baik kosong sementara daripada bertahan di ruang yang menyembunyikanmu.'
        ]
    },
    //4
    haunting: {
        title: 'Haunting', emoji: '👻',
        desc: 'Berdasarkan penelitian, tipe ini terjadi ketika orangnya menghilang dari chat, tetapi sesekali "muncul" lewat jejak digital—melihat story, memberi like, atau menyapa singkat—tanpa kelanjutan.',
        dampak: 'Sinyal kecil seperti ini membuatmu terus berharap dan sulit menutup cerita. Closure tertunda, proses move on menjadi lambat, dan rasa kendali atas diri menurun. Setiap tanda kehadiran kecil dari dia seperti membuka kembali luka lama, sehingga pemulihan sering terasa maju-mundur.',
        solusi: [
            'Buat rencana closure yang jelas. Jika perlu, kirim satu pesan penutup yang sopan lalu berhenti mengecek. Terapkan "kebersihan digital":\n\
            mute, sembunyikan, atau unfollow agar pemicu tidak terus muncul. Isi harimu dengan hal menenangkan dan terjadwal—bertemu teman, olahraga ringan, atau hobi—supaya pikiran punya jangkar selain menunggu sinyal yang tidak pasti.'
        ]
    },
    // 1
    benching: {
        title: 'Benching', emoji: '🪑',
        desc: 'Berdasarkan penelitian, tipe ghosting ini biasanya terasa seperti digantung: balasan makin lama, banyak janji "nanti" yang tidak terjadi, lalu komunikasi berhenti tanpa penjelasan. Meski tidak selalu di-read, jeda balasan yang panjang membuat jarak emosional terasa jelas.',
        dampak: 'Kondisi ini membuat kepala penuh tanda tanya. Orang cenderung menyalahkan diri sendiri "kurangku apa?" dan perlahan rasa percaya diri menurun. Menunggu balasan yang tak kunjung datang membuat pikiran sulit lepas dari ponsel, tidur tidak tenang, dan suasana hati mudah turun. Hubungan lain juga bisa ikut terdampak karena energi emosi terkuras untuk menunggu sesuatu yang tidak pasti.',
        solusi: [
            'Beri batas yang jelas:',
            'Sampaikan harapan sederhana (misalnya, jika tidak ada kabar dalam 1–2 hari, dianggap selesai), lalu patuhi batas itu. Jika pola menggantung berulang, tutup percakapan dengan tenang dan alihkan fokus ke aktivitas yang memulihkan—bertemu teman, hobi, atau rutinitas yang stabil\n\
            Ingatkan diri bahwa nilai dirimu tidak ditentukan oleh cepat lambatnya orang lain membalas pesan.'
        ]
    },
};

// ===================================
// 2. STATE VARIABEL
// ===================================

let current = 0; // Index pertanyaan yang sedang aktif
let answers = Array(questions.length).fill(null); // Array untuk menyimpan jawaban

// ===================================
// 3. DOM REFERENCES
// ===================================

// Menggunakan camelCase untuk nama variabel referensi DOM
const intro = document.getElementById('intro');
const quiz = document.getElementById('quiz');
const startBtn = document.getElementById('startBtn');
const qNum = document.getElementById('qNum');
const qText = document.getElementById('qText');
const options = document.getElementById('options');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('progress');
const resultArea = document.getElementById('resultArea');

// ===================================
// 4. LOGIKA UTAMA & FUNGSI
// ===================================

/**
 * Menampilkan pertanyaan saat ini (current).
 */
const renderQuestion = () => {
    const q = questions[current];

    // Update teks dan progress bar
    qNum.textContent = `Pertanyaan ${current + 1} / ${questions.length}`;
    qText.textContent = q.text;
    progress.style.width = `${Math.round(((current + 1) / questions.length) * 100)}%`; // Progress bar

    // Reset dan buat ulang opsi jawaban
    options.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
        const lbl = document.createElement('label');
        // Menggunakan input terpisah untuk event listener yang lebih bersih
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${q.id}`;
        input.value = i;
        
        // Memeriksa apakah opsi ini adalah jawaban yang tersimpan
        if (answers[current] === i) {
            input.checked = true;
        }

        // Event handler untuk menyimpan jawaban HANYA KETIKA DIPILIH
        // Perubahan di sini tidak langsung mempengaruhi tombol Next karena bersifat asynchronous
        // input.onchange = () => {
        //     answers[current] = i;
        // };

        lbl.appendChild(input);
        lbl.innerHTML += `<span>${i}</span>`; // Tambahkan span untuk tampilan nilai
        options.appendChild(lbl);
    }

    // Atur status tombol navigasi
    prevBtn.disabled = current === 0;
    nextBtn.textContent = current === questions.length - 1 ? 'Selesai' : 'Selanjutnya';


};

/**
 * Menghitung skor, menentukan kategori teratas, dan menampilkan hasil.
 */
const computeResult = () => {
    let skor = { zombie: 0, curving: 0, stashing: 0, haunting: 0, benching: 0 };
    
    // Hitung total skor per kategori
    answers.forEach((val, idx) => {
        if (val) {
            skor[questions[idx].cat] += parseInt(val);
        }
    });
    
    // Temukan kategori dengan skor tertinggi
    const highestCategory = Object.keys(skor).reduce((a, b) => skor[a] > skor[b] ? a : b);
    const info = categoryInfo[highestCategory];
    
    // Sembunyikan kuis, tampilkan hasil
    quiz.style.display = 'none';
    resultArea.style.display = 'block';

    // Buat tampilan hasil menggunakan template literal
    resultArea.innerHTML = `
        <h2>Hasil: ${info.emoji} ${info.title}</h2>
        <p>${info.desc}</p>

        <h3>Dampak pada Korban:</h3>
        <p>${info.dampak}</p>
        
        <h3>Solusi Menghadapi:</h3>
        <p>${info.solusi}</p>
        
        <h3>Detail Skor:</h3>
        <p>
            Zombie-ing: ${skor.zombie}<br>
            Curving: ${skor.curving}<br>
            Stashing: ${skor.stashing}<br>
            Haunting: ${skor.haunting}<br>
            Benching: ${skor.benching}
        </p>

       
        
    `;
};

// ===================================
// 5. PENANGAN EVENT (INIT)
// ===================================

// Tombol Mulai Test
startBtn.onclick = () => {
    intro.style.display = 'none';
    quiz.style.display = 'block';
    renderQuestion();
};

// Tombol Sebelumnya
prevBtn.onclick = () => {
    if (current > 0) {
        current--;
        renderQuestion();
    }
};

/**
 * Logika tombol Selanjutnya/Selesai yang lebih andal.
 * Memeriksa status radio button secara DOM langsung.
 */

nextBtn.onclick = () => {
    
    const selectedRadio = options.querySelector(`input[name="q${questions[current].id}"]:checked`);
    
   
    if (!selectedRadio) {
        showModernAlert('Pilih jawaban dulu!');
        return;
    }
    
    // 3. Simpan jawaban terbaru sebelum pindah
    answers[current] = parseInt(selectedRadio.value);

    // 4. Logika Navigasi
    if (current < questions.length - 1) {
        current++;
        renderQuestion();
    } else {
        // Jika sudah di pertanyaan terakhir, hitung hasil
        computeResult();
    }
};

// ===================================
// Modal Button Misc
// ===================================


// Fungsi untuk menampilkan modal kustom
const showModernAlert = (message, title = '⚠️ Peringatan') => {
    const modal = document.getElementById('modernAlert');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalMessage').textContent = message;
    modal.style.display = 'block';
}

// Fungsi untuk menyembunyikan modal kustom
const closeModernAlert = () => {
    const modal = document.getElementById('modernAlert');
    modal.style.display = 'none';
}


// Opsional: Tutup modal ketika pengguna mengklik di luar kotak modal
window.onclick = (event) => {
    const modal = document.getElementById('modernAlert');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}