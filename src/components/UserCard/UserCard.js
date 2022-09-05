import React ,{useState,useEffect} from 'react'
import {Card,CardBody} from 'reactstrap'
import '../UserCard/UserCard.css'

function UserCard(data) {

  const [showCard,setShowCard] = useState(false)

useEffect(()=>{
  if(data.Data.hasOwnProperty('id')){
    setShowCard(true)
  }
  else{setShowCard(false)}
  console.log(showCard)
})

//   const user_card = user_data.map((val)=>{
//     return(
//     <Card>
//         <img src={val.avatar_url} />
//         <CardBody>
//             <div>:{val.html_url}</div>
//             <div>Name:{val.login}</div>
//             <div>Created Acc. Date: {val.created_at}</div>
//             <div>Followers: {val.followers}</div>
//             <div>Total Repos: {val.public_repos}</div>
//         </CardBody>
//     </Card>
//     )
//   })  
console.log(data)
  return (
    <div className='user_card'>
    <h4>Search The Name of GitHub User</h4>
    {/* {user_card} */}
    {showCard && <Card className='card'>
        <img src={data.Data.avatar_url} />
          <CardBody className='card_info'>
            <div><b>Url:</b> {data.Data.html_url}</div>
            <div><b>Name:</b> {data.Data.login}</div>
            <div><b>Created Acc. Date: </b> {data.Data.created_at}</div>
            <div><b>Last Update: </b> {data.Data.updated_at}</div>
            <div><b>Followers:</b> {data.Data.followers}</div>
            <div><b>Total Repos: </b> {data.Data.public_repos}</div>
        </CardBody>
      </Card>}
    </div>
  
  )
}

export default UserCard
