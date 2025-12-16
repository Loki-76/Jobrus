const content = document.getElementById("content");
let lang = "en";

/* TRANSLATIONS */
const t = {
  en: {
    title: "Your Career. Powered by AI.",
    subtitle: "Explore vacancies, apply instantly and talk to our AI assistant.",
    jobs: "Jobs",
    apply: "Apply",
    about: "About"
  },
  ru: {
    title: "Ваша карьера. Усиленная ИИ.",
    subtitle: "Вакансии, быстрая подача заявки и AI-ассистент.",
    jobs: "Вакансии",
    apply: "Заявка",
    about: "О нас"
  }
};

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t[lang][el.dataset.i18n];
  });
}

function toggleLanguage() {
  lang = lang === "en" ? "ru" : "en";
  applyLang();
}

/* THEME */
function toggleTheme() {
  document.body.classList.toggle("light");
}

/* VACANCIES */
function showVacancies() {
  content.innerHTML = `
    <div class="card">
      <h3>Frontend Developer</h3>
      <p>Berlin · Remote</p>
    </div>
    <div class="card">
      <h3>AI Product Manager</h3>
      <p>Dubai · Hybrid</p>
    </div>
  `;
}

/* APPLICATION */
function showApplicationForm() {
  content.innerHTML = `
    <div class="card">
      <input placeholder="Name">
      <input placeholder="Surname">
      <input placeholder="Passport">
      <textarea placeholder="Experience"></textarea>
      <button onclick="alert('Sent ✅')">Send</button>
    </div>
  `;
}

/* ABOUT */
function showAbout() {
  content.innerHTML = `
    <div class="card">
      <p>15+ years · Global projects · Future focused</p>
    </div>
  `;
}

/* AI ASSISTANT */
function showAI() {
  content.innerHTML = `
    <div class="card">
      <p><strong>AI:</strong> Hi! I can help you choose a job.</p>
      <input placeholder="Ask me anything…" 
        onkeydown="if(event.key==='Enter') aiReply(this)">
    </div>
  `;
}

function aiReply(input) {
  content.innerHTML += `
    <div class="card">
      <p><strong>AI:</strong> Based on your skills, Frontend roles fit you best 🚀</p>
    </div>
  `;
}

applyLang();
