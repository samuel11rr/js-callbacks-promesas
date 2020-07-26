import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = [ 'capi', 'iron', 'spider' ];
// const heroesPromesas = heroesIds.map( id => buscarHeroe(id) );
const heroesPromesas = heroesIds.map( buscarHeroe );

// export const obtenerHeroesArr = async() => {
//   const heroesArr = [];

//   for ( const id of heroesIds ) {
//     // const heroe = await buscarHeroeAsync( id );
//     heroesArr.push( buscarHeroe( id ) );
//   }

//   return await Promise.all(heroesArr);
// }


export const obtenerHeroesArr = async() => {
  return await Promise.all( heroesIds.map( buscarHeroe ) );
}




export const obtenerHeroeAwait = async(id) => {

  try {
    const heroe = await buscarHeroeAsync(id);
    return heroe;
  } catch (error) {
    console.log('CATCH!');
    // al fallar evitamos que se detenga la ejecucion
    return {
      nombre: 'NA',
      poder: 'NA'
    }
  }
}



export const heroesCiclo = async() => {
  console.time('heroesCiclo');

  // const heroes = await Promise.all(heroesPromesas);
  // console.log(heroes);

  for await( const heroe of heroesPromesas ) {
    console.log(heroe);
  }

  console.timeEnd('heroesCiclo');
}




export const heroeIfAwait = async(id) => {
  if ( (await buscarHeroeAsync(id)).nombre === 'Ironman' ) {
    console.log('es el mejor');
  } else {
    console.log('nel');
  }
}