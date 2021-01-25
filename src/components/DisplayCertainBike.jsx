/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function DisplayCertainBike(props) {
  return (
    <section>
      <div>
        <img src={props.bikeInfo.media.image_url} alt="" />
      </div>
      <div>
        <span>{props.bikeInfo.title}</span>
        <span>{props.bikeInfo.address}</span>
        <span>{props.bikeInfo.description}</span>
      </div>
    </section>
  );
}

export default DisplayCertainBike;
