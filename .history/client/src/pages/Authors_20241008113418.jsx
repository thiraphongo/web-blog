import { useState } from "react"
import Avartar1 from "../images/avartar1"
import Avartar2 from "../images/avartar2"
import Avartar3 from "../images/avartar3"

const authorsData = [
    {
        id:1,avartar: Avartar1,name:"Embert boy",post:3
    },
    {
        id:2,avartar: Avartar2,name:"Jackie Chan",post:5
    },
    {
        id:3,avartar: Avartar3,name:"Sydney Sky",post:0
    }
]

const Authors = () => {

    const [authors, setAuthors] = useState(authorsData);


  return (
    <div className="authors">
        <div className="container authors-container">
            
        </div>
    </div>
  )
}

export default Authors