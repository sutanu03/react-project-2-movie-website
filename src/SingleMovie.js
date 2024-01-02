import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
    const { id } = useParams();
  return (
    <div>Our Single Movie { id }</div>
  )
}

export default SingleMovie