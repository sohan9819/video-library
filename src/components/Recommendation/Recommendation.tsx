import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import { Container } from './Recommendation.styles'

// declare const BASE_URL: string

type RecommendationProps = {
  tags: string[]
}

export const Recommendation = ({ tags }: RecommendationProps) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/tags?tags=${tags}`)
      setVideos(res.data)
    }
    fetchVideos()
  }, [tags])

  return (
    <Container>
      {videos.map((video, index) => (
        <Card key={index} video={video} type="sm" />
      ))}
    </Container>
  )
}
