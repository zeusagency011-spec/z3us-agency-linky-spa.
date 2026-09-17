const CODE='NHENN8';
const copy=async()=>{try{await navigator.clipboard.writeText(CODE);document.querySelector('#copyStatus').textContent='Código copiado! Agora você pode colá-lo quando solicitado.'}catch{document.querySelector('#copyStatus').textContent='Código: NHENN8 — copie manualmente.'}};
document.querySelector('#copyCode')?.addEventListener('click',copy);
document.querySelector('#copyCodePanel')?.addEventListener('click',copy);
document.querySelector('#year').textContent=new Date().getFullYear();