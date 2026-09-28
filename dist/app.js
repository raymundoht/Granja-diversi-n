const notice = document.querySelector('#notice');

function showNotice(title, text) {
  document.querySelector('#notice-title').textContent = title;
  document.querySelector('#notice-text').textContent = text;
  notice.showModal();
}

// Prefijo celular / WhatsApp de Granjas Diversión
const WHATSAPP_PHONE = '52614';

document.querySelectorAll('.whatsapp').forEach(button => {
  button.addEventListener('click', () => {
    if (WHATSAPP_PHONE && WHATSAPP_PHONE.length >= 10) {
      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola, me interesa recibir información sobre los terrenos y la Casa Club de Granjas Diversión.')}`, '_blank');
    } else {
      showNotice('Contacto por WhatsApp', 'Para atención personalizada de Granjas Diversión, puedes comunicarte al (+52 614) o déjanos tus datos en el formulario para que un asesor te contacte a la brevedad.');
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
