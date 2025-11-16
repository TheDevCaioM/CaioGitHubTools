// ===========================================================
//  🔥 GERADOR DE README COMPLETO
// ===========================================================

// Campos do formulário
const fields = {
  title: document.getElementById("title"),
  desc: document.getElementById("desc"),
  badges: document.getElementById("badges"),
  tech: document.getElementById("tech"),
  features: document.getElementById("features"),
  install: document.getElementById("install"),
  usage: document.getElementById("usage"),
  contrib: document.getElementById("contrib"),
  tests: document.getElementById("tests"),
  licenseSelect: document.getElementById("licenseSelect"),
  author: document.getElementById("author"),
  contact: document.getElementById("contact"),
  extra: document.getElementById("extra")
};

// Preview
const preview = document.getElementById("preview");

// Botões
const btnGenerate = document.getElementById("generate");
const btnDownload = document.getElementById("download");
const btnCopy = document.getElementById("copy");


// ===========================================================
//  📌 GERA BADGES AUTOMATICAMENTE
// ===========================================================
function generateBadges(str) {
  if (!str.trim()) return "";

  const badges = str.split(",").map(b => b.trim().toLowerCase());

  const map = {
    build: "![Build](https://img.shields.io/badge/build-passing-7c3aed)",
    version: "![Version](https://img.shields.io/badge/version-1.0.0-7c3aed)",
    license: `![License](https://img.shields.io/badge/license-${fields.licenseSelect.value}-7c3aed)`,
    npm: "![NPM](https://img.shields.io/badge/npm-package-7c3aed)",
    docker: "![Docker](https://img.shields.io/badge/docker-ready-7c3aed)"
  };

  return badges
    .filter(b => map[b])
    .map(b => map[b])
    .join(" ");
}


// ===========================================================
//  📄 GERA O README COMPLETO
// ===========================================================
function generateREADME() {
  const {
    title, desc, badges, tech, features, install,
    usage, contrib, tests, author, contact, extra, licenseSelect
  } = fields;

  const badgeSection = generateBadges(badges.value);

  let licenseText = "";
  let licenseBadge = "";

  switch (licenseSelect.value) {
    case "MIT":
      licenseBadge = "![MIT](https://img.shields.io/badge/license-MIT-7c3aed)";
      licenseText = "Este projeto está licenciado sob os termos da licença MIT.";
      break;
    case "Apache-2.0":
      licenseBadge = "![Apache](https://img.shields.io/badge/license-Apache%202.0-7c3aed)";
      licenseText = "Licença Apache 2.0 aplicada a este projeto.";
      break;
    case "GPL-3.0":
      licenseBadge = "![GPL](https://img.shields.io/badge/license-GPL%203.0-7c3aed)";
      licenseText = "Distribuído sob a licença GPL-3.0.";
      break;
    case "Unlicense":
      licenseBadge = "![Unlicense](https://img.shields.io/badge/license-Unlicense-7c3aed)";
      licenseText = "Este projeto é de domínio público.";
      break;
    default:
      licenseText = "Sem licença definida.";
  }

  return `
# ${title.value || "Nome do Projeto"}

${badgeSection}
${licenseBadge}

---

## 📌 Descrição
${desc.value || "Sem descrição."}

---

## 🚀 Tecnologias Utilizadas
${tech.value ? tech.value.split(",").map(t => `- ${t.trim()}`).join("\n") : "Nenhuma tecnologia informada."}

---

## ✨ Funcionalidades
${features.value ? features.value.split("\n").map(f => `- ${f}`).join("\n") : "Nenhuma funcionalidade informada."}

---

## 🔧 Instalação
\`\`\`bash
${install.value || "Sem instruções."}
\`\`\`

---

## 🧪 Uso / Exemplos
\`\`\`bash
${usage.value || "Sem exemplos."}
\`\`\`

---

## 🤝 Contribuição
${contrib.value || "Nenhuma diretriz de contribuição informada."}

---

## 🧪 Testes
\`\`\`bash
${tests.value || "Sem testes informados."}
\`\`\`

---

## 📄 Licença
${licenseText}

---

## 👤 Autor
**${author.value || "Autor não informado"}**

${contact.value || ""}

---

${extra.value || ""}
  `.trim();
}


// ===========================================================
//  🖥️ ATUALIZA O PREVIEW EM TEMPO REAL
// ===========================================================
Object.values(fields).forEach(field => {
  field.addEventListener("input", () => {
    preview.textContent = generateREADME();
  });
});


// ===========================================================
//  🔘 BOTÃO: Gerar README
// ===========================================================
btnGenerate.addEventListener("click", () => {
  preview.textContent = generateREADME();
});


// ===========================================================
//  📥 BOTÃO: Download README.md
// ===========================================================
btnDownload.addEventListener("click", () => {
  const blob = new Blob([generateREADME()], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "README.md";
  a.click();

  URL.revokeObjectURL(url);
});


// ===========================================================
//  📋 BOTÃO: Copiar
// ===========================================================
btnCopy.addEventListener("click", async () => {
  await navigator.clipboard.writeText(generateREADME());
  btnCopy.textContent = "Copiado!";
  setTimeout(() => (btnCopy.textContent = "Copiar"), 1500);
});
