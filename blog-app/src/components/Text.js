import '../App.css'
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'

const Text = ({ path }) => {
  const [text, setText] = useState('')
  console.log(path)
  
  useEffect(() => {
    import(`../Texts/${path}.md`)
      .then(res => 
        fetch(res.default))
          .then(response => response.text())
          .then(response => setText(response))
          .catch(err => console.log(err)
      )
  }, [path])

  return (
    <div className='text'>
        <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  )
}

export default Text