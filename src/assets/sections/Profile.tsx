import Logo from '../images/devchallenges.svg';
import Pfp from '../images/animegirl.jpg';
import {AiFillCamera} from 'react-icons/ai'
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
  const [edit, setEdit] = useState(true);
  const handleEdit = () => setEdit(!edit);

  // Change name
  const [name, setName] = useState('Sabrina Natsume');

  // Change bio
  const [bio, setBio] = useState('I am a software developer');

  // Change email
  const [email, setEmail] = useState('sabrina.natsume@gmail.com');

  // Change password
  const [password, setPassword] = useState('*******'); 

  return (
    <div className=''>
      {/* Header */}
      <header className='p-5 flex justify-between w-full relative'>
        <a href='/'>
          <img src={Logo} alt="logo"/>
        </a>
        <div className='flex items-center gap-2'>
          <a href='/'>
            <img src={Pfp} alt='profile picture' className='w-10 h-10 rounded-lg'/>
          </a>
          <a href='/'>
            <h1 className='hidden md:flex hover:underline text-sm font-bold'>Sabrina Natsume</h1>
          </a>

          {/* Open dropdown menu */}
          {menu ? <BsFillCaretUpFill onClick={handleMenu} className='hidden md:flex cursor-pointer'/> : <BsFillCaretDownFill onClick={handleMenu} className='hidden md:flex cursor-pointer'/>}
        </div>

        {/* Dropdown menu */}
        <div className={menu ? 'hidden md:flex bg-white md:flex-col md:justify-evenly absolute right-[4.5px] top-20 w-[184px] h-[174px] border border-[#E0E0E0] rounded-xl' : 'hidden'}>
          <div className='flex py-2 px-3 duration-300 cursor-pointer hover:bg-[#F2F2F2] items-center gap-2 text-[#4F4F4F] text-sm font-medium'>
            <CgProfile />
            <a href='/'>
              <h2>My Profile</h2>
            </a>
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
            <h1 className='text-2xl text-[#000000]'>{edit ? 'Profile' : 'Change Info'}</h1>
            <h2 className='text-[#828282] mt-1 text-[.813rem] font-medium'>
              {edit ? 'Some info may be invisible to other people' : 'Changes will be reflected to every services'}
            </h2>
          </div>
          {/* Edit button */}
          <button onClick={handleEdit} className={edit ? 'text-[#828282] hover:bg-[#828282] hover:text-white duration-300 font-medium rounded-xl px-8 py-[.375rem] border-[#828282] border' : 'invisible'}>
            Edit
          </button>
        </div>

        {/* Form to change personal info */}
        <div>
          {/* Photo */}
          <div className='px-5 py-8 flex justify-between items-center border-y border-[#E0E0E0]'>
            <div>
              <h3 className={edit ? 'text-[#BDBDBD] font-medium text-sm' : 'hidden'}>PHOTO</h3>
              <div className={edit ? 'hidden' : 'flex items-center gap-5'}>
                <div className='relative w-[72px] h-[72px]'>
                  <img src={Pfp} className='w-[72px] h-[72px] rounded-lg brightness-75' alt='pfp'/>
                  <AiFillCamera size={25} color='white' className='absolute cursor-pointer top-0 bottom-0 left-0 right-0 mx-auto my-auto'/>
                </div>
                <h3 className='text-[#828282] text-[13px] tracking-tighter leading-[18px] font-medium'>Change Photo</h3>
              </div>
            </div>
            <img src={Pfp} alt='profile picture' className={edit ? 'w-20 h-20 rounded-lg block' : 'w-20 h-20 rounded-lg hidden'}/>
          </div>

          {/* Name */}
          <div className='px-5 py-8 flex justify-between items-center border-b border-[#E0E0E0]'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#BDBDBD] font-medium text-sm'>NAME</h3>
              <input onChange={e => setName(e.target.value)} type='text' placeholder='Enter your name...' className={edit ? 'hidden' : 'block pl-5 w-[417px] h-[52px] border border-[#828282] rounded-xl'}/>
            </div>
            <h3 className={edit ? 'block' : 'hidden'}>{name}</h3>
          </div>

          {/* BIO */}
          <div className='px-5 py-8 flex justify-between items-center border-b border-[#E0E0E0]'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#BDBDBD] font-medium text-sm'>BIO</h3>
              <textarea onChange={e => setBio(e.target.value)} placeholder='Enter your bio...' className={edit ? 'hidden' : 'block break-words px-5 py-4 w-[417px] h-[92px] border border-[#828282] rounded-xl'}/>
            </div>
            <h3 className={edit ? 'block' : 'hidden'}>{bio}</h3>
          </div>

          {/* Email */}
          <div className='px-5 py-8 flex justify-between items-center border-b border-[#E0E0E0]'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#BDBDBD] font-medium text-sm'>EMAIL</h3>
              <input onChange={e => setEmail(e.target.value)} type='email' placeholder='Enter your email...' className={edit ? 'hidden' : 'block pl-5 w-[417px] h-[52px] border border-[#828282] rounded-xl'}/>
            </div>
            <h3 className={edit ? 'block' : 'hidden'}>{email}</h3>
          </div>

          {/* Password */}
          <div className='px-5 py-8 flex justify-between items-center border-b border-[#E0E0E0]'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-[#BDBDBD] font-medium text-sm'>PASSWORD</h3>
              <input onChange={e => setPassword(e.target.value)} type='password' placeholder='Enter your new password...' className={edit ? 'hidden' : 'block pl-5 w-[417px] h-[52px] border border-[#828282] rounded-xl'}/>
            </div>
            <h3 className={edit ? 'block' : 'hidden'}>{password}</h3>
          </div>
          
          {/* Save button */}
          <button onClick={handleEdit} className={edit ? 'invisible' : 'font-medium hover:opacity-80 duration-300 ml-5 mt-8 text-[#fff] bg-[#2F80ED] rounded-lg px-8 py-2'}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile