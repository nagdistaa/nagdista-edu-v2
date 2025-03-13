
import './App.css'
import Econemy from './components/economey/Econmey'
import NavBar from './components/navBar/NavBar'
import WebsiteDesign from './components/websiteDesign/WebsiteDesign'
import Footer from './footer/Footer'
import SocailGroups from './socialGroups/SocailGroups'

function App() {

  return (
    <>
    <NavBar/>
    <h2 className=" px-2.5 text-2xl font-bold mb-4 text-white p-[10px] w-fit rounded-r-2xl bg-red-500">Lectures</h2>
   <div className=" min-w-full px-2.5 ">
   <WebsiteDesign />   
    <Econemy/>
    <Econemy/>
    <Econemy/>
    <Econemy/>
   

   </div>
   <h2 className=" px-2.5 text-2xl font-bold mb-4 text-white p-[10px] w-fit rounded-r-2xl bg-red-500">Groups</h2>
    <div className='min-w-full px-2.5'>
    <SocailGroups/>
    </div>
   <Footer/>
   </>
  )
}

export default App
