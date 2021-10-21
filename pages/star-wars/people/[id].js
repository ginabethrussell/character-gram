import React, { useState, useEffect } from 'react'
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
import * as _ from 'lodash'

export const getStaticProps = async (context) => {
  console.log('id', context.params.id)
  const profile = await getCharacterData(context.params.id);
  console.log(profile)
  const speciesData = await getAllSpeciesData();
  const filmData = await getAllFilmData();
  const vehicleData = await getAllVehicleData();
  const starshipData = await getAllStarshipData();
  return {
    props: {
      profile: profile,
      species: speciesData,
      films: filmData,
      vehicles: vehicleData,
      starships: starshipData,
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


export default function Profile({ profile, species, vehicles, starships, films }) {
  let character = profile
  console.log(character);
  // console.log(character.films)
  //console.log(species[2].name)
  //console.log(character.species[0].split('/')[5]);
  // {
  //   character.species.length > 0 ?
  //     <li>
  //       {species[(character.species[0].split('/')[5] - 1)].name}
  //     </li> : null
  // }
  return (
    <Layout>
      <main className={styles.main}>
        <Card character={character} />
      </main>
    </Layout>
  )
}
