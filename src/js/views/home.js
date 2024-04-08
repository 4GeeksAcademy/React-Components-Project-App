import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/generalstyles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "../../styles/landingpage.css";



export const Home = () => {

	return (

	<Container fluid className="container-landingpage container">

		<Container>
			<Row className="align-items-center">
				<Col xs={12} md={3} className="text-center">
					<img src={rigoImage} alt="Image 1" className="image-top-left-container1" />
					<img src={rigoImage} alt="Image 2" className="image-bottom-left-container1" />
				</Col>
				<Col xs={12} md={6} className="bg-white text-center">
					<h1>Bienvenidxs a</h1>
					<h2>la Comunidad <br />de Apoyo <br />Emocional</h2>
				</Col>
				<Col xs={12} md={3} className="text-center">
					<img src={rigoImage} alt="Image 3" className="image-top-right-container1" />
					<img src={rigoImage} alt="Image 4" className="image-bottom-right-container1" />
				</Col>
			</Row>
		</Container>

		<Container className="container-fluid second-container-landingpage">
			<Row className="align-items-center">
				<Col xs={12} md={6} lg={3} xl={12} className="text-center">
					<h1>Donde los sentimientos <br/>se comparten</h1>
					<p>Descubre, Conéctate, Comparte. En MyMood, creemos en el poder de la conexión y el apoyo mutuo para navegar por los altibajos emocionales de la vida. 
						Diseñada pensando en la juventud, nuestra plataforma es más que una simple red social; 
						es un refugio seguro donde puedes expresar tus emociones, encontrar comprensión y acceder a recursos que enriquecen tu bienestar mental.
					 <br/>¡Únete a la comunidad!</p>
					<button className="button1 button-second-container-landingpage"> Crear Usuario</button>
				</Col>
			</Row>
		</Container>





	</Container>
		
	);
}
		  

		// <Container className="container-landingpage">

		// 	<Container>
		// 		<Row>
		// 			<Col ><img src={rigoImage} className="image1-container1"></img> <img src={rigoImage} className="image2-container1"></img></Col>
		// 			<Col xs={6} className="bg-white text-center"><h1>Bienvenidxs a </h1><h2>la Comunidad <br/>de Apoyo <br/>Emocional</h2></Col>
		// 			<Col ><img src={rigoImage} className="image3-container1"></img><img src={rigoImage} className="image4-container1"></img></Col>
		// 		</Row>
		// 	</Container>

			
		// </Container>	
		
	




// 1º) INFORMACIÓN SOBRE PROPIEDAD INTELECTUAL E INDUSTRIAL
 
// 2º) CONDICIONES Y TÉRMINOS DE REGISTRO Y ACCESO AL SITIO WEB. 
 
// 3º) OBJETO 
 
// 4º) POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES. 

// 5º) VINCULACION A OTROS SITIOS WEB. 

// La recepción por parte de FUNTSAK de la comunicación prevista en esta cláusula no supondrá, según lo dispuesto en la LSSI, el conocimiento efectivo de las actividades y/o contenidos indicados por el enlace en párrafos comunicante.

	// <div className="text-center mt-5">
	// 	<h1>Dar de baja</h1>
	// 	<h2>1º) INFORMACIÓN SOBRE PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
	// 	<h3>2º) CONDICIONES Y TÉRMINOS DE REGISTRO Y ACCESO AL SITIO WEB.</h3>	
	// 	<h4>3º) OBJETO </h4>	
	// 	<h5>4º) POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES.</h5>	
	// 	<h6>5º) VINCULACION A OTROS SITIOS WEB. </h6>	
	// 	<p>La recepción por parte de FUNTSAK de la comunicación prevista en esta cláusula no supondrá, según lo dispuesto en la LSSI, el conocimiento efectivo de las actividades y/o contenidos indicados por el enlace en párrafos comunicante.</p>
	// 	<a href="#" className="btn btn-success">
	// 		If you see this green button, bootstrap is working
	// 	</a>
	// 	<ul>
	// 		<li>1</li>
	// 		<li>2</li>
	// 		<li>3</li>
	// 	</ul>

	// 	<ol>
	// 		<li>1</li>
	// 		<li>2</li>
	// 		<li>3</li>
	// 	</ol>

	// 	<button className="button1"> Crear Usuario</button>
	// 	<br />
	// 	<button className="button2"> ^ </button>
	// 	<br />
	// 	<button className="button3"> Contactar con Terapeuta</button>
	// </div>