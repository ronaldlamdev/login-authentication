import Logo from '../images/devchallenges.svg'

const Main = () => {
  return (
    <main className=''>
      <div>
        <img src={Logo} alt="logo"/>
        <h1>
          Join thousands of learners from around the world
        </h1>
        <p>
          Master web development by making real-life projects.
          There are multiple paths for you to choose
        </p>
        <form>
          <input type='email' placeholder='Email'/>
          <input type='text' placeholder='Password'/>
        </form>
      </div>
    </main>
  )
}

export default Main