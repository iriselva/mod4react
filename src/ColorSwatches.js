import React from 'react'
import styled from 'styled-components';

// Style Components
const StyledColorContainer = styled.div`
    margin: 0.5rem;
    `;

const StyledColor = styled.div`
    background-color: ${(props) => props.color};
    width: 90px;
    height: 90px;
    border-radius: 50%;
`;

const StyledHex = styled.p`
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
`;

// Rendering colors and hex values
const ColorSwatches = ({colors}) => {
    return colors.map((color, id) => {
        return (
            <StyledColorContainer>  
                <StyledColor
                    color={color}
                    key={id}
                >
                </StyledColor>
                <StyledHex>{color}</StyledHex>
            </StyledColorContainer> 
        )
    })
    }

export default ColorSwatches