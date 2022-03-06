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

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route exact path='/' element={<HomeScreen/>}/>
    <Route exact path='/program' element={<ProgramDetailScreen/>}/>
    <Route exact path='/department/:id' element={<DetailScreen/>}/>
    <Route exact path='/course/:name' element={<DepartmentScreen/>}/>
    <Route exact path='/admissions' element={<CourseFinderScreen/>}/>
    <Route exact path='/about' element={<AboutScreen/>}/>
    <Route exact path='/campus' element={<CampusScreen/>}/>

    </Routes>
    <Footer/>
   
 
   </BrowserRouter>
  
  );
}

export default App;
