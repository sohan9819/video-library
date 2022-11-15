import React, { useEffect, useState } from 'react'
import { Container } from './Search.styles'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Card } from '../../components/Card/Card'

export const Search = () => {
  const [videos, setVideos] = useState([])

  const query = useLocation().search

  useEffect(() => {
    console.log(query)
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/search${query}`)
      setVideos(res.data)
    }
    fetchVideos()
  }, [query])

  return (
    <Container>
      {videos.map((video, index) => (
        <Card key={index} video={video} />
      ))}
    </Container>
  )
}
