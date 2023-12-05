import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex before justify-center items-center flex-col '>
        <nav className='flex justify-between items-center w-full mb-10 pt-3 px-10'>
            <img src={logo} alt="sumz_logo" className='w-28 object-contain '/>
            <button type='button' onClick={() => window.open('https://github.com/mentos-1')}
            className='black_btn'>
              Github
            </button>
        </nav>
        <h1 className='head_text'>
          Summerize<br/> Articles with <br className='max-md:hidden' />
          <span className='blue_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'> 
        IT will simplify your lengthy articles into  simple summarize</h2>

    </header>
  )
}

export default Hero