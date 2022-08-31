import { useParams } from "react-router-dom"
import Text from "./Text"
import { useNavigate } from "react-router-dom"
import useMetadata from "../hooks/useMetadata"
import { useEffect, useState } from "react"

const ChapterDropdown = ({name, size, chapter}) => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    
    let list = []
    for (let i = 1; i <= size; i++) {
        list.push(`Chapter ${i}`)
    }
   
    const toggling = () => setIsOpen(!isOpen)

    const optionClicked = (value) => {
        setIsOpen(false)
        navigate(`/content/${name}-${value+1}`)
    }
    
    return (
        <div className="chapterDropdown">
            <div className="dropdownHeader" onClick={toggling}>
                show chapter list
            </div>
            { isOpen && (
                <div>
                    <ul className="dropdownList">
                        {list.map((chapter,index) => (
                            <li className="dropdownListItem" onClick={() => optionClicked(index)} key={index}>
                                {chapter}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

const ChapterClick = ({size,name,chapter}) => {
    const navigate = useNavigate()

    if (size === 1) {
        return (
            <div className="contentChapterClick">
                chapter {chapter} of {size}
            </div>
        )
    }

    if (size-parseInt(chapter) === size-1) {
        return (
            <div className="chapterClick">
                chapter {chapter} of {size}
                <button onClick={() => navigate(`/content/${name}-${parseInt(chapter)+1}`)}>Next</button>
            </div>
        )
    }

    if (size-parseInt(chapter) === 0) {
        return (
            <div className="chapterClick">
                <button onClick={() => navigate(`/content/${name}-${parseInt(chapter)-1}`)}>Prev</button>
                chapter {chapter} of {size}
            </div>
        )
    }
    
    return (
        <div className="chapterClick">
            <button onClick={() => navigate(`/content/${name}-${parseInt(chapter)-1}`)}>Prev</button>
            chapter {chapter} of {size}
            <button onClick={() => navigate(`/content/${name}-${parseInt(chapter)+1}`)}>Next</button>
        </div>
    )
}

const Chapters = ({list,size,name,chapter}) => {
    return (
        <div className="chapters">
            <ChapterClick size={size} name={name} chapter={chapter}/>
            <ChapterDropdown size={size} name={name} chapter={chapter}/>
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
                <Chapters list={list[name]} size={list[name].length} name={name} chapter={chapter}/>
                <Text path={`${fileName}`}/>
                <Chapters list={list[name]} size={list[name].length} name={name} chapter={chapter}/>
            </div>
        )
    }

    return null
}

export default Reader