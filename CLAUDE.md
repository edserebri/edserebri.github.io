## Suggested Site Structure

Use a simple static website built with plain HTML, CSS, and JavaScript.

Recommended files:

```text
/
  index.html
  notes.html
  cv.pdf
  /assets
    styles.css
    script.js
    egor-photo.png       optional
  /posts                 optional later
```

Keep the first version minimal. The main site can be one homepage, with a separate Blog page for weekly updates, paper reviews, and short research thoughts.

Do not over-engineer the site with React, Next.js, databases, authentication, or a CMS for the first version. The site should be easy to edit manually.

Recommended pages:

1. `index.html`
   Main personal website / landing page.

2. `notes.html`
   A lightweight blog-style page for weekly updates, short paper reviews, research notes, and timeline-style progress logs.

Optional later:

3. Individual post pages
   Only add separate post pages once there are enough notes to justify them.

---

## Homepage Structure

The homepage should have the following sections:

1. Hero
2. Current Focus
3. Selected Work
4. Research Interests
5. Timeline
6. Notes Preview
7. Contact

Keep the homepage skimmable. A reader should understand who Egor is, what he works on, and why his background is relevant within about 20 seconds.

---

## Hero Section

The hero should include:

* name: Egor Serebriakov
* short positioning line
* concise bio paragraph
* contact links: Email, GitHub, LinkedIn, CV
* optional photo or simple abstract line illustration

Suggested positioning line:

> AI Master’s student with a physics background, working on LLMs, time series, agentic systems, and ML for science.

Suggested hero text:

> I’m a Master’s student in Artificial Intelligence at ITMO University, currently collaborating with Mila’s CERC-AAI Lab on LLMs, time series, and agentic systems. I’m interested in how pretrained models transfer across domains, and what this reveals about representations, optimization, and generalization.
>
> My background is in physics. I completed a Master’s in Physics at Brown University, where I worked on machine learning for particle physics, including jet tagging, knowledge distillation, and anomaly detection. I’ve also worked on physics-informed machine learning and PINN training dynamics.

Keep this section direct. Do not use “Welcome to my website.”

---

## Current Focus Section

This section should briefly explain what Egor is thinking about now.

Suggested title:

> Current Focus

Suggested text:

> I’m currently exploring how LLM-based models behave outside ordinary language tasks, especially in time-series settings. I’m interested in whether useful transfer comes from representations, gradient structure, pretraining, architecture, or shared optimization patterns.
>
> I’m also interested in agentic AI systems: how LLM agents can use tools, evaluate intermediate outputs, search over solution spaces, and support research workflows without becoming unreliable black boxes.

This section should sound exploratory, not exaggerated.

Avoid claiming deep expertise in areas that are still new or ongoing.

---

## Selected Work Section

Use 3 or 4 cards.

Section title:

> Selected Work

Each card should include:

* small metadata line
* title
* short description
* optional link if available

Recommended cards:

### Rethinking LLMs for Time Series

Metadata:

> Mila · Ongoing

Text:

> Ongoing work on understanding why LLM-based models can help with time-series forecasting. I’m especially interested in whether useful transfer comes from shared gradient structure, representation geometry, representation drift, or other optimization-level effects rather than language modeling alone.

### Jet Tagging via Knowledge Distillation

Metadata:

> Brown University · Particle Physics

Text:

> Worked on compressing neural networks for jet tagging in particle physics using knowledge distillation. The goal was to keep classification performance strong while making inference significantly faster, with applications to real-time analysis pipelines in high-energy physics.

Optional stronger version if you want to include the result:

> Achieved over 3× inference speedup while preserving strong classification performance.

### Anomaly Detection in Particle Physics Data

Metadata:

> Brown University · Anomaly Detection

Text:

> Designed unsupervised anomaly detection pipelines using deep autoencoders for high-dimensional particle physics data. The work focused not only on detecting anomalous regimes, but also on understanding robustness, false-positive risk, and model failure modes.

### Physics-Informed ML / PINN Training Dynamics

Metadata:

> ITMO University · Scientific ML

Text:

> Explored whether reinforcement learning could dynamically control causal loss weighting in Physics-Informed Neural Networks. One takeaway was that adaptive control did not outperform a well-chosen fixed parameter in the tested setup, which made the project useful as a lesson in when extra algorithmic complexity is not justified.

---

## Research Interests Section

This should be a short list, not a dense paragraph.

Suggested title:

> Things I’m Interested In

Suggested bullets:

* LLMs as general sequence models
* time-series forecasting and representation transfer
* gradient alignment, representation drift, and generalization
* agentic AI systems and AI-assisted research workflows
* machine learning for science
* physics-informed machine learning
* model robustness, validation, and failure modes

Keep this section honest and broad enough to leave room for growth.

---

## Timeline Section

Add a timeline-style section to show progression without making the page look like a full CV.

Suggested title:

> Timeline

Recommended entries:

### 2026 — Mila / CERC-AAI Lab

> Collaborating on research related to LLMs, time series, gradient alignment, transfer behavior, and agentic AI systems.

### 2025–Present — M.Sc. in Artificial Intelligence, ITMO University

> Studying AI with coursework and projects in machine learning systems, statistics, generative models, and scientific ML.

### 2024 — Brown University / ML for Particle Physics

> Worked on jet tagging, knowledge distillation, and anomaly detection using deep learning methods for particle physics data.

### 2022–2024 — M.Sc. in Physics, Brown University

> Completed graduate training in physics while shifting toward machine learning, data science, and scientific AI.

### 2018–2022 — B.Sc. in Physics, Moscow State University

> Built a foundation in physics, mathematics, analytical reasoning, and scientific problem solving.

The timeline should be visually light: a vertical line, date labels, and short descriptions.

Do not include every CV item. The goal is narrative clarity, not completeness.

---

## Notes / Blog Section

Add a dedicated `notes.html` page for weekly updates, short paper reviews, and research reflections.

This section should feel like research notes, not a polished content-marketing blog.

Possible page title:

> Notes

Subtitle:

> Short notes on papers, research ideas, technical questions, and things I’m trying to understand.

Good categories:

* Paper notes
* Weekly research updates
* ML concepts
* Time series
* Agentic systems
* Scientific ML
* Personal research reflections

Good post ideas:

* Why might LLMs work for time series?
* What does gradient alignment mean?
* Notes on representation drift
* Why I became skeptical about RL control for PINNs
* What particle physics taught me about machine learning
* What makes an AI agent useful for research?
* Short notes on HyperAgents
* How I think about model validation

Each note can be short. It does not need to be a polished essay.

Recommended note card format:

```text
Date
Title
2–3 sentence summary
Tags
```

Example:

```text
June 2026
Notes on HyperAgents

A short summary of what I understood from the HyperAgents paper and what I want to reproduce step by step. My main question is whether the useful part is the agent architecture itself, the evaluation loop, or simply parallel exploration with an LLM judge.

Tags: agents, research automation, LLMs
```

Do not show an empty Notes section on the homepage. If there are no real posts yet, show a small “Notes coming soon” link or hide the preview.

---

## Notes Page Structure

The `notes.html` page should include:

1. Small header with navigation back to homepage
2. Page title: Notes
3. Short description
4. List of posts/cards
5. Optional simple filters later

Initial placeholder posts are okay only if they are clearly marked as drafts or notes.

Do not invent finished blog posts.

Suggested initial post cards:

### Notes on HyperAgents

> Trying to understand agentic research workflows by rebuilding the main ideas step by step instead of copying the code directly.

### Why LLMs for Time Series?

> Notes on the hypothesis that LLM-based models may help forecasting because of general sequence modeling, representation transfer, or shared optimization structure.

### RL for PINNs: A Negative Result Can Still Be Useful

> A short reflection on why adaptive RL-style control did not clearly beat a strong fixed baseline in my PINN experiments.

---

## Navigation

Use minimal navigation:

```text
Egor Serebriakov
Work
Timeline
Notes
Contact
```

On mobile, keep it simple. A hamburger menu is optional, but not necessary if the nav has only 4 links.

---

## Contact Section

Use a short direct section.

Suggested title:

> Contact

Suggested text:

> I’m open to research conversations, internships, collaborations, and applied ML opportunities.

Links:

* Email
* GitHub
* LinkedIn
* CV

Keep it simple. No contact form is needed for the first version.

---

## Visual Layout

Use a clean, warm, text-first style.

Recommended design:

* off-white background
* near-black text
* muted gray secondary text
* blue accent links
* pale blue or very light gray cards
* rounded corners
* generous whitespace
* max-width around 1050px
* readable body width around 720px

Suggested CSS variables:

```css
:root {
  --bg: #f8f7f3;
  --text: #171717;
  --muted: #666666;
  --line: #e4e0d8;
  --card: #ffffff;
  --soft-blue: #eaf2ff;
  --accent: #2563eb;
}
```

Avoid:

* heavy gradients
* glassmorphism
* large shadows
* excessive animation
* generic icons
* dark hacker theme
* startup landing-page visuals

---

## JavaScript Scope

Keep JavaScript minimal.

Possible uses:

* mobile nav toggle
* filtering notes by tag later
* rendering notes from a simple array later

Do not add unnecessary animation libraries or frontend frameworks.

For the first version, static HTML is enough.

---

## Blog Implementation Option

For the first version, notes can be hardcoded in `notes.html`.

Later, if weekly updates become frequent, use a simple `posts.js` file:

```js
const posts = [
  {
    date: "June 2026",
    title: "Notes on HyperAgents",
    summary: "Trying to understand agentic research workflows by rebuilding the main ideas step by step.",
    tags: ["agents", "LLMs", "research automation"],
    url: "#"
  }
];
```

Then render cards dynamically with JavaScript.

But do not do this unless it actually makes editing easier.

---

## First Version Definition of Done

The first version is done when:

* homepage clearly says who Egor is
* current AI/ML direction is visible
* Mila collaboration is mentioned honestly
* physics background is clear but not overexplained
* there are 3–4 selected work cards
* there is a lightweight timeline
* there is either a Notes page or a Notes preview
* contact links are visible
* the site works on mobile
* the design is clean, warm, and readable
* there are no fake claims
* there are no empty sections
* the site can be deployed publicly

Do not wait for the site to feel perfect. A simple published site is better than a polished private draft.
