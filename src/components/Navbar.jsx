import  React, {useState} from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    const [showmenu, setshowmenu] = useState(false)
    const [token, settoken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-1 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>{navigate('/')}} className='w-65 cursor-pointer' src={assets.logo} alt="logo" />
      <ul className='hidden md:flex items-start font-medium gap-7'>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-4/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctor'>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-4/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-4/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>Contact</li>
            <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-4/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 test-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                  <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('my-profile')} className='hover:text-black'>My Profile</p>
                    <p onClick={()=>navigate('my-appoinments')} className='hover:text-black'>My Appoinment</p>
                    <p onClick={()=>settoken(false)} className='hover:text-black'>Logout</p>
                  </div>
                </div>
            </div>
            :<button className='bg-[#5f6FFF] text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer' onClick={()=>navigate('/login')}>Creat New Account</button>
        }
        <img className='w-6 md:hidden ml-1' onClick={()=>setshowmenu(true)} src={assets.menu_icon} alt="" />

        {/* ----------Mobile Menu----------- */}
        <div className={`md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all ${showmenu ? 'fixed w-full' : 'h-0 w-0'}`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img width={200} src={assets.logo} alt="" />
            <img className='w-7' onClick={()=>setshowmenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-4 text-lg font-medium'>
            <NavLink onClick={() => setshowmenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p></NavLink>
            <NavLink onClick={() => setshowmenu(false)} to='/doctor' ><p className='px-4 py-2 rounded full inline-block'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setshowmenu(false)} to='/about' ><p className='px-4 py-2 rounded full inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => setshowmenu(false)} to='/contact' ><p className='px-4 py-2 rounded full inline-block'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
