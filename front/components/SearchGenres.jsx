import React from 'react'

const SearchGenres = props => {

  //see if the item the user wants to create is in the store 
  let createNewGenre = title => {
    props.newGenres.push(title)

    //check for unique instances
    let genres = props.newGenres.filter((genre,index) => {
      if(props.newGenres.indexOf(genre) === index) return genre;
    })
    props.makeNewGenre(genres)
  }

  let deleteNewGenre = title =>{
    let genres = props.newGenres.filter((genre,index) => {
      if(genre !== title) return genre;
    })
    props.makeNewGenre(genres)
  }

  return (
    <div>
      <input 
        onChange={(event)=>props.genreSearchInput(event.target.value)}
      />
      <button onClick={()=>createNewGenre(props.searchInput)}>Add Genre</button>
      {props.searchInput
        ? props.genres.map((genre, index) => {
          if (genre.title.indexOf(props.searchInput) > -1) return <li 
                key={index}
                onClick={()=>createNewGenre(genre.title)}
              >
              {genre.title}
              </li>
        })
        :null
      }
      {
        props.newGenres 
        ? props.newGenres.map((genre, index)=>
          <div key={index}>
            <p>{genre}</p>
            <button
              onClick={()=>deleteNewGenre(genre)}
            >x</button>
          </div>
        )
        : null
      }
    </div>
  )
}

export default SearchGenres