import { useParams } from "react-router-dom"
import Text from "./Text"
import { useNavigate } from "react-router-dom"
import useMetadata from "../hooks/useMetadata"

const Chapters = ({size,name,chapter}) => {
    const navigate = useNavigate()
    if (size-parseInt(chapter) === size-1) {
        return (
            <div className="contentChapters">
                chapter {chapter} of {size}
                <button onClick={() => navigate(`/content/${name}-${parseInt(chapter)+1}`)}>Next</button>
            </div>
        )
    }

    if (size-parseInt(chapter) === 0) {
        return (
            <div className="contentChapters">
                <button onClick={() => navigate(`/content/${name}-${parseInt(chapter)-1}`)}>Prev</button>
                chapter {chapter} of {size}
            </div>
        )
    }
    
    return (
        <div className="contentChapters">
            <button onClick={() => navigate(`/content/${name}-${parseInt(chapter)-1}`)}>Prev</button>
            chapter {chapter} of {size}
            <button onClick={() => navigate(`/content/${name}-${parseInt(chapter)+1}`)}>Next</button>
        </div>
    )
}

const Reader = () => {
    const { fileName } = useParams()
    const { list } = useMetadata() 
    const name = fileName.split('-')[0]
    const chapter = fileName.split('-')[1]

    if (list) { 
        return (
            <div className="text">
                <Chapters size={list[name].length} name={name} chapter={chapter}/>
                <Text path={`${fileName}`}/>
                <Chapters size={list[name].length} name={name} chapter={chapter}/>
            </div>
        )
    }

    return null
}

export default Reader