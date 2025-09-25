import React, {useState} from 'react'


const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const onSubmitHandler = async (e)=>{
    e.preventDefault() //When we submit the form, it will not reload the page
  }
  return (
    <form className='min-h-[80vh] flex justify-center items-center' action="">
      <div className='flex flex-col gap-3 m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state==='Sign Up'?"Creat Account": "Login"}</p>
        <p>Please {state==='Sign Up'?"Creat Account": "Login"} to book apponment</p>
        {state == 'Sign Up' && <div className='w-full '>
          <p>Full Name</p>
          <input name="name" onChange={(e)=> setName(e.target.value)}  value={name} className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" required />
        </div>}
        <div className='w-full '>
          <p>Email</p>
          <input name="email" onChange={(e)=> setEmail(e.target.value)}  value={email} className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full '>
          <p>Password</p>
          <input name="password" onChange={(e)=> setPassword(e.target.value)}  value={password} className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button className='commonColor text-white w-full py-2 rounded-md text-base cursor-pointer'>{state==='Sign Up'?"Creat Account": "Login"}</button>
        {
          state === "Sign Up"
          ? <p>Already have an account ? <span onClick={()=>setState('Login')} className='text-bg-[#5f6FFF] cursor-pointer'>Login here</span></p>
          : <p>Creat an account? <span onClick={()=>setState('Sign Up')} className='text-bg-[#5f6FFF] cursor-pointer'>click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
