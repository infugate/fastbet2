import React, { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
  background-color: #0b3c68;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 0px;
  }
`;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const Banner = styled.div`
  background-color: red;
  color: white;
  text-align: center;
  padding: 15px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`;

const AmountContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AmountInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
`;

const AmountButton = styled.button`
  background-color: #0b3c68;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  
  &:hover {
    background-color: #083255;
  }
`;

const ProceedButton = styled.button`
  background-color: #004080;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
  margin-top: 20px;

  &:hover {
    background-color: #002b5e;
  }
`;

const AddPointForm = () => {
  const [amount, setAmount] = useState("");
  

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <Banner>For Better Payment Experience <br /> Download Shri Matka App</Banner>
        <Title>Add Points</Title>
        <AmountContainer>
          <AmountInput 
            type="number" 
            placeholder="Enter Amount" 
            value={amount} 
            onChange={handleInputChange} 
          />
        </AmountContainer>
        <ButtonsContainer>
          {[300, 500, 1000, 2000, 5000, 10000].map((value) => (
            <AmountButton key={value} onClick={() => handleAmountClick(value)}>
              {value}
            </AmountButton>
          ))}
        </ButtonsContainer>
        <ProceedButton>Proceed &gt;</ProceedButton>
      </Wrapper>
    </Container>
  );
};

export default AddPointForm;
