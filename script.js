// ===== STARS =====
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars(n) {
  stars = [];
  for (let i = 0; i < n; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2,
      a: Math.random(),
      speed: 0.002 + Math.random() * 0.004,
      phase: Math.random() * Math.PI * 2
    });
  }
}

function drawStars(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    const alpha = (Math.sin(t * s.speed + s.phase) + 1) / 2 * s.a;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(2)})`;
    ctx.fill();
  });
}

let raf;
function animate(t) {
  drawStars(t);
  raf = requestAnimationFrame(animate);
}

resize();
createStars(220);
animate(0);
window.addEventListener('resize', () => { resize(); createStars(220); });

// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      // stagger siblings
      const siblings = [...e.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(e.target);
      setTimeout(() => {
        e.target.classList.add('visible');
      }, idx * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

// ===== IR BARS ANIMATION =====
const irBars = document.querySelectorAll('.ir-bar');
const irObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const bar = e.target;
      const target = bar.style.getPropertyValue('--w');
      bar.style.width = target;
      irObserver.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

irBars.forEach(b => {
  b.style.width = '0';
  irObserver.observe(b);
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  a.style.display = 'block'; // always visible in this design
  q.style.cursor = 'default';
});

// ===== SMOOTH NAV =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== QUESTION FORM =====
const form = document.getElementById('askForm');
const success = document.getElementById('askSuccess');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const question = form.question.value.trim();
    
    // Change button text to indicate loading
    const btn = form.querySelector('.ask-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Отправка...';
    btn.disabled = true;

    // Send via FormSubmit API (Silent POST)
    fetch("https://formsubmit.co/ajax/delenav@yahoo.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          Имя: name,
          Email: email,
          Вопрос: question,
          _subject: "Вопрос с сайта AHD Integrator"
      })
    })
    .then(response => response.json())
    .then(data => {
      btn.textContent = originalText;
      btn.disabled = false;
      if (success) {
        success.style.display = 'block';
        form.reset();
        setTimeout(() => success.style.display = 'none', 5000); // hide success after 5s
      }
    })
    .catch(error => {
      console.error(error);
      btn.textContent = originalText;
      btn.disabled = false;
      alert("Ошибка при отправке. Пожалуйста, попробуйте позже или напишите напрямую на delenav@yahoo.com");
    });
  });
}

// ===== NAV ACTIVE =====
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 50) {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.1)';
  } else {
    nav.style.borderBottomColor = 'rgba(255,255,255,0.07)';
  }
});
