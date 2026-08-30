import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useEffect, useState, useContext } from 'react'

const Doctors = () => {
  const navigate = useNavigate()
  const { speciality } = useParams()
  const [FilterDoc, setFilterDoc] = useState([])
  const [showfilter, setshowfilter] = useState(false)

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else {
      setFilterDoc(doctors)
    }
  }
  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])


  return (
    <div className="max-w-7xl mx-auto px-4">

      {/* Header text */}
      <p className="text-gray-500 text-sm mb-6">
        Browse through doctors by speciality
      </p>

      <div className="flex flex-col sm:flex-row gap-6">

        {/* Mobile Filter Button */}
        <button
          className={`sm:hidden px-4 py-2 rounded-full text-sm font-medium transition-all
        ${showfilter
              ? 'bg-gradient-to-r from-blue-500 bg-primary text-white shadow-lg'
              : 'border border-gray-300 text-gray-600'
            }`}
          onClick={() => setshowfilter(prev => !prev)}
        >
          {showfilter ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/* Filter Sidebar */}
        <div
          className={`flex flex-col gap-3 text-sm
        ${showfilter ? 'flex' : 'hidden sm:flex'}
        bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-gray-200`}
        >

          {[
            'General physician',
            'Gynecologist',
            'Dermatologist',
            'Pediatricians',
            'Neurologist',
            'Gastroenterologist',
          ].map((spec, i) => (
            <p key={i} onClick={() => speciality === spec ? navigate('/doctor') : navigate(`/doctor/${spec}`)}
              className={`cursor-pointer px-5 py-2 rounded-full transition-all
            ${speciality === spec ? 'bg-gradient-to-r from-blue-500 bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-6">

          {FilterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appoinment/${item._id}`)}
              className="group bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl overflow-hidden
            shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >

              {/* Image */}
              <div className="overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                <img
                  src={item.image}
                  alt=""
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">

                {/* Availability */}
                <div
                  className={`flex items-center gap-2 text-xs font-medium
                ${item.available ? 'text-green-600' : 'text-gray-400'}`}
                >
                  <span className={`w-2 h-2 rounded-full
                  ${item.available ? 'bg-green-500' : 'bg-gray-400'}`}
                  ></span>
                  {item.available ? 'Available Now' : 'Not Available'}
                </div>

                {/* Name */}
                <p className="text-gray-900 font-semibold text-base">
                  {item.name}
                </p>

                {/* Speciality */}
                <p className="text-sm text-gray-500">
                  {item.speciality}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )

}

export default Doctors
