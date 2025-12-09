// =======================================================
// KONFIGURASI GLOBAL & DATA LOWONGAN
// =======================================================

// Pastikan nomor ini sesuai dengan nomor WhatsApp Admin Anda
const LOKER_WA_NUMBER = "6281385285889"; 
const CONTACT_WA_NUMBER = "6281385285889"; 
let currentLanguage = localStorage.getItem('language') || 'id'; // Ambil bahasa dari storage

const jobData = [
    {
        id: 5,
        position: "Kasir",
        company: "PT.Cinema Publik",
        location: "Jakarta",
        type: "Full-Time",
        level: "Entry Level",
        salary: "Rp 4.500.000 - 6.000.000",
        description: "Melayani pelanggan dengan ramah dan sopan saat melakukan transaksi pembayaran.\nMemproses transaksi tunai dan non-tunai.\nMenyusun dan menyajikan laporan penjualan harian.\nMenangani keluhan pelanggan dan memastikan pengalaman belanja yang menyenangkan.",
        requirements: "Pendidikan minimal SMA/SMK sederajat.\nBerpenampilan rapi dan jujur.\nMemiliki kemampuan komunikasi dan pelayanan yang baik.\nMampu bekerja di bawah tekanan dan teliti dalam menghitung uang.\nPengalaman di bidang kasir menjadi nilai tambah.\nMemiliki sikap ramah dan pelayanan yang baik.",
        tags: ["Full-Time", "Entry Level", "Pelayanan", "Transaksi"],
        applyLink: "mailto:hrd.cinema@publik.com?subject=Lamaran%20Posisi%20Kasir",
        desc_en: "Serve customers politely during payment transactions.\nProcess cash and non-cash transactions.\nCompile and present daily sales reports.\nHandle customer complaints and ensure a pleasant shopping experience.",
        req_en: "Minimum high school/vocational school education.\nNeat appearance and honest.\nGood communication and service skills.\nAble to work under pressure and be meticulous in handling money.\nExperience as a cashier is a plus.\nHave a friendly and good service attitude.",
    },
    {
        id: 1,
        position: "Senior Web Developer",
        company: "PT Digital Solusi Jaya",
        location: "Remote",
        type: "Full-Time",
        level: "Senior Level",
        salary: "Rp 12.000.000 - 18.000.000",
        description: "Memimpin pengembangan proyek web skala besar, mengelola tim front-end, dan memastikan kode berkualitas tinggi.\nBertanggung jawab mengembangkan dan memelihara aplikasi web skala besar menggunakan framework modern (ReactJS/VueJS).",
        requirements: "Pengalaman minimal 5 tahun di bidang web development.\nMenguasai JavaScript (ES6+), React/Vue/Angular.\nMemahami prinsip-prinsip UI/UX dasar.\nMemiliki portofolio proyek yang kuat dan pengalaman memimpin tim.",
        tags: ["Full-Time", "JavaScript", "ReactJS", "Remote Friendly"],
        applyLink: "mailto:hrd.inovasi@digitaljaya.com?subject=Lamaran%20Senior%20Web%20Developer",
        desc_en: "Lead the development of large-scale web projects, manage the front-end team, and ensure high-quality code.\nResponsible for developing and maintaining large-scale web applications using modern frameworks (ReactJS/VueJS).",
        req_en: "Minimum 5 years experience in web development.\nProficient in JavaScript (ES6+), React/Vue/Angular.\nUnderstanding of basic UI/UX principles.\nStrong project portfolio and experience leading a team.",
    },
    {
        id: 2,
        position: "Junior Data Analyst",
        company: "Fintech Cepat",
        location: "Hybrid Jakarta",
        type: "Full-Time",
        level: "Entry Level",
        salary: "Rp 6.000.000 - 8.000.000",
        description: "Menganalisis data transaksi untuk menghasilkan insight bisnis yang dapat ditindaklanjuti.\nBertanggung jawab atas pelaporan rutin dan pembuatan dashboard interaktif.",
        requirements: "Pendidikan minimal S1 Statistika/Matematika/IT.\nMahir menggunakan SQL dan MS Excel.\nMemiliki kemampuan visualisasi data (Tableau/Power BI) menjadi nilai tambah.\nMemiliki pemahaman dasar tentang data mining.",
        tags: ["Full-Time", "Data Entry", "SQL", "Excel"],
        applyLink: "mailto:rekrutmen@fintechcepat.co.id?subject=Lamaran%20Junior%20Data%20Analyst",
        desc_en: "Analyze transaction data to generate actionable business insights.\nResponsible for routine reporting and creating interactive dashboards.",
        req_en: "Minimum Bachelor's degree in Statistics/Mathematics/IT.\nProficient in SQL and MS Excel.\nData visualization skills (Tableau/Power BI) are a plus.\nBasic understanding of data mining.",
    },
    {
        id: 3,
        position: "Marketing Specialist",
        company: "PT Cipta Kreatif Indonesia",
        location: "Remote",
        type: "Full-Time",
        level: "Mid Level",
        salary: "Gaji Kompetitif",
        description: "Menciptakan dan mengelola kampanye pemasaran digital untuk meningkatkan brand awareness dan akuisisi pelanggan.\nMengelola semua saluran media sosial dan menganalisis performa kampanye.",
        requirements: "Familiar dengan SEO/SEM, Google Analytics, dan media sosial.\nPengalaman minimal 2 tahun di bidang digital marketing.\nKreatif, terorganisir, dan mampu bekerja secara mandiri.",
        tags: ["Full-Time", "Remote", "Sosial Media", "Konten", "Gaji Kompetitif"],
        applyLink: "mailto:hrd@ciptakreatif.id?subject=Lamaran%20Marketing%20Specialist",
        desc_en: "Create and manage digital marketing campaigns to increase brand awareness and customer acquisition.\nManage all social media channels and analyze campaign performance.",
        req_en: "Familiar with SEO/SEM, Google Analytics, and social media.\nMinimum 2 years experience in digital marketing.\nCreative, organized, and capable of working independently.",
    },
    {
        id: 4,
        position: "Pramuniaga",
        company: "PT Asbes Rubuh",
        location: "Depok",
        type: "Full-Time",
        level: "Entry Level",
        salary: "Rp 4.000.000 - 5.000.000",
        description: "Bertanggung jawab atas operasional toko harian, melayani pelanggan dengan ramah, dan memastikan kebersihan area penjualan.\nMembantu penataan barang dagangan.",
        requirements: "Pendidikan minimal SMA/SMK sederajat.\nMemiliki kemampuan komunikasi dan pelayanan yang baik.\nJujur dan bertanggung jawab.\nUsia maksimal 25 tahun.",
        tags: ["Full-Time", "Entry Level", "Retail", "Jaga Toko"],
        applyLink: "mailto:hrd@asbesrubuh.co.id?subject=Lamaran%20Pramuniaga",
        desc_en: "Responsible for daily store operations, serving customers politely, and ensuring the cleanliness of the sales area.\nAssist in arranging merchandise.",
        req_en: "Minimum high school/vocational school education.\nGood communication and service skills.\nHonest and responsible.\nMaximum age 25 years.",
    },
    {
        
        id: 6,
        position: "Admin",
        company: "PT.Emas Jakarta",
        location: "Jakarta",
        type: "Full-Time",
        level: "Entry Level",
        salary: "Rp.4.000.000-Rp.5.000.000",
        description: "Melaksanakan tugas-tugas administratif dan dokumentasi perusahaan\nMengelola dan mengarsip dokumen penting secara rapi dan terorganisir\nMembuat laporan administrasi harian, bulanan, dan tahunan\nMelayani komunikasi masuk dan keluar, termasuk surat-murat dan telepon\nMendukung kegiatan operasional kantor dan tim terkait",
        requirements: "Pendidikan minimal SMA/SMK atau sederajat, lebih diutamakan D3/S1 Administrasi atau terkait\nPengalaman kerja di bidang administratif minimal 1 tahun (nilai tambah)\nMenguasai Microsoft Office (Word, Excel, PowerPoint)\nMemiliki kemampuan komunikasi yang baik dan teliti\nMampu bekerja secara mandiri maupun dalam tim\nJujur, disiplin, dan bertanggung jawab",
        tags: ["Full-Time", "Entry Level", "Administrasi", "Dokumen", "Teliti"],
        applyLink: "mailto:emas23@gmail.com?subject=Lamaran%20Posisi%20Admin",
        desc_en: "Perform administrative duties and company documentation.\nManage and archive important documents neatly and organized.\nCreate daily, monthly, and annual administrative reports.\nHandle incoming and outgoing communication, including correspondence and telephone.\nSupport office operational activities and related teams.",
        req_en: "Minimum education SMA/SMK or equivalent, D3/S1 in Administration or related field is preferred.\nMinimum 1 year work experience in administration (a plus).\nProficient in Microsoft Office (Word, Excel, PowerPoint).\nHave good communication and attention to detail.\nAble to work independently and in a team.\nHonest, disciplined, and responsible.",
    },
    // ----------------------------------------------------
    
    
];

// =======================================================
// FUNGSI UTAMA (PENCARIAN, RENDER CARD, RENDER DETAIL)
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
    // Rendern kartu lowongan di index.html
    if (document.getElementById('job-list')) {
        renderJobCards(jobData); 
    }
    initializeLanguage(); // Ini akan memanggil renderJobDetail jika di halaman detail
});

function renderJobCards(jobs) {
    const container = document.getElementById('job-list');
    const noResults = document.getElementById('no-results');
    
    if (!container) return; 

    container.innerHTML = '';

    if (jobs.length === 0) {
        if (noResults) noResults.style.display = 'block';
        return;
    }
    if (noResults) noResults.style.display = 'none';

    const fragment = document.createDocumentFragment();

    jobs.forEach(job => {
        const tagsHtml = job.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const card = document.createElement('div');
        card.className = 'job-card';
        
        const descriptionText = currentLanguage === 'id' ? job.description : job.desc_en;
        const summary = descriptionText.split(/\r?\n/)[0]; // Ambil baris pertama deskripsi

        const buttonText = currentLanguage === 'id' ? 'Klik Di Sini' : 'Click Here';

        card.innerHTML = `
            <h3>${job.position}</h3>
            <p class="company-name">${job.company}</p>
            <p class="location">${job.location} (${job.type})</p>
            <div class="job-tags">
                ${tagsHtml}
            </div>
            <p class="summary">${summary}...</p>
            <a href="detail_lowongan.html?id=${job.id}" class="apply-button detail-link" data-lang-key="click_here_to_see_detail">${buttonText}</a>
        `;
        fragment.appendChild(card);
    });

    container.appendChild(fragment);
}

function filterJobs() {
    const inputElement = document.getElementById('search-input');
    if (!inputElement) return; 
    
    const input = inputElement.value.toLowerCase();
    
    const filteredJobs = jobData.filter(job => 
        job.position.toLowerCase().includes(input) ||
        job.company.toLowerCase().includes(input) ||
        job.location.toLowerCase().includes(input) ||
        (currentLanguage === 'id' ? job.description.toLowerCase().includes(input) : job.desc_en.toLowerCase().includes(input)) ||
        job.tags.some(tag => tag.toLowerCase().includes(input))
    );

    renderJobCards(filteredJobs);
}


function renderJobDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = parseInt(urlParams.get('id'));

    const job = jobData.find(j => j.id === jobId);
    
    const detailPositionElement = document.getElementById('detail-position');
    if (!detailPositionElement) return; // Hentikan jika bukan di halaman detail

    if (!job) {
        document.querySelector('.job-detail-card').innerHTML = `<h1 style="color: red;">${currentLanguage === 'id' ? 'Lowongan tidak ditemukan.' : 'Job not found.'}</h1><p><a href="index.html">← ${currentLanguage === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}</a></p>`;
        document.getElementById('detail_title').innerText = "404 - WorkLance ID"; 
        return;
    }
    
    const descriptionContent = currentLanguage === 'id' ? job.description : job.desc_en;
    const requirementsContent = currentLanguage === 'id' ? job.requirements : job.req_en;
    const tagsHtml = job.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Mengisi informasi dasar
    document.getElementById('detail-position').innerText = job.position;
    document.getElementById('detail_title').innerText = `${job.position} - WorkLance ID`; 
    document.getElementById('detail-company').innerText = job.company;
    document.getElementById('detail-location').innerText = job.location;
    document.getElementById('detail-type').innerText = job.type;
    document.getElementById('detail-salary').innerText = job.salary;
    document.getElementById('detail-level').innerText = job.level || (currentLanguage === 'id' ? 'Tidak Ditentukan' : 'Not Specified');
    
    // MENGISI DESKRIPSI DAN PERSYARATAN DENGAN MENGGANTI NEWLINE (\n) ke <br>
    document.getElementById('detail-description').innerHTML = descriptionContent.replace(/\n/g, '<br>');
    document.getElementById('detail-requirements').innerHTML = requirementsContent.replace(/\n/g, '<br>');
    
    document.getElementById('detail-tags').innerHTML = tagsHtml;
    
    // Logika untuk tombol Tanya via WA (Chatbot Lowongan)
    const waButton = document.getElementById('ask-wa-link');
    if (waButton) {
        const waMessage = `Halo Admin WorkLance ID. Saya ingin bertanya lebih detail mengenai lowongan "${job.position}" di ${job.company} (ID Loker: ${job.id}).`;
        // Membuat link WA dengan pesan terisi otomatis
        waButton.href = `https://wa.me/${LOKER_WA_NUMBER}?text=${encodeURIComponent(waMessage)}`;
        waButton.innerText = currentLanguage === 'id' ? 'Tanya Lowongan Ini via WA' : 'Ask About This Job via WA';
    }
    
    // Tombol Lamar Sekarang yang sesungguhnya
    const applyButton = document.getElementById('apply-link');
    applyButton.href = job.applyLink;
    applyButton.innerText = currentLanguage === 'id' ? 'Lamar Sekarang' : 'Apply Now';
}


// =======================================================
// FUNGSI TAMBAHAN (Form WA & Terjemahan)
// =======================================================

function sendToWhatsApp() {
    const nama_perusahaan = document.getElementById('nama_perusahaan').value;
    const email_rekrutmen = document.getElementById('email_rekrutmen').value;
    const posisi = document.getElementById('posisi').value;
    const tipe_kerja = document.getElementById('tipe_kerja').value;
    const lokasi_kerja = document.getElementById('lokasi_kerja').value;
    const gaji = document.getElementById('gaji').value || 'Tidak disebutkan';
    const deskripsi = document.getElementById('deskripsi').value;
    const persyaratan = document.getElementById('persyaratan').value;
    
    // Ambil baris pertama deskripsi untuk ringkasan
    const ringkasan = deskripsi.split(/\r?\n/)[0]; 
    
    // Fungsi utilitas untuk membuat padding
    const pad = (text, length) => text.padEnd(length, ' ');
    const PADDING = 15; // Jarak padding untuk format rapi

    const message = `*PENGAJUAN LOWONGAN BARU — WORKLANCE ID*%0A%0A` +
                    `*Detail Lowongan:*%0A` +
                    `--------------------------------------%0A` +
                    `${pad("Perusahaan", PADDING)}: ${nama_perusahaan}%0A` +
                    `${pad("Posisi", PADDING)}: ${posisi}%0A` +
                    `${pad("Email Rekrutmen", PADDING)}: ${email_rekrutmen}%0A` +
                    `${pad("Lokasi", PADDING)}: ${lokasi_kerja}%0A` +
                    `${pad("Tipe Kerja", PADDING)}: ${tipe_kerja}%0A` +
                    `${pad("Ringkasan", PADDING)}: ${ringkasan}%0A` +
                    `${pad("Gaji", PADDING)}: ${gaji}%0A` +
                    `--------------------------------------%0A` +
                    `*Deskripsi Lengkap:*%0A${deskripsi}%0A%0A` + 
                    `*Persyaratan:*%0A${persyaratan}%0A%0A` + 
                    `*Status:* Menunggu verifikasi admin%0A` +
                    `*Instruksi Admin:*%0A` +
                    `- Periksa kelengkapan data%0A` +
                    `- Verifikasi informasi lowongan%0A` +
                    `- Edit file index.html dan script.js jika Lowongan memenuhi verifikasi anda%0A` +
                    `Terima kasih.`;

    window.open(`https://wa.me/${LOKER_WA_NUMBER}?text=${message}`, '_blank');
    window.location.href = 'verifikasi.html'; // Pindah ke halaman verifikasi
}

function sendContactFormToWA() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value || 'Tanpa Subjek';
    const message = document.getElementById('contactMessage').value;

    const waMessage = `Halo Admin WorkLance ID, saya ${name} (%23${subject}) ingin bertanya:%0A%0A"${message}"%0A%0AEmail kontak saya: ${email}`; 

    window.open(`https://wa.me/${CONTACT_WA_NUMBER}?text=${waMessage}`, '_blank');
}


// FUNGSI TERJEMAHAN DAN CHATBOT
const translations = {
    'home': { 'id': 'Beranda', 'en': 'Home' },
    'about': { 'id': 'Tentang Kami', 'en': 'About Us' },
    'contact': { 'id': 'Kontak', 'en': 'Contact' },
    'post_job': { 'id': 'Pasang Loker', 'en': 'Post Job' },
    'footer_text': { 'id': '&copy; 2025 WorkLance ID | Tugas Kelompok Mata Kuliah Web Development', 'en': '&copy; 2025 WorkLance ID | Web Development Course Group Assignment' }, 
    'hero_h1': { 'id': 'Temukan Karir Impian Anda Sekarang Juga', 'en': 'Find Your Dream Career Now' },
    'hero_p': { 'id': 'Ribuan peluang kerja menanti untuk Anda jelajahi.', 'en': 'Thousands of job opportunities await you to explore.' },
    'illustration_text': { 'id': '💡 Ilustrasi sukses mencari kerja', 'en': '💡 Illustration of successful job search' },
    'latest_jobs_h2': { 'id': 'Lowongan Terbaru untuk Anda', 'en': 'Latest Job Openings for You' },
    'click_here_to_see_detail': { 'id': 'Klik Di Sini', 'en': 'Click Here' }, 
    'apply_now_large': { 'id': 'Lamar Sekarang', 'en': 'Apply Now' }, 
    'search_button': { 'id': 'Cari Kerja', 'en': 'Search Job' },
    'no_results': { 'id': 'Tidak ada lowongan yang ditemukan. Coba kata kunci lain.', 'en': 'No jobs found. Try different keywords.' },
    
    // DETAIL
    'detail_type': { 'id': 'Tipe Kerja:', 'en': 'Job Type:' },
    'detail_salary': { 'id': 'Estimasi Gaji:', 'en': 'Estimated Salary:' },
    'detail_level': { 'id': 'Level Karir:', 'en': 'Career Level:' },
    'detail_description_h3': { 'id': 'Deskripsi Pekerjaan', 'en': 'Job Description' },
    'detail_requirements_h3': { 'id': 'Persyaratan & Kualifikasi', 'en': 'Requirements & Qualifications' },
    'ask_via_wa': { 'id': 'Tanya Lowongan Ini via WA', 'en': 'Ask About This Job via WA' },


    // ABOUT
    'about_h1': { 'id': 'Tentang WorkLance ID', 'en': 'About WorkLance ID' }, 
    'about_p': { 'id': 'Solusi terdepan untuk menemukan dan mengisi peluang karir di Indonesia.', 'en': 'The leading solution for finding and filling career opportunities in Indonesia.' },
    'vision_h2': { 'id': 'Misi Kami', 'en': 'Our Mission' },
    'vision_p': { 'id': 'WorkLance ID didirikan dengan misi sederhana: **menjembatani talenta terbaik dengan perusahaan yang tepat**. Kami percaya bahwa setiap orang berhak atas karir yang memuaskan dan setiap perusahaan berhak mendapatkan karyawan yang sesuai dengan kebutuhan mereka. Kami berupaya menyediakan platform yang intuitif, cepat, dan terpercaya.', 'en': 'WorkLance ID was founded with a simple mission: **to bridge the best talent with the right companies**. We believe everyone deserves a fulfilling career and every company deserves the right employees. We strive to provide an intuitive, fast, and reliable platform.' }, 
    'team_h2': { 'id': 'Tim Pengembang & Peran Utama', 'en': 'Development Team & Key Roles' },
    'team_p': { 'id': 'Proyek portal lowongan kerja statis ini dikembangkan sebagai bagian dari tugas akhir mata kuliah Web Development, di mana setiap anggota memegang peran kunci:', 'en': 'This static job portal project was developed as part of a final assignment for the Web Development course, where each member holds a key role:' },
    'tech_h2': { 'id': 'Teknologi yang Digunakan', 'en': 'Technologies Used' },
    'tech_p': { 'id': 'Website ini dikembangkan menggunakan teknologi front-end standar:', 'en': 'This website was developed using standard front-end technologies:' },

    // KUNCI TERJEMAHAN TIM
    'ahmad_role_id': { 'id': '**Peran:** 👑 **The Architect & Logic Integrator**<br>Tanggung jawab meliputi: Memimpin proyek, merancang struktur web keseluruhan, dan mengimplementasikan fitur kritis seperti **Notifikasi WhatsApp Admin** dan integrasi alur kerja simulasi Lowongan.', 'en': '**Role:** 👑 **The Architect & Logic Integrator**<br>Responsibilities include: Leading the project, designing the overall web structure, and implementing critical features like **Admin WhatsApp Notifications** and simulated Job Vacancy workflow integration.' },
    'ahmad_role_en': { 'id': '**Peran:** 👑 **The Architect & Logic Integrator**<br>Tanggung jawab meliputi: Memimpin proyek, merancang struktur web keseluruhan, dan mengimplementasikan fitur kritis seperti **Notifikasi WhatsApp Admin** dan integrasi alur kerja simulasi Lowongan.', 'en': '**Role:** 👑 **The Architect & Logic Integrator**<br>Responsibilities include: Leading the project, designing the overall web structure, and implementing critical features like **Admin WhatsApp Notifications** and simulated Job Vacancy workflow integration.' },
    'defry_role_id': { 'id': '**Peran:** 🎨 **The Visual Designer & Stylist**<br>Tanggung jawab meliputi: Mendesain pengalaman pengguna (UX) yang menarik, menata semua gaya visual melalui **CSS** *styling*, dan membangun *layout* halaman *About* dan *Contact* yang bersih dan informatif.', 'en': '**Role:** 🎨 **The Visual Designer & Stylist**<br>Responsibilities include: Designing engaging user experience (UX), styling all visual elements via **CSS** *styling*, and building clean and informative *About* and *Contact* page layouts.' },
    'defry_role_en': { 'id': '**Peran:** 🎨 **The Visual Designer & Stylist**<br>Tanggung jawab meliputi: Mendesain pengalaman pengguna (UX) yang menarik, menata semua gaya visual melalui **CSS** *styling*, dan membangun *layout* halaman *About* dan *Contact* yang bersih dan informatif.', 'en': '**Role:** 🎨 **The Visual Designer & Stylist**<br>Responsibilities include: Designing engaging user experience (UX), styling all visual elements via **CSS** *styling*, and building clean and informative *About* and *Contact* page layouts.' },
    'alif_role_id': { 'id': '**Peran:** ⚙️ **The Functionality Engine**<br>Tanggung jawab meliputi: Mengembangkan semua fungsionalitas **JavaScript** inti seperti fitur **Pencarian Cepat**, merancang alur pengiriman dan penerimaan Lowongan Kerja (`pasang_loker.html`), serta memastikan halaman *Detail Lowongan* berfungsi secara dinamis.', 'en': '**Role:** ⚙️ **The Functionality Engine**<br>Responsibilities include: Developing all core **JavaScript** functionalities like the **Quick Search** feature, designing the Job Posting submission and reception flow (`pasang_loker.html`), and ensuring the *Job Detail* page functions dynamically.' },
    'alif_role_en': { 'id': '**Peran:** ⚙️ **The Functionality Engine**<br>Tanggung jawab meliputi: Mengembangkan semua fungsionalitas **JavaScript** inti seperti fitur **Pencarian Cepat**, merancang alur pengiriman dan penerimaan Lowongan Kerja (`pasang_loker.html`), serta memastikan halaman *Detail Lowongan* berfungsi secara dinamis.', 'en': '**Role:** ⚙️ **The Functionality Engine**<br>Responsibilities include: Developing all core **JavaScript** functionalities like the **Quick Search** feature, designing the Job Posting submission and reception flow (`pasang_loker.html`), and ensuring the *Job Detail* page functions dynamically.' },


    // CONTACT
    'contact_h1': { 'id': 'Hubungi Tim WorkLance ID', 'en': 'Contact the WorkLance ID Team' }, 
    'contact_p': { 'id': 'Kami siap membantu pertanyaan terkait karir, lowongan, dan kerjasama.', 'en': 'We are ready to assist with questions regarding careers, job openings, and collaborations.' },
    'contact_info_h2': { 'id': 'Informasi Kontak', 'en': 'Contact Information' },
    'contact_info_p': { 'id': 'Jika Anda memiliki pertanyaan spesifik tentang lowongan, kemitraan, atau pengembangan proyek, silakan gunakan formulir ini atau hubungi kami secara langsung.', 'en': 'If you have specific questions about job postings, partnerships, or project development, please use this form or contact us directly.' },
    'phone_title': { 'id': '📞 Telepon/WhatsApp', 'en': '📞 Phone/WhatsApp' },
    'address_title': { 'id': '📍 Alamat Kantor', 'en': '📍 Office Address' }, // Kunci Alamat Baru
    'address_text': { 'id': 'Jalan Puspitek Tangerang Selatan', 'en': 'Puspitek Street South Tangerang' }, // Kunci Alamat Baru
    'email_title': { 'id': '📧 Dukungan Email', 'en': '📧 Email Support' },
    'send_message_h2': { 'id': 'Kirim Pesan kepada Kami', 'en': 'Send Us a Message' },
    'label_full_name': { 'id': 'Nama Lengkap:', 'en': 'Full Name:' },
    'label_your_email': { 'id': 'Email Anda:', 'en': 'Your Email:' },
    'label_subject': { 'id': 'Subjek:', 'en': 'Subject:' },
    'label_your_message': { 'id': 'Pesan Anda:', 'en': 'Your Message:' },
    'send_wa_button': { 'id': 'Kirim Pesan via WhatsApp', 'en': 'Send Message via WhatsApp' },
    'wa_chatbot_id': { 'id': '👋 Halo Admin WorkLance ID. Saya membutuhkan bantuan terkait informasi di portal Anda.\n\nMohon pilih salah satu menu di bawah ini (ketik angka 1-4):\n\n------------------------------\n1. 💼 Tanya Lowongan Kerja Terbaru\n2. 🔄 Cek Status Lowongan yang Sudah Diajukan\n3. 🤝 Penawaran Kerjasama / Bisnis\n4. ❓ Pertanyaan Lain\n------------------------------\n\nTerima kasih.', 
                       'en': '👋 Hello WorkLance ID Admin. I need assistance regarding information on your portal.\n\nPlease select one of the menu options below (type number 1-4):\n\n------------------------------\n1. 💼 Ask About Latest Job Openings\n2. 🔄 Check Status of Submitted Job Postings\n3. 🤝 Partnership / Business Offer\n4. ❓ Other Questions\n------------------------------\n\nThank you.' 
                    },

    // POST JOB
    'post_h1': { 'id': 'Pasang Lowongan Kerja di WorkLance ID', 'en': 'Post Job Vacancy on WorkLance ID' }, 
    'post_p': { 'id': 'Jangkau talenta terbaik untuk perusahaan Anda dengan cepat dan mudah.', 'en': 'Reach the best talents for your company quickly and easily.' },
    'guide_h2': { 'id': 'Panduan Singkat', 'en': 'Quick Guide' },
    'guide_p': { 'id': 'Mohon isi formulir di bawah ini dengan informasi yang lengkap dan akurat. Notifikasi lowongan akan dikirimkan ke WhatsApp admin kami untuk ditinjau dan ditayangkan di beranda.', 'en': 'Please fill out the form below with complete and accurate information. Job notification will be sent to our admin WhatsApp for review and posting on the homepage.' },
    'form_title': { 'id': 'Formulir Pemasangan Lowongan', 'en': 'Job Posting Form' },
    'section1_h3': { 'id': '1. Informasi Perusahaan', 'en': '1. Company Information' },
    'label_company': { 'id': 'Nama Perusahaan (Wajib):', 'en': 'Company Name (Required):' },
    'label_email_recruit': { 'id': 'Email Rekrutmen (Wajib):', 'en': 'Recruitment Email (Required):' },
    'section2_h3': { 'id': '2. Detail Pekerjaan', 'en': '2. Job Details' },
    'label_position': { 'id': 'Nama Posisi (Wajib):', 'en': 'Position Name (Required):' },
    'label_type': { 'id': 'Tipe Kerja (Wajib):', 'en': 'Job Type (Required):' },
    'option_default_type': { 'id': '-- Pilih Tipe --', 'en': '-- Select Type --' },
    'option_fulltime': { 'id': 'Full-Time', 'en': 'Full-Time' },
    'option_parttime': { 'id': 'Part-Time', 'en': 'Part-Time' },
    'option_internship': { 'id': 'Internship', 'en': 'Internship' },
    'option_freelance': { 'id': 'Freelance', 'en': 'Freelance' },
    'label_location': { 'id': 'Lokasi Kerja (Wajib):', 'en': 'Work Location (Required):' },
    'label_salary': { 'id': 'Perkiraan Rentang Gaji (Opsional):', 'en': 'Estimated Salary Range (Optional):' },
    'label_description': { 'id': 'Deskripsi Pekerjaan (Tugas & Tanggung Jawab) (Wajib):', 'en': 'Job Description (Duties & Responsibilities) (Required):' },
    'label_requirements': { 'id': 'Persyaratan/Kualifikasi (Wajib):', 'en': 'Requirements/Qualifications (Required):' },
    'section3_h3': { 'id': '3. Tag dan Kategori (Opsional)', 'en': '3. Tags and Categories (Optional)' },
    'label_tags': { 'id': 'Kata Kunci / Tag Lowongan (Pisahkan dengan koma):', 'en': 'Keywords / Job Tags (Separate with commas):' },
    'publish_button': { 'id': 'Terbitkan Lowongan', 'en': 'Publish Job' },

    // VERIFICATION
    'verif_h1': { 'id': '✅ Pengajuan Lowongan Berhasil Diterima!', 'en': '✅ Job Submission Received Successfully!' },
    'verif_p1': { 'id': 'Terima kasih telah memasang lowongan di **WorkLance ID**.', 'en': 'Thank you for posting a job on **WorkLance ID**.' }, 
    'verif_info_title': { 'id': 'Proses Verifikasi:', 'en': 'Verification Process:' },
    'verif_info_text': { 'id': 'Lowongan Anda saat ini sedang dalam proses peninjauan oleh tim Admin kami. Proses ini biasanya memakan waktu maksimal 1x24 jam kerja.', 'en': 'Your job posting is currently under review by our Admin team. This process usually takes a maximum of 1x24 working hours.' },
    'verif_info_note': { 'id': 'Kami akan menghubungi Anda melalui email rekrutmen yang dicantumkan jika ada informasi yang perlu diklarifikasi.', 'en': 'We will contact you via the recruitment email provided if any information needs clarification.' },
    'verif_p2': { 'id': 'Anda dapat kembali ke beranda untuk melihat lowongan lain yang tersedia.', 'en': 'You may return to the homepage to see other available job openings.' },
    'verif_button': { 'id': 'Kembali ke Beranda', 'en': 'Back to Homepage' }
};

// =======================================================
// INICIALISASI LINK WHATSAPP (CHATBOT)
// =======================================================

// FUNGSI: Mengatur link WhatsApp Chatbot di halaman Kontak
function initializeContactChatbot(lang) {
    const waLink = document.getElementById('contact-wa-link'); 
    const waMessageKey = 'wa_chatbot_id';
    const waMessage = translations[waMessageKey][lang];
    
    if (waLink && CONTACT_WA_NUMBER) {
        const encodedMessage = encodeURIComponent(waMessage);
        waLink.href = `https://wa.me/${CONTACT_WA_NUMBER}?text=${encodedMessage}`;
    }
}

// FUNGSI: Mengatur link WhatsApp Chatbot di halaman Tentang Kami
function initializeAboutChatbot(lang) {
    // Ambil pesan chatbot dari translations
    const waMessageKey = 'wa_chatbot_id';
    const waMessage = translations[waMessageKey][lang];
    const encodedMessage = encodeURIComponent(waMessage);

    // Daftar anggota tim dan nomor mereka (WA link ID di tentang.html)
    const teamMembers = [
        { id: 'wa-link-ahmad', number: '6281385285889' },
        { id: 'wa-link-defry', number: '6282258722610' },
        { id: 'wa-link-alif', number: '628997484380' }
    ];

    teamMembers.forEach(member => {
        const waLink = document.getElementById(member.id);
        if (waLink) {
            // Gunakan nomor masing-masing, tetapi pesan chatbot yang sama
            waLink.href = `https://wa.me/${member.number}?text=${encodedMessage}`;
        }
    });
}


// =======================================================
// FUNGSI TERJEMAHAN UTAMA
// =======================================================

function translatePage(lang) {
    // Terjemahkan elemen berdasarkan data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[key] && translations[key][lang]) {
            element.innerHTML = translations[key][lang];
        }
    });

    // Logika untuk menampilkan/menyembunyikan peran tim ID/EN
    document.querySelectorAll('[data-lang-key$="_id"]').forEach(element => {
        const keyId = element.getAttribute('data-lang-key');
        const keyEn = keyId.replace('_id', '_en');
        
        // Atur tampilan untuk peran ID
        element.style.display = (lang === 'id' && translations[keyId]) ? 'block' : 'none';
        
        // Atur tampilan untuk peran EN (jika elemennya ada)
        const elementEn = document.querySelector(`[data-lang-key="${keyEn}"]`);
        if (elementEn) {
            elementEn.style.display = (lang === 'en' && translations[keyEn]) ? 'block' : 'none';
        }
    });
    
    // Ganti teks tombol bahasa
    const langSwitchButton = document.getElementById('lang-switch');
    if (langSwitchButton) {
        langSwitchButton.textContent = lang === 'id' ? 'EN' : 'ID';
    }

    // Panggil fungsi inisialisasi WA untuk memastikan pesan terisi dengan bahasa yang benar
    initializeContactChatbot(lang); 
    initializeAboutChatbot(lang);

    // Render ulang konten yang bergantung pada bahasa (kartu lowongan dan detail)
    if (document.getElementById('job-list')) {
        filterJobs(); 
    }
    if (document.getElementById('detail-position')) {
        renderJobDetail(); 
    }

    currentLanguage = lang;
}

function toggleLanguage() {
    const newLang = currentLanguage === 'id' ? 'en' : 'id';
    localStorage.setItem('language', newLang);
    translatePage(newLang);
}

function initializeLanguage() {
    const storedLang = localStorage.getItem('language') || 'id';
    translatePage(storedLang);
    
    // Inisialisasi awal link WA (penting untuk pertama kali load)
    initializeContactChatbot(storedLang);
    initializeAboutChatbot(storedLang);

    if (document.getElementById('detail-position')) {
         renderJobDetail();
    }
}