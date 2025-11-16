/* ===========================================================
   📜 LICENÇAS OFICIAIS + VARIÁVEIS AUTOMÁTICAS
   =========================================================== */

const licenses = {
  "MIT": ({ year, author }) => `
MIT License

Copyright (c) ${year} ${author}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`.trim(),

  "Apache-2.0": ({ year, author }) => `
Apache License 2.0

Copyright (c) ${year} ${author}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
`.trim(),

  "GPL-3.0": ({ year, author }) => `
GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007

Copyright (c) ${year} ${author}

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
`.trim(),

  "BSD-3": ({ year, author }) => `
BSD 3-Clause License

Copyright (c) ${year}, ${author}
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
1. Redistributions of source code must retain the above copyright notice.
2. Redistributions in binary form must reproduce the above notice.
3. Neither the name of the project nor the names of its contributors may be used to endorse or promote derived products.
`.trim(),

  "Unlicense": () => `
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
`.trim(),

  "None": () => `
⚠ Nenhuma licença foi selecionada.

Seu projeto será considerado "Todos os direitos reservados".
`.trim(),
};


/* ===========================================================
   📄 ELEMENTOS DO DOM
   =========================================================== */

const projectName = document.getElementById("projectName");
const authorName = document.getElementById("authorName");
const yearField = document.getElementById("year");
const licenseType = document.getElementById("licenseType");

const preview = document.getElementById("licensePreview");

const generateBtn = document.getElementById("generateLicense");
const downloadBtn = document.getElementById("downloadLicense");


/* ===========================================================
   ▶ FUNÇÃO: GERAR LICENÇA
   =========================================================== */
function generateLicense() {
  const year = yearField.value || new Date().getFullYear();
  const author = authorName.value || "Autor Desconhecido";
  const lic = licenseType.value;

  const template = licenses[lic];

  if (!template) {
    preview.textContent = "Selecione uma licença válida.";
    return;
  }

  preview.textContent = template({ year, author });
}

/* ===========================================================
   💾 DOWNLOAD DO ARQUIVO
   =========================================================== */
downloadBtn.addEventListener("click", () => {
  const text = preview.textContent;

  if (!text.trim()) return;

  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "LICENSE";

  link.click();
});

/* ===========================================================
   ▶ EVENTOS
   =========================================================== */

generateBtn.addEventListener("click", generateLicense);

// atualizar automaticamente ao trocar a licença
licenseType.addEventListener("change", generateLicense);
yearField.addEventListener("input", generateLicense);
authorName.addEventListener("input", generateLicense);


/* ===========================================================
   ▶ PREVIEW INICIAL
   =========================================================== */
generateLicense();
