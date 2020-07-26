import { promesaLenta, promesaMedia, promesaRapida, buscarHeroe, buscarHeroeAsync } from './js/promesas';
import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait } from './js/await';


// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );


// Promise.race([ promesaLenta, promesaMedia, promesaRapida ])
//   .then( console.log )
//   .catch( console.error )



// buscarHeroe( 'capi1' )
//   .then( console.log )
//   .catch( console.error );


// buscarHeroeAsync( 'iron1' )
//   .then( console.log )
//   .catch( console.error );




// obtenerHeroesArr().then( console.table );


// obtenerHeroeAwait('capi1')
//   .then( console.log )
//   .catch( console.error );


// heroesCiclo();


heroeIfAwait('iron');