# SwaggerProPlus - Akıllı Swagger UI Yönetim Aracı

SwaggerProPlus, Swagger UI'ya akıllı özellikler ekleyerek API deneyimini dönüştürür.

## İçindekiler 📑
- [Temel Faydalar](#temel-faydalar-)
- [Kurulum ve Ayarlar](#kurulum-ve-ayarlar-%EF%B8%8F)
- [Kullanım Kılavuzu](#kullanım-kılavuzu-)
- [Sorun Giderme](#sorun-giderme-)
- [Destek](#destek-)
- [Lisans](#lisans-)

## Temel Faydalar 🚀

### Akıllı Token Yönetimi
**Temel Özellikler:**
- **Birden çok token saklama** farklı ortamlar için farklı isimlerle
- **Aktif ortamı hızlı tanıma** favicon rengi ve sayfa başlığı ile
- **Hızlı token değiştirme** tek tıklama ile
- **Sürüklenebilir yönetim paneli** çalışma alanınıza uyum için

**Faydalar:**
- **Gelişmiş Odaklanma**: Tekrarlayan kopyala/yapıştır işlemlerini ortadan kaldırır
- **Daha İyi Yönetim**: Çalışma ortamlarının net ayrımı
- **Zaman Tasarrufu**: Token yönetiminde %60 zaman tasarrufu

![Token Yönetim Paneli](/docs/images/screenshots/token/token-manager-panel-tr.png)
![Token Renk Göstergesi](/docs/images/screenshots/token/token-color-indicator-tr.png)

### Akıllı API Geçmişi
**Temel Özellikler:**
- **Otomatik kayıt** her API için son beş istek
- **Hızlı parametre kurtarma** ve istek içeriği
- **Basit geçmiş yönetimi** silme özelliği ile

**Faydalar:**
- **Daha İyi Odaklanma**: Tekrarlayan parametreleri yeniden yazma ihtiyacını azaltır
- **Daha Hızlı Test**: Önceki başarılı istekleri yeniden kullanma
- **Yüksek Verimlilik**: API test ve geliştirmede %50 zaman tasarrufu

![İstek Geçmiş Paneli](/docs/images/screenshots/history/request-history-panel-tr.png)
![İstek Parametreleri](/docs/images/screenshots/history/request-parameters-tr.png)

### Hızlı Servis Erişimi
**Temel Özellikler:**
- **Akıllı listeleme** son kullanılan beş API
- **Otomatik gezinme** istenen API'ye
- **Akıllı vurgulama** hızlı tanımlama için

**Faydalar:**
- **Daha İyi Odaklanma**: Uzun arama ve gezinmeyi ortadan kaldırır
- **Daha Akıcı İş Akışı**: Sık kullanılan API'lere anında erişim
- **Artırılmış Verimlilik**: API erişiminde %45 zaman tasarrufu

![Son Servisler Listesi](/docs/images/screenshots/services/recent-services-list-tr.png)
![Servis Gezinme](/docs/images/screenshots/services/service-navigation-tr.png)

### Çok Dilli Arayüz
**Temel Özellikler:**
- **7 dil desteği** uluslararası ekipler için
- **Kalıcı ayarlar** kullanıcı tercihleri için
- **Birleşik arayüz** tüm diller için

**Faydalar:**
- **Daha İyi İşbirliği**: Çok dilli ekiplerde gelişmiş iletişim
- **Gelişmiş Kullanıcı Deneyimi**: Ana dilde arayüz kullanımı
- **Esneklik**: Eğitim ve dokümantasyonda %40 zaman tasarrufu

![Dil Seçimi](/docs/images/screenshots/language/language-dropdown-tr.png)
![RTL Arayüzü](/docs/images/screenshots/language/interface-rtl-tr.png)

## Kurulum ve Ayarlar ⚡️

### Adım 1: Dosyaları Edinme
[SwaggerProPlus](https://github.com/username/SwaggerProPlus/releases) adresinden son sürümü indirin.

### Adım 2: Dosya Yapısı
Dosyaları aşağıdaki yapıda düzenleyin:
```plaintext
src/main/resources/
├── static/
│   ├── js/
│   │   ├── i18n-config.js      # Çoklu dil yönetimi
│   │   ├── swagger-custom.js   # Token yönetimi
│   │   ├── last-five.js        # Son servisler
│   │   └── request.js          # İstek geçmişi
│   ├── css/
│   │   └── swagger-custom.css  # Özel stiller
│   └── sw-pro.html            # Ana sayfa
```

![Proje Yapısı](/docs/images/screenshots/setup/file-structure-tr.png)

### Adım 3: Spring Boot Yapılandırması
`application.properties` veya `application.yml` dosyasını oluşturun:
```properties
# Temel ayarlar
spring.application.name=swaggerProPlus
server.port=8088

# Swagger UI ayarları
springdoc.swagger-ui.path=/swagger.html
springdoc.api-docs.path=/v3/api-docs
springdoc.swagger-ui.enabled=true
springdoc.api-docs.enabled=true
```

![Spring Yapılandırması](/docs/images/screenshots/setup/spring-config-tr.png)

### Adım 4: Başlatma
1. Spring Boot projesini çalıştırın
2. `http://patoghjobs.com:8088/sw-pro.html` adresine gidin
3. Yeni özellikleri olan Swagger UI'ı göreceksiniz

![Başarılı Kurulum](/docs/images/screenshots/setup/successful-setup-tr.png)

## Kullanım Kılavuzu 📚

### Token Yönetimi
1. Sayfanın üstündeki "Token Yöneticisi" düğmesine tıklayın
2. Her ortam için yeni token oluşturun:
    - Ortam adını girin (örn: geliştirme, test, üretim)
    - Token'ı girin
    - "Kaydet"e tıklayın
3. Token'lar farklı renklerle kaydedilir
4. Token'ı etkinleştirmek için "Kullan"a tıklayın

![Token Oluşturma Formu](/docs/images/screenshots/token/token-creation-form-tr.png)
![Token Liste Görünümü](/docs/images/screenshots/token/token-list-view-tr.png)

### İstek Geçmişi
- Geçmiş her API için otomatik olarak kaydedilir
- Parametreleri geri yüklemek için zaman damgasına tıklayın
- Geçmişten silmek için "Sil"e çift tıklayın

![Geçmiş Silme](/docs/images/screenshots/history/history-deletion-tr.png)
![Geçmiş Geri Yükleme](/docs/images/screenshots/history/history-restore-tr.png)

### Son Servisler
- Beş son API listesi altta gösterilir
- Hızlı erişim için "Git"e tıklayın
- Servisler kullanıma göre sıralanır

![Servis Yönetimi](/docs/images/screenshots/services/service-management-tr.png)
![Servis Vurgulama](/docs/images/screenshots/services/service-highlight-tr.png)

### Dil Değişiklikleri
- Sayfanın üstündeki dil açılır menüsünü kullanın
- Ayarlar otomatik olarak kaydedilir

![Dil Değiştirme](/docs/images/screenshots/language/language-switch-tr.png)
![LTR Arayüzü](/docs/images/screenshots/language/interface-ltr-tr.png)

## Sorun Giderme 🔧

### Beyaz Ekran veya Yükleme Hatası
1. Static klasöründeki dosya yollarını kontrol edin
2. Tarayıcı konsolunu hatalar için kontrol edin
3. Swagger UI kurulumunu doğrulayın

### Token Sorunları
1. Tarayıcı localStorage'ın etkin olduğundan emin olun
2. Sayfayı yenileyin
3. Token'ı yeniden girin

### Eksik Geçmiş
1. Tarayıcı belleğinin temizlenmediğinden emin olun
2. Güncel tarayıcılar kullanın

## Destek 💬

### Sorun Bildirimi
Sorunlar ve öneriler için geliştirme ekibiyle dev@patoghjobs.com üzerinden iletişime geçin.

### Demo Sürüm
Canlı demo ve işlevsellik testi için ziyaret edin:
http://patoghjobs.com:8088/sw-pro.html

### Bize Ulaşın
- Web sitesi: https://patoghjobs.com
- E-posta: dev@patoghjobs.com

## Lisans 📝
Bu proje Apache License 2.0 altında lisanslanmıştır.

---

**Not:** Tüm ekran görüntüleri `/docs/images/screenshots/` dizininde ilgili dil son ekleriyle bulunabilir.
