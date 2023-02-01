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
        <h1 className='text-[#333] text-lg leading-6 font-semibold'>
          Join thousands of learners from around the world
        </h1>
        <p className='text-[#333] leading-5'>
          Master web development by making real-life projects.
          There are multiple paths for you to choose
        </p>
        <form className='flex flex-col'>
          <div>
            <input type='email' placeholder='Email' className='rounded-lg border py-3 px-3 w-full border-[#BDBDBD]'/>
            <label>
              <MdEmail className='' />
            </label>
          </div>
          <input type='text' placeholder='Password' className='rounded-lg border py-3 px-3 w-full border-[#BDBDBD]'/>
          <label>
            <AiFillLock className='' />
          </label>
          <button>
            Start coding now
          </button>
        </form>
        <p>or continue with these social profile</p>
        <div>
          <div>
            <AiOutlineGoogle />
          </div>
          <div>
            <AiFillFacebook />
          </div>
          <div>
            <AiOutlineTwitter />
          </div>
          <div>
            <AiFillGithub />
          </div>
        </div>
        <p>Already a member?<span>Login</span></p>
      </div>
    </main>
  )
}

export default Main