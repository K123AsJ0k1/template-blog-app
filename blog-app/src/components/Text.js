import '../App.css'
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
//import test from '../Texts/Home.md'

const Text = ({ path }) => {
  const [text, setText] = useState('')
  
  useEffect(() => {
    import('../Texts/Home.md')
      .then(res => 
        fetch(res.default))
          .then(response => response.text())
          .then(response => setText(response))
          .catch(err => console.log(err)
      )
  }, [])

  return (
    <div className='text'>
        <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  )
}

export default Text