import { useEffect, useState } from "react";
import './Details.css';

export default function Details(props) {
    const {info} = props;
    const [details, setDetails] = useState(null);
    const [isLoading,setLoading] = useState(false);

    useEffect( ()=> {
        if(info)
        {
            setLoading(true);
            try {
                fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
                .then(response => response.json())
                .then(data=> {
                    setDetails(data);
                    setLoading(false);
                });
            }
            catch (e) {
                console.log(e);
                setLoading(false);
            }
        }
    }, [info])

    return(
        <div className="PersonDetails">
            {isLoading ? <div className="Loading">Loading...</div> : null}
            {details ? 
                <>
                <img className="PersonPhoto" src={details.avatar} alt='avatar'></img>
                <div className="PersonName">{details.name}</div>
                <div className="PersonCity Det">City: {details.details.city}</div>
                <div className="PersonCompany Det">Company: {details.details.company}</div>
                <div className="PersonPosition Det">Position: {details.details.position}</div>
                </>
            : null }
        </div>
    )
}