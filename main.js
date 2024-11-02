// فتح وإغلاق القائمة الجانبية
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0';
    }
}

// عرض الصفحة المطلوبة
function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        page.classList.remove('active');
        if (index === pageNumber - 1) {
            page.classList.add('active');
        }
    });
}

// عرض صفحة سدره
function showSidraPage() {
    showPage(4);
}

// عرض صفحة عمر
function showOmarPage() {
    showPage(5);
}

// زر الرجوع
function goBack() {
    window.history.back();
}

// كود لإنشاء القلوب المتساقطة
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 3000); // إنشاء قلب كل 3 ثواني