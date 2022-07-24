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
import AboutMau from './screens/AboutMau';
import AboutMauLeadership from './screens/AboutLeadership'
import UnderGraduate from './screens/UnderGraduate'
import Principal from './screens/Principal';
import Intervention from './screens/Intervention';
import Facilities from './screens/Facilities';
import Careers from './screens/Careers';
import AllEvents from './screens/AllEvents';
import Downloads from './screens/Downloads';
import Alumni from './screens/Alumni';
import GalleryScreen from './screens/GalleryScreen';
import Oer from './screens/Oer';

function App() {
  return (
    <AppState>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route exact path='/' element={<HomeScreen/>}/>
    <Route exact path='/program/:id/:department' element={<ProgramDetailScreen/>}/>
    <Route exact path='/department/:id' element={<DetailScreen/>}/>
    <Route exact path='/course/:id' element={<DepartmentScreen/>}/>
    <Route exact path='/admissions' element={<CourseFinderScreen/>}/>
    <Route exact path='/about' element={<AboutMau/>}/>
    <Route path='/leadership' element={<AboutMauLeadership/>}/>
    <Route exact path='/campus' element={<CampusScreen/>}/>
    <Route exact path='/portal' element={<PortalsScreen/>}/>
    <Route exact path='/staff/:id' element={<Staff/>}/>
    <Route exact path='/events/:id' element={<Events/>}/>
    <Route path='/undergraduate' element={<UnderGraduate/>}/>
    <Route path='/pricipal/:id' element={<Principal/>}/>
    <Route path='/intervention' element={<Intervention/>}/>
    <Route path='/facility/:id' element={<Facilities/>}/>
    <Route path='/careers' element={<Careers/>}/>
    <Route exact path='/allevents' element={<AllEvents/>}/>
    <Route path='/downloads' element={<Downloads/>}/>
    <Route path='/alumni' element={<Alumni/>}/>
    <Route path='/gallery' element={<GalleryScreen/>}/>
    <Route path='/oer' element={<Oer/>}/>
    </Routes>
    <Footer/>
   
 
   </BrowserRouter>
   </AppState>
  
  );
}

export default App;
