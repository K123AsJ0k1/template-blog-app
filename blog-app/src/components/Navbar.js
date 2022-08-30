import '../App.css'
import Bartab from './Bartab'

const Navbar = () => {
    return (
        <div className='nav'>
            <Bartab name='Home' url='#/'/>
            <Bartab name='Content' url='#/content'/>
            <Bartab name='About me' url='#/about_me'/>
        </div>
    )
}

export default Navbar