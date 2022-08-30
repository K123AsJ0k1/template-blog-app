import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import '../App.css'
import useMetadata from "../hooks/useMetadata"

const ContentListTitle = ({name}) => {
    const navigate = useNavigate()
    return (
        <div className="contentListTitle">
            <button onClick={() => navigate(`/content/${name}-1`)}>{name}</button>
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

const ContentListItem = ({title}) => {
    return(
        <div className="contentListItem">
            <ContentListTitle name={title}/>
            <ContentListdescription/>
            <ContentListInfo/>
        </div>
    )
}

const ContentList = ({texts}) => {
    const { list } = useMetadata() 
    
    if (list) { 
        return (
            <div className="contentList">
                {Object.keys(list).map((key,index) => <ContentListItem key={index} title={key}/>)}
            </div>
        )
    }

    return null
}

export default ContentList