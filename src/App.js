import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route exact path='/' element={<HomeScreen/>}/>
    </Routes>
    <Footer/>
   
 
   </BrowserRouter>
  
  );
}

export default App;
