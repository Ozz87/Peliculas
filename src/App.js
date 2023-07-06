import { useState } from 'react';
import './App.css';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Pelicula from './Pelicula';
import peliculaJson from './peliculas.json';

function App() {

	const [paginaActual, setPaginaActual] = useState(1)
	const TOTAL_POR_PAGINA = 7;

	let Peliculas =  peliculaJson;
	
	const buscarPelicula = async () => {
		let url = 'https://lucasmoy.dev/data/react/peliculas.json';
	  
		let respuesta = await fetch(url, {
		  method: 'GET',
		  mode: 'no-cors',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  }
		});
	  
		let json = await respuesta.json();
		alert(json);
		}
		buscarPelicula();	
		
	  
	  
	
	  
	const cargarPeliculas = () => {
		Peliculas = Peliculas.slice(
		  (paginaActual - 1) * TOTAL_POR_PAGINA,
		  paginaActual * TOTAL_POR_PAGINA
		);
	  };
	
	const getTotalPaginas = () => {
		let cantidadTotalDePeliculas = peliculaJson.lenght;
		return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
	}

	cargarPeliculas();
	return (
		 	
	  <PageWrapper>
<Pelicula> 
	
	
{Peliculas.map(pelicula =>  
	<Pelicula titulo={pelicula.titulo}  calificacion={pelicula.calificacion} 
director={pelicula.director} actores={pelicula.actores} 
fecha={pelicula.fecha} duracion={pelicula.duracion} 
img= {pelicula.img}>
{pelicula.descripcion}
</Pelicula>
)}

<Paginacion pagina={paginaActual} total={4} onChange={(pagina) => {
alert(pagina)
} } />

</Pelicula>

</PageWrapper>



);
}
  
  export default App;