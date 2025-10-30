// ==================== Menu Mobile ====================
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}

// ==================== Cadastro ====================
function handleSubmit(event) {
  event.preventDefault();
  const form = document.getElementById("volunteerForm");

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const telefone = form.telefone.value.trim();
  const disponibilidade = form.disponibilidade.value;
  const areaInteresse = form["area-interesse"].value;

  // Verificação básica
  if (!nome || !email || !telefone) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  // Armazena dados localmente
  const formData = {
    nome,
    email,
    telefone,
    disponibilidade,
    areaInteresse,
    dataCadastro: new Date().toLocaleString(),
  };

  let voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [];
  voluntarios.push(formData);
  localStorage.setItem("voluntarios", JSON.stringify(voluntarios));

  alert("✅ Cadastro realizado com sucesso! Entraremos em contato em breve.");
  form.reset();
}

// ==================== Máscara de Telefone ====================
const telefoneInput = document.getElementById("telefone");
if (telefoneInput) {
  telefoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    e.target.value = value;
  });
}

// ==================== Animação dos Cards ====================
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cardTop < windowHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });
});

// ==================== Listener do Formulário ====================
const form = document.getElementById("volunteerForm");
if (form) {
  form.addEventListener("submit", handleSubmit);
}