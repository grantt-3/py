import axios from "axios";
const Canvas = () => {
    const URL =
        "https://ronreiter-meme-generator.p.rapidapi.com/meme?font_size=50&top=Top%20Text&font=Impact&bottom=Bottom%20Text&meme=Condescending-Wonka";
    const memeLinK = async () => {
        try {
            const { data } = await axios.get(URL, {
                headers: {
                    "Content-Type": "application/json",
                    "x-rapidapi-key": "a59a17d020mshd58ae57e68bb7b2p17deb5jsnea0d0959f66f",
                    "x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com",
                },
            });
            console.log(data);
        } catch (error) {
            console.log(error.status);
        }
    };

    return (
        <>
            <button onClick={memeLinK}>Generate meme</button>
        </>
    );
};

export default Canvas;
