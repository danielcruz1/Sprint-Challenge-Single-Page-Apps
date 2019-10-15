import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import Character from './Character';
import SearchForm from "./SearchForm";

function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
 
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharachters = () => {
      axios.get(`https://rickandmortyapi.com/api/character/`)

        .then(response => {
          const resultsData = response.data.results.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setCharacters(resultsData);
        })

        .catch(error => {
          console.log("Server Error", error);
        });
    };

    getCharachters();
  }, [searchTerm])

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
    <h2>Characters:</h2>
    <SearchForm handleChange={handleChange} searchTerm={searchTerm} />
    <section className="character-list">
    ))}	        
      {characters.map(character => (
        <Link key={character.id} to={`/character-list/${character.id}`}>
         <CharacterCard {...props} key={character.id} character={character}/>
        </Link>
      ))}
    </section>
  </div>
  );	
}	

export default CharacterList;
