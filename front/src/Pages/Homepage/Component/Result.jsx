import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
};

const Container = styled.div`
  padding: 100px 15px;
  border-radius: 10px;
  color: white;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 80px 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 60px 5px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: start;
column-gap: 10px;
  flex-wrap: wrap;
  width: 100%;
 
  margin-left:20px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    margin-left:0px;
  }
`;

const Card = styled.div`
  border: 1px solid #355f85;
  padding: 30px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  text-align: center;
  width: 24%;
  background: #013a63;
  margin-top: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 48%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

const Circle = styled.div`
  width: 190px;
  height: 190px;
  background: #002b4e;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px;
`;

const LargeText = styled.span`
  font-size: 4rem;
  font-weight: bold;
  color: #a3f7b5;
`;

const SmallText = styled.span`
  font-size: 1rem;
  color: #a3f7b5;
`;

const TimeText = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  font-size: 0.9rem;
  color: white;
`;

const OpenText = styled.span`
  color: red;
  p {
    color: white;
    margin-top: 0;
    margin-left: 2px;
  }
`;

const CloseText = styled.span`
  color: green;
  p {
    color: white;
    margin-top: 0;
  }
`;

const SattaResults = () => {
  const [results, setResults] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Fetch data from the backend API
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/subscription-state`)
  .then((response) => {
    const data = response.data; // ✅ Correct way to access JSON response in Axios
    if (data.scrapedData && data.scrapedData.markets) {
      setResults(data.scrapedData.markets);
      console.log(data);
    } else {
      setError("No market data found.");
    }
    setLoading(false);
  })
  }, []);

  if (loading) {
    return <Container><Title>Loading...</Title></Container>;
  }

  if (error) {
    return <Container><Title>{error}</Title></Container>;
  }

  return (
    <Container id="result">
      <Title>Shri Matka Online Play Result</Title>
      <Grid>
        {results.map((result, index) => (
          <Card key={index}>
            <Circle>
              <SmallText>--</SmallText> {/* No top number in API, keeping as placeholder */}
              <LargeText>{result.jodiDigit}</LargeText> {/* Display jodiDigit as the main number */}
              <SmallText>--</SmallText> {/* No bottom number in API, keeping as placeholder */}
            </Circle>
            <TimeText>
              <OpenText>Open <p>{result.openTime} </p></OpenText> 
              <CloseText>Close <p>{result.closeTime} </p></CloseText>
            </TimeText>
            <h3>{result.marketName}</h3>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default SattaResults;
