/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import DisplayCertainBike from './DisplayCertainBike';
import bikeImg from '../images/bike.jpg';

function BikeTracker() {
  const [incidents, setIncidents] = useState([]);
  const [input, setInput] = useState('');
  const [showComponent, setShowComponent] = useState(false);
  const [bikeClicked, setBikeClicked] = useState(null);
  const url =
    'https://bikewise.org:443/api/v2/incidents?page=10&per_page=10&proximity=45.521728%2C-122.67326&proximity_square=100';

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch(url)
      .then((res) => res.json())
      .then((res) => setIncidents(res.incidents));
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = (event) => {
    const title = event.target.childNodes[0].data;
    const bikeChosen = incidents.find((bike) => bike.title.includes(title));
    setBikeClicked(bikeChosen);
    setShowComponent(true);
  };

  // eslint-disable-next-line no-use-before-define
  const mapIncidentsToList = () =>
    // eslint-disable-next-line no-use-before-define
    filterByTitle().map((incident) => (
      <section className="bike-card-row" key={incident.id}>
        <div className="bike-detailed-row">
          {incident.media.image_url === null ? (
            <img src={bikeImg} alt="Default-Img" />
          ) : (
            <img src={incident.media.image_url} alt="Bike Img" />
          )}

          <li className="incident-title">{incident.title} </li>
          <li className="incident-description">
            Description:
            {incident.description}{' '}
          </li>

          <li className="incident-address">
            Address:
            {incident.address}
          </li>
        </div>
      </section>
    ));

  const filterByTitle = () =>
    incidents.filter((incident) => incident.title.includes(input));

  return (
    <section className="bike-info-display-container">
      <div>
        <form>
          <label htmlFor="search">Bike Search</label>
          <input
            type="text"
            id="search"
            value={input}
            onChange={handleChange}
          />
          <button type="submit">Insert Search Logo here</button>
        </form>
      </div>
      <ul onClick={handleClick}>{mapIncidentsToList()}</ul>

      {showComponent === true ? (
        <DisplayCertainBike bikeInfo={bikeClicked} />
      ) : null}
    </section>
  );
}

export default BikeTracker;
