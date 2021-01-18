import React, {useState, useEffect} from 'react'; 

function BikeTracker() {

    const [incidents, setIncidents] = useState([]); 


    const url = 'https://bikewise.org:443/api/v2/incidents?page=5&per_page=5&proximity=45.521728%2C-122.67326&proximity_square=100'

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        // .then(res => console.log(res.incidents))
        .then(res => setIncidents(res.incidents))
    }, [])

    

    return (
        <section>
        {incidents.map(incident => <li key={incident.id}>{incident.title}</li>)}
        </section>
    )
}

export default BikeTracker