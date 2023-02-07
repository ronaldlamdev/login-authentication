import Logo from '../images/devchallenges.svg';
import Pfp from '../images/animegirl.jpg';
import {BsFillCaretDownFill, BsFillCaretUpFill} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {RiGroupFill} from 'react-icons/ri'
import {TbLogout} from 'react-icons/tb'
import { useState } from 'react';

const Profile = () => {
  
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className=''>
      {/* Header */}
      <header className='p-5 flex justify-between relative'>
        <a href='/'>
          <img src={Logo} alt="logo"/>
        </a>
        <div className='flex items-center gap-2'>
          <img src={Pfp} alt='profile picture' className='w-10 h-10 rounded-lg'/>
          <h1 className='hidden md:flex text-sm font-bold'>Sabrina Natsume</h1>
          {menu ? <BsFillCaretUpFill onClick={handleMenu} className='hidden md:flex cursor-pointer'/> : <BsFillCaretDownFill onClick={handleMenu} className='hidden md:flex cursor-pointer'/>}
        </div>
        <div className={menu ? 'hidden md:flex md:flex-col md:justify-evenly absolute right-[4.5px] top-20 w-[184px] h-[174px] border border-[#E0E0E0] rounded-xl' : 'hidden'}>
          <div className='flex py-2 px-3 duration-300 cursor-pointer hover:bg-[#F2F2F2] items-center gap-2 text-[#4F4F4F] text-sm font-medium'>
            <CgProfile />
            <h2>My Profile</h2>
          </div>
          <div className='flex py-2 px-3 duration-300 cursor-pointer hover:bg-[#F2F2F2] items-center gap-2 text-[#4F4F4F] text-sm font-medium'>
            <RiGroupFill />
            <h2>Group Chat</h2>
          </div>
          <div className='bg-[#E0E0E0] h-[1px]'/>
          <div className='flex cursor-pointer py-2 px-3 items-center gap-2 text-[#EB5757] hover:bg-[#EB5757] hover:text-white duration-300 rounded font-medium text-sm'>
            <TbLogout />
            <h2>Logout</h2>
          </div>
        </div>
      </header>
      <div className='md:border md:border-[#E0E0E0] md:rounded-xl md:mx-48 md:max-w-[840px] pb-4 md:mb-4'>
        {/* Header for basic personal info */}
        <div className='px-5 flex flex-col items-center'>
          <h1 className='text-[#000000] text-2xl'>Personal info</h1>
          <h2 className='text-[#000000] text-sm font-light'>Basic info, like your name and photo</h2>
        </div>
        <div className='px-5 mt-10 flex justify-between items-center'>
          <div>
            <h1 className='text-2xl text-[#000000]'>Profile</h1>
            <h2 className='text-[#828282] text-[.813rem] font-medium'>
              Some info may be visible to other people
            </h2>
          </div>
          <button className='text-[#828282] hover:bg-[#828282] hover:text-white duration-300 font-medium rounded-xl px-8 py-[.375rem] border-[#828282] border'>
            Edit
          </button>
        </div>

        {/* Change personal info */}
        <div>
          <div className='px-5 py-8 flex justify-between items-center border-b border-[#E0E0E0]'>
            <h3 className='text-[#BDBDBD] font-medium text-sm'>PHOTO</h3>
            <img src={Pfp} alt='profile picture' className='w-20 h-20 rounded-lg'/>
          </div>
          <div className='px-5 py-8 flex justify-between items-center border-b border-[#E0E0E0]'>
            <h3 className='text-[#BDBDBD] font-medium text-sm'>NAME</h3>
            <h3>Sabrina Natsume</h3>
          </div>
          <div className='px-5 py-8 flex justify-between items-center border-b border-[#E0E0E0]'>
            <h3 className='text-[#BDBDBD] font-medium text-sm'>BIO</h3>
            <h3>I am a software developer...</h3>
          </div>
          <div className='px-5 py-8 flex justify-between items-center border-b border-[#E0E0E0]'>
            <h3 className='text-[#BDBDBD] font-medium text-sm'>EMAIL</h3>
            <h3>sabrina.natsume@gmail.com</h3>
          </div>
          <div className='px-5 py-8 flex justify-between items-center border-b border-[#E0E0E0]'>
            <h3 className='text-[#BDBDBD] font-medium text-sm'>PASSWORD</h3>
            <h3>********</h3>
          </div>
          <button className='font-medium hover:opacity-80 duration-300 ml-5 mt-8 text-[#fff] bg-[#2F80ED] rounded-lg px-8 py-2'>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile