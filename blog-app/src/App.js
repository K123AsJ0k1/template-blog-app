import Header from './components/Header';
import Text from './components/Text';
import Content from './components/Content';
import Reader from './components/Reader';
import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Routes>
        <Route path="/" element={<Text path="Home"/>} exact/>
        <Route path="/content" element={<Content/>} exact/>
        <Route path="/about_me" element={<Text path="About_Me"/>} exact/>
        <Route path="/content/:fileName" element={<Reader/>} exact/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App;
