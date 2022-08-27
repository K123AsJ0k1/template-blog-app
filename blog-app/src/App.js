import Header from './components/Header';
import Text from './components/Text';
import ContentList from './components/ContentList';
import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Routes>
        <Route path="/" element={<Text path="Home"/>} exact/>
        <Route path="/content" element={<ContentList/>} exact/>
        <Route path="/about_me" element={<Text path="About_Me"/>} exact/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App;
