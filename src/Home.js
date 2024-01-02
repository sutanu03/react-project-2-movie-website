// import React, { useContext } from 'react'
// import { AppContext } from './Context';
// import { useGlobalContext } from './Context';
import Movies from './Movies';
import Search from './Search';

const Home = () => {
   // const name = useContext(AppContext);
  // const name = usssssseGlobalContext();
  return (
    <>
      <Search />
      <Movies />
    </>
  )
}

export default Home
