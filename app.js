const notice = document.querySelector('#notice');

function showNotice(title, text) {
  document.querySelector('#notice-title').textContent = title;
  document.querySelector('#notice-text').textContent = text;
  notice.showModal();
}

// Teléfono celular y WhatsApp oficial de Granjas Diversión
const WHATSAPP_PHONE = '526142546297';

document.querySelectorAll('.whatsapp').forEach(element => {
  element.addEventListener('click', (e) => {
    // Si no es un enlace nativo o para asegurar apertura de WhatsApp
    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola, me interesa recibir información sobre los terrenos y la Casa Club de Granjas Diversión.')}`;
    if (element.tagName.toLowerCase() !== 'a') {
      e.preventDefault();
      window.open(waUrl, '_blank');
    }
  });
});

document.querySelectorAll('.pending').forEach(button => {
  button.addEventListener('click', () => showNotice(button.dataset.title, 'Este contenido estará disponible próximamente en Granjas Diversión.'));
});

document.querySelectorAll('.close, .close-notice').forEach(button => button.addEventListener('click', () => notice.close()));

notice.addEventListener('click', e => {
  if (e.target === notice) {
    const r = notice.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) notice.close();
  }
});

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    form.querySelector('.form-status').textContent = '¡Gracias! Hemos recibido tu solicitud. Un asesor se comunicará contigo al número celular registrado.';
  });
});
