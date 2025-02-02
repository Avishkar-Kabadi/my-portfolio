import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "avishkarkabadi3444@gmail.com",
      href: "mailto:avishkarkabadi3444@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "8999291007",
      href: "tel:+918999291007",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Junnar, Pune",
      href: "#",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Avishkar Kabadi",
      href: "https://www.linkedin.com/in/avishkar-kabadi-41549a234/",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "Avishkar-Kabadi",
      href: "https://github.com/Avishkar-Kabadi",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                className="flex items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="p-3 bg-blue-100 rounded-full">{item.icon}</div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-medium text-gray-900">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

