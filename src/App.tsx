
import './App.css'
import NavBar from './components/navBar/NavBar'
import WebsiteDesign from './components/websiteDesign/WebsiteDesign'
import Footer from './footer/Footer'

function App() {

  return (
    <>
    <NavBar/>
   <div className="container min-w-full px-2.5  ">
   <WebsiteDesign/>   
   <hr/>

   <p className='text-center'>...</p>
   </div>
   <Footer/>
   </>
  )
}

export default App
