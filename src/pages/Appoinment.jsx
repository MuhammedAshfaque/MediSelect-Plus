import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'
const Appoinment = () => {
    const { docId } = useParams()
    const { doctors, currencySymbol } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'TUE', 'FRI', 'SAT']
    const [docInfo, setDocInfo] = useState(null)
    
    /*-----For slots concept-----*/
    const [docSlots, setdocSlots] = useState([])
    const [slotIndex, setslotIndex] = useState(0)
    const [slotTime, setslotTime] = useState('')
    /*--------------*/

    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id === docId)
        setDocInfo(docInfo)
    }

    const getAvailableSlots = async () => {
        // At first clear the previous slots
        setdocSlots([])

// Here today will get the Date object, where you will get lot of built-in function, to get current time, date etc
        let today = new Date()
        for (let i = 0; i < 7; i++) {
            // getting date with index
            const currentDate = new Date(today)
            // Now current date is this
            currentDate.setDate(today.getDate() + i)

            // setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            // End time fixed to 9 pm
            endTime.setHours(21, 0, 0, 0)

            // setting hours
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10) 
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            }
            // This condition will meet when we are not in current date
            else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }
            let timeSlots = []
            // Here entire timestamps will compare, but we need to compare just time untill 9 pm
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], {
                    hours: '2-digit',
                    minuate: '2-digit',
                })
                // add slots to array
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                })
                // Increment current time by 30 minute
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }
            setdocSlots(prev => ([...prev, timeSlots]))
        }
    }
    useEffect(() => {
        console.log(docSlots)
    }, [docSlots])

    useEffect(() => {
        getAvailableSlots()
    }, [docInfo])

    useEffect(() => {
        fetchDocInfo()
    }, [doctors, docId])

    return docInfo && (
        <div>
            {/*-------Doctor details--------*/}
            <div className='flex sm:flex-row gap-4'>
                <div>
                    <img className='bg-[#5f6FFF] w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
                </div>
                <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt[-80px] sm:mt-0'>
                    {/* ---------Doc Info : name, degree, experience---------- */}
                    <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
                        {docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" />
                    </p>
                    <div className='flex items-center gap-2 text-sm mt-1 text-gray-500'>
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
                    </div>
                    {/* --------Doctor About-------- */}
                    <div className=''>
                        <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
                        <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
                    </div>
                    <p className='text-gray-500 font-medium mt-4'>
                        Appoinment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
                    </p>
                </div>
            </div>

            {/* -------Booking slots------- */}
            <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
                <p>Booking Slots</p>
                <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
                    {
                        docSlots.length && docSlots.map((item, index) => (
                            <div onClick={() => setslotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-[#1a3bbe] text-white' : 'border border-gray-200'}`} key={index}>
                                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                <p>{item[0] && item[0].datetime.getDate()}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                    {docSlots.length && docSlots[slotIndex].map((item,index) => (
                        <p onClick={() => setslotTime(item.time)} className={`text-sm font-light flex-shrik-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-[#5f6FFF] text-white': 'text-gray-400 border border-gray-300'}`} key={index}>
                            {item.time.toLowerCase()}
                        </p>
                    ))}
                </div>
                <button className='bg-[#5f6FFF] text-white text-sm font-light px-14 py-3 rounded-full my-6 cursor-pointer'>Book Appoinment</button>
            </div>
            {/* Listing related doctors */}
            <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
        </div>
    )
}

export default Appoinment
