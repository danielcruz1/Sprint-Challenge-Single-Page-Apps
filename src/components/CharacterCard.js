import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";



const Card = styled.div`
  background: #E5D352;
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

const StyledH2 = styled.h2`
color: #757780;
`;

const StyledDiv = styled.div`
color: #757780;
`;

export default function CharacterCard(props) {
  const { name, status, species, image, id, match } = props.character;
  console.log(id);

    return (
      <Card className="character-card">

        <StyledDiv className="character-photo">
         <Image src={image} alt="" />
        </StyledDiv>

        <StyledH2>{name}</StyledH2>

        <StyledDiv className="status">
          Status: <em>{status}</em>
        </StyledDiv>

        <StyledDiv className="species">
          Species: <em>{species}</em>
        </StyledDiv>
        
      </Card>
    );
  }