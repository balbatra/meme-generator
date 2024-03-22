import trollFace from '../assets/troll-face.png'

const Header = () => {
    return (
        <header className='header'>
            <img src={trollFace} alt="The troll face header image" className="header--image" />
            <h1 className="header--title">Meme Generator</h1>
            <h2 className='header--project'>React Course - Project 3</h2>
        </header>
    );
}

export default Header;