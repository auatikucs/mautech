import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProgramDetailScreen from './screens/ProgramDetailScreen';
import DetailScreen from './screens/DetailScreen';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route exact path='/' element={<HomeScreen/>}/>
    <Route exact path='/program' element={<ProgramDetailScreen/>}/>
    <Route exact path='/department/:id' element={<DetailScreen/>}/>

    </Routes>
    <Footer/>
   
 
   </BrowserRouter>
  
  );
}

export default App;
