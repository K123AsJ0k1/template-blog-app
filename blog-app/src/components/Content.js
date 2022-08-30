import { useEffect, useState } from "react"
import database from "../services/database"
import ContentList from "./ContentList"
import Text from "./Text"

const ContentChapters = ({metadata,chapter,setChapter}) => {
    console.log(metadata)
    return (
        <div className="contentChapters">
            <button>Prev</button>
            chapter {chapter} of size
            <button>Next</button>
        </div>
    )
}

const Content = () => {
    const [metadata, setMetadata] = useState([])
    const [textName, setTextName] = useState('')
    const [chapter, setChapter] = useState('1')
    
    useEffect(() => {
        database.getData({meta_file:'TextList'}).then(data => setMetadata(data))
    }, [])
    
    if (textName !== '') { 
        return(
            <div className="text">
                <ContentChapters metadata={metadata} chapter={chapter} setChapter={setChapter}/>
                <Text path={`${textName}-${chapter}`}/>
                <ContentChapters/>
            </div>
        )
    }

    return(
        <div>
            <ContentList texts={metadata?.texts} setTextName={setTextName}/>
        </div>
    )
}

export default Content