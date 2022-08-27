import '../App.css'

const Bartab = ({name, url}) => {
    return (
        <div className='tab'>
            <a href={url}>{name}</a>
        </div>
    )
}

export default Bartab
