import React, {useState, useEffect} from 'react'; 

function BikeTracker() {

    const [incidents, setIncidents] = useState([]); 
    const [input, setInput] = useState(''); 


    const url = 'https://bikewise.org:443/api/v2/incidents?page=5&per_page=5&proximity=45.521728%2C-122.67326&proximity_square=100'

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        // .then(res => console.log(res.incidents))
        .then(res => setIncidents(res.incidents))
    }, [])

    const handleChange = event => {
        setInput(event.target.value)
    }
    

    return (
        <section>
        <div>
            <form>
            <label htmlFor='search'>Bike Search</label>
                <input type='text' id='search' value={input} onChange={handleChange} />
            </form>
        </div>
        {incidents.map(incident => <li key={incident.id}>{incident.title}</li>)}
        </section>
    )
}

export default BikeTracker