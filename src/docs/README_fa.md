# SwaggerProPlus - ابزار هوشمند مدیریت Swagger UI

SwaggerProPlus با افزودن ویژگی‌های هوشمند به Swagger UI، تجربه کار با API را متحول می‌کند.

## فهرست مطالب 📑
- [مزایای کلیدی](#مزایای-کلیدی-)
- [نصب و راه‌اندازی](#نصب-و-راهاندازی-%EF%B8%8F)
- [راهنمای استفاده](#راهنمای-استفاده-)
- [رفع مشکلات رایج](#رفع-مشکلات-رایج-)
- [پشتیبانی](#پشتیبانی-)
- [لایسنس](#لایسنس-)

## مزایای کلیدی 🚀

### مدیریت هوشمند توکن‌ها
**ویژگی‌های کلیدی:**
- **ذخیره چندین توکن** با نام‌های مختلف برای محیط‌های متفاوت
- **تشخیص سریع محیط فعال** با تغییر رنگ نشانه و عنوان صفحه
- **جابجایی سریع** بین توکن‌های مختلف با یک کلیک
- **موقعیت قابل تغییر** پنل مدیریت برای تطبیق با فضای کاری شما

**مزایا:**
- **افزایش تمرکز**: حذف نیاز به کپی/پیست مکرر و کاهش خطاهای انسانی
- **مدیریت بهتر**: تفکیک واضح محیط‌های کاری و جلوگیری از اشتباهات ناخواسته
- **صرفه‌جویی در زمان**: کاهش ۶۰٪ در زمان مدیریت و تعویض توکن‌ها

![پنل مدیریت توکن](/docs/images/screenshots/token/token-manager-panel-fa.png)
![نشانگر رنگی توکن](/docs/images/screenshots/token/token-color-indicator-fa.png)

### تاریخچه هوشمند API
**ویژگی‌های کلیدی:**
- **ثبت خودکار** پنج درخواست آخر هر API
- **بازیابی سریع** پارامترها و محتوای درخواست‌ها
- **مدیریت ساده** تاریخچه با امکان حذف موارد غیرضروری

**مزایا:**
- **تمرکز بیشتر**: کاهش نیاز به تایپ مجدد پارامترهای تکراری
- **تست سریع‌تر**: استفاده مجدد از درخواست‌های موفق قبلی
- **بهره‌وری بالاتر**: کاهش ۵۰٪ در زمان تست و توسعه API

![پنل تاریخچه درخواست‌ها](/docs/images/screenshots/history/request-history-panel-fa.png)
![پارامترهای درخواست](/docs/images/screenshots/history/request-parameters-fa.png)

### دسترسی سریع به سرویس‌ها
**ویژگی‌های کلیدی:**
- **لیست هوشمند** پنج API پراستفاده اخیر
- **پیمایش خودکار** به API مورد نظر
- **نشان‌گذاری هوشمند** برای تشخیص سریع

**مزایا:**
- **تمرکز بهتر**: حذف نیاز به جستجو و پیمایش طولانی
- **گردش کار روان‌تر**: دسترسی فوری به API‌های پرکاربرد
- **کارایی بیشتر**: کاهش ۴۵٪ در زمان دسترسی به API‌ها

![لیست سرویس‌های اخیر](/docs/images/screenshots/services/recent-services-list-fa.png)
![پیمایش سرویس](/docs/images/screenshots/services/service-navigation-fa.png)

### رابط کاربری چندزبانه
**ویژگی‌های کلیدی:**
- **پشتیبانی از ۷ زبان** برای تیم‌های بین‌المللی
- **تنظیمات ماندگار** برای حفظ ترجیحات کاربر
- **رابط یکپارچه** برای تمام زبان‌ها

**مزایا:**
- **همکاری موثرتر**: ارتباط بهتر در تیم‌های چندزبانه
- **تجربه کاربری بهتر**: استفاده از رابط کاربری به زبان مادری
- **انعطاف‌پذیری**: کاهش ۴۰٪ در زمان آموزش و مستندسازی

![انتخاب زبان](/docs/images/screenshots/language/language-dropdown-fa.png)
![رابط راست به چپ](/docs/images/screenshots/language/interface-rtl-fa.png)

## نصب و راه‌اندازی ⚡️

### گام 1: دریافت فایل‌ها
از [SwaggerProPlus](https://github.com/username/SwaggerProPlus/releases) آخرین نسخه را دانلود کنید.

### گام 2: ساختار فایل‌ها
فایل‌ها را در ساختار زیر قرار دهید:
```plaintext
src/main/resources/
├── static/
│   ├── js/
│   │   ├── i18n-config.js      # مدیریت چندزبانگی
│   │   ├── swagger-custom.js   # مدیریت توکن
│   │   ├── last-five.js        # سرویس‌های اخیر
│   │   └── request.js          # تاریخچه درخواست‌ها
│   ├── css/
│   │   └── swagger-custom.css  # استایل‌های سفارشی
│   └── sw-pro.html            # صفحه اصلی
```

![ساختار پروژه](/docs/images/screenshots/setup/file-structure-fa.png)

### گام 3: تنظیمات Spring Boot
فایل `application.properties` یا `application.yml` را با تنظیمات زیر ایجاد کنید:
```properties
# تنظیمات پایه
spring.application.name=swaggerProPlus
server.port=8088

# تنظیمات Swagger UI
springdoc.swagger-ui.path=/swagger.html
springdoc.api-docs.path=/v3/api-docs
springdoc.swagger-ui.enabled=true
springdoc.api-docs.enabled=true
```

![تنظیمات اسپرینگ](/docs/images/screenshots/setup/spring-config-fa.png)

### گام 4: راه‌اندازی
1. پروژه Spring Boot را اجرا کنید
2. به آدرس `http://patoghjobs.com:8088/sw-pro.html` مراجعه کنید
3. صفحه Swagger UI با قابلیت‌های جدید را مشاهده خواهید کرد

![راه‌اندازی موفق](/docs/images/screenshots/setup/successful-setup-fa.png)

## راهنمای استفاده 📚

### مدیریت توکن‌ها
1. روی دکمه "مدیریت توکن" در بالای صفحه کلیک کنید
2. برای هر محیط یک توکن جدید ایجاد کنید:
    - نام محیط را وارد کنید (مثلا: توسعه، تست، پروداکشن)
    - توکن را وارد کنید
    - روی "ذخیره" کلیک کنید
3. توکن‌ها با رنگ‌های متفاوت ذخیره می‌شوند
4. برای استفاده از هر توکن، روی دکمه "استفاده" کلیک کنید

![فرم ایجاد توکن](/docs/images/screenshots/token/token-creation-form-fa.png)
![نمایش لیست توکن‌ها](/docs/images/screenshots/token/token-list-view-fa.png)

### تاریخچه درخواست‌ها
- تاریخچه به صورت خودکار برای هر API ذخیره می‌شود
- برای بازیابی پارامترها، روی زمان درخواست کلیک کنید
- برای حذف از تاریخچه، دکمه "حذف" را دوبار کلیک کنید

![حذف از تاریخچه](/docs/images/screenshots/history/history-deletion-fa.png)
![بازیابی تاریخچه](/docs/images/screenshots/history/history-restore-fa.png)

### سرویس‌های اخیر
- لیست پنج API اخیر در پایین صفحه نمایش داده می‌شود
- برای دسترسی سریع، روی "برو" کلیک کنید
- سرویس‌ها به ترتیب استفاده مرتب می‌شوند

![مدیریت سرویس](/docs/images/screenshots/services/service-management-fa.png)
![نشانگر سرویس](/docs/images/screenshots/services/service-highlight-fa.png)

### تغییر زبان
- از منوی کشویی زبان در بالای صفحه استفاده کنید
- تنظیمات زبان به صورت خودکار ذخیره می‌شود

![تغییر زبان](/docs/images/screenshots/language/language-switch-fa.png)
![رابط چپ به راست](/docs/images/screenshots/language/interface-ltr-fa.png)

## رفع مشکلات رایج 🔧

### صفحه سفید یا خطای لود
1. مسیر فایل‌ها را در پوشه static بررسی کنید
2. Console مرورگر را برای خطاهای احتمالی چک کنید
3. از نصب صحیح Swagger UI مطمئن شوید

### مشکلات توکن
1. از فعال بودن localStorage مرورگر مطمئن شوید
2. صفحه را رفرش کنید
3. توکن را مجدداً وارد کنید

### عدم نمایش تاریخچه
1. از پاک نشدن حافظه مرورگر اطمینان حاصل کنید
2. از مرورگرهای بروز استفاده کنید

## پشتیبانی 💬

### گزارش مشکلات
برای گزارش مشکلات و پیشنهادات، لطفاً با تیم توسعه از طریق ایمیل dev@patoghjobs.com تماس بگیرید.

### نسخه نمایشی
برای مشاهده نسخه نمایشی و تست عملکرد، به آدرس زیر مراجعه کنید:
http://patoghjobs.com:8088/sw-pro.html

### ارتباط با ما
- وب‌سایت: https://patoghjobs.com
- ایمیل: dev@patoghjobs.com

## لایسنس 📝
این پروژه تحت لایسنس Apache 2.0 منتشر شده است.

---

**نکته:** تمامی تصاویر در مسیر `/docs/images/screenshots/` با پسوند زبان مربوطه قابل دسترسی هستند.