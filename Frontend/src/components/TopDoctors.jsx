import React from 'react'
// import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)
return (
  <div className="relative my-28 px-4 md:px-10">

    {/* Section Header */}
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
        Meet Our Top Doctors
      </h1>
      <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm">
        Hand-picked specialists trusted by thousands of patients.
      </p>
    </div>

    {/* Doctor Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {doctors.slice(0, 4).map((item, index) => (
        <div
          key={index}
          onClick={() => {
            navigate(`/appoinment/${item._id}`);
            scrollTo(0, 0);
          }}
          className="group relative cursor-pointer rounded-[28px]
                     bg-white/60 backdrop-blur-2xl
                     border border-blue-100
                     px-6 py-8
                     hover:-translate-y-4 hover:shadow-[0_30px_80px_rgba(59,130,246,0.25)]
                     transition-all duration-500"
        >
          {/* Availability Badge */}
          <span
            className={`absolute top-5 right-5 flex items-center gap-1
              text-xs font-medium px-3 py-1 rounded-full
              ${
                item.available
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-200 text-gray-500"
              }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                item.available ? "bg-green-500" : "bg-gray-400"
              }`}
            ></span>
            {item.available ? "Available" : "Unavailable"}
          </span>

          {/* Doctor Image */}
          <div className="flex justify-center mt-6">
            <div
              className="relative w-32 h-32 rounded-full p-[3px]
                         bg-gradient-to-br from-blue-400 bg-primary
                         group-hover:scale-105 transition"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover
                             group-hover:scale-110 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="text-center mt-6">
            <h3 className="text-lg font-semibold text-gray-900">
              {item.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {item.speciality}
            </p>

            {/* Divider */}
            <div className="w-10 h-[2px] bg-gradient-to-r from-blue-400 bg-primary mx-auto my-4 rounded-full"></div>

            {/* CTA */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/appoinment/${item._id}`);
                scrollTo(0, 0);
              }}
              className="mt-2 w-full py-2.5 rounded-xl text-sm font-medium
                         text-white
                         bg-gradient-to-r from-blue-500 bg-primary
                         hover:bg-cyan-500 hover:from-blue-800
                         shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              Consult Now
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* View All Button */}
    <div className="flex justify-center mt-20">
      <button
        onClick={() => {
          navigate("/doctor");
          scrollTo(0, 0);
        }}
        className="px-16 py-3 rounded-full font-medium
                   text-white
                   bg-gradient-to-r from-blue-500 bg-primary
                 hover:bg-cyan-500 hover:from-blue-800
                   shadow-lg hover:shadow-xl transition cursor-pointer"
      >
        View All Doctors
      </button>
    </div>
  </div>
);



}

export default TopDoctors
