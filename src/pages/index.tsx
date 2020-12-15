import React, { useState } from 'react'
import Head from 'next/head'
import { gql } from '@apollo/client'
import { client } from '../helpers/apollo'
// Components
import Slider from '../Components/Main/Body/Slider/Slider'
import PreferenceBar from '../Components/Main/Body/PreferenceBar/PreferenceBar'
import Results from '../Components/Main/Body/Results/Results'
// Context
import { MatchesProvider } from '../context/MatchesContext'

type Match = {
  id: number
  awayteam: string
  competition: string
  country: string
  countrycode: string
  hometeam: string
  status: string
  winner: string
  fulltime: {
    hometeam: string
    awayteam: string
  }
  halftime: {
    hometeam: string
    awayteam: string
  }
}

type DataTypes = {
  data: {
    getMatchesByDate: {
      competitions: string[]
      matches: Match[]
    }
  }
}

const Home = ({ data }: DataTypes): JSX.Element => {
  const [isLive, setIsLive] = useState(false)
  const matches = data.getMatchesByDate
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Slider />
      <MatchesProvider value={{ isLive, setIsLive, data: matches }}>
        <PreferenceBar />
        <Results />
      </MatchesProvider>
    </>
  )
}

export const getServerSideProps = async (): Promise<typeof data> => {
  const { data } = await client.query({
    query: gql`
      query {
        getMatchesByDate(date: "adate") {
          competitions
          matches {
            id
            hometeam
            awayteam
            competition
            country
            countrycode
            status
            winner
            fulltime {
              hometeam
              awayteam
            }
            halftime {
              hometeam
              awayteam
            }
          }
        }
      }
    `
  })

  return { props: { data } }
}

export default Home
