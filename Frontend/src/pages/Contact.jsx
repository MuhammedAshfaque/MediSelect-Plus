import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

return (
  <div className="px-4 md:px-10">

    {/* ===== CONTACT HEADER ===== */}
    <section className="text-center mt-20 mb-16">
      <p className="text-blue-600 font-semibold tracking-wide mb-2">
        CONTACT US
      </p>
      <h1 className="text-4xl font-bold text-gray-900">
        We’re Here to Help
      </h1>
      <p className="mt-4 text-sm text-gray-500 max-w-xl mx-auto">
        Have questions, feedback, or career inquiries? Reach out to us anytime.
      </p>
    </section>

    {/* ===== CONTACT CONTENT ===== */}
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">

      {/* Image */}
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-full h-full bg-blue-100 rounded-3xl"></div>
        <img
          src={assets.contact_image}
          alt="Contact Prescripto"
          className="relative rounded-3xl shadow-xl"
        />
      </div>

      {/* Info Cards */}
      <div className="space-y-8">

        {/* Office */}
        <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            🏢 Our Office
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
        </div>

        {/* Contact */}
        <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            📞 Contact Info
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Tel: +91 74328 65493 <br />
            Email: ashfaquemuhammed94@gmail.com
          </p>
        </div>

        {/* Careers */}
        <div className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            💼 Careers at Mediselect
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Learn more about our teams and explore exciting job opportunities.
          </p>

          <button
            className="px-8 py-2.5 rounded-xl text-sm font-medium
                       bg-gradient-to-r from-blue-500 bg-primary text-white
                       hover:from-blue-700 hover:bg-primary transition"
          >
            Explore Jobs
          </button>
        </div>

      </div>
    </section>

  </div>
);

}

export default Contact
