/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function DisplayCertainBike({ bikeClicked }) {
  return (
    <section>
      <div>
        <img src={bikeClicked.media.image_url} alt="" />
      </div>
      <div>
        <span>{bikeClicked.title}</span>
        <span>{bikeClicked.address}</span>
        <span>{bikeClicked.description}</span>
      </div>
    </section>
  );
}

export default DisplayCertainBike;

DisplayCertainBike.propTypes = {
  bikeClicked: PropTypes.shape({}).isRequired,
};
