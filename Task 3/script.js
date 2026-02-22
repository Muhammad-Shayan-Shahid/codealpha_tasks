const burger = document.getElementById('hamburger');
    const links = document.getElementById('links');
    burger.addEventListener('click', ()=> links.classList.toggle('open'));

    // Reveal on scroll
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); observer.unobserve(e.target);} });
    },{threshold:.15});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Contact (mailto)
    function sendMail(e){
      e.preventDefault();
      const n=document.getElementById('name').value.trim();
      const em=document.getElementById('email').value.trim();
      const m=document.getElementById('message').value.trim();
      const subject=encodeURIComponent('Portfolio Contact from '+n);
      const body=encodeURIComponent(`Name: ${n}\nEmail: ${em}\n\n${m}`);
      window.location.href=`mailto:youremail@example.com?subject=${subject}&body=${body}`;
    }