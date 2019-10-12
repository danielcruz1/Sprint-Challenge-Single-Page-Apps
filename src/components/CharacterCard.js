import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";



const Card = styled.div`
  background: rgba(0, 0, 0, 0.4);
  border: 3px solid black;
  color: white;
  margin: 20px;
  text-align: center;
  heigth: fit-content;
  width: 200px;
`;

const Image = styled.img`
  height: 75px;
`;

export default function CharacterCard(props) {
  const { name, status, species, image, id, match } = props.character;
  console.log(id);

    return (
      <Card className="character-card">
        <Link to={`/character-list/`}>

          <div className="character-photo">
            <Image src={image} alt="" />
          </div>

          <div className="status">	
            <h2>{name}</h2>
          </div>	

          <div className="status">
            Status: <em>{status}</em>
          </div>
          
          <div className="species">
            Species: <em>{species}</em>
          </div>

          <span>todo: character</span>
        </Link>
      </Card>
    );
  }