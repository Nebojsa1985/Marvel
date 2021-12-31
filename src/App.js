import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from './components/Header'
import CharacterTable from './components/CharacterTable'
import Search from './components/Search'


const hash = "74cbf627f1bb6db2c4a9144d9d84588a"

const App = () => { 
    const[items, setItems] = useState([])
    const[isLoading, setLoading] = useState(true)
    const[query, setQuery] = useState('')
    

    useEffect(() => {

        const fetch = async()=>{
            let nex = JSON.parse(localStorage.getItem('marvelBookmarks'))    
           if(query==='' && localStorage.getItem("marvelBookmarks") === null) {          
                
                const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=75865338cbaa6f58bb46b261d69bf5df&hash=${hash}`)
                setItems(result.data.data.results)
                setLoading(false)  

            } else if(query===''){ 
                
                setItems(nex)
                setLoading(false)   

            }else {

                const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=75865338cbaa6f58bb46b261d69bf5df&hash=${hash}`)
                setItems(result.data.data.results)
                setLoading(false)
            }
        }
        fetch()
    },[query])


  
const deleteBookmark = () => {
    if (localStorage.getItem("marvelBookmarks") === null){
        alert("You don't have any bookmark saved")
    } else {
        localStorage.removeItem("marvelBookmarks")
    }
}
 
    return (       

            <div className="container">
                <button className='button-bookmark' onClick={deleteBookmark}>Remove all bookmarks</button>
                <Header /> 
                <Search search={(q)=>setQuery(q)}/>
                <CharacterTable items={items} isLoading={isLoading} />
            </div>
    )
}

export default App