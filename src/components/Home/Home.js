import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import '../Home/Home.css'


function Home(props) {

  const User_name = props.getUser
  console.log(User_name)
  // let the_Name = props.getUserName
  return (
    <div className='home'>
      <h2>Welcome User :{User_name}</h2>
      <SearchBar />
    </div>
  )
}

export default Home
