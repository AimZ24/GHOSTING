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
    zombie: {
        title: 'Zombie-ing', emoji: '🧟',
        desc: 'Perilaku ini dilakukan ketika pelaku merasa chat mulai membosankan. Seperti; Chat yang mulai dibatasi tidak intens seperti awal perkenalan, topik obrolan menghilang dan hilangnya pembahasan, serta jarak antar mengirim dan membalas chat mulai terasa jauh; awalnya sehari tidak berbalas menjadi seminggu tidak berbalas dan terus berkelanjutan.',
        solusi: [
            'Jangan Terpancing: Jangan langsung membalas. Luangkan waktu untuk berpikir mengapa mereka kembali. Apakah Anda ingin melanjutkan hubungan yang berakhir tanpa kejelasan?',
            'Minta Penjelasan: Jika Anda memilih untuk merespons, tanyakan mengapa mereka menghilang sebelumnya. Jika mereka tidak memberikan alasan yang masuk akal atau meminta maaf, pertimbangkan untuk tidak melanjutkan percakapan.',
            'Lindungi Diri Anda: Sadari bahwa ada risiko mereka akan menghilang lagi. Ingatlah bagaimana perasaan Anda saat itu dan putuskan apakah Anda ingin mengambil risiko yang sama lagi. Orang yang pernah menghilang dari hidup Anda (ghosting) tiba-tiba kembali menghubungi Anda seolah tidak ada yang pernah terjadi. Mereka mungkin mengirim pesan singkat seperti “Apa kabar?” atau “Sudah lama tidak ngobrol.” Mereka kembali seperti “zombie” yang hidup kembali.'
        ]
    },
    curving: {
        title: 'Curving', emoji: '📉',
        desc: 'Dikatakan sebagai bentuk ghosting paling menyakitkan, dimana ghoster mencari korban hanya untuk menghilangkan bosan disaat luang. Tidak ada keseriusan dan selalu menghindar ketika ditanyai kepastian. Pelaku biasanya meninggalkan korban secara halus dengan bertindak bahwa mereka sudah tidak tertarik namun tetap meninggalkan harapan manis.',
        solusi: [
            'Perhatikan Tindakan, Bukan Kata-kata: Pahami bahwa tindakan lebih penting daripada janji kosong. Jika tindakan mereka tidak sejalan dengan perkataan, Anda mungkin sedang menjadi korban curving.',
            'Komunikasikan Perasaan Anda: Bicarakan bagaimana Anda merasa. Anda bisa mengatakan, "Saya merasa komunikasi kita berubah. Apakah ada yang salah?" Ini akan memaksa mereka untuk memberi jawaban yang jujur.',
            'Hentikan Keterlibatan Emosional: Jika mereka terus mengulangi pola ini, lepaskan keterikatan emosional. Beri mereka waktu dan ruang, dan lihat apakah mereka.'
        ]
    },
    stashing: {
        title: 'Stashing', emoji: '🙈',
        desc: 'Peristiwa dimana pasangan memiliki hubungan yang bersifat privasi. Dengan kata lain, hubungan ini tidak diketahui oleh public, tidak diperkenalkan dengan teman, kerabat, maupun keluarga. Sehingga, pelaku dapat seenaknya meninggalkan hubungan tanpa kejelasan karena merasa hubunganya belum pasti dan tidak diketahui publik. disembunyikan.',
        solusi: [
            'Tanyakan tentang Status Hubungan: Anda berhak mengetahui mengapa hubungan Anda harus dirahasiakan. Tanyakan dengan jelas, "Mengapa kita tidak pernah bertemu teman-temanmu?"',
            'Tentukan Batasan Waktu: Beri mereka waktu untuk memperkenalkan Anda kepada orang-orang terdekatnya. Jika tidak ada kemajuan, pertimbangkan apakah hubungan ini sepadan.',
            'Prioritaskan Diri Sendiri: Anda berhak memiliki hubungan yang terbuka dan dihormati. Jika mereka tidak ingin menunjukkan Anda kepada dunia mereka, mungkin mereka tidak menghargai Anda seperti yang Anda pikirkan.'
        ]
    },
    haunting: {
        title: 'Haunting', emoji: '👻',
        desc: 'Haunting merupakan kondisi dimana korban sering didatangi dan ditinggalkan sesuka hati dengan cara memutus dan menyambung komunikasi.',
        solusi: [
            'Blokir atau Hapus: Jika kehadirannya terus mengganggu Anda, opsi terbaik adalah menghapus atau memblokir akun media sosial mereka. Ini adalah cara paling efektif untuk mengakhiri siklus ini dan memberi Anda ruang untuk sembuh.',
            'Batasi Diri Anda: Anda bisa mencoba untuk tidak terlalu terobsesi dengan aktivitas mereka. Berhenti melihat profil mereka dan fokus pada hidup Anda sendiri.',
            'Tetapkan Batasan: Jika mereka mencoba kembali, Anda bisa menyampaikan dengan tegas bahwa Anda tidak tertarik untuk berkomunikasi lagi. Anda tidak harus memberi penjelasan, cukup sampaikan bahwa Anda sudah pindah.'
        ]
    },
    benching: {
        title: 'Benching', emoji: '🪑',
        desc: 'Situasi dimana seseorang menjalin kasih namun tidak berkomitmen dengan alasan tidak yakin atau ragu terhadap pasanganya tersebut. Hubungan dengan situasi ini tidak memiliki konsistensi yang baik, pelaku sering menghilang tanpa kabar, dan tidak ada kontak tetap diantara keduanya.',
        solusi: [
            'Minta Kepastian: Ini mungkin sulit, tetapi penting untuk menanyakan dengan jelas apa niat mereka. Jika mereka terus memberikan jawaban yang tidak jelas, anggap itu sebagai "tidak".',
            'Prioritaskan Diri Anda: Jangan biarkan mereka memanfaatkan waktu dan emosi Anda. Fokuslah pada orang yang menghargai dan memprioritaskan Anda.',
            'Hentikan Komunikasi: Jika Anda tidak mendapat komitmen yang jelas, tarik diri dari hubungan tersebut. Hentikan kontak untuk menunjukkan bahwa Anda tidak bisa diperlakukan sebagai pilihan cadangan.'
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
        
        <h3>Solusi Menghadapi:</h3>
        <ul>${info.solusi.map(s => `<li>${s}</li>`).join('')}</ul>
        
        <h3>Detail Skor:</h3>
        <p>
            Zombie-ing: ${skor.zombie}<br>
            Curving: ${skor.curving}<br>
            Stashing: ${skor.stashing}<br>
            Haunting: ${skor.haunting}<br>
            Benching: ${skor.benching}
        </p>
        <button class="btn primary" onclick="location.reload()">Coba Lagi</button>
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
    // 1. Dapatkan radio input yang tercentang untuk pertanyaan saat ini
    const selectedRadio = options.querySelector(`input[name="q${questions[current].id}"]:checked`);
    
    // 2. Validasi: Jika tidak ada radio yang terpilih, tampilkan peringatan
    if (!selectedRadio) {
        alert('Pilih jawaban dulu!');
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