import Demo from './components/Demo'
import Hero from './components/Hero'

const app = () => {
  return (
    <main>
        <div className='main'>
            <div className='gradient'>
            </div>
        </div>

        <div className='App'>
            <Hero/>
            <Demo/>

        </div>



    </main>
  )
}

export default app