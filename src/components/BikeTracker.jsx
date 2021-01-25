import React, {useState, useEffect} from 'react'; 
function BikeTracker() {

    const [incidents, setIncidents] = useState([]); 
    const [input, setInput] = useState(''); 


    const url = 'https://bikewise.org:443/api/v2/incidents?page=5&per_page=5&proximity=45.521728%2C-122.67326&proximity_square=100'

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => setIncidents(res.incidents))
    }, [])

    const handleChange = event => {
        setInput(event.target.value)
    }

    const mapIncidentsToList = () => {
        return filterByTitle().map(incident => {
            console.log(incident)
            return (
                <section className='bike-card-row' key={incident.id}>
                <div className='bike-detailed-row'>
                    {incident.media.image_url === null ? <img src={'../images/bike.jpg'} alt='Default-Img'/> :
                    <img src={incident.media.image_url} alt='Bike Img' />
                     }
                   
                <li className='incident-title'>{incident.title} </li>
                <li className='incident-description'>Description: {incident.description} </li>
                <li className='incident-address'>Address: {incident.address} </li>
                </div>
                </section>
            )
        })
    }

    const filterByTitle = () => {
        return incidents.filter(incident => incident.title.includes(input));
    };
    

    return (
        <section className='bike-info-display-container'>
        <div>
            <form>
            <label htmlFor='search'>Bike Search</label>
                <input type='text' id='search' value={input} onChange={handleChange} />
                <button>Insert Search Logo here</button>
            </form>
        </div>
        <ul>
            {mapIncidentsToList()}
        </ul>
        </section>
    )
}

export default BikeTracker