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
				"x-rapidapi-host": "odds.p.rapidapi.com",
				"x-rapidapi-key": "0855b1cdf7msh52ad89e9f432c3fp126a9ejsncb3cac95c3da",
			},
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
