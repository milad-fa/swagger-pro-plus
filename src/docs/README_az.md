# SwaggerProPlus - İntellektual Swagger UI İdarəetmə Aləti

SwaggerProPlus Swagger UI-yə intellektual xüsusiyyətlər əlavə edərək API təcrübəsini dəyişdirir.

## Mündəricat 📑
- [Əsas Üstünlüklər](#əsas-üstünlüklər-)
- [Quraşdırma və Tənzimləmə](#quraşdırma-və-tənzimləmə-%EF%B8%8F)
- [İstifadə Təlimatı](#istifadə-təlimatı-)
- [Problemlərin Həlli](#problemlərin-həlli-)
- [Dəstək](#dəstək-)
- [Lisenziya](#lisenziya-)

## Əsas Üstünlüklər 🚀

### İntellektual Token İdarəetməsi
**Əsas Xüsusiyyətlər:**
- **Müxtəlif tokenlərin saxlanması** fərqli mühitlər üçün müxtəlif adlarla
- **Aktiv mühitin sürətli müəyyənləşdirilməsi** favicon rəngi və səhifə başlığı ilə
- **Sürətli token dəyişdirmə** bir klik ilə
- **Sürüşdürülə bilən idarəetmə paneli** iş sahənizə uyğunlaşdırma üçün

**Üstünlüklər:**
- **Artırılmış Fokus**: Təkrarlanan kopyala/yapışdır əməliyyatlarını aradan qaldırır
- **Daha Yaxşı İdarəetmə**: İş mühitlərinin aydın ayrılması
- **Vaxt Qənaəti**: Token idarəetməsində 60% vaxt qənaəti

![Token İdarəetmə Paneli](/docs/images/screenshots/token/token-manager-panel-az.png)
![Token Rəng İndikatoru](/docs/images/screenshots/token/token-color-indicator-az.png)

### Ağıllı API Tarixçəsi
**Əsas Xüsusiyyətlər:**
- **Avtomatik qeydiyyat** hər API üçün son beş sorğu
- **Sürətli parametr bərpası** və sorğu məzmunu
- **Sadə tarixçə idarəetməsi** silmə imkanı ilə

**Üstünlüklər:**
- **Daha Yaxşı Fokus**: Təkrarlanan parametrləri yenidən yazmaq ehtiyacını azaldır
- **Daha Sürətli Test**: Əvvəlki uğurlu sorğulardan yenidən istifadə
- **Yüksək Məhsuldarlıq**: API test və inkişafında 50% vaxt qənaəti

![Sorğu Tarixçəsi Paneli](/docs/images/screenshots/history/request-history-panel-az.png)
![Sorğu Parametrləri](/docs/images/screenshots/history/request-parameters-az.png)

### Sürətli Servis Girişi
**Əsas Xüsusiyyətlər:**
- **Ağıllı siyahı** son istifadə edilən beş API
- **Avtomatik naviqasiya** istənilən API-yə
- **Ağıllı vurğulama** sürətli tanıma üçün

**Üstünlüklər:**
- **Daha Yaxşı Fokus**: Uzun axtarış və naviqasiyanı aradan qaldırır
- **Daha Səlis İş Axını**: Tez-tez istifadə edilən API-lərə ani giriş
- **Artırılmış Effektivlik**: API girişində 45% vaxt qənaəti

![Son Servislər Siyahısı](/docs/images/screenshots/services/recent-services-list-az.png)
![Servis Naviqasiyası](/docs/images/screenshots/services/service-navigation-az.png)

### Çoxdilli İnterfeys
**Əsas Xüsusiyyətlər:**
- **7 dil dəstəyi** beynəlxalq komandalar üçün
- **Davamlı tənzimləmələr** istifadəçi seçimləri üçün
- **Vahid interfeys** bütün dillər üçün

**Üstünlüklər:**
- **Daha Yaxşı Əməkdaşlıq**: Çoxdilli komandalarda daha yaxşı ünsiyyət
- **Təkmilləşdirilmiş İstifadəçi Təcrübəsi**: Ana dildə interfeys istifadəsi
- **Çeviklik**: Təlim və sənədləşdirmədə 40% vaxt qənaəti

![Dil Seçimi](/docs/images/screenshots/language/language-dropdown-az.png)
![RTL İnterfeysi](/docs/images/screenshots/language/interface-rtl-az.png)

## Quraşdırma və Tənzimləmə ⚡️

### Addım 1: Faylları Əldə Edin
[SwaggerProPlus](https://github.com/username/SwaggerProPlus/releases) son versiyasını endirin.

### Addım 2: Fayl Strukturu
Faylları aşağıdakı strukturda yerləşdirin:
```plaintext
src/main/resources/
├── static/
│   ├── js/
│   │   ├── i18n-config.js      # Çoxdilli idarəetmə
│   │   ├── swagger-custom.js   # Token idarəetməsi
│   │   ├── last-five.js        # Son servislər
│   │   └── request.js          # Sorğu tarixçəsi
│   ├── css/
│   │   └── swagger-custom.css  # Xüsusi stillər
│   └── sw-pro.html            # Əsas səhifə
```

![Layihə Strukturu](/docs/images/screenshots/setup/file-structure-az.png)

### Addım 3: Spring Boot Tənzimləmələri
`application.properties` və ya `application.yml` faylını yaradın:
```properties
# Əsas tənzimləmələr
spring.application.name=swaggerProPlus
server.port=8088

# Swagger UI tənzimləmələri
springdoc.swagger-ui.path=/swagger.html
springdoc.api-docs.path=/v3/api-docs
springdoc.swagger-ui.enabled=true
springdoc.api-docs.enabled=true
```

![Spring Tənzimləmələri](/docs/images/screenshots/setup/spring-config-az.png)

### Addım 4: Başladın
1. Spring Boot layihəsini işə salın
2. `http://patoghjobs.com:8088/sw-pro.html` ünvanına daxil olun
3. Yeni xüsusiyyətləri olan Swagger UI-ni görəcəksiniz

![Uğurlu Quraşdırma](/docs/images/screenshots/setup/successful-setup-az.png)

## İstifadə Təlimatı 📚

### Token İdarəetməsi
1. Səhifənin yuxarısındakı "Token İdarəçisi" düyməsinə klikləyin
2. Hər mühit üçün yeni token yaradın:
    - Mühit adını daxil edin (məsələn: inkişaf, test, istehsalat)
    - Tokeni daxil edin
    - "Yadda Saxla" düyməsinə klikləyin
3. Tokenlər müxtəlif rənglərlə yadda saxlanılır
4. Tokeni aktivləşdirmək üçün "İstifadə" düyməsinə klikləyin

![Token Yaratma Forması](/docs/images/screenshots/token/token-creation-form-az.png)
![Token Siyahı Görünüşü](/docs/images/screenshots/token/token-list-view-az.png)

### Sorğu Tarixçəsi
- Tarixçə hər API üçün avtomatik olaraq yadda saxlanılır
- Parametrləri bərpa etmək üçün vaxt möhürünə klikləyin
- Tarixçədən silmək üçün "Sil" düyməsinə iki dəfə klikləyin

![Tarixçə Silmə](/docs/images/screenshots/history/history-deletion-az.png)
![Tarixçə Bərpası](/docs/images/screenshots/history/history-restore-az.png)

### Son Servislər
- Beş son API siyahısı aşağıda göstərilir
- Sürətli giriş üçün "Get" düyməsinə klikləyin
- Servislər istifadəyə görə sıralanır

![Servis İdarəetməsi](/docs/images/screenshots/services/service-management-az.png)
![Servis Vurğulaması](/docs/images/screenshots/services/service-highlight-az.png)

### Dil Dəyişiklikləri
- Səhifənin yuxarısındakı dil açılan menyusundan istifadə edin
- Tənzimləmələr avtomatik yadda saxlanılır

![Dil Dəyişmə](/docs/images/screenshots/language/language-switch-az.png)
![LTR İnterfeysi](/docs/images/screenshots/language/interface-ltr-az.png)

## Problemlərin Həlli 🔧

### Ağ Ekran və ya Yükləmə Xətası
1. Static qovluğunda fayl yollarını yoxlayın
2. Brauzer konsolunu xətalar üçün yoxlayın
3. Swagger UI quraşdırılmasını təsdiqləyin

### Token Problemləri
1. Brauzerin localStorage-nin aktiv olduğundan əmin olun
2. Səhifəni yeniləyin
3. Tokeni yenidən daxil edin

### Çatışmayan Tarixçə
1. Brauzer yaddaşının təmizlənmədiyini yoxlayın
2. Yenilənmiş brauzerlərdən istifadə edin

## Dəstək 💬

### Problem Bildirişi
Problem və təkliflər üçün dev@patoghjobs.com vasitəsilə inkişaf komandası ilə əlaqə saxlayın.

### Demo Versiya
Canlı demo və funksionallığı test etmək üçün ziyarət edin:
http://patoghjobs.com:8088/sw-pro.html

### Bizimlə Əlaqə
- Vebsayt: https://patoghjobs.com
- E-poçt: dev@patoghjobs.com

## Lisenziya 📝
Bu layihə Apache License 2.0 altında lisenziyalaşdırılıb.

---

**Qeyd:** Bütün ekran görüntüləri `/docs/images/screenshots/` qovluğunda müvafiq dil sonluqları ilə tapıla bilər.
