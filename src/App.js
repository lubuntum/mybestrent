import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { HomePage } from './components/home/HomePage';
import { ApartamentPage } from './components/apartament/details/ApartamentPage.tsx';
import { DocumentsPage } from './components/documents/DocumentsPage.jsx';
import { Header } from './components/header/Header.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { useRef } from 'react';

function App() {
  const footerRef = useRef(null)
  const scrollToFooter = () => {
    if (footerRef.current)
      footerRef.current.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <BrowserRouter>
      <Header scrollToFooter = {scrollToFooter}/>
      <Routes>
        <Route path='/*' element = {<Navigate to={"/"} replace/>} />
        <Route path='/' element = {<HomePage/>} />
        <Route path='/apartament' element = {<ApartamentPage />} />
        <Route path='/documents' element = {<DocumentsPage />} />
      </Routes>
      <Footer footerRef = {footerRef}/>
    </BrowserRouter>
    )
}

export default App;
