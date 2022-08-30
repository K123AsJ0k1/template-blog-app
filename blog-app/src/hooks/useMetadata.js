import { useEffect, useState } from "react"
import database from "../services/database"

const useMetadata = () => {
    const [metadata, setMetadata] = useState(null)
    
    useEffect(() => {
        database.getData({meta_file:'TextList'}).then(data => setMetadata(data))
    },[])
    
    if (metadata) {
        let tempList = new Map([])
        
        metadata.texts.map((text) => {
            if (text.name.includes('-')) {
                const key = text.name.split('-')[0]
                
                if (tempList.has(key)) {
                    tempList.set(key, [...tempList.get(key), text])
                } else {
                    tempList.set(key, [text])
                }
            }
        })
        
        return { list:Object.fromEntries(tempList) }
    }
    
    return { list:null }
}

export default useMetadata