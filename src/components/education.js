export default function Education() {
    const education = [
      {
        degree: "MCA",
        institution: "Vidya Pratishthan's Institute of Information Technology (VIIT)",
        duration: "2022 – 2024",
        location: "Baramati, India",
      },
      {
        degree: "BBA(CA)",
        institution: "Shri Shiv Chatrapati College Junnar",
        duration: "2019 – 2022",
        location: "Junnar, India",
      },
    ]
  
    return (
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{edu.degree}</h3>
                <p className="text-gray-800 font-medium mb-2">{edu.institution}</p>
                <div className="flex justify-between text-gray-600">
                  <span>{edu.duration}</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  