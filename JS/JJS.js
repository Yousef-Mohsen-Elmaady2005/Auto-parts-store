// ====================================================== Start Login Modal ======================================================
document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.querySelector(".button-nav.button-nav2");
  var registerButton = document.querySelector(".button-nav:not(.button-nav2)");
  var overlay = document.getElementById("loginOverlay");
  var otpInputs = document.querySelectorAll(".otp-input");

  if (loginButton && overlay) {
    loginButton.addEventListener("click", function () {
      overlay.style.display = "flex";
      switchTab("login");
    });
  }

  if (registerButton && overlay) {
    registerButton.addEventListener("click", function () {
      overlay.style.display = "flex";
      switchTab("register");
    });
  }

  if (overlay) {
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        closeLoginModal();
      }
    });
  }
  otpInputs.forEach(function (input, index) {
    input.addEventListener("input", function () {
      input.value = input.value.replace(/\D/g, "").slice(0, 1);

      if (input.value && otpInputs[index + 1]) {
        otpInputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", function (event) {
      if (event.key === "Backspace" && !input.value && otpInputs[index - 1]) {
        otpInputs[index - 1].focus();
      }
    });
  });
});
function closeLoginModal() {
  var overlay = document.getElementById("loginOverlay");

  if (overlay) {
    overlay.style.display = "none";
  }
}

function switchTab(tab) {
  var isLogin = tab === "login";

  setActivePanel(isLogin ? "login" : "register");
  document.getElementById("tab-login").classList.toggle("active", isLogin);
  document.getElementById("tab-register").classList.toggle("active", !isLogin);
}

function showLoginStep(step) {
  setActivePanel(step);
  document.getElementById("tab-login").classList.add("active");
  document.getElementById("tab-register").classList.remove("active");
}

function setActivePanel(panelName) {
  var panels = document.querySelectorAll(".login-panel");

  panels.forEach(function (panel) {
    panel.classList.remove("active");
  });
  document.getElementById("panel-" + panelName).classList.add("active");
}
// ====================================================== End Login Modal ======================================================
// ====================================================== Start Section 5 ======================================================
function scrollCards(direction) {
    const wrapper = document.getElementById('cardsWrapper');
    const cardWidth = wrapper.querySelector('.card-item').offsetWidth + 20;
    wrapper.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth'
    });
}
// ====================================================== End Section 5 ======================================================
// ====================================================== Start Scroll To Top Button ======================================================
document.addEventListener("DOMContentLoaded", function () {
  var scrollTopButton = document.querySelector(".scroll-top-btn");

  if (!scrollTopButton) {
    return;
  }

  function toggleScrollTopButton() {
    scrollTopButton.classList.toggle("show", window.scrollY > 250);
  }

  scrollTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  toggleScrollTopButton();
  window.addEventListener("scroll", toggleScrollTopButton);
});
// ====================================================== End Scroll To Top Button ======================================================
// =========================Start site bar===================
document.addEventListener("DOMContentLoaded", function () {
  var filterButton = document.querySelector(".end-content-sction1");
  var filterSidebar = document.getElementById("filterSidebar");
  var filterOverlay = document.getElementById("filterSidebarOverlay");
  var filterClose = document.querySelector(".filter-sidebar-close");
  if (!filterButton || !filterSidebar || !filterOverlay) {
    return;
  }
  function openFilterSidebar() {
    filterSidebar.classList.add("active");
    filterOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  function closeFilterSidebar() {
    filterSidebar.classList.remove("active");
    filterOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
  filterButton.addEventListener("click", openFilterSidebar);
  filterOverlay.addEventListener("click", closeFilterSidebar);
  if (filterClose) {
    filterClose.addEventListener("click", closeFilterSidebar);
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeFilterSidebar();
    }
  });
});
// ====================================================== End site bar ======================================================
// =========================Start Offers2.html===================
document.addEventListener("DOMContentLoaded", function () {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));
            this.classList.add("active");
            document.getElementById(this.dataset.tab).classList.add("active");
        });
    });
    // النجوم
    const stars = document.querySelectorAll(".stars-select span");
    stars.forEach(star => {
        star.addEventListener("click", function () {
            const value = this.dataset.value;
            stars.forEach(s => {
                s.classList.toggle("selected", s.dataset.value <= value);
            });
        });
    });
});
// =========================end Offers2.html===================
// =========================Start Offers2.html counter===================
document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.containar-sction1-Offers2');
    productCards.forEach(function (card) {
        const minusBtn = card.querySelector('.minus');
        const plusBtn = card.querySelector('.plus');
        const qtyValue = card.querySelector('.qty-value');
        const priceBox = card.querySelector('.price-box');
        const unitPrice = parseFloat(priceBox.textContent.replace(/[^\d.]/g, ''));
        minusBtn.addEventListener('click', function () {
            let qty = parseInt(qtyValue.textContent);
            if (qty > 1) {
                qty--;
                qtyValue.textContent = qty;
                priceBox.textContent = (unitPrice * qty) + ' ريال';
            }
        });
        plusBtn.addEventListener('click', function () {
            let qty = parseInt(qtyValue.textContent);
            qty++;
            qtyValue.textContent = qty;
            priceBox.textContent = (unitPrice * qty) + ' ريال';
        });
    });
});
// =========================end Offers2.html counter===================
// =========================Start Offers3.html counter===================
document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(function (card) {
        const minusBtn = card.querySelector('.minus');
        const plusBtn = card.querySelector('.plus');
        const qtyValue = card.querySelector('.qty-value');
        const priceBox = card.querySelector('.price-box');
        const unitPrice = parseFloat(card.getAttribute('data-price'));
        minusBtn.addEventListener('click', function () {
            let qty = parseInt(qtyValue.textContent);
            if (qty > 1) {
                qty--;
                qtyValue.textContent = qty;
                priceBox.textContent = (unitPrice * qty) + ' ريال';
            }
        });
        plusBtn.addEventListener('click', function () {
            let qty = parseInt(qtyValue.textContent);
            qty++;
            qtyValue.textContent = qty;
            priceBox.textContent = (unitPrice * qty) + ' ريال';
        });
    });
});
// =========================end Offers3.html counter===================
// =========================Start Offers4.html counter===================
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (this.checkValidity()) {
        window.location.href = 'Offers5.html';
    } else {
        this.reportValidity();
    }
});
// =========================end Offers4.html counter===================