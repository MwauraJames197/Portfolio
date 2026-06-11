# Portfolio Website

This is a simple personal portfolio website made for GitHub Pages.

## How to edit your website

Most edits happen in this file:

```text
js/data.js
```

That file controls your name, bio, projects, education, work experience, skills, resume, and links.

## Folder layout

```text
portfolio-github/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── data.js      # Edit this most of the time
│   └── main.js      # Website logic
├── assets/
│   ├── images/      # Put project images and profile photo here
│   └── files/       # Put resume PDF here
└── README.md
```

## Adding a new project

Open `js/data.js` and copy one project block inside the `projects` list:

```js
{
  title: "New Project Title",
  description: "Short project description.",
  image: "assets/images/project-image.jpg",
  details: [
    "assets/images/detail-one.jpg",
    "assets/images/detail-two.jpg"
  ],
  links: [
    { label: "GitHub Repo", url: "https://github.com/YOUR-USERNAME/YOUR-REPO" }
  ]
}
```

Remember to put your images inside `assets/images/`.

## Deleting a project

Open `js/data.js` and remove that project block from the `projects` list.

## Publishing on GitHub Pages

1. Create a new GitHub repository.
2. Upload these files to the repository.
3. Go to **Settings** → **Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save.

Your website should publish after GitHub finishes building it.

## Important reminders

- Replace `YOUR-USERNAME` in `js/data.js` with your real GitHub username.
- Replace LinkedIn with your real LinkedIn link.
- Add your real resume PDF to `assets/files/`.
- Add your real images to `assets/images/`.
- Do not put your phone number online unless you really want it public.
