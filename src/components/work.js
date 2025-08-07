import { Globe, ShoppingCart, Smartphone } from "lucide-react"

export default function Work() {
  const projects = [
    {
      title: "Supply Chain Management System",
      organization: "Freelance Project",
      description:
        "Developed a complete MERN-based Supply Chain Management System for TMT Group with features including inventory control, order lifecycle tracking, logistics coordination, and multi-role access (Admin, Warehouse Manager, Staff, Delivery Boy, Customer).",
      duration: "2024",
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    },
    {
      title: "TMT Store Website",
      organization: "Freelance Project",
      description:
        "Built a responsive product showcase website for TMT Store using React.js and Tailwind CSS, optimized for performance and SEO.",
      duration: "2024",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "TMT Store Mobile App",
      organization: "Freelance Project",
      description:
        "Developed a cross-platform mobile app using Ionic React for TMT Store to allow customers to browse and purchase products seamlessly.",
      duration: "2024",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      tech: ["Ionic React", "React.js", "Mobile UI/UX"],
    },
  ]

  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Recent Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                {project.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <p className="text-blue-600 font-medium">{project.organization}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
