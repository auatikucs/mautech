import logo from './logo.svg';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ProgramDetailScreen from './screens/ProgramDetailScreen';
import DetailScreen from './screens/DetailScreen';
import ParentalConsentForm from './screens/ParentalConsentForm';
import PersonalDataConsentForm from './screens/PersonalDataConsentForm';
import PrivacyPolicy from './screens/PrivacyPolicy';
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
import All_News from './screens/All_News';
import DetailNews from './screens/Detail_News';
import Admission from './screens/Admission';
import Portals from './screens/Portals';
import CenterScreen from './screens/CenterScreen';
import MainGallery from './sub-components/MainGallery';
import RandD from './screens/R&D';
import Library from './screens/Library';
import InstitutionalReports from './screens/InstitutionalReports';
import CookieBanner from './components/CookieBanner'; 

function App() {
  return (
    <AppState>
    <BrowserRouter>
    <Nav/>
    {/* 2. Place it here so it appears on all routes */}
    <CookieBanner /> 
    <Routes>
    <Route exact path='/' element={<HomeScreen/>}/>
    <Route exact path='/program/:id/:department/:activity' element={<ProgramDetailScreen/>}/>
    <Route exact path='/department/:id/:activity' element={<DetailScreen/>}/>
    <Route exact path='/course/:id/:activity' element={<DepartmentScreen/>}/>
    <Route exact path='/center/:id/:activity' element={<CenterScreen/>}/>
    {/* <Route exact path='/admissions' element={<CourseFinderScreen/>}/> */}
    <Route exact path='/about' element={<AboutMau/>}/>
    <Route exact path='/ParentalConsent' element={<ParentalConsentForm/>}/>
    <Route exact path='/PersonalDataConsent' element={<PersonalDataConsentForm/>}/>
    <Route exact path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
    <Route path='/leadership' element={<AboutMauLeadership/>}/>
    <Route exact path='/campus' element={<CampusScreen/>}/>
    <Route exact path='/portals' element={<Portals/>}/>
    <Route exact path='/staff/:id' element={<Staff/>}/>
    <Route exact path='/events/:id' element={<Events/>}/>
    <Route exact path='/news/:id' element={<DetailNews/>}/>
    <Route path='/pricipal/:id' element={<Principal/>}/>
    <Route path='/intervention' element={<Intervention/>}/>
    <Route path='/institutionalreports' element={<InstitutionalReports/>}/>
    <Route path='/facility/:id' element={<Facilities/>}/>
    <Route path='/careers' element={<Careers/>}/>
    <Route exact path='/allevents' element={<AllEvents/>}/>
    <Route exact path='/allnews' element={<All_News/>}/>
    <Route path='/downloads' element={<Downloads/>}/>
    <Route path='/alumni' element={<Alumni/>}/>
    <Route path='/gallery' element={<MainGallery/>}/>
    <Route path='/oer' element={<Oer/>}/>
    <Route path='/RandD' element={<RandD/>}/>
    <Route path='/admissions' element={<Admission/>}/>
    <Route path='/library' element={<Library/>}/>
    <Route path='/admission/:id' element={<UnderGraduate/>}/>
    </Routes>
    <Footer/>
   
 
   </BrowserRouter>
   </AppState>
  
  );
}

export default App;
