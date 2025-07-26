# Portfolio App

This is a simple portfolio web application built with **Next.js** and **React**. It showcases a collection of beginner-friendly web development projects, each with a description, difficulty level, technologies used, and an image preview.

## Features

- Responsive grid layout for project cards
- Project details: title, description, difficulty, tech stack, and image
- Built with Next.js App Router and Tailwind CSS
- Clean and modern UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/portfolio-app.git
   cd portfolio-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-app/
├── app/
│   ├── page.tsx                # Home page
│   └── pages/
│       └── projects/
│           └── page.tsx        # Projects listing page
├── public/                     # Static assets (images, etc.)
├── components/                 # Reusable UI components
├── styles/                     # Global styles (if any)
└── README.md
```

## Customization

- **Add/Edit Projects:**  
  Edit the `projects` array in `app/pages/projects/page.tsx` to add your own projects, update descriptions, images, or tech stacks.

- **Images:**  
  Place your project images in the `public/` directory and reference them by filename in the `image` field.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

This project is open source and available under the [MIT License](LICENSE).

---

