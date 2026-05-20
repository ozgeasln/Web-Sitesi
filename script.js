document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. SCROLL GİRİŞ ANİMASYONLARI ---
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.15 
    });

    animatedElements.forEach(el => scrollObserver.observe(el));
    
    // Açılış ekranı metinlerini tetikle
    setTimeout(() => {
        const heroContent = document.querySelector('.hero-content');
        if(heroContent) heroContent.classList.add('show');
    }, 200);


    // --- 2. MOUSE TAKİP IŞIĞI (SHADER EFEKTİ) ---
    const glowLayer = document.querySelector('.mouse-glow');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        // Mouse konumuna göre radial-gradient arka planını güncelle
        glowLayer.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(200, 34, 255, 0.15) 0%, rgba(0, 0, 0, 0) 45%)`;
    });


    // --- 3. MANUEL SES KONTROLÜ VE SLIDER ---
    const audio = document.getElementById('cyber-audio');
    const soundBtn = document.getElementById('sound-btn');
    const soundIcon = soundBtn.querySelector('i');
    const volumeSlider = document.getElementById('volume-slider');

    // Başlangıç ses seviyesini slider'ın varsayılan değerine (0.15) eşitle
    audio.volume = volumeSlider.value; 

    // Oynat/Durdur Buton Kontrolü
    soundBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        if (audio.paused) {
            audio.play();
            soundIcon.classList.remove('fa-volume-xmark');
            soundIcon.classList.add('fa-volume-high');
            soundBtn.classList.add('active');
        } else {
            audio.pause();
            soundIcon.classList.remove('fa-volume-high');
            soundIcon.classList.add('fa-volume-xmark');
            soundBtn.classList.remove('active');
        }
    });

    // Ses Kaydırıcı (Slider) Kontrolü
    volumeSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value;
        
        // Ses tamamen kısıldıysa çarpı ikonu yap
        if (audio.volume === 0 || audio.volume === "0") {
            soundIcon.classList.remove('fa-volume-high');
            soundIcon.classList.add('fa-volume-xmark');
            soundBtn.classList.remove('active');
        } 
        // Ses açıldıysa ve müzik çalıyorsa açık ikonunu göster
        else if (!audio.paused) {
            soundIcon.classList.remove('fa-volume-xmark');
            soundIcon.classList.add('fa-volume-high');
            soundBtn.classList.add('active');
        }
    });
});