import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProgramDetailScreen from './screens/ProgramDetailScreen';
import DetailScreen from './screens/DetailScreen';
import DepartmentScreen from './screens/DepartmentScreen';
import CourseFinderScreen from './screens/CourseFinderScreen';
import AboutScreen from './screens/AboutScreen';
import CampusScreen from './screens/CampusScreen';
import PortalsScreen from './screens/PortalsScreen';
import AppState from './Context/app/appState';
import Staff from './screens/Staff';
import Events from './screens/Events';

function App() {
  return (
    <AppState>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route exact path='/' element={<HomeScreen/>}/>
    <Route exact path='/program/:id' element={<ProgramDetailScreen/>}/>
    <Route exact path='/department/:id' element={<DetailScreen/>}/>
    <Route exact path='/course/:id' element={<DepartmentScreen/>}/>
    <Route exact path='/admissions' element={<CourseFinderScreen/>}/>
    <Route exact path='/about' element={<AboutScreen/>}/>
    <Route exact path='/campus' element={<CampusScreen/>}/>
    <Route exact path='/portal' element={<PortalsScreen/>}/>
    <Route exact path='/staff/:id' element={<Staff/>}/>
    <Route exact path='/events/:id' element={<Events/>}/>
    </Routes>
    <Footer/>
   
 
   </BrowserRouter>
   </AppState>
  
  );
}

export default App;
