// Write your Character component here
import React from 'react'
import styled from 'styled-components'

// const dummyData = {
//     name: 'Luke Skywalker', 
//     height: '172', 
//     mass: '77', 
//     hair_color: 'blond', 
//     skin_color: 'fair'
//   }

const CharacterInfo = (props) => {
    const {character} = props;

    return (
        <div>
            <Name>{character.name}</Name>
        </div>
    )
}

export default CharacterInfo;

const Photo = styled.div`
    background = red;
`
const Name = styled.h1`
    color = red;
`
const Info = styled.h2`
    color = red;
`