(function() {
    // اضافه کردن استایل‌ها
    const styles = document.createElement('style');
    styles.textContent = `
        .recent-services-wrapper {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            align-items: flex-end;
            user-select: none;
        }
        .recent-services-trigger {
            background: #4990e2;
            color: white;
            border: none;
            border-radius: 0 8px 8px 0;
            padding: 10px 20px;
            cursor: pointer;
            font-family: system-ui;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }
        .drag-handle {
            background: #3470b3;
            color: white;
            border: none;
            border-radius: 8px 0 0 8px;
            padding: 10px;
            cursor: move;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .recent-services-popup {
            position: fixed;
            bottom: 70px;
            right: 20px;
            z-index: 9999;
            background: white;
            border-radius: 12px;
            width: 400px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            font-family: system-ui;
            direction: rtl;
            display: none;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.3s ease;
        }
        .recent-services-popup.active {
            display: block;
            opacity: 1;
            transform: translateY(0);
        }
        .popup-header {
            padding: 15px 20px;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .popup-header h3 {
            margin: 0;
            color: #2c3e50;
            font-size: 16px;
        }
        .popup-content {
            padding: 10px;
            max-height: 400px;
            overflow-y: auto;
        }
        .service-item {
            display: flex;
            align-items: center;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 6px;
            border: 1px solid #eee;
            gap: 10px;
            margin-bottom: 8px;
        }
        .service-info {
            flex: 1;
            font-size: 14px;
        }
        .service-actions {
            display: flex;
            gap: 6px;
        }
        .service-actions button {
            padding: 4px 8px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            color: white;
        }
        .go-service {
            background: #4990e2;
        }
        .delete-service {
            background: #e74c3c;
        }
    `;
    document.head.appendChild(styles);

    // اضافه کردن HTML
    const container = document.createElement('div');
    container.innerHTML = `
        <div class="recent-services-wrapper">
            <div class="drag-handle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M8 6h8M8 12h8M8 18h8"></path>
                </svg>
            </div>
            <button class="recent-services-trigger">آخرین سرویس‌ها</button>
        </div>
        <div class="recent-services-popup">
            <div class="popup-header">
                <h3>آخرین سرویس‌های استفاده شده</h3>
                <button class="close-popup" style="border: none; background: none; cursor: pointer;">✕</button>
            </div>
            <div class="popup-content">
                <div class="services-list"></div>
            </div>
        </div>
    `;
    document.body.appendChild(container);

    // فانکشن اصلی برای پیدا کردن و رفتن به endpoint
    async function navigateToSwagger(path) {
        console.log('Looking for:', path);

        // باز کردن همه تگ‌های بسته
        function openAllTags() {
            const closedTags = Array.from(document.querySelectorAll('.opblock-tag-section:not(.is-open) .opblock-tag'));
            console.log('Found closed tags:', closedTags.length);

            return new Promise((resolve) => {
                function openNext(index = 0) {
                    if (index >= closedTags.length) {
                        resolve();
                        return;
                    }
                    closedTags[index].click();
                    setTimeout(() => openNext(index + 1), 100);
                }
                openNext();
            });
        }

        // باز کردن تگ‌ها و پیدا کردن endpoint
        await openAllTags();

        const pathElement = document.querySelector(`[data-path="${path}"]`);
        console.log('Found element:', pathElement);

        if (pathElement) {
            const opblock = pathElement.closest('.opblock');
            if (opblock) {
                if (!opblock.classList.contains('is-open')) {
                    const summary = opblock.querySelector('.opblock-summary');
                    if (summary) summary.click();
                }

                setTimeout(() => {
                    opblock.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });

                    opblock.style.transition = 'background-color 0.3s ease';
                    opblock.style.backgroundColor = '#ffd70033';
                    setTimeout(() => {
                        opblock.style.backgroundColor = '';
                    }, 1000);
                }, 150);

                return true;
            }
        }

        console.log('Element not found after opening all tags');
        return false;
    }

    // مدیریت سرویس‌های اخیر
    function addRecentService(path) {
        let services = JSON.parse(localStorage.getItem('recent_services') || '[]');

        // حذف اگر قبلاً وجود دارد
        services = services.filter(s => s !== path);

        // اضافه کردن به ابتدای لیست
        services.unshift(path);

        // نگه داشتن فقط 5 مورد آخر
        services = services.slice(0, 5);

        localStorage.setItem('recent_services', JSON.stringify(services));
        loadRecentServices();
    }

    function loadRecentServices() {
        const services = JSON.parse(localStorage.getItem('recent_services') || '[]');
        const servicesList = document.querySelector('.services-list');

        if (services.length === 0) {
            servicesList.innerHTML = '<div style="text-align: center; color: #666;">هیچ سرویسی ذخیره نشده است</div>';
            return;
        }

        servicesList.innerHTML = services.map((service, index) => `
            <div class="service-item">
                <div class="service-info">${service}</div>
                <div class="service-actions">
                    <button class="go-service" onclick="window.goToService('${service}')">برو</button>
                    <button class="delete-service" onclick="window.deleteService(${index})">حذف</button>
                </div>
            </div>
        `).join('');
    }

    // تنظیم event listeners
    const popup = document.querySelector('.recent-services-popup');
    const trigger = document.querySelector('.recent-services-trigger');
    const closeBtn = document.querySelector('.close-popup');

    trigger.addEventListener('click', () => {
        popup.classList.toggle('active');
        loadRecentServices();
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
    });

    document.addEventListener('click', (e) => {
        if (!popup.contains(e.target) && !trigger.contains(e.target)) {
            popup.classList.remove('active');
        }
    });

    // مانیتور کردن دکمه execute
    function monitorExecuteButtons() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    const executeButtons = document.querySelectorAll('.btn.execute.opblock-control__btn');
                    executeButtons.forEach(button => {
                        if (!button.dataset.monitored) {
                            button.dataset.monitored = 'true';
                            button.addEventListener('click', () => {
                                const pathElement = button.closest('.opblock').querySelector('[data-path]');
                                if (pathElement) {
                                    const path = pathElement.getAttribute('data-path');
                                    addRecentService(path);
                                }
                            });
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // توابع گلوبال برای استفاده
    window.goToService = function(path) {
        navigateToSwagger(path);
    };

    window.deleteService = function(index) {
        const services = JSON.parse(localStorage.getItem('recent_services') || '[]');
        services.splice(index, 1);
        localStorage.setItem('recent_services', JSON.stringify(services));
        loadRecentServices();
    };

    // شروع مانیتورینگ
    monitorExecuteButtons();

    // لود اولیه سرویس‌ها
    loadRecentServices();
})();