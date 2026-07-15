const header = document.getElementById('header');
const burger = document.getElementById('burger');

if (burger && header) {
  burger.addEventListener('click', () => {
    header.classList.toggle('active');
  });
}

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (header) {
      header.classList.remove('active');
    }
  });
});

document.querySelectorAll('.fact-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();
    const message = form.elements.message.value.trim();

    const email = 'Maksimcerepovskij30@gmail.com';
    const subject = encodeURIComponent('Заявка с сайта Максима Череповского');

    const body = encodeURIComponent(
      `Имя: ${name}\n` +
      `Телефон / Telegram: ${phone}\n\n` +
      `Описание мероприятия:\n${message || 'Не указано'}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    alert('Спасибо за заявку! Сейчас откроется письмо для отправки.');
    form.reset();
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});