import React, {useState, useEffect} from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import CharacterCard from "./components/CharacterCard";
import "./App.css";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/character-list/" render={props => <CharacterList {...props} />}/>
      <Route path='/character-list/:id' render={props => <CharacterCard {...props} />}/>
    </main>
  );
}
