function $(id) { return document.getElementById(id); }

function safeImage(src, alt) {
  return `<img src="${src}" alt="${alt}" onerror="this.parentElement.innerHTML='${src}'" />`;
}

function renderSite() {
  const d = portfolioData;
  document.title = `${d.name} — Portfolio`;
  $("heroEyebrow").textContent = d.title;
  $("heroName").textContent = d.name;
  $("heroBio").textContent = d.bio;
  $("profilePhoto").src = d.profilePhoto;

  document.querySelector(".nav-social").innerHTML = `
    ${d.linkedin ? `<a href="${d.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>` : ""}
    ${d.github ? `<a href="${d.github}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}
  `;

  $("heroButtons").innerHTML = `
    <a href="mailto:${d.email}" class="btn btn-primary">Email Me</a>
    <a href="#projects" class="btn btn-outline">View Projects</a>
  `;

  $("projectsGrid").innerHTML = d.projects.map(project => `
    <div class="project-card reveal">
      <div class="project-thumb">${safeImage(project.image, project.title)}</div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        ${project.details && project.details.length ? `
          <div class="detail-thumbs">
            ${project.details.map(img => `<img src="${img}" alt="${project.title} detail" onclick="openLightbox(this.src)" />`).join("")}
          </div>` : ""}
        <div class="project-links">
          ${project.repo ? `<a href="${project.repo}" target="_blank" rel="noopener">GitHub Repo ↗</a>` : ""}
        </div>
      </div>
    </div>
  `).join("");

  $("educationList").innerHTML = d.education.map(item => `
    <div class="edu-card">
      <div class="school">${item.school}</div>
      <div class="degree">${item.degree}</div>
      <div class="grad">${item.date}</div>
    </div>
  `).join("");

  $("employmentList").innerHTML = d.employment.length ? d.employment.map(item => `
    <div class="emp-card">
      <div class="job-title">${item.title}</div>
      <div class="job-place">${item.place}</div>
      <div class="job-date">${item.date}</div>
    </div>
  `).join("") : `<p class="emp-empty">Open to internship and co-op opportunities.</p>`;

  $("resumeRow").innerHTML = d.resume ? `<a href="${d.resume}" target="_blank" class="btn btn-primary">Open Resume ↗</a>` : "";
  $("skillsList").innerHTML = d.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join("");
  $("contactText").textContent = d.contactText;
  $("contactLinks").innerHTML = `
    ${d.email ? `<a href="mailto:${d.email}">${d.email}</a>` : ""}
    ${d.phone ? `<a href="tel:${d.phone.replace(/[^0-9]/g, '')}">${d.phone}</a>` : ""}
    ${d.linkedin ? `<a href="${d.linkedin}" target="_blank" rel="noopener">LinkedIn ↗</a>` : ""}
    ${d.github ? `<a href="${d.github}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}
  `;
  $("footer").textContent = `© ${new Date().getFullYear()} ${d.name} · ${d.title}`;
}

function openLightbox(src) {
  $("lightbox-img").src = src;
  $("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  $("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

document.querySelector(".nav-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

renderSite();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      if (entry.target.classList.contains("section-title")) entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal, .section-title").forEach(el => observer.observe(el));
