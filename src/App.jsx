import Header from './components/homePage/Header.jsx'
import Welcome from './components/homePage/Welcome.jsx'
import Card from './components/homePage/Card.jsx'
import RightAbout from './components/aboutPage/RightAbout.jsx'
import LeftAbout from './components/aboutPage/LeftAbout.jsx'
import Work from './views/Work';
import Testimonials from './views/Testimonials'
import Price from './views/Price';
import Count from './views/Count'; 
import Blog from './views/Blog';
import Contact from './views/Contact';
import Footer from './views/Footer';
function App() {
  return (
    <>
      <Welcome />
      <Header />
      <Card />
      <RightAbout />
      <LeftAbout />
      <Work />
      <Testimonials />
      <Price />
      <Count />
      <Blog />
<Contact />
      <Footer />
      
    </>
  )
}

export default App