(function () {
    const styles = document.createElement('style');
    styles.textContent = `
        @import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css');
        
        .token-manager-wrapper {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 9999;
            display: flex;
            align-items: center;
            user-select: none;
        }
        
        .token-manager-trigger {
            background: #4990e2;
            color: white;
            border: none;
            border-radius: 0 8px 8px 0;
            padding: 10px 20px;
            cursor: pointer;
            font-family: "Vazirmatn", system-ui;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }

        .drag-handle {
            background: #3470b3;
            color: white;
            border: none;
            border-radius: 8px 0 0 8px;
            padding: 10px;
            margin-right: -1px;
            cursor: move;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .token-manager-popup {
            position: fixed;
            top: 70px;
            left: 20px;
            z-index: 9999;
            background: white;
            border-radius: 12px;
            width: 400px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            font-family: "Vazirmatn", system-ui;
            direction: rtl;
            display: none;
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.3s ease;
        }

        .token-manager-popup.active {
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
            padding: 20px;
            max-height: 500px;
            overflow-y: auto;
        }

        .token-form {
            display: grid;
            gap: 10px;
            margin-bottom: 20px;
        }

        .token-form input {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid #e0e0e0;
            border-radius: 6px;
            font-family: "Vazirmatn", system-ui;
            font-size: 14px;
             box-sizing: border-box;
        }

        .token-form button {
            background: #4990e2;
            color: white;
            border: none;
            border-radius: 6px;
            padding: 8px 16px;
            cursor: pointer;
            font-family: "Vazirmatn", system-ui;
            font-size: 14px;
            transition: all 0.2s ease;
            width: 100%;  /* عرض کامل مثل input ها */
            box-sizing: border-box;
        }

        .saved-tokens {
            display: grid;
            gap: 8px;
        }

        .token-item {
            display: flex;
            align-items: center;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 6px;
            border: 1px solid #eee;
            gap: 10px;
        }

        .token-item.active {
            border: 2px solid #4990e2;
            background: #f0f7ff;
        }

        .token-color {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }

        .token-info {
            flex: 1;
        }

        .token-actions {
            display: flex;
            gap: 6px;
        }

        .token-actions button {
            padding: 4px 8px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            font-family: "Vazirmatn", system-ui;
            color: white;
        }

        .use-token {
            background: #4990e2;
        }

        .delete-token {
            background: #e74c3c;
        }
    `;
    document.head.appendChild(styles);

    const container = document.createElement('div');
    container.innerHTML = `
        <div class="token-manager-wrapper">
            <div class="drag-handle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M8 6h8M8 12h8M8 18h8"></path>
                </svg>
            </div>
            <button class="token-manager-trigger" data-i18n="tokenManagerTitle">مدیریت توکن</button>
        </div>
        <div class="token-manager-popup">
            <div class="popup-header">
                <h3 data-i18n="tokenManagerTitle"></h3>
                <button class="close-popup" style="border: none; background: none; cursor: pointer;">✕</button>
            </div>
           <div class="popup-content">
   <div class="token-form">
       <input type="text" class="token-name" data-i18n-placeholder="tokenNamePlaceholder" placeholder="نام توکن">
       <input type="text" class="token-input" data-i18n-placeholder="tokenInputPlaceholder" placeholder="توکن را وارد کنید">
       <button data-i18n="saveTokenButton" class="save-token">ذخیره توکن</button>
   </div>
   <div class="saved-tokens"></div>
</div>
        </div>
    `;
    document.body.appendChild(container);
    window.i18n.updateAllTexts();

    const wrapper = document.querySelector('.token-manager-wrapper');
    const popup = document.querySelector('.token-manager-popup');
    const trigger = document.querySelector('.token-manager-trigger');
    const closeBtn = document.querySelector('.close-popup');
    const tokenInput = document.querySelector('.token-input');
    const tokenName = document.querySelector('.token-name');
    const saveButton = document.querySelector('.save-token');
    const savedTokensContainer = document.querySelector('.saved-tokens');

    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    wrapper.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        if (e.target.closest('.drag-handle')) {
            isDragging = true;
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, wrapper);
            updatePopupPosition();
        }
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }

    function updatePopupPosition() {
        const wrapperRect = wrapper.getBoundingClientRect();
        popup.style.left = `${wrapperRect.left}px`;
        popup.style.top = `${wrapperRect.bottom + 10}px`;
    }


    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        popup.classList.toggle('active');
        updatePopupPosition();
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        popup.classList.remove('active');
    });



    document.addEventListener('click', (e) => {

        if (!popup.classList.contains('active')) {
            return;
        }


        if (popup.contains(e.target) ||
            trigger.contains(e.target) ||
            e.target.closest('.use-token') ||
            e.target.closest('.delete-token') ||
            e.target.closest('.save-token')) {
            return;
        }

        popup.classList.remove('active');
    });

    function generateColor() {
        const colors = [
            '#1976D2', '#D32F2F', '#388E3C', '#7B1FA2',
            '#F57C00', '#00796B', '#303F9F', '#C2185B'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function updateFavicon(color) {
        const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
        favicon.type = 'image/svg+xml';
        favicon.rel = 'icon';
        favicon.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="${encodeURIComponent(color)}"/></svg>`;
        document.head.appendChild(favicon);
    }

    saveButton.addEventListener('click', () => {
        if (!tokenInput.value || !tokenName.value) {
            alert(window.i18n.getText('tokenValidationError'));
            return;
        }

        const tokens = JSON.parse(localStorage.getItem('swagger_tokens') || '[]');
        const newToken = {
            name: tokenName.value,
            token: tokenInput.value,
            color: generateColor()
        };
        tokens.push(newToken);
        localStorage.setItem('swagger_tokens', JSON.stringify(tokens));

        tokenInput.value = '';
        tokenName.value = '';
        loadSavedTokens();
    });

    function loadSavedTokens() {
        const tokens = JSON.parse(localStorage.getItem('swagger_tokens') || '[]');
        const activeToken = JSON.parse(localStorage.getItem('active_token') || 'null');

        savedTokensContainer.innerHTML = tokens.map((token, index) => `
    <div class="token-item ${activeToken?.name === token.name ? 'active' : ''}">
        <div class="token-color" style="background-color: ${token.color}"></div>
        <div class="token-info">${token.name}</div>
        <div class="token-actions">
            <button class="use-token" onclick="useToken(${index})" data-i18n="useTokenButton"></button>
            <button class="delete-token" onclick="deleteToken(${index})" data-i18n="deleteTokenButton"></button>
        </div>
    </div>
`).join('');
    }

    window.i18n.updateAllTexts();

    window.useToken = function (index) {
        const tokens = JSON.parse(localStorage.getItem('swagger_tokens') || '[]');
        const token = tokens[index];

        localStorage.setItem('active_token', JSON.stringify(token));
        document.title = `API - ${token.name}`;
        updateFavicon(token.color);

        if (window.ui && window.ui.preauthorizeApiKey) {
            try {
                window.ui.preauthorizeApiKey("bearerAuth", token.token);
            } catch (error) {
                console.log('SwaggerUI not ready, token will be applied when it loads');
            }
        }

        loadSavedTokens();
    };

    window.deleteToken = function (index) {
        const button = event.target;
        const originalText = button.textContent;

        if (!button.clickCount) {
            button.clickCount = 1;
            button.textContent = window.i18n.getText('deleteConfirmMessage1');
            button.style.background = '#ff9800';
        } else if (button.clickCount === 1) {
            button.clickCount = 2;
            button.textContent = window.i18n.getText('deleteConfirmMessage2');
            button.style.background = '#ff5722';
        } else {
            const tokens = JSON.parse(localStorage.getItem('swagger_tokens') || '[]');
            const activeToken = JSON.parse(localStorage.getItem('active_token') || 'null');

            if (activeToken?.name === tokens[index].name) {
                localStorage.removeItem('active_token');
                document.title = 'API';
                const favicon = document.querySelector('link[rel="icon"]');
                if (favicon) {
                    favicon.parentNode.removeChild(favicon);
                }
            }

            tokens.splice(index, 1);
            localStorage.setItem('swagger_tokens', JSON.stringify(tokens));
            loadSavedTokens();
            return;
        }

        setTimeout(() => {
            button.clickCount = 0;
            button.textContent = originalText;
            button.style.background = '#e74c3c';
        }, 3000);
    };


    loadSavedTokens();

    const activeToken = JSON.parse(localStorage.getItem('active_token') || 'null');
    if (activeToken) {
        updateFavicon(activeToken.color);
    }

    const checkInterval = setInterval(() => {
        const activeToken = JSON.parse(localStorage.getItem('active_token') || 'null');
        if (activeToken && window.ui && window.ui.preauthorizeApiKey) {
            window.ui.preauthorizeApiKey("bearerAuth", activeToken.token);
            updateFavicon(activeToken.color);
            clearInterval(checkInterval);
        }
    }, 1000);
})();