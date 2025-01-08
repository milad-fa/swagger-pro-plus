class ElementBuilder {
    static createButton({className, onClick, i18nKey, attributes = {}}) {
        const button = document.createElement('button');
        button.className = className;
        button.setAttribute('data-i18n', i18nKey);
        button.textContent = window.i18n.getText(i18nKey);

        if (onClick) {
            button.onclick = onClick;
        }

        Object.entries(attributes).forEach(([key, value]) => {
            button.setAttribute(key, value);
        });

        return button;
    }
}

const translations = {
    en: {
        noHistoryMessage: "No history available",
        tokenManagerTitle: "Token Manager",
        tokenNamePlaceholder: "Token Name",
        tokenInputPlaceholder: "Enter token",
        saveTokenButton: "Save Token",
        useTokenButton: "Use",
        deleteTokenButton: "Delete",
        noTokensMessage: "No tokens available",
        recentServicesButton: "Recent Services",
        recentServicesTitle: "Recently Used Services",
        noServicesMessage: "No services available",
        goToServiceButton: "Go",
        deleteServiceButton: "Delete",
        deleteConfirmMessage1: "Click twice more to delete",
        deleteConfirmMessage2: "Click once more to delete",
        tokenValidationError: "Please enter token and name"
    }, fa: {
        noHistoryMessage: "تاریخچه‌ای موجود نیست",
        tokenManagerTitle: "مدیریت توکن",
        tokenNamePlaceholder: "نام توکن",
        tokenInputPlaceholder: "توکن را وارد کنید",
        saveTokenButton: "ذخیره توکن",
        useTokenButton: "استفاده",
        deleteTokenButton: "حذف",
        noTokensMessage: "توکنی موجود نیست",
        recentServicesButton: "سرویس‌های اخیر",
        recentServicesTitle: "سرویس‌های اخیراً استفاده شده",
        noServicesMessage: "سرویسی موجود نیست",
        goToServiceButton: "برو",
        deleteServiceButton: "حذف",
        deleteConfirmMessage1: "دوبار دیگر کلیک کنید",
        deleteConfirmMessage2: "یکبار دیگر کلیک کنید",
        tokenValidationError: "لطفا توکن و نام آن را وارد کنید"
    }, tr: {
        noHistoryMessage: "Geçmiş bulunmamakta",
        tokenManagerTitle: "Token Yöneticisi",
        tokenNamePlaceholder: "Token Adı",
        tokenInputPlaceholder: "Token giriniz",
        saveTokenButton: "Token Kaydet",
        useTokenButton: "Kullan",
        deleteTokenButton: "Sil",
        noTokensMessage: "Token bulunmamakta",
        recentServicesButton: "Son Hizmetler",
        recentServicesTitle: "Son Kullanılan Hizmetler",
        noServicesMessage: "Hizmet bulunmamakta",
        goToServiceButton: "Git",
        deleteServiceButton: "Sil",
        deleteConfirmMessage1: "Silmek için iki kez daha tıklayın",
        deleteConfirmMessage2: "Silmek için bir kez daha tıklayın",
        tokenValidationError: "Lütfen token ve adını giriniz"
    }, az: {
        noHistoryMessage: "Tarixçə mövcud deyil",
        tokenManagerTitle: "Token İdarəçisi",
        tokenNamePlaceholder: "Token Adı",
        tokenInputPlaceholder: "Token daxil edin",
        saveTokenButton: "Token Saxla",
        useTokenButton: "İstifadə",
        deleteTokenButton: "Sil",
        noTokensMessage: "Token mövcud deyil",
        recentServicesButton: "Son Xidmətlər",
        recentServicesTitle: "Son İstifadə Edilən Xidmətlər",
        noServicesMessage: "Xidmət mövcud deyil",
        goToServiceButton: "Get",
        deleteServiceButton: "Sil",
        deleteConfirmMessage1: "Silmək üçün iki dəfə də klikləyin",
        deleteConfirmMessage2: "Silmək üçün bir dəfə də klikləyin",
        tokenValidationError: "Token və adını daxil edin"
    }, ar: {
        noHistoryMessage: "لا يوجد سجل متاح",
        tokenManagerTitle: "إدارة الرموز",
        tokenNamePlaceholder: "اسم الرمز",
        tokenInputPlaceholder: "أدخل الرمز",
        saveTokenButton: "حفظ الرمز",
        useTokenButton: "استخدام",
        deleteTokenButton: "حذف",
        noTokensMessage: "لا توجد رموز",
        recentServicesButton: "الخدمات الأخيرة",
        recentServicesTitle: "الخدمات المستخدمة مؤخراً",
        noServicesMessage: "لا توجد خدمات",
        goToServiceButton: "ذهاب",
        deleteServiceButton: "حذف",
        deleteConfirmMessage1: "انقر مرتين للحذف",
        deleteConfirmMessage2: "انقر مرة أخرى للحذف",
        tokenValidationError: "الرجاء إدخال الرمز والاسم"
    }, ru: {
        noHistoryMessage: "История недоступна",
        tokenManagerTitle: "Менеджер токенов",
        tokenNamePlaceholder: "Имя токена",
        tokenInputPlaceholder: "Введите токен",
        saveTokenButton: "Сохранить токен",
        useTokenButton: "Использовать",
        deleteTokenButton: "Удалить",
        noTokensMessage: "Нет доступных токенов",
        recentServicesButton: "Недавние сервисы",
        recentServicesTitle: "Недавно использованные сервисы",
        noServicesMessage: "Нет доступных сервисов",
        goToServiceButton: "Перейти",
        deleteServiceButton: "Удалить",
        deleteConfirmMessage1: "Нажмите еще два раза для удаления",
        deleteConfirmMessage2: "Нажмите еще раз для удаления",
        tokenValidationError: "Пожалуйста, введите токен и имя"
    }
};

class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('swagger_ui_language') || 'en';
        this.addLanguageSelector();

    }

    addLanguageSelector() {
        const selector = document.createElement('div');
        selector.className = 'language-selector';
        selector.innerHTML = `
            <select class="lang-select">
                <option value="en">English</option>
                <option value="fa">فارسی</option>
                <option value="tr">Türkçe</option>
                <option value="az">Azərbaycan</option>
                <option value="ar">العربية</option>
                <option value="ru">Русский</option>
            </select>
        `;

        const style = document.createElement('style');
        style.textContent = `
            .language-selector {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
            }
            .lang-select {
                padding: 8px 12px;
                border-radius: 4px;
                border: 1px solid #4990e2;
                background: white;
                cursor: pointer;
                font-family: system-ui;
                color: #2c3e50;
                transition: all 0.3s ease;
            }
            .lang-select:hover {
                border-color: #2c3e50;
            }
            [dir="rtl"] .language-selector {
                left: 20px;
                right: auto;
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(selector);

        const select = selector.querySelector('.lang-select');
        select.value = this.currentLang;
        select.addEventListener('change', (e) => this.changeLanguage(e.target.value));
    }


    changeLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('swagger_ui_language', lang);

        this.updateAllTexts();
    }

    getText(key) {
        return translations[this.currentLang]?.[key] || translations['en'][key] || key;
    }

    updateAllTexts() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.getText(key);
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.getText(key);
        });

    }
}

window.ElementBuilder = ElementBuilder;
window.i18n = new LanguageManager();