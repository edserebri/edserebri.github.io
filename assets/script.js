// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
    });
  });
}

// Render full expandable post list (notes.html)
function renderPostsList() {
  const container = document.getElementById('posts-list');
  if (!container) return;

  posts.forEach(post => {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
      <div class="post-card-header">
        <div class="post-card-meta">
          ${post.draft ? '<span class="draft-badge">Draft</span>' : ''}
          <p class="note-card-date">${post.date}</p>
          <h3>${post.title}</h3>
        </div>
        <svg class="post-card-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="post-card-body">
        <p>${post.summary}</p>
        ${post.body ? `<p>${post.body}</p>` : ''}
        <div class="note-tags">
          ${post.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
    card.addEventListener('click', () => card.classList.toggle('open'));
    container.appendChild(card);
  });
}

// Render preview cards (index.html)
function renderNotesPreview() {
  const container = document.getElementById('notes-preview');
  if (!container) return;

  posts.slice(0, 2).forEach(post => {
    const card = document.createElement('div');
    card.className = 'note-card';
    card.innerHTML = `
      <p class="note-card-date">${post.draft ? 'Draft · ' : ''}${post.date}</p>
      <h3>${post.title}</h3>
      <p>${post.summary}</p>
      <div class="note-tags">
        ${post.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    `;
    container.appendChild(card);
  });
}

renderPostsList();
renderNotesPreview();
