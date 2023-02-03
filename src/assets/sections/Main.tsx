import {MdEmail} from 'react-icons/md'
import {AiFillLock, 
        AiOutlineGoogle, 
        AiFillFacebook,
        AiOutlineTwitter,
        AiFillGithub} from 'react-icons/ai'
import Logo from '../images/devchallenges.svg'

const Main = () => {
  return (
    <main className=''>
      <div className='px-5 py-6'>
        <img src={Logo} alt="logo"/>
        <h1 className='text-[#333] text-lg leading-6 mt-8 font-semibold'>
          Join thousands of learners from around the world
        </h1>
        <p className='text-[#333] leading-5 mt-4'>
          Master web development by making real-life projects.
          There are multiple paths for you to choose
        </p>
        <form className='flex flex-col mt-8'>
          <div>
            {/* Email */}
            <div className='relative'>
              <input type='email' placeholder='Email' className='rounded-lg border py-3 pl-11 w-full border-[#BDBDBD]'/>
              <label>
                <MdEmail size={24} className='absolute top-3 text-[#828282] left-3' />
              </label>
            </div>
            {/* Password */}
            <div className='relative mt-3'>
              <input type='text' placeholder='Password' className='rounded-lg border py-3 pl-11 w-full border-[#BDBDBD]'/>
              <label>
                <AiFillLock size={24} className='absolute top-3 text-[#828282] left-3' />
              </label>
            </div>
          </div>
          <button className='bg-[#2F80ED] mt-5 cursor-pointer leading-5 rounded-lg py-3 px-14 text-[#FFF] font-semibold'>
            Start coding now
          </button>
        </form>
        {/* Links to other sites and/or pages */}
        <div className='flex flex-col items-center mt-7'>
          <p className='text-sm text-[#828282]'>or continue with these social profile</p>
          <div className='flex mt-5 gap-5'>
            <div className='border cursor-pointer border-[#828282] p-2 rounded-full'>
              <AiOutlineGoogle size={23} className='text-[#828282]' />
            </div>
            <div className='border cursor-pointer border-[#828282] p-2 rounded-full'>
              <AiFillFacebook size={23} className='text-[#828282]' />
            </div>
            <div className='border cursor-pointer border-[#828282] p-2 rounded-full'>
              <AiOutlineTwitter size={23} className='text-[#828282]' />
            </div>
            <div className='border cursor-pointer border-[#828282] p-2 rounded-full'>
              <AiFillGithub size={23} className='text-[#828282]' />
            </div>
          </div>
          <p className='text-[#828282] mt-6 text-sm'>Already a member? <span className='text-[#2D9CDB] cursor-pointer'>Login</span></p>
        </div>
      </div>
    </main>
  )
}

export default Main