import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Started_Section from './components/Banner/State_Section/Started_Section/Started_Section'

function App() {
  return (
    <>
     <div className='max-w-400 mx-auto'>
        <div className='lg:w-[85%] mx-auto'>
          <Navbar></Navbar>
        </div>

        <div className='lg:w-[85%] mx-auto'>
          <Banner></Banner>
        </div>

        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
        <State_Section></State_Section>
        </div>

        <div className='lg:w-[85%] mx-auto'>
          <Started_Section></Started_Section>
        </div>

        <Footer></Footer>
     </div>
    </>
  )
}

export default App