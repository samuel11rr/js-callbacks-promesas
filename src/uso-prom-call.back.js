import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';


const heroeId1 = 'capi1';
const heroeId2 = 'iron2';


// USANDO CALLBACKS
// buscarHeroe( heroeId1, ( err, heroe1 ) => {
//   if ( err ) return console.error( err );

//   buscarHeroe( heroeId2, ( err, heroe2 ) => {
//     if ( err ) return console.error( err );
//     console.log(`Enviando a ${ heroe1.nombre } y ${ heroe2.nombre2 } a la mision`);
//   });
  
// })


// USANDO PROMESAS
// buscarHeroe( heroeId1 ).then( heroe1 => {
//   // console.log( `Enviando a ${ heroe.nombre } a la mision` );

//   buscarHeroe( heroeId2 ).then( heroe2 => {
//     console.log( `Enviando a ${ heroe1.nombre } y a ${ heroe1.nombre } a la mision` );
//   });
// });



// MEJORANDO PROMESAS
Promise.all([ buscarHeroe( heroeId1 ), buscarHeroe( heroeId2 ) ])
.then( ([heroe1, heroe2]) => {
  console.log( `Enviando a ${ heroe1.nombre } y a ${ heroe2.nombre } a la mision` );
})
.catch( err => alert(err) )
.finally( () => console.log('finally') );


