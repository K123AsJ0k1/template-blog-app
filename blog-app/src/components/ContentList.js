import { useEffect, useState } from "react"
import '../App.css'

const ContentListTitle = ({name, setTextName}) => {
    return (
        <div className="contentListTitle">
            <button onClick={() => setTextName(name)}>{name}</button>
        </div>
    )
}

const ContentListdescription = () => {
    return (
        <div className="contentListDescription">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
            id est laborum.
        </div>
    )
}

const ContentListInfo = () => {
    return (
        <div className="contentListInfo">
            rating,
            language,
            genre,
            words,
            published,
            updated,
            characters
        </div>
    )
}

const ContentListItem = ({title, setTextName, chapters}) => {
    //<ul>{chapters.map(chapter => <li key={chapter.id}>{chapter.name}</li>)}</ul>
    return(
        <div className="contentListItem">
            <ContentListTitle name={title} setTextName={setTextName}/>
            <ContentListdescription/>
            <ContentListInfo/>
        </div>
    )
}

const ContentList = ({setTextName,texts}) => {
    const [list, setList] = useState({})
    
    useEffect(() => {
        let tempList = new Map([])
        texts?.map((text) => {
            if (text.name.includes('-')) {
                const key = text.name.split('-')[0]
                
                if (tempList.has(key)) {
                    tempList.set(key, [...tempList.get(key), text])
                } else {
                    tempList.set(key, [text])
                }
            }
        })
        setList(Object.fromEntries(tempList))
    },[texts])

    return (
        <div className="contentList">
            {Object.keys(list).map((key,index) => <ContentListItem key={index} title={key} setTextName={setTextName} chapters={list[key]}/>)}
        </div>
    )
}

export default ContentList