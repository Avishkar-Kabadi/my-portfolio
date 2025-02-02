import { Code2, ShoppingCart, Globe, Smartphone } from "lucide-react"

export default function Work() {
  const projects = [
    {
      title: "Quality App for Suhana",
      organization: "The Data Tech Labs",
      description:
        "Currently working on Quality app development using Power Platform ecosystem including Power Apps, Power Automate, and SharePoint list integration for client Suhana.",
      duration: "Present",
      icon: <Code2 className="w-8 h-8 text-blue-600" />,
      tech: ["Power Apps", "Power Automate", "SharePoint"],
    },
    {
      title: "E-Commerce App - TMT Store",
      organization: "Freelance Project",
      description:
        "Developing a full-featured e-commerce application for TMT Group using React.js, implementing modern UI components and state management.",
      duration: "2024",
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      tech: ["React.js", "Redux", "Tailwind CSS"],
    },
    {
      title: "TMT Store Website",
      organization: "Freelance Project",
      description:
        "Created a responsive website for TMT Store showcasing their products and services using React.js and modern web technologies.",
      duration: "2024",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      tech: ["React.js", "CSS3", "JavaScript"],
    },
    {
      title: "TMT Store Mobile App",
      organization: "Freelance Project",
      description:
        "Developing a cross-platform mobile application using Ionic React framework to provide customers with a seamless shopping experience.",
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

