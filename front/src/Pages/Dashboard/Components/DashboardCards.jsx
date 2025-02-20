import React from "react";
import styled from "styled-components";
import { FaDollarSign, FaMoneyBill, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #0b3c68;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing:border-box;
  width: 100%;
`;

const CardContainer = styled.div`
  background-color: white;
  width: 100%;

  padding: 40px 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  width: 150px;

  svg {
    font-size: 80px;
    color: #0b3c68;

    @media (max-width: 768px) {
      font-size: 60px;
    }
  }

  p {
    font-weight: bold;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  flex: 1;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 30px;
  color: white;
  background-color: ${({ $primary }) => ($primary ? "#0b3c68" : "gray")}; /* Fixed prop */
  min-width: 150px;

  span {
    color: ${({ $primary }) => ($primary ? "lightgreen" : "#0b3c68")};
  }

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px;
    width: 100%;
    border-radius: 20px;
  }
`;

const DashboardCards = ({setAddPointPopUp}) => {
  return (
    <Container>
      <CardContainer>
        {/* <Link to="/dashboard/add-point-details"  style={{ color: "black", textDecoration: "none" }}> */}
        <Card onClick={() => setAddPointPopUp(true)}>
          <FaDollarSign />
          <p>Add Point</p>
        </Card>
        {/* </Link> */}
        <Link to="/dashboard/wallet" style={{ color: "black", textDecoration: "none" }}>
        <Card>
          <FaMoneyBill />
          <p>Withdrawal</p>
        </Card>
        </Link>
        {/* <Link to="/dashboard/wallet" style={{ color: "black", textDecoration: "none" }}> */}
        <a href="https://wa.me/7023907840?text=Hello" target="_blank" rel="noopener noreferrer" style={{ color: "black", textDecoration: "none" }}>
        <Card>
          <FaWhatsapp style={{ border: "2px solid #0b3c68", borderRadius: "50%", padding: "10px" }} />
          <p>WhatsApp</p>
        </Card>
        </a>
        <a href="tel:+91 70239 07840" style={{ color: "black", textDecoration: "none" }}>
        <Card>
          <FaPhone />
          <p>Call</p>
        </Card>
        </a>
      </CardContainer>
    </Container>
  );
};

export default DashboardCards;