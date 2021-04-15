import { useEffect, useState } from "react"
import './List.css';

export default function List(props) {
    const {onDetails} = props;
    const [people,setPeople] = useState([]);

    useEffect(() => {
        try 
        {
            fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
            .then(response => response.json())
            .then(data=>setPeople(data))
        }
        catch (e)
        {
            console.log(e);
        }
    }, [])
 
    return (
        <div className="List">
            {people.map(el => <div key={el.id} className="Person" id={el.id} onClick={()=> onDetails(el)}>{el.name}</div>)}
        </div>
    )
}