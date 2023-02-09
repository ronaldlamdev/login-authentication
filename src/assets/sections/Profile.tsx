import Logo from '../images/devchallenges.svg';
import Pfp from '../images/animegirl.jpg';
import {BsFillCaretDownFill, BsFillCaretUpFill} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {RiGroupFill} from 'react-icons/ri'
import {TbLogout} from 'react-icons/tb'
import { useState } from 'react';

const Profile = () => {
  
  // Open and closes the menu next to header pfp image
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu)

  // Edit on when save button is off and vice versa
  const [edit, SetEdit] = useState(false);
  const handleEdit = () => SetEdit(!edit);

  return (
    <div className=''>
      {/* Header */}
      <header className='p-5 flex justify-between w-full relative'>
        <a href='/'>
          <img src={Logo} alt="logo"/>
        </a>
        <div className='flex items-center gap-2'>
          <img src={Pfp} alt='profile picture' className='w-10 h-10 rounded-lg'/>
          <h1 className='hidden md:flex text-sm font-bold'>Sabrina Natsume</h1>
          {menu ? <BsFillCaretUpFill onClick={handleMenu} className='hidden md:flex cursor-pointer'/> : <BsFillCaretDownFill onClick={handleMenu} className='hidden md:flex cursor-pointer'/>}
        </div>
        <div className={menu ? 'hidden md:flex bg-white md:flex-col md:justify-evenly absolute right-[4.5px] top-20 w-[184px] h-[174px] border border-[#E0E0E0] rounded-xl' : 'hidden'}>
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

      {/* Header for basic personal info */}
        <div className='px-5 flex flex-col items-center mb-11'>
          <h1 className='text-[#000000] text-2xl'>Personal info</h1>
          <h2 className='text-[#000000] text-sm font-light'>Basic info, like your name and photo</h2>
        </div>

      {/* Form to fill basic info */}

      <div className='md:border md:border-[#E0E0E0] md:rounded-xl md:mx-auto md:max-w-[840px] pb-4 md:mb-4'>
        <div className='px-5 mt-10 flex justify-between items-center'>
          <div>
            <h1 className='text-2xl text-[#000000]'>Profile</h1>
            <h2 className='text-[#828282] text-[.813rem] font-medium'>
              Some info may be visible to other people
            </h2>
          </div>
          <button onClick={handleEdit} className={edit ? 'text-[#828282] hover:bg-[#828282] hover:text-white duration-300 font-medium rounded-xl px-8 py-[.375rem] border-[#828282] border' : 'invisible'}>
            Edit
          </button>
        </div>

        {/* Change personal info */}
        <div>
          <div className='px-5 py-8 flex justify-between md:ju items-center border-y border-[#E0E0E0]'>
            <h3 className='text-[#BDBDBD] font-medium text-sm'>PHOTO</h3>
            <img src={Pfp} alt='profile picture' className='w-20 h-20 rounded-lg'/>
          </div>
          <div className='px-5 py-8 flex justify-between items-center border-b border-[#E0E0E0]'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#BDBDBD] font-medium text-sm'>NAME</h3>
              <input type='text' placeholder='Enter your name...' className={edit ? 'hidden' : 'block pl-5 w-[417px] h-[52px] border border-[#828282] rounded-xl'}/>
            </div>
            <h3 className={edit ? 'block' : 'hidden'}>Sabrina Natsume</h3>
          </div>
          <div className='px-5 py-8 flex justify-between items-center border-b border-[#E0E0E0]'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#BDBDBD] font-medium text-sm'>BIO</h3>
              <textarea placeholder='Enter your bio...' className={edit ? 'hidden' : 'block break-words px-5 py-4 w-[417px] h-[92px] border border-[#828282] rounded-xl'}/>
            </div>
            <h3 className={edit ? 'block' : 'hidden'}>I am a software developer...</h3>
          </div>
          <div className='px-5 py-8 flex justify-between items-center border-b border-[#E0E0E0]'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#BDBDBD] font-medium text-sm'>EMAIL</h3>
              <input type='email' placeholder='Enter your email...' className={edit ? 'hidden' : 'block pl-5 w-[417px] h-[52px] border border-[#828282] rounded-xl'}/>
            </div>
            <h3 className={edit ? 'block' : 'hidden'}>sabrina.natsume@gmail.com</h3>
          </div>
          <div className='px-5 py-8 flex justify-between items-center border-b border-[#E0E0E0]'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#BDBDBD] font-medium text-sm'>PASSWORD</h3>
              <input type='password' placeholder='Enter your new password...' className={edit ? 'hidden' : 'block pl-5 w-[417px] h-[52px] border border-[#828282] rounded-xl'}/>
            </div>
            <h3 className={edit ? 'block' : 'hidden'}>********</h3>
          </div>
          <button onClick={handleEdit} className={edit ? 'invisible' : 'font-medium hover:opacity-80 duration-300 ml-5 mt-8 text-[#fff] bg-[#2F80ED] rounded-lg px-8 py-2'}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile