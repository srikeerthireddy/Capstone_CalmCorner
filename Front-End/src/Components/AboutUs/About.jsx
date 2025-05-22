/* eslint-disable react/no-unescaped-entities */
import peace from "../images/peace.svg";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gradient-to-br from-blue-300 to-purple-300 text-gray-800 leading-relaxed overflow-x-hidden">
      {/* Hero Section */}
      <div className=" px-8 py-10 text-center w-screen flex flex-col md:flex-row items-center overflow-hidden">
        <div className="w-full ">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-md">Welcome to Calm Corner</h1>
          <br />
          <p className="text-2xl text-white pr-10 mb-6 drop-shadow-sm">Your sanctuary for mental wellbeing</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        {/* Vision Section */}
        <section className="flex flex-col md:flex-row items-center gap-12 mb-20 animate-fadeInUp">
          <div className="flex-1">
            <h2 className="text-4xl text-purple-700 font-semibold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-4">
              A serene digital sanctuary dedicated to nurturing mental well-being and fostering a sense of inner peace...
            </p>
            <p className="text-lg text-gray-700">
              Our platform was born out of a shared vision to create a safe and inclusive space...
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://img.freepik.com/premium-photo/illustration-human-brain-with-flowers-world-day-mental-physical-health-ai_564714-2939.jpg"
              alt="Mental Health Illustration"
              className="rounded-xl shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl w-full max-w-md"
            />
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center justify-center my-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="px-6 text-purple-700 text-xl">❋</div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Mission Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-12 mb-20 animate-fadeInUp">
          <div className="flex-1 flex justify-center">
            <img
              src="https://t3.ftcdn.net/jpg/05/70/90/46/360_F_570904658_ogDkDaBxoFvRFacVGfgf3yOktU1MDUzt.jpg"
              alt="Wellness Journey"
              className="rounded-xl shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl w-full max-w-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl text-purple-700 font-semibold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our mission at Calm Corner is simple yet profound: To empower individuals to take proactive steps...
            </p>
            <p className="text-lg text-gray-700">
              Join us on this journey towards inner peace and well-being...
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="text-center my-20 animate-fadeInUp">
          <h2 className="text-4xl text-purple-700 font-semibold mb-10">Our Core Values</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "💗", title: "Compassion", desc: "We approach mental health with kindness, empathy, and understanding" },
              { icon: "🤝", title: "Community", desc: "We believe in the power of connection and shared experiences" },
              { icon: "🔍", title: "Accessibility", desc: "We strive to make mental health resources available to everyone" },
              { icon: "🌱", title: "Growth", desc: "We support continuous learning and personal development" },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow hover:-translate-y-2 transition-transform duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{value.title}</h3>
                <p className="text-gray-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-white py-16 px-6 rounded-xl my-20 animate-fadeInUp">
          <h2 className="text-4xl text-purple-800 font-bold mb-4">Start Your Journey Today</h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-8">
            Join our community and discover resources to support your mental wellness
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="bg-purple-700 text-white border-2 border-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-purple-800 transition-all duration-300"
          >
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
}

export default About;
