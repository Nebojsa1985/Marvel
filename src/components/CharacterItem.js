import React from 'react'

const CharacterItem = ({item}) => {
 
        const setBookmark = () => {
            if (localStorage.getItem("marvelBookmarks") === null){
                //Ako ne postoji u ls marvelBookmarks
                let nex = [] 
                let x = [{"id":item.id, "name":item.name, "description":item.description, "thumbnail":item.thumbnail}]        
                nex.push(x)
                localStorage.setItem("marvelBookmarks", JSON.stringify(x))
                nex = JSON.parse(localStorage.getItem('marvelBookmarks'))               

            }else{
                //Ako postoji u ls marvelBookmarks
                let nex = JSON.parse(localStorage.getItem('marvelBookmarks'))            
                let x = {"id":item.id, "name":item.name, "description":item.description, "thumbnail":item.thumbnail}
                nex.push(x)
                localStorage.setItem("marvelBookmarks", JSON.stringify(nex))
                nex = JSON.parse(localStorage.getItem('marvelBookmarks'))      

            }  
        }
    
    return (
        <div className='content'>
            <button className='button-bookmark' onClick={setBookmark}>Add bookmark</button>
            <div className='content-inner'>
                <div className='content-front'>
                <h1>{item.name}</h1>  
                <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt='' />
                </div>
            </div>
        </div>
    )

}

export default CharacterItem