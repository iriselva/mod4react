import ImagePalettePage from './ImagePalettePage'
import styled from 'styled-components';

// App styled components
const StyledAppContent = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const StyledHeader = styled.header`
  margin: 1rem;
    text-align: center;
`;

function App() {
  return (
    <div className="App">
      <StyledAppContent>
        {/* header elemetn */}
        <StyledHeader>
          <h1>Color Palette Generator</h1>
          <p>Get a color scheme from a random image</p>
        </StyledHeader>
        {/* rendering image and palletta */}
        <ImagePalettePage />
      </StyledAppContent>
    </div>
  );
}

export default App;
