// swagger-history.js
(function() {
    // Wait for Swagger UI to load completely
    const waitForSwaggerUI = setInterval(() => {
        if (window.ui) {
            clearInterval(waitForSwaggerUI);
            initializeHistoryManager();
        }
    }, 100);

    function initializeHistoryManager() {
        // Listen only for Try it out button clicks
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('try-out__btn')) {
                const operationDOM = event.target.closest('.opblock');
                if (operationDOM) {
                    const operationId = operationDOM.getAttribute('id');
                    toggleHistory(operationId, operationDOM);
                }
            } else if (event.target.classList.contains('execute')) {
                const operationDOM = event.target.closest('.opblock');
                if (operationDOM) {
                    const operationId = operationDOM.getAttribute('id');
                    saveRequestData(operationId, operationDOM);
                }
            }
        });
    }

    function toggleHistory(operationId, operationDOM) {
        const existingContainer = operationDOM.querySelector('.history-container');
        if (existingContainer) {
            existingContainer.style.display = existingContainer.style.display === 'none' ? 'flex' : 'none';
        } else {
            createHistoryContainer(operationId, operationDOM);
        }
    }

    function createHistoryContainer(operationId, operationDOM) {
        const history = JSON.parse(localStorage.getItem(`swagger_history_${operationId}`) || '[]');

        const container = document.createElement('div');
        container.className = 'history-container';
        container.style.display = 'flex';
        container.style.gap = '10px';
        container.style.padding = '10px';
        container.style.margin = '10px 0';
        container.style.overflowX = 'auto';
        container.style.background = '#f8f9fa';
        container.style.borderRadius = '4px';
        container.style.flexWrap = 'nowrap';

        if (history.length === 0) {
            const emptyMessage = document.createElement('div');
            emptyMessage.style.color = '#666';
            emptyMessage.textContent = 'تاریخچه‌ای موجود نیست';
            container.appendChild(emptyMessage);
        } else {
            history.forEach((entry, index) => {
                container.appendChild(createHistoryEntry(entry, index, operationId, operationDOM));
            });
        }

        // Insert into opblock-section-header
        const headerSection = operationDOM.querySelector('.opblock-section-header');
        if (headerSection) {
            headerSection.appendChild(container);
        }
    }

    function createHistoryEntry(entry, index, operationId, operationDOM) {
        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.alignItems = 'center';
        wrapper.style.minWidth = 'fit-content';
        wrapper.style.background = 'white';
        wrapper.style.padding = '4px';
        wrapper.style.borderRadius = '4px';
        wrapper.style.boxShadow = '0 1px 2px rgba(0,0,0,0.1)';

        const timestamp = document.createElement('button');
        timestamp.className = 'btn history-btn';
        timestamp.style.marginRight = '5px';
        timestamp.style.padding = '4px 8px';
        timestamp.style.background = '#89bf04';
        timestamp.style.color = 'white';
        timestamp.style.border = 'none';
        timestamp.style.borderRadius = '4px';
        timestamp.style.cursor = 'pointer';
        timestamp.textContent = formatDateTime(entry.timestamp);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn delete-btn';
        deleteBtn.style.padding = '4px 8px';
        deleteBtn.style.background = '#ff4444';
        deleteBtn.style.color = 'white';
        deleteBtn.style.border = 'none';
        deleteBtn.style.borderRadius = '4px';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.textContent = '×';

        timestamp.onclick = () => restoreParameters(entry.parameters, operationDOM);
        deleteBtn.onclick = () => removeHistoryEntry(operationId, index, operationDOM);

        wrapper.appendChild(timestamp);
        wrapper.appendChild(deleteBtn);
        return wrapper;
    }

    function formatDateTime(timestamp) {
        const date = new Date(timestamp);
        const today = new Date();

        if (date.toDateString() === today.toDateString()) {
            return date.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' });
        }
        return date.toLocaleDateString('fa-IR', {
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    function removeHistoryEntry(operationId, index, operationDOM) {
        const history = JSON.parse(localStorage.getItem(`swagger_history_${operationId}`) || '[]');
        history.splice(index, 1);
        localStorage.setItem(`swagger_history_${operationId}`, JSON.stringify(history));
        updateHistoryDisplay(operationId, operationDOM);
    }

    function updateHistoryDisplay(operationId, operationDOM) {
        const container = operationDOM.querySelector('.history-container');
        if (container) {
            container.remove();
            createHistoryContainer(operationId, operationDOM);
        }
    }

    function saveRequestData(operationId, operationDOM) {
        const parameters = {};

        // Get body parameter
        const bodyTextarea = operationDOM.querySelector('.body-param__text');
        if (bodyTextarea && bodyTextarea.value) {
            parameters.body = bodyTextarea.value;
        }

        // Get other parameters
        operationDOM.querySelectorAll('.parameters tr').forEach(row => {
            const nameCell = row.querySelector('.parameters-col_name');
            const valueCell = row.querySelector('.parameters-col_description input, .parameters-col_description select');
            if (nameCell && valueCell && valueCell.value) {
                parameters[nameCell.textContent.trim()] = valueCell.value;
            }
        });

        // Don't save if no parameters
        if (Object.keys(parameters).length === 0) return;

        const history = JSON.parse(localStorage.getItem(`swagger_history_${operationId}`) || '[]');

        // Check for duplicates
        if (!history.some(entry => JSON.stringify(entry.parameters) === JSON.stringify(parameters))) {
            history.unshift({
                timestamp: new Date().toISOString(),
                parameters: parameters
            });

            // Keep only last 5 entries
            if (history.length > 5) history.pop();

            localStorage.setItem(`swagger_history_${operationId}`, JSON.stringify(history));
            updateHistoryDisplay(operationId, operationDOM);
        }
    }

    function restoreParameters(parameters, operationDOM) {
        // Restore body parameter
        if (parameters.body) {
            const bodyTextarea = operationDOM.querySelector('.body-param__text');
            if (bodyTextarea) {
                bodyTextarea.value = parameters.body;
                bodyTextarea.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }

        // Restore other parameters
        Object.entries(parameters).forEach(([name, value]) => {
            if (name !== 'body') {
                const row = Array.from(operationDOM.querySelectorAll('.parameters tr'))
                    .find(row => row.querySelector('.parameters-col_name')?.textContent.trim() === name);

                if (row) {
                    const input = row.querySelector('.parameters-col_description input, .parameters-col_description select');
                    if (input) {
                        input.value = value;
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                }
            }
        });
    }
})();