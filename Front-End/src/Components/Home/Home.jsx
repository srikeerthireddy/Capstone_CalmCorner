/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Heart, Users, Brain, Sparkles, ArrowRight, Quote, Leaf } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
      <section className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
  {/* Top Left Blob */}
  <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-purple-400 opacity-20 blur-1px"></div>

  {/* Top Right Blob */}
  <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-400 opacity-20 blur-1px"></div>

  {/* Middle Left Blob */}
  <div className="absolute top-40 -left-24 w-80 h-80 rounded-full bg-teal-400 opacity-20 blur-1px"></div>

  {/* Bottom Right Blob */}
  <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-amber-700 opacity-20 blur-1px"></div>
</div>


        <div className="relative container mx-auto px-3 py-3 md:py-30 flex flex-col items-center text-center z-10 ">
          <div className="inline-block mb-6 p-3 bg-white rounded-2xl shadow-lg">
            <div className="bg-gradient-to-r from-purple-600 to-teal-600 p-2 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-600">
            Your Mental Wellness Journey Starts Here
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mb-10 text-slate-600">
            Support, Resources, and Community for a Healthier Mind
          </p>

          <Link
            to="/login"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Get Started
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
<div className="absolute bottom-0 left-0 right-0">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 120"
    className="w-full h-auto"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="curveGradient" x1="0" y1="0" x2="1" y2="0">
        {/* Left to right: match the next section's gradient */}
        <stop offset="0%" stopColor="#e0c3fc" />  
        <stop offset="100%" stopColor="#8ec5fc" />
      </linearGradient>
    </defs>
    <path
      fill="url(#curveGradient)"
      d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
    />
  </svg>
</div>


      </section>

      <section className=" bg-[linear-gradient(135deg,_#e0c3fc_0%,_#8ec5fc_100%)] p-6 rounded-xl shadow-md">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Why Mental Health <span className="text-purple-600">Matters</span>
          </h2>

          <p className="text-lg text-center max-w-4xl mx-auto mb-16 text-slate-600">
            Mental health affects how we think, feel, and act. It also helps determine how we handle stress, relate to
            others, and make choices. Taking care of your mental health is just as important as your physical health.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-purple-100 text-purple-600 mx-auto">
                <span className="text-2xl font-bold">1/5</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">1 in 5</h3>
              <p className="text-center text-slate-600">
                adults experience mental illness each year
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-teal-100 text-teal-600 mx-auto">
                <span className="text-2xl font-bold">50%</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">50%</h3>
              <p className="text-center text-slate-600">
                of all lifetime mental illness begins by age 14
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-amber-100 text-amber-600 mx-auto">
                <span className="text-2xl font-bold">46%</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">46%</h3>
              <p className="text-center text-slate-600">
                of Americans will meet criteria for a mental health condition
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-slate-50 bg-[linear-gradient(135deg,_#e0c3fc_0%,_#8ec5fc_100%)] p-6 rounded-xl shadow-md">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-teal-600">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-100 text-purple-600 mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Self-Care Guidance</h3>
                <p className="text-slate-600">
                  Tips and routines to help you care for your mental well-being.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-teal-100 text-teal-600 mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Community Support</h3>
                <p className="text-slate-600">Connect with others who understand your journey.</p>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-amber-100 text-amber-600 mb-6">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Expert Resources</h3>
                <p className="text-slate-600">
                  Access to articles and advice from mental health professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 bg-[linear-gradient(135deg,_#e0c3fc_0%,_#8ec5fc_100%)] p-6 rounded-xl shadow-md">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Our <span className="text-amber-600">Users Say</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative p-8 pt-12 bg-white rounded-2xl shadow-lg border border-slate-200">
              <div className="absolute -top-6 left-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600">
                  <Quote className="w-6 h-6" />
                </div>
              </div>
              <p className="text-lg mb-6 text-slate-600">
                "This platform helped me find the right tools to manage my anxiety. I'm so grateful!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-teal-600 text-white font-bold">
                  A
                </div>
                <h4 className="ml-3 font-medium">— Alex</h4>
              </div>
            </div>

            <div className="relative p-8 pt-12 bg-white rounded-2xl shadow-lg border border-slate-200">
              <div className="absolute -top-6 left-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600">
                  <Quote className="w-6 h-6" />
                </div>
              </div>
              <p className="text-lg mb-6 text-slate-600">
                "Being able to connect with others going through similar challenges made all the difference."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-amber-600 text-white font-bold">
                  J
                </div>
                <h4 className="ml-3 font-medium">— Jamie</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden bg-[linear-gradient(135deg,_#e0c3fc_0%,_#8ec5fc_100%)] p-6 rounded-xl shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-teal-600/90"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 text-center z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-white/20 text-white">
            <Leaf className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start Your Journey Today</h2>

          <p className="text-xl max-w-2xl mx-auto mb-10 text-white/90">
            You're not alone. Join our supportive community and take control of your mental well-being.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="px-8 py-4 bg-white text-purple-600 hover:bg-purple-50 font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Join Now
            </Link>
            <Link
              to="/aboutus"
              className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}