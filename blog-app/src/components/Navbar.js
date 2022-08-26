import '../App.css'
import Bartab from './Bartab'

const Navbar = () => {
    return (
        <div className='nav'>
            <Bartab name='Home'/>
            <Bartab name='Content'/>
            <Bartab name='About me'/>
        </div>
    )
}

export default Navbar