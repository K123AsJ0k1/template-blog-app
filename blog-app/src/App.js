import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'

function App() {
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
  
  return (
    <div>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}

export default App;
