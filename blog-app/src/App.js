//import { useEffect, useState } from 'react';
//import ReactMarkdown from 'react-markdown'
import Header from './components/Header';
import Text from './components/Text';
import './App.css'

const App = () => {
  /*
  const [text, setText] = useState('')
  
  useEffect(() => {
    import('./Hello_world.md')
      .then(res => 
        fetch(res.default))
          .then(response => response.text())
          .then(response => setText(response))
          .catch(err => console.log(err)
      )
  }, [])
  */
  
  return (
    <div className='wrapper'>
      <Header/>
      <Text/>
    </div>
  );
}

export default App;
