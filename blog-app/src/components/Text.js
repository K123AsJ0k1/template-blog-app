import '../App.css'
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import database from '../services/database';

const Text = ({ path }) => {
  const [text, setText] = useState('')
  
  useEffect(() => {
    database.getText({text_file: path}).then(texts => 
      setText(texts)
    )
  }, [path])

  return (
    <div className='text'>
        <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  )
}

export default Text