import { useEffect, useState } from "react"
import database from "../services/database"
import ContentList from "./ContentList"
import Text from "./Text"

const Content = () => {
    const [metadata, setMetadata] = useState([])
    
    useEffect(() => {
        database.getData({meta_file:'TextList'}).then(data => setMetadata(data))
    }, [])
    
    return(
        <div>
            <ContentList texts={metadata?.texts}/>
        </div>
    )
}

export default Content