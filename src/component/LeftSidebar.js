import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './left.css'
import { useHistory} from 'react-router-dom';

function LeftSidebar() {

      const [league, setLeague] = useState([])
      const [isLoading, setIsLoading] = useState(true)
      const history = useHistory()


      useEffect(() => {
            const options = {
                  method: 'GET',
                  url: 'https://odds.p.rapidapi.com/v1/sports',
                  headers: {
                    'x-rapidapi-host': 'odds.p.rapidapi.com',
                    'x-rapidapi-key': '71738864camshf00d52195179bb5p1c78dfjsn8fd7877ce2ec'
                  }
                };
                
                axios.request(options).then(function (response) {
                      setLeague(response.data.data.filter((item)=>{
                        return item.group.includes('Soccer')
                  }));

                  setIsLoading(false)
                }).catch(function (error) {
                      console.error(error);
                });
           
      }, [])

     const redirectToLeague = (path)=>{
          
        history.push(`/${path}`)
     }

      const content = (
            league.map((league)=>{
                  return  <li onClick={()=>redirectToLeague(league.key)} key={league.key}>{league.title}</li> 
            })
      )

      return (
            <div className='left-side'>
                  <h5>LEAGUE </h5>
                  <ul>
                       {!isLoading && content}
                  </ul>
            </div>
      )
}

export default LeftSidebar
