import React, { useEffect } from 'react';
import L from 'leaflet';
import { Container } from 'react-bootstrap';
import Map from '../component/Map.js';
import customIconUrl from '../../img/angry.png';
import '../../styles/map.css';

const SingleComponent = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    const users = [
      {
        icon: L.icon({
          iconUrl: customIconUrl,
          iconSize: [40, 40],
          iconAnchor: [20, 40]
        }),
        lat: 51.505,
        long: -0.08,
        title: 'User 1'
      },
      {
        icon: L.icon({
          iconUrl: customIconUrl,
          iconSize: [40, 40],
          iconAnchor: [20, 40]
        }),
        lat: 51.405,
        long: -0.07,
        title: 'User 2'
      },
      {
        icon: L.icon({
          iconUrl: customIconUrl,
          iconSize: [40, 40],
          iconAnchor: [20, 40]
        }),
        lat: 51.305,
        long: -0.07,
        title: 'User 3'
      }
    ];

    users.forEach((user) => {
      L.marker([user.lat, user.long], { icon: user.icon }).bindPopup(user.title).addTo(map);
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '500px', width: '50%', }}> </div>
   
  
};

export default SingleComponent;
