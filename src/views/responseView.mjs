
export function renderizarSuperheroe(superheroe) {
  return {
    NombreSuperHeroe: superheroe.nombreSuperHeroe,
    NombreReal: superheroe.nombreReal,
    Edad: superheroe.edad,
    PlanetaDeOrigen: superheroe.planetaOrigen,
    Debilidad: superheroe.debilidad,
    Poderes: superheroe.poderes,
    Aliados: superheroe.aliados,
    Enemigos: superheroe.enemigos
  };
}

export function renderizarListaSuperheroes(superheroes) {
  return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}
