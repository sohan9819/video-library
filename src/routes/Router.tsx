import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Video, SignIn, Search } from '../pages'

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home type="random" />}></Route>
        <Route path="trends" element={<Home type="trend" />}></Route>
        <Route path="subscribtion" element={<Home type="sub" />}></Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="video">
          <Route path=":videoId" element={<Video />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default Router
