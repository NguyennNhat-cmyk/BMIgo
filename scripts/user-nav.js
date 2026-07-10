(function () {
    const STORAGE_KEY = 'abdw_userAccount';

    function getStoredAccount() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch (error) {
            return null;
        }
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function renderNav() {
        const nav = document.querySelector('.user-nav');
        const trigger = document.querySelector('.user-nav__trigger');
        const menu = document.querySelector('.user-nav__menu');
        const infoBtn = document.querySelector('.user-nav__btn--info');
        const logoutBtn = document.querySelector('.user-nav__btn--logout');

        if (!nav || !trigger || !menu || !infoBtn || !logoutBtn) {
            return;
        }

        const account = getStoredAccount();

        if (account) {
            const displayName = account.fullName || account.username || 'Người dùng';
            trigger.innerHTML = `
                <span class="user-nav__icon">👤</span>
                <span class="user-nav__label">${escapeHtml(displayName)}</span>
                <span class="user-nav__caret">▾</span>
            `;
            trigger.classList.add('is-logged-in');
            nav.classList.add('is-logged-in');
            trigger.setAttribute('href', '#');
            trigger.setAttribute('aria-expanded', 'false');
            menu.hidden = true;
        } else {
            trigger.innerHTML = `
                <span class="user-nav__icon">👤</span>
                <span class="user-nav__label">Tài khoản</span>
            `;
            trigger.classList.remove('is-logged-in');
            nav.classList.remove('is-logged-in');
            trigger.setAttribute('href', 'dangky.html');
            trigger.setAttribute('aria-expanded', 'false');
            menu.hidden = true;
        }
    }

    function closeMenu() {
        const trigger = document.querySelector('.user-nav__trigger');
        const menu = document.querySelector('.user-nav__menu');
        if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
        }
        if (menu) {
            menu.hidden = true;
        }
    }

    function openMenu() {
        const trigger = document.querySelector('.user-nav__trigger');
        const menu = document.querySelector('.user-nav__menu');
        if (!menu || !document.querySelector('.user-nav').classList.contains('is-logged-in')) {
            return;
        }
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!isOpen));
        menu.hidden = isOpen;
    }

    function showInfoModal() {
        const account = getStoredAccount();
        if (!account) {
            return;
        }

        let modal = document.querySelector('.user-nav__modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.className = 'user-nav__modal';
            modal.hidden = true;
            modal.innerHTML = `
                <div class="user-nav__modal-card" role="dialog" aria-modal="true">
                    <div class="user-nav__modal-header">
                        <h3>Thông tin người dùng</h3>
                        <button type="button" class="user-nav__modal-close" aria-label="Đóng">×</button>
                    </div>
                    <div class="user-nav__modal-body"></div>
                </div>
            `;
            const nav = document.querySelector('.user-nav');
            if (nav) {
                nav.appendChild(modal);
            } else {
                document.body.appendChild(modal);
            }
        }

        const body = modal.querySelector('.user-nav__modal-body');
        const closeButton = modal.querySelector('.user-nav__modal-close');
        if (closeButton) {
            closeButton.onclick = function () {
                hideInfoModal();
            };
        }
        body.innerHTML = `
            <p><strong>Họ tên:</strong> ${escapeHtml(account.fullName || 'Chưa cập nhật')}</p>
            <p><strong>Tên đăng nhập:</strong> ${escapeHtml(account.username || 'Chưa cập nhật')}</p>
            <p><strong>Email:</strong> ${escapeHtml(account.email || 'Chưa cập nhật')}</p>
            <p><strong>Số điện thoại:</strong> ${escapeHtml(account.phone || 'Chưa cập nhật')}</p>
        `;

        modal.hidden = false;
        closeMenu();
    }

    function hideInfoModal() {
        const modal = document.querySelector('.user-nav__modal');
        if (modal) {
            modal.hidden = true;
        }
    }

    function bindEvents() {
        const trigger = document.querySelector('.user-nav__trigger');
        const menu = document.querySelector('.user-nav__menu');
        const infoBtn = document.querySelector('.user-nav__btn--info');
        const logoutBtn = document.querySelector('.user-nav__btn--logout');
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');

        if (trigger) {
            trigger.addEventListener("click", function (event) {
                if (trigger.classList.contains('is-logged-in')) {
                    event.preventDefault();
                    openMenu();
                }
            });
        }

        if (infoBtn) {
            infoBtn.addEventListener("click", function () {
                showInfoModal();
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener("click", function () {
                localStorage.removeItem(STORAGE_KEY);
                window.dispatchEvent(new Event('useraccountchanged'));
                closeMenu();
                window.location.reload();
            });
        }

        if (navToggle && navLinks) {
            navToggle.addEventListener('click', function () {
                const isOpen = navLinks.classList.toggle('is-open');
                navToggle.classList.toggle('is-active', isOpen);
                navToggle.setAttribute('aria-expanded', String(isOpen));
            });
        }

        document.addEventListener("click", function (event) {
            const nav = document.querySelector('.user-nav');
            const headerContainer = document.querySelector('.nav-container');
            const target = event.target;
            if (nav && !nav.contains(target)) {
                closeMenu();
            }
            if (headerContainer && !headerContainer.contains(target) && navToggle && navLinks) {
                navLinks.classList.remove('is-open');
                navToggle.classList.remove('is-active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                closeMenu();
                hideInfoModal();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === "Escape") {
                closeMenu();
                hideInfoModal();
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        renderNav();
        bindEvents();
    });

    window.addEventListener('useraccountchanged', renderNav);
    window.addEventListener('storage', renderNav);
})();
