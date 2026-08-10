import Greet from "./components/Greet"
import Header from "./components/Header"
import Footer from './components/Footer'
import MainComponents from "./components/MainComponents"
import WelcomeMessage from './components/WelcomeMessage'
const App = () => {
  return (
  <div>
    <Greet />
    <Header/> 
    <MainComponents/>
    <WelcomeMessage/>
    <Footer/> 
  </div>
  )
}

export default App;    