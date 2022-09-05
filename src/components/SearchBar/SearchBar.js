import React,{useState} from 'react'
import UserCard from '../UserCard/UserCard';
import '../SearchBar/SearchBar.css'


function SearchBar() {
    const [userName,setUserName] = useState('')
    const [cardData,setCardData] = useState([])
    // const [showCard,setShowCard] = useState(false)

const SearchUser = async (e) =>{

    e.preventDefault();

   const request = await fetch(`https://api.github.com/users/${userName}`)

   const data = await request.json()

   console.log(data)

    setCardData(data)
}


  return (
    <div>
        <form className="d-flex" role="search">
            <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Enter Username" 
                aria-label="Search"
                onChange={(e)=>{setUserName(e.target.value)}}
            />
            <button className="btn btn-outline-light" type="submit" onClick={SearchUser}>Search</button>
      </form>
       <UserCard Data = {cardData} />
    </div>
  )
}

export default SearchBar
