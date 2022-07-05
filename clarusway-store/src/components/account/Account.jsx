import React from 'react'
import {
 
  Link,

} from "react-router-dom";

const Account = (account) => {

  const EmptyCard=()=>{
    return(
    <p>You have no items in your basket to add,
         <Link
          href="/"
          sx={{
            textDecoration: "none",
          }}
        >
          start adding some!
        </Link> </p>
    )
  }
    
  const FilledCard=()=>{
    return(

      <p>Kartınızın içi dolu</p>
    )
  }
    

    // Dolu kart için fonksiyon yaz



  return (
    <div style={{marginTop:"100px"}}>

     {
      account?.lenght ? <EmptyCard/> :<FilledCard/>
     }
    </div>
  )
}

export default Account
