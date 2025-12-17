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
      <h3>Welder</h3>
      <p>Russia · Salary from 150,000 ₽
Shift work 1/1 month. Experience of at least 5 years. Accommodation, daily allowance, work uniform and tools provided by the employer.</p>
    </div>
    <div class="card">
      <h3>Installation of drywall</h3>
      <p>Russia · Salary from 100,000 ₽ 
Shift work 1/1 month. Experience of at least 3 years. 
Accommodation, daily allowance, work uniform and tools provided by the employer.</p>
    </div>
<div class="card">
      <h3>Installation of the heating system of modular buildings</h3>
      <p>Russia · Salary from 150,000 ₽ 
Shift work 1/1 month. Experience of at least 5 years. 
Accommodation, daily allowance, work uniform and tools provided by the company.</p>
    </div>
  `;
}

/* APPLICATION */
function showApplicationForm() {
  content.innerHTML = `
    <div class="card">
      <h3>Welder</h3>
      <p>Russia · Salary from 150,000 ₽
Shift work 1/1 month. Experience of at least 5 years. Accommodation, daily allowance, work uniform and tools provided by the employer.</p>
    </div>
    <div class="card">
      <h3>Installation of drywall</h3>
      <p>Russia · Salary from 100,000 ₽ 
Shift work 1/1 month. Experience of at least 3 years. 
Accommodation, daily allowance, work uniform and tools provided by the employer.</p>
    </div>
<div class="card">
      <h3>Installation of the heating system of modular buildings</h3>
      <p>Russia · Salary from 150,000 ₽ 
Shift work 1/1 month. Experience of at least 5 years. 
Accommodation, daily allowance, work uniform and tools provided by the company.</p>
    </div>
  `;
}

/* ABOUT */
function showAbout() {
  content.innerHTML = `
    <div class="card">
      <p>The construction company specializes in the construction of modular buildings from scratch. The work is on a shift basis. The company has been on the market for over 10 years. It conducts its activities of constructing modular blocks throughout Russia.</p>
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
