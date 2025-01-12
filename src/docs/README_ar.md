<div dir="rtl">

# SwaggerProPlus - أداة ذكية لإدارة Swagger UI

يقوم SwaggerProPlus بتحويل تجربة التعامل مع API من خلال إضافة ميزات ذكية إلى Swagger UI.

## جدول المحتويات 📑
- [المزايا الرئيسية](#المزايا-الرئيسية-)
- [التثبيت والإعداد](#التثبيت-والإعداد-%EF%B8%8F)
- [دليل الاستخدام](#دليل-الاستخدام-)
- [استكشاف الأخطاء وإصلاحها](#استكشاف-الأخطاء-وإصلاحها-)
- [الدعم](#الدعم-)
- [الترخيص](#الترخيص-)

## المزايا الرئيسية 🚀

### إدارة ذكية للرموز
**الميزات الرئيسية:**
- **تخزين رموز متعددة** بأسماء مختلفة للبيئات المختلفة
- **تحديد سريع للبيئة النشطة** من خلال لون الأيقونة وعنوان الصفحة
- **تبديل سريع** بين الرموز بنقرة واحدة
- **لوحة إدارة قابلة للسحب** للتكيف مع مساحة عملك

**الفوائد:**
- **تركيز معزز**: إزالة الحاجة للنسخ/اللصق المتكرر وتقليل الأخطاء البشرية
- **إدارة أفضل**: فصل واضح لبيئات العمل
- **توفير الوقت**: تقليل وقت إدارة وتبديل الرموز بنسبة 60٪

![لوحة إدارة الرموز](/docs/images/screenshots/token/token-manager-panel-ar.png)
![مؤشر لون الرمز](/docs/images/screenshots/token/token-color-indicator-ar.png)

### سجل API ذكي
**الميزات الرئيسية:**
- **تسجيل تلقائي** لآخر خمسة طلبات لكل API
- **استعادة سريعة** للمعلمات ومحتوى الطلب
- **إدارة بسيطة للسجل** مع إمكانية الحذف

**الفوائد:**
- **تركيز أفضل**: تقليل الحاجة لإعادة كتابة المعلمات المتكررة
- **اختبار أسرع**: إعادة استخدام الطلبات الناجحة السابقة
- **إنتاجية أعلى**: تقليل وقت اختبار وتطوير API بنسبة 50٪

![لوحة سجل الطلبات](/docs/images/screenshots/history/request-history-panel-ar.png)
![معلمات الطلب](/docs/images/screenshots/history/request-parameters-ar.png)

### وصول سريع للخدمات
**الميزات الرئيسية:**
- **قائمة ذكية** لآخر خمس واجهات API مستخدمة
- **تنقل تلقائي** إلى API المطلوب
- **تمييز ذكي** للتعرف السريع

**الفوائد:**
- **تركيز أفضل**: إزالة البحث والتنقل الطويل
- **سير عمل أكثر سلاسة**: وصول فوري إلى واجهات API الأكثر استخداماً
- **كفاءة متزايدة**: تقليل وقت الوصول إلى API بنسبة 45٪

![قائمة الخدمات الأخيرة](/docs/images/screenshots/services/recent-services-list-ar.png)
![التنقل بين الخدمات](/docs/images/screenshots/services/service-navigation-ar.png)

### واجهة متعددة اللغات
**الميزات الرئيسية:**
- **دعم 7 لغات** للفرق الدولية
- **إعدادات مستمرة** لتفضيلات المستخدم
- **واجهة موحدة** لجميع اللغات

**الفوائد:**
- **تعاون أفضل**: تواصل محسن في الفرق متعددة اللغات
- **تجربة مستخدم محسنة**: استخدام الواجهة باللغة الأم
- **مرونة**: تقليل وقت التدريب والتوثيق بنسبة 40٪

![اختيار اللغة](/docs/images/screenshots/language/language-dropdown-ar.png)
![واجهة RTL](/docs/images/screenshots/language/interface-rtl-ar.png)

## التثبيت والإعداد ⚡️

### الخطوة 1: الحصول على الملفات
قم بتنزيل أحدث إصدار من [SwaggerProPlus](https://github.com/username/SwaggerProPlus/releases).

### الخطوة 2: هيكل الملفات
رتب الملفات في الهيكل التالي:
<div dir="ltr">

```plaintext
src/main/resources/
├── static/
│   ├── js/
│   │   ├── i18n-config.js      # إدارة تعدد اللغات
│   │   ├── swagger-custom.js   # إدارة الرموز
│   │   ├── last-five.js        # الخدمات الأخيرة
│   │   └── request.js          # سجل الطلبات
│   ├── css/
│   │   └── swagger-custom.css  # الأنماط المخصصة
│   └── sw-pro.html            # الصفحة الرئيسية
```
</div>

![هيكل المشروع](/docs/images/screenshots/setup/file-structure-ar.png)

### الخطوة 3: إعداد Spring Boot
قم بإنشاء ملف `application.properties` أو `application.yml`:
<div dir="ltr">

```properties
# الإعدادات الأساسية
spring.application.name=swaggerProPlus
server.port=8088

# إعدادات Swagger UI
springdoc.swagger-ui.path=/swagger.html
springdoc.api-docs.path=/v3/api-docs
springdoc.swagger-ui.enabled=true
springdoc.api-docs.enabled=true
```
</div>

![إعدادات Spring](/docs/images/screenshots/setup/spring-config-ar.png)

### الخطوة 4: التشغيل
1. قم بتشغيل مشروع Spring Boot
2. انتقل إلى `http://patoghjobs.com:8088/sw-pro.html`
3. ستشاهد Swagger UI مع الميزات الجديدة

![إعداد ناجح](/docs/images/screenshots/setup/successful-setup-ar.png)

## دليل الاستخدام 📚

### إدارة الرموز
1. انقر على زر "إدارة الرموز" في أعلى الصفحة
2. قم بإنشاء رمز جديد لكل بيئة:
    - أدخل اسم البيئة (مثل: التطوير، الاختبار، الإنتاج)
    - أدخل الرمز
    - انقر على "حفظ"
3. يتم حفظ الرموز بألوان مختلفة
4. انقر على "استخدام" لتفعيل الرمز

![نموذج إنشاء الرمز](/docs/images/screenshots/token/token-creation-form-ar.png)
![عرض قائمة الرموز](/docs/images/screenshots/token/token-list-view-ar.png)

### سجل الطلبات
- يتم حفظ السجل تلقائياً لكل API
- انقر على الطابع الزمني لاستعادة المعلمات
- انقر مرتين على "حذف" للإزالة من السجل

![حذف من السجل](/docs/images/screenshots/history/history-deletion-ar.png)
![استعادة السجل](/docs/images/screenshots/history/history-restore-ar.png)

### الخدمات الأخيرة
- يتم عرض قائمة بآخر خمس واجهات API في الأسفل
- انقر على "ذهاب" للوصول السريع
- يتم ترتيب الخدمات حسب الاستخدام

![إدارة الخدمات](/docs/images/screenshots/services/service-management-ar.png)
![تمييز الخدمة](/docs/images/screenshots/services/service-highlight-ar.png)

### تغيير اللغة
- استخدم القائمة المنسدلة للغات في أعلى الصفحة
- يتم حفظ الإعدادات تلقائياً

![تبديل اللغة](/docs/images/screenshots/language/language-switch-ar.png)
![واجهة LTR](/docs/images/screenshots/language/interface-ltr-ar.png)

## استكشاف الأخطاء وإصلاحها 🔧

### شاشة بيضاء أو خطأ في التحميل
1. تحقق من مسارات الملفات في مجلد static
2. تحقق من وحدة تحكم المتصفح للأخطاء
3. تأكد من تثبيت Swagger UI بشكل صحيح

### مشاكل الرموز
1. تأكد من تفعيل localStorage في المتصفح
2. قم بتحديث الصفحة
3. أعد إدخال الرمز

### عدم ظهور السجل
1. تأكد من عدم مسح ذاكرة المتصفح
2. استخدم متصفحات محدثة

## الدعم 💬

### الإبلاغ عن المشكلات
للإبلاغ عن المشكلات والاقتراحات، يرجى التواصل مع فريق التطوير عبر dev@patoghjobs.com.

### النسخة التجريبية
لمشاهدة العرض التوضيحي واختبار الوظائف، قم بزيارة:
http://patoghjobs.com:8088/sw-pro.html

### اتصل بنا
- الموقع الإلكتروني: https://patoghjobs.com
- البريد الإلكتروني: dev@patoghjobs.com

## الترخيص 📝
هذا المشروع مرخص تحت Apache License 2.0.

---

**ملاحظة:** جميع لقطات الشاشة متوفرة في المجلد `/docs/images/screenshots/` مع لواحق اللغة المناسبة.

</div>
