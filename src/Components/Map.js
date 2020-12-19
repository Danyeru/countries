import React from 'react'
import { Gmaps, Marker, InfoWindow, Circle } from "react-gmaps";

export const Map = ({latitude, longitude, name}) => {

  const coords = {
    lat: latitude,
    lng: longitude,
  };

  const params = {v: '3.exp', key: 'AIzaSyAOipydFQP6OJt8-mdMbtjpO_IaC7kE-4U'};

  const onMapCreated = (map) => {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  const onDragEnd = (e) => {
    console.log('onDragEnd', e);
  }

  const onCloseClick = () =>{
    console.log('onCloseClick');
  }

  const onClick = (e) => {
    console.log('onClick', e);
  }

  return (
    <Gmaps
        width={'100%'}
        height={'300px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={5}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={name}
          onCloseClick={onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={onClick} />
      </Gmaps>
  )
}
