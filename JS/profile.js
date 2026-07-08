// =========================Start Address===================
document.addEventListener('DOMContentLoaded', function () {

  document.addEventListener('click', function (e) {
    var item = e.target.closest('.sidebar-item[data-panel]');
    if (!item) return;

    var targetId = item.getAttribute('data-panel');
    var target = document.getElementById(targetId);

    if (!target) {
      console.warn('Panel not found:', targetId);
      return;
    }

    document.querySelectorAll('.sidebar-item[data-panel]').forEach(function (i) {
      i.classList.remove('active');
    });
    item.classList.add('active');

    document.querySelectorAll('.panel').forEach(function (p) {
      p.classList.remove('active-panel');
    });
    target.classList.add('active-panel');
  });

  // ========================= Purchases Delete Card Logic =========================
  document.addEventListener('click', function (e) {
    var deleteBtn = e.target.closest('#panel-purchases .delete-btn');
    if (deleteBtn) {
      var card = deleteBtn.closest('.product-card');
      if (card) {
        card.remove();
      }
    }
  });
});
// =========================End Address===================
