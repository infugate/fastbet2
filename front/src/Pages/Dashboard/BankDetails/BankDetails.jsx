import React from "react";
import styled from "styled-components";
import { MainContainer } from "../Wallet";
import DashboardNavbar from "../Components/Navbar";


const Container = styled.div`
  background-color: #0b3c68;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 1400px;
  padding: 30px;
  border-radius: 10px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: black;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

const FormContainer = styled.div`
  background-color: #e0e0e5;
  padding: 30px;
  border-radius: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const InputField = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  flex-direction: column;

  span {
    color: #0b3c68;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
  }
`;

const PaymentDetails = () => {
 
 
    return (
        <MainContainer>
        <DashboardNavbar />
        <Container>
            <Wrapper>
                <Title>Payment Details</Title>
                <FormContainer>
                    <InputField>
                        <span>UPI ID</span>
                        <input type="text" placeholder="Enter UPI ID" />
                    </InputField>
                    <InputField>
                        <span>Google Pay Number</span>
                        <input type="text" placeholder="Enter Google Pay Number" />
                    </InputField>
                    <InputField>
                        <span>Paytm Number</span>
                        <input type="text" placeholder="Enter Paytm Number" />
                    </InputField>
                    <InputField>
                        <span>PhonePe Number</span>
                        <input type="text" placeholder="Enter PhonePe Number" />
                    </InputField>
                    <InputField>
                        <span>Your Name in Account</span>
                        <input type="text" placeholder="Enter Account Name" />
                    </InputField>
                    <InputField>
                        <span>Bank Name</span>
                        <input type="text" placeholder="Enter Bank Name" />
                    </InputField>
                    <InputField>
                        <span>Account Number</span>
                        <input type="text" placeholder="Enter Account Number" />
                    </InputField>
                </FormContainer>
            </Wrapper>
        </Container>
    </MainContainer>       
    );
};

export default PaymentDetails;
