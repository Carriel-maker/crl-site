const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const page=(location.pathname.split('/').pop()||'index.html');
$$('[data-nav]').forEach(a=>{ const href=a.getAttribute('href'); if(href===page || (page===''&&href==='index.html')) a.classList.add('active'); });
const toggle=$('.mobile-toggle'), nav=$('.nav'); if(toggle) toggle.addEventListener('click',()=>nav.classList.toggle('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08}); $$('.reveal').forEach(el=>io.observe(el));
const heroImg=$('.hero-page img'); if(heroImg && !matchMedia('(prefers-reduced-motion: reduce)').matches){addEventListener('scroll',()=>{const r=heroImg.parentElement.getBoundingClientRect(); if(r.bottom>0&&r.top<innerHeight){heroImg.style.transform=`translateY(${Math.max(-18,Math.min(18,-r.top*.035))}px) scale(1.03)`}})}
$$('.acc-item').forEach(item=>{const b=$('.acc-button',item),p=$('.acc-panel',item);b?.addEventListener('click',()=>{const open=item.classList.contains('open'); $$('.acc-item.open').forEach(x=>{x.classList.remove('open');const xp=$('.acc-panel',x);xp.style.maxHeight='0px';$('.acc-button',x).setAttribute('aria-expanded','false')}); if(!open){item.classList.add('open');p.style.maxHeight=p.scrollHeight+'px';b.setAttribute('aria-expanded','true')}})});
const form=$('#contact-form');
if(form){
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const s=$('.form-status');
    const endpoint=form.getAttribute('action')||'';
    if(!endpoint || endpoint.includes('SEU_FORM_ID')){
      s.textContent='O formulário ainda precisa ser conectado ao Formspree. Escreva para agencia@comc.online.';
      return;
    }
    s.textContent='Enviando…';
    try{
      const r=await fetch(endpoint,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
      const j=await r.json().catch(()=>({}));
      if(!r.ok) throw new Error(j.error||'Falha no envio');
      s.textContent='Mensagem enviada. Em breve conversamos.';
      form.reset();
    }catch(err){
      s.textContent='Não foi possível enviar agora. Escreva para agencia@comc.online.';
    }
  });
}
