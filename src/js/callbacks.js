const heroes = {
  capi: {
    nombre: 'Capitan America',
    poder: 'Aguantar inyecciones sin morir'
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero'
  },
  spider: {
    nombre: 'Spiderman',
    poder: 'Aguantar picaduras de araña'
  }
}


export const buscarHeroe = ( id, callback ) => {
  const heroe = heroes[id];

  if ( heroe ) {
    callback( null, heroe );
  } else {
    callback(`No existe el id ${ id }`);
  }

}