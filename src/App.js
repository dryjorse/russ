import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPage from './pages/mainPage/MainPage';
import SubjectPage from './pages/subjectPage/SubjectPage';
import SubjectsPage from './pages/subjectsPage/SubjectsPage';

function App() {
  return (
    <HashRouter hashType="hashbang">
      <div className='App'>
        <Header />
        <Routes >
          <Route index element={<MainPage />} />
          <Route path='/subjects' element={<SubjectsPage />} />
          <Route path='/subjects/:subject' element={<SubjectPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
