import Logo from '../images/devchallenges.svg';
import Pfp from '../images/animegirl.jpg';

const Profile = () => {
  return (
    <div className=''>
      {/* Header */}
      <header className='p-5 flex justify-between'>
        <img src={Logo} alt="logo"/>
        <img src={Pfp} alt='profile picture' className='w-10 h-10 rounded-lg'/>
      </header>
      <div className='md:border md:border-[#E0E0E0] md:rounded-xl'>
        {/*  */}
        <div className='px-5 flex flex-col items-center'>
          <h1 className='text-[#000000] text-2xl'>Personal info</h1>
          <h2 className='text-[#000000] text-sm font-light'>Basic info, like your name and photo</h2>
        </div>
        <div className='px-5 flex justify-between items-center'>
          <div>
            <h1 className='text-2xl text-[#000000]'>Profile</h1>
            <h2 className='text-[#828282] text-[.813rem] font-medium'>
              Some info may be visible to other people
            </h2>
          </div>
          <button className='text-[#828282] font-medium rounded-xl px-8 py-[.375rem] border-[#828282] border'>
            Edit
          </button>
        </div>
      <div>
        <div className='px-5 flex justify-between items-center border-b py-4 border-[#E0E0E0]'>
          <h3 className='text-[#BDBDBD] font-medium text-sm'>PHOTO</h3>
          <img src={Pfp} alt='profile picture' className='w-20 h-20 rounded-lg'/>
        </div>
        <div>
          <h3>NAME</h3>
          <h3>Sabrina Natsume</h3>
        </div>
        <div>
          <h3>BIO</h3>
          <h3>I am a software developer...</h3>
        </div>
        <div>
          <h3>EMAIL</h3>
          <h3>sabrina.natsume@gmail.com</h3>
        </div>
        <div>
          <h3>PASSWORD</h3>
          <h3>********</h3>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Profile