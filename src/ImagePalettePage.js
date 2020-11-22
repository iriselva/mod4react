import React, {useState, useEffect} from 'react'
// importing color extractor react component
import { ColorExtractor } from 'react-color-extractor'
import ColorSwatches from './ColorSwatches'
import styled from 'styled-components';


// Styled components
const StyledContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    gap: 2rem;
`;

const StyledPalette = styled.div`
    margin-top: 20;
    display: flex;
    justify-content: center;
`;

const StyledButton = styled.button`
    width: 160px;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-bottom: 4rem;
    background-color: white;
    color: #303030;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        background-color: #CBA893;
    }
`;

// Rendering imge and palette
const ImagePalettePage = () => {
    // state functional components
    // image
    const [randomImage, setRandomImage] = useState();
    // button
    const [buttonUpdateNr, updateButton] = useState(0);
    // loading state
    const [imageLoading, setLoading] = useState(false);
    // colors
    const [colors, setColors] = useState([]);
   // getting new colors for new image
    const getColors = newColors => setColors(newColors);
    
    // fetching random image from unsplash api
    const fetchRandomImg = () => {
        setLoading(true);
        // fetching random image from unsplash api
        fetch("https://source.unsplash.com/random/500x300")
        .then(response => {
            return response.url
        })
        .then(data => {
            setLoading(false);
            setRandomImage(data);
        })
    };
    
    // telling the component to do update after render
    useEffect(() => {
        fetchRandomImg();
    }, [buttonUpdateNr])

    return (    
        <StyledContentContainer>
            {/* getting colors from image */}
            <ColorExtractor getColors={getColors}>
                <img src={randomImage} alt="random image from unsplash"/>
            </ColorExtractor>
            {/* displaying the colors */}
            <StyledPalette>
                <ColorSwatches colors={colors}/>
            </StyledPalette>
            {/* place random image when clicking the button */}
            <StyledButton disabled={imageLoading} onClick={() => updateButton(Math.random())}>New image</StyledButton>
        </StyledContentContainer>
    )
};

export default ImagePalettePage
