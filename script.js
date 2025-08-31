// منع الوميض الأبيض (FOUC) للعناصر المتحركة
document.documentElement.classList.add('aos-loading');

window.addEventListener('load', function() {
  document.documentElement.classList.remove('aos-loading');
});

document.addEventListener('DOMContentLoaded', function() {
  console.log("تم تحميل الصفحة وبدء تشغيل JavaScript");
  
  // نصوص اللغة العربية
  const arabicText = {
    logo: "العرايشي",
    home: "الرئيسية",
    about: "من أنا",
    services: "الخدمات",
    skills: "المهارات",
    portfolio: "الأعمال",
    testimonials: "آراء العملاء",
    contact: "تواصل",
    heroTitle: "أنا محمد العرايشي",
    heroSubtitle: "مهندس برمجيات ومطور مواقع",
    heroDesc: "أبني مواقع احترافية حديثة وسريعة تناسب جميع الأعمال والشركات.",
    contactBtn: "تواصل معي",
    aboutTitle: "من أنا",
    aboutDesc: "أنا مهندس برمجيات متخصص في تطوير مواقع الويب باستخدام أحدث التقنيات. أعمل على تحويل الأفكار إلى منتجات رقمية متكاملة وسهلة الاستخدام.",
    servicesTitle: "الخدمات",
    service1Title: "تطوير المواقع",
    service1Desc: "تصميم وتطوير مواقع سريعة الاستجابة ومناسبة لجميع الأجهزة.",
    service2Title: "تصميم واجهات",
    service2Desc: "تصميم واجهات مستخدم عصرية وجذابة تسهل تجربة العملاء.",
    service3Title: "برمجة الخلفية",
    service3Desc: "بناء أنظمة قوية وآمنة باستخدام أحدث تقنيات السيرفر.",
    skillsTitle: "المهارات",
    portfolioTitle: "الأعمال",
    project1Title: "مشروع شركة عقارات",
    project2Title: "متجر إلكتروني",
    project3Title: "منصة تعليمية",
    testimonialsTitle: "آراء العملاء",
    testimonial1Text: '"محمد مهندس متميز ومحترف، قام بتصميم موقعنا بشكل رائع ووفاءً بجميع المتطلبات في الوقت المحدد."',
    testimonial1Author: "- أحمد السيد، مدير شركة التقنية",
    testimonial2Text: '"تعاملت مع العديد من المطورين، لكن محمد يتميز بالإبداع والدقة في العمل وسرعة الاستجابة."',
    testimonial2Author: "- سارة محمد، صاحبة متجر إلكتروني",
    contactTitle: "تواصل معي",
    namePlaceholder: "الاسم",
    emailPlaceholder: "البريد الإلكتروني",
    messagePlaceholder: "رسالتك",
    submitBtn: "إرسال",
    footerText: "© 2025 جميع الحقوق محفوظة - العرايشي"
  };

  // نصوص اللغة الإنجليزية
  const englishText = {
    logo: "Elarishy",
    home: "Home",
    about: "About",
    services: "Services",
    skills: "Skills",
    portfolio: "Portfolio",
    testimonials: "Testimonials",
    contact: "Contact",
    heroTitle: "I'm Mohammed Elarishy",
    heroSubtitle: "Software Engineer & Web Developer",
    heroDesc: "I build modern, fast, and professional websites suitable for all businesses and companies.",
    contactBtn: "Contact Me",
    aboutTitle: "About Me",
    aboutDesc: "I am a software engineer specialized in web development using the latest technologies. I work on transforming ideas into integrated and user-friendly digital products.",
    servicesTitle: "Services",
    service1Title: "Web Development",
    service1Desc: "Design and develop responsive websites suitable for all devices.",
    service2Title: "UI Design",
    service2Desc: "Design modern and attractive user interfaces that enhance customer experience.",
    service3Title: "Backend Programming",
    service3Desc: "Build robust and secure systems using the latest server technologies.",
    skillsTitle: "Skills",
    portfolioTitle: "Portfolio",
    project1Title: "Real Estate Company Project",
    project2Title: "E-commerce Store",
    project3Title: "Educational Platform",
    testimonialsTitle: "Client Testimonials",
    testimonial1Text: '"Mohammed is an exceptional and professional engineer who designed our website wonderfully and met all requirements on time."',
    testimonial1Author: "- Ahmed El-Sayed, Tech Company Manager",
    testimonial2Text: '"I have worked with many developers, but Mohammed stands out with his creativity, attention to detail, and quick response."',
    testimonial2Author: "- Sara Mohamed, E-store Owner",
    contactTitle: "Contact Me",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Your Message",
    submitBtn: "Send",
    footerText: "© 2025 All Rights Reserved - Elarishy"
  };

  const langToggle = document.getElementById('lang-toggle');
  let currentLang = 'ar';

  // تحميل اللغة المحفوظة إذا وجدت
  const savedLang = localStorage.getItem('language');
  if (savedLang) {
    currentLang = savedLang;
    console.log("تم تحميل اللغة من التخزين المحلي: " + savedLang);
  }

  // تطبيق اللغة الحالية عند تحميل الصفحة
  applyLanguage(currentLang);

  // تبديل اللغة عند النقر على الزر
  langToggle.addEventListener('click', function() {
    console.log("تم النقر على زر تبديل اللغة");
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    console.log("اللغة الجديدة: " + currentLang);
    applyLanguage(currentLang);
    localStorage.setItem('language', currentLang);
  });

  // وظيفة تطبيق اللغة
  function applyLanguage(lang) {
    console.log("تطبيق اللغة: " + lang);
    const textData = lang === 'ar' ? arabicText : englishText;
    
    // تحديث النصوص
    document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key');
      if (textData[key]) {
        if (element.placeholder) {
          element.placeholder = textData[key];
        } else {
          element.textContent = textData[key];
        }
      }
    });
    
    // تحديث اتجاه الصفحة
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
      langToggle.textContent = 'EN';
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
      langToggle.textContent = 'AR';
    }
    
    console.log("تم تطبيق اللغة بنجاح");
  }
  
  // ========== تأثيرات الظهور عند التمرير ==========
  function initScrollAnimations() {
    console.log("بدء تحميل تأثيرات التمرير");
    
    const aosElements = document.querySelectorAll('[data-aos]');
    
    // إنشاء Intersection Observer لمراقبة العناصر
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // عندما يصبح العنصر مرئياً في الشاشة
          setTimeout(() => {
            entry.target.classList.add('aos-animate');
          }, parseInt(entry.target.getAttribute('data-aos-delay') || 0));
          
          // إلغاء مراقبة العنصر بعد ظهوره
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // عندما يكون 10% من العنصر مرئياً
      rootMargin: '0px 0px -50px 0px' // تعديل هامش الرؤية
    });
    
    // بدء مراقبة جميع العناصر
    aosElements.forEach(element => {
      observer.observe(element);
    });
    
    // جعل العناصر في الجزء العلوي مرئية فوراً
    setTimeout(() => {
      document.querySelectorAll('.hero [data-aos]').forEach(el => {
        el.classList.add('aos-animate');
      });
    }, 300);
  }
  
  // ========== تأثيرات تفاعلية للخلفية مع حركة الماوس ==========
  function initBackgroundEffects() {
    const animatedBg = document.querySelector('.animated-bg');
    const shapes = document.querySelectorAll('.shape');
    
    if (!animatedBg) return;
    
    document.addEventListener('mousemove', function(e) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // تحريك الخلفية بناءً على موقع الماوس
      animatedBg.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
      
      // تحريك الأشكال بشكل فردي
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        const moveX = (x * 15 * speed) - (7 * speed);
        const moveY = (y * 15 * speed) - (7 * speed);
        
        shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
  }
  
  // ========== تأثيرات إضافية للعناصر ==========
  function initAdditionalEffects() {
    // تأثيرات للروابط
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // تأثيرات للأزرار
    const buttons = document.querySelectorAll('.btn, form button');
    buttons.forEach(button => {
      button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
      });
      
      button.addEventListener('mouseup', function() {
        this.style.transform = '';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });
    
    // تأثيرات لصور الأعمال
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.zIndex = '';
      });
    });
  }
  
  // تهيئة جميع التأثيرات
  initScrollAnimations();
  initBackgroundEffects();
  initAdditionalEffects();
  
  console.log("اكتمل تحميل البرنامج النصي");
});