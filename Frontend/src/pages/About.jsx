import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
  <div className="px-4 md:px-10 overflow-hidden">

    {/* ===== ABOUT HERO ===== */}
    <section className="my-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
      
      {/* Text */}
      <div>
        <p className="text-blue-600 font-semibold tracking-wide mb-2">
          ABOUT US
        </p>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Your Trusted Partner in <br /> Digital Healthcare
        </h1>

        <p className="mt-6 text-gray-600 text-sm leading-relaxed">
          Welcome to MediSelect, your trusted partner in managing your healthcare
          needs conveniently and efficiently. At Prescripto, we understand the
          challenges individuals face when it comes to scheduling doctor
          appointments and managing their health records.
        </p>

        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          Prescripto is committed to excellence in healthcare technology. We
          continuously strive to enhance our platform, integrating the latest
          advancements to improve user experience and deliver superior service.
        </p>

        {/* Vision Card */}
        <div className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100">
          <h3 className="text-gray-900 font-semibold mb-2">Our Vision</h3>
          <p className="text-sm text-gray-600">
            To create a seamless healthcare experience by bridging the gap
            between patients and healthcare providers, making quality care
            accessible anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-full h-full bg-blue-100 rounded-3xl"></div>
        <img
          src={assets.about_image}
          alt="About Prescripto"
          className="relative rounded-3xl shadow-xl"
        />
      </div>
    </section>

    {/* ===== WHY CHOOSE US ===== */}
    <section className="my-28">
      <div className="text-center mb-14">
        <p className="text-blue-600 font-semibold tracking-wide">
          WHY CHOOSE US
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Built for Patients, Powered by Technology
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="group p-8 rounded-3xl border border-gray-200 
                       hover:shadow-xl hover:bg-cyan-300 transition-all">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                          bg-blue-100 text-blue-600 mb-5 text-xl">
            ⚡
          </div>
          <h3 className="font-semibold text-lg text-gray-900 mb-3">
            Efficiency
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Streamlined appointment scheduling that fits perfectly into your
            busy lifestyle.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group p-8 rounded-3xl border border-gray-200 
                        hover:bg-cyan-300 hover:shadow-xl transition-all">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                          bg-blue-100 text-blue-600 mb-5 text-xl">
            🩺
          </div>
          <h3 className="font-semibold text-lg text-gray-900 mb-3">
            Convenience
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Access a wide network of trusted healthcare professionals near you,
            anytime you need.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group p-8 rounded-3xl border border-gray-200 
                        hover:bg-cyan-300 hover:shadow-xl transition-all">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl 
                          bg-blue-100 text-blue-600 mb-5 text-xl">
            🎯
          </div>
          <h3 className="font-semibold text-lg text-gray-900 mb-3">
            Personalization
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Tailored recommendations, reminders, and care experiences designed
            around you.
          </p>
        </div>

      </div>
    </section>

  </div>
);

}

export default About
