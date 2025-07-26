

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio to showcase your bio, skills, and projects.",
    difficulty: "Beginner",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
    image: "/portfolio.jpeg"
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather application that fetches real-time data using an API.",
    difficulty: "Beginner",
    tech: ["HTML", "CSS", "JavaScript", "React", "API"],
    image: "/weather.avif"
  },
  {
    id: 6,
    title: "Product Landing Page",
    description: "A simple landing page for a fictional product or service.",
    difficulty: "Beginner",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
    image: "/landingPage.webp"
  },
  {
    id: 3,
    title: "Todo List",
    description: "A basic task manager where users can add, delete, and check off tasks.",
    difficulty: "Beginner",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    image: "/todoApp.png"
  },
  {
    id: 4,
    title: "Tic Tac Toe Game",
    description: "A simple 2-player Tic Tac Toe game with win detection logic.",
    difficulty: "Beginner",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    image: "/tic-tac-toe.png"
  },
  {
    id: 5,
    title: "QR Code Generator",
    description: "A tool that generates a QR code from input text or URLs using a public API.",
    difficulty: "Beginner",
    tech: ["HTML", "CSS", "JavaScript", "React", "API"],
    image: "/qrCode.webp"
  },
  {
    id: 7,
    title: "Responsive Navbar",
    description: "A navigation bar that collapses into a hamburger menu on small screens.",
    difficulty: "Beginner",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind"],
    image: "/navbar.png"
  }
]



export default function() {
  return(
    <div className="grid lg:grid-cols-3 place-items-center h-[100%] md:grid-cols-2 sm:grid-cols-1 mt-6 mb-6">
      {projects.map((project)=> (
        <div className="border rounded-2xl p-3 text-center w-[20rem] h-100% mt-10">
         <div className="text-2xl font-bold">{project.title}</div>
         <div className="p-4 mt-6 h-[8rem] flex justify-center items-center">
         <img src={project.image} alt="img" className="rounded-2xl p-2 border-1 "/>
         </div>
         <div className="text-sm text-gray-400 mt-6">{project.description}</div>
        </div>
      ))}
    </div>
  )
}