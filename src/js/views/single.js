import { useEffect } from 'react';
import React from 'react';
import Map from '../component/Map.js'; // Ajusta la ruta según la ubicación del archivo Map.js
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import customIconUrl from '../../img/angry.png'; // Ajusta la ruta según la ubicación de tu icono personalizado
import { Container, Row, Col } from 'react-bootstrap';
import "../../styles/map.css";


export const Single = props => {


	useEffect(() => {
		// Configurar el mapa
		const map = L.map('map').setView([51.505, -0.09], 13);
	
		const users = [
			{ icon: L.icon({
				iconUrl: customIconUrl,
				iconSize: [40, 40],
				iconAnchor: [20, 40]
			  }),
			lat : 51.505,
			long : -0.08,
			}, 
	
			{ icon: L.icon({
				iconUrl: customIconUrl,
				iconSize: [40, 40],
				iconAnchor: [20, 40]
			  }),
			  lat : 51.405,
			  long : -0.07,
			}, 
			
			{ icon: L.icon({
			iconUrl: customIconUrl,
			iconSize: [40, 40],
			iconAnchor: [20, 40]
				}),
				lat: 51.305,
				long: -0.07,
			}
		]
	
		// // Agregar marcador con ícono personalizado al mapa
		users.map((user) => { 
			return L.marker([user.lat, user.long], { icon: user.icon }).bindPopup('Marcador con ícono personalizado').addTo(map) });
	
	
		
		// Agregar capa de azulejos (tiles) de OpenStreetMap al mapa
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		  attribution: '&copy; OpenStreetMap contributors'
		}).addTo(map);
	
		return () => {
		  // Limpiar mapa al desmontar el componente (opcional)
		  map.remove();
		};
	  }, []); // Ejecutar solo una vez al montar el componente
	
	  return( 
		<Container className="map-app">
			
			<Row>
				<Col>
					<h1 className='button1'>¿ Sabes que hay muchas personas que se sienten igual que tú ?</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<h2 className='heading2'>Echemos un vistazo!</h2>
				</Col>
			</Row>

			<Container className="map">
				<div id="map" style={{ height: '500px', width: '100%', }}> 
				</div>
			</Container> 
		</Container> 
		)};
	

		export default Single;