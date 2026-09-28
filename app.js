const notice=document.querySelector('#notice');
function showNotice(title,text){document.querySelector('#notice-title').textContent=title;document.querySelector('#notice-text').textContent=text;notice.showModal()}
document.querySelectorAll('.whatsapp').forEach(button=>button.addEventListener('click',()=>showNotice('Contacto por WhatsApp','El número de atención está pendiente de confirmar. Este botón se activará al incorporar el WhatsApp oficial de Granjas Diversión.')));
document.querySelectorAll('.pending').forEach(button=>button.addEventListener('click',()=>showNotice(button.dataset.title,'Este contenido está pendiente de ser proporcionado por Granjas Diversión.')));
document.querySelectorAll('.close,.close-notice').forEach(button=>button.addEventListener('click',()=>notice.close()));
notice.addEventListener('click',e=>{if(e.target===notice){const r=notice.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)notice.close()}});
document.querySelectorAll('form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();form.querySelector('.form-status').textContent='Tus datos no se han enviado. Esta vista previa aún no está conectada con un asesor.';}));
