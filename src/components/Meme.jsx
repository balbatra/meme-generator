import React from 'react'
import defaultImage from '/src/assets/stop-634941_1280.jpg'
import firstImage from '/src/assets/1bij.jpg'

const Meme = () => {

    const id = React.useId

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: firstImage,
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(()=>{
        console.log('Effect called')
        fetch('https://api.imgflip.com/get_memes')
        .then(resp => resp.json())
        .then(jsonResponse => setAllMemeImages(jsonResponse.data.memes))
        .catch(()=>{setAllMemeImages([{url:defaultImage}])})
    },[])

    const changeImage = (event) => {
        event.preventDefault()
        const randomIndex = Math.floor(Math.random() * allMemeImages.length);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemeImages[randomIndex].url
        }))
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setMeme(prevMeme =>
        ({
            ...prevMeme, [name]: value
        }))
    }

    return (
        <main>
            <form className="form">
                <div>
                    <label className="form--label" htmlFor={id + "top-text"}>Top text</label>
                    <input
                        className="form--input"
                        id={id + "top-text"}
                        type="text"
                        placeholder="Shut up"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </div>
                <div>
                    <label className="form--label" htmlFor={id + "bottom-text"}>Bottom text</label>
                    <input
                        className="form--input"
                        id={id + "bottom-text"}
                        type="text"
                        placeholder="And take my money"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                <button onClick={changeImage} className="item form--button">Get a new meme image 🖼</button>
            </form>
            {
                meme.randomImage && <div className="meme">
                    <img className="meme--image" src={meme.randomImage} alt="A meme image is shown" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            }
        </main>
    );
}

export default Meme;