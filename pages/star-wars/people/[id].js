import React from 'react'
import Layout from '../../../components/layout'
import styles from '../../../styles/Home.module.css'
import Card from '../../../components/card'
import {
  getCharacterData,
  getAllCharacterData,
  getAllSpeciesData,
  getAllFilmData,
  getAllVehicleData,
  getAllStarshipData
} from '../../../lib/star-wars'
import {
  getCharacterSpecies,
  getCharacterFilms,
  getCharacterStarships,
  getCharacterVehicles
} from '../../../lib/card-data-helpers'
import * as _ from 'lodash'


export const getStaticProps = async (context) => {
  const profile = await getCharacterData(context.params.id);
  const speciesData = await getAllSpeciesData();
  const filmData = await getAllFilmData();
  const vehicleData = await getAllVehicleData();
  const starshipData = await getAllStarshipData();
  return {
    props: {
      profile: profile,
      species: speciesData,
      films: filmData,
      starships: starshipData,
      vehicles: vehicleData,
    }
  }
}

export async function getStaticPaths() {
  const paths = await getAllProfileIds();

  return {
    paths,
    fallback: false,
  };
}

async function getAllProfileIds() {
  const profileData = await getAllCharacterData();

  return profileData.map(profile => {
    return {
      params: {
        "id": profile.url.split('/')[5].toString()
      }
    }
  })
}

export default function Profile({ profile, species, films, starships, vehicles }) {
  let character = profile
  const speciesStr = getCharacterSpecies(character, species);
  const filmsStr = getCharacterFilms(character, films);
  const starshipsStr = getCharacterStarships(character, starships);
  const vehiclesStr = getCharacterVehicles(character, vehicles);

  return (
    <Layout>
      <main className={styles.main}>
        <Card
          character={character}
          species={speciesStr}
          films={filmsStr}
          starships={starshipsStr}
          vehicles={vehiclesStr}
        />
      </main>
    </Layout>
  )
}
