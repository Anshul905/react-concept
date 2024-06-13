import React from 'react'
import GithubAPI from './GithubAPI'
import RandomUserAPI from './RandomUserAPI'
import Jsonplaceholder from './Jsonplaceholder'

const MultipleAPI = () => {
  return (
    <>
        <GithubAPI />
        <RandomUserAPI />
        <Jsonplaceholder/>
    </>
  )
}

export default MultipleAPI