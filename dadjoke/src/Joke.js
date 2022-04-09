import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios'
import './Joke.css';
const Joke = () => {
    const [joke, setJokes] = useState([]);


    const apiLink = "https://icanhazdadjoke.com/";

    const fetchData = async () => {
        const res = await axios.get(`${apiLink}`, { headers: { Accept: "application/json" } });
        console.log(res.data.joke);
        setJokes([res.data.joke]);
    }
    return (
        <div className="joke">
                <Button onClick={fetchData}>Get a Joke</Button>
                    {joke && joke.map((j, index) => (
                         <div className="data" key={index}>
                          {j}
                         </div>
                     ))}
        </div>
    )
}

export default Joke;