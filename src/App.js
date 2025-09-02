import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { HomePage } from './components/HomePage';
import { ApartamentPage } from './components/apartament/ApartamentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element = {<Navigate to={"/"} replace/>} />
        <Route path='/' element = {<HomePage/>} />
        <Route path='/apartament' element = {<ApartamentPage />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App;
