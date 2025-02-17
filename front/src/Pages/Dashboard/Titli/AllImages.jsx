import React from "react";
import styled from "styled-components";
const AllImages = ({ allWinningImages = [], highlightedImages = [], selectedImages = [], betAmount = 10, onImageClick, isTimerActive}) => {
  return (
    <Container>
      <ImageGrid>
        {allWinningImages.map(({ image }, index) => (
          <ImageWrapper
            key={index}
            highlighted={highlightedImages.includes(image)}
            selected={selectedImages.includes(image)}
            onClick={() => {
              if (isTimerActive) {
                onImageClick(image);
              }
            }}
            isTimerActive={isTimerActive}
          >
            {selectedImages.includes(image) && (
              <BetAmountOverlay>₹{betAmount}</BetAmountOverlay>
            )}
            <StyledImage src={`/${image}`} alt="Winning Card" isTimerActive={isTimerActive} />
          </ImageWrapper>
        ))}
      </ImageGrid>
    </Container>
  );
};

export default AllImages;

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 16px auto;
  padding: 8px;
  border: 2px solid white;
  background-color: #1a202c;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid ${props => (props.highlighted ? "#FFD700" : props.selected ? "#1E90FF" : "transparent")};
  border-radius: 8px;
  cursor: ${props => (props.isTimerActive ? "pointer" : "not-allowed")};
`;

const BetAmountOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 12px;
  padding: 4px;
  border-radius: 4px;
  z-index: 2;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  filter: ${props => (!props.isTimerActive ? "grayscale(100%)" : "none")};
  opacity: ${props => (!props.isTimerActive ? 0.8 : 1)};
`;
