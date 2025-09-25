import React, {useState} from 'react'
import { assets } from '../assets/assets'

const Myrofile = () => {
  const [userdata, setuserdata] = useState({
    name:"SK MD ASHFAQUE",
    image:assets.profile_pic,
    email:'ashfaquemuhammed94@gmail.com',
    phone:'+917432865493',
    address:{
      line1:"South Bazar Andal",
      line2:"Royalty more"
    },
    gender:'Male',
    dob:'2000-01-20'
  })
  const [isEdit, setIsEdit] = useState(true)
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img className='w-25 rounded' src={userdata.image} alt="" />
      {
        isEdit
        ? <input className='bg-gray-50 text-3xl font-medium max-w-65 mt-4' type="text" onChange={e => setuserdata(prev => ({...prev, name: e.target.value}))} value={userdata.name}/>
        : <p className='text-lg font-medium'>{userdata.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none'/>
      <div>
        <p className='text-neutral-600 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email Id:</p>
          <p className='text-blue-500'>{userdata.email}</p>
          <p className='font-medium'>Phone:</p>
          {
          isEdit
          ? <input type="text" onChange={e => setuserdata(prev => ({...prev, phone: e.target.value}))} value={userdata.phone}/>
          : <p>{userdata.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit
            ?<p className='flex flex-col'>
              <input className='bg-gray-50 p-2 border border-gray-400 rounded' onChange={(e)=> setuserdata(prev =>({...prev, address: {...prev.address, line1: e.target.value}}))} value={userdata.line1} type='text'/>
              <br />
              <input className='bg-gray-50 py-2 border border-gray-400 rounded' onChange={(e)=> setuserdata(prev =>({...prev, address: {...prev.address, line2: e.target.value}}))} value={userdata.line2} type='text'/>
            </p>
            :<p className='text-gray-500'>
              {userdata.address.line1}
              <br />
              {userdata.address.line1}
            </p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit
            ? <select className='max-w-20 bg-gray-100' onChange={(e)=> setuserdata(prev => ({...prev, gender: e.target.value}))} value={userdata.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            : <p className='text-gray-400'>{userdata.gender}</p>
          }
          <p className='font-medium'>Birthday:</p>
          {
            isEdit ? <input className='max-w-28 bg-gray-100' type="date" name='' id=''  onChange={(e)=> setuserdata(prev => ({...prev, dob: e.target.value}))} value={userdata.dob}/>
            : <p className='text-gray-400'>{userdata.dob}</p>
          }
        </div>
      </div>
      <div className='mt-10'>
          {
              isEdit
                  ? <button onClick={() => setIsEdit(false)} className='border border-[#5f6FFF] px-8 py-2 rounded-full hover:bg-[#5f6FFF] hover:text-white transition-all cursor-pointer'>Save information</button>
                  : <button onClick={() => setIsEdit(true)} className='border border-[#5f6FFF] px-8 py-2 rounded-full hover:bg-[#5f6FFF] hover:text-white transition-all cursor-pointer'>Edit</button>
          }
            </div>
    </div>
  )
}

export default Myrofile
