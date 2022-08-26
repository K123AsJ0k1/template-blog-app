import Header from './components/Header';
import Text from './components/Text';
import Home from './components/Home';
import './App.css'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  //<Text path='/README.md'/>
  return (
    <div className='wrapper'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
