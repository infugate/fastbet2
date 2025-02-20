import React, { useState } from "react";
import styled from "styled-components";
import { MainContainer } from "../Wallet";
// import DashboardNavbar from "../Components/Navbar";
import axios from "axios";
// import { MainContainer, Container, Wrapper, Title, InputField, WithdrawButton } from "./StyledComponents";
import DashboardNavbar from "../Components/Navbar";
import { useProfile } from "../../../context/ProfileContext";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const WithdrawalForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    upi_id: "",
    phoneNumber: "",
    withdrawAmount: "",
  });

  const { profile } = useProfile()

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  console.log(profile)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Withdrawal initiated");
    setLoading(true);
    setMessage("");
    console.log(formData.withdrawAmount)

    try {

      if (formData.withdrawAmount > profile.walletBalance) {
        toast.error("Please enter amount more less than WalletBalance")
      } else {
        const response = await axios.post("http://localhost:4000/api/withdraw", {
          user: profile.userId, // Replace this with actual user ID
          ...formData,
        });

        if (response.data.success) {
          // Show success popup with withdrawal amount
          Swal.fire({
            icon: "success",
            title: "Withdrawal Successful!",
            html: `You have successfully intitial withdraw <strong>₹${formData.withdrawAmount}</strong>! Wait for Approve`,
            confirmButtonText: "Okay",
          });
   

          // Reset form after successful withdrawal
          setMessage("Withdrawal request submitted successfully!");
          setFormData({
            userName: "",
            email: "",
            upi_id: "",
            phoneNumber: "",
            withdrawAmount: "",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Failed to submit withdrawal request.",
          });
          setMessage("Failed to submit withdrawal request.");
        }
      }

    } catch (error) {
      console.error("Withdrawal Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Filled All field",
      });
      setMessage("An error occurred during withdrawal.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <MainContainer>
      <DashboardNavbar />
      <Container>
        <Wrapper>
          <Title>Payment Details</Title>
          <FormContainer >
            <InputField>
              <span>USER NAME</span>
              <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Enter USER Name" required />
            </InputField>
            <InputField>
              <span>Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" required />
            </InputField>
            <InputField>
              <span>UPI ID</span>
              <input type="text" name="upi_id" value={formData.upi_id} onChange={handleChange} placeholder="Enter UPI ID" required />
            </InputField>
            <InputField>
              <span>Phone Number</span>
              <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter Phone Number" required />
            </InputField>
            <InputField>
              <span>Amount</span>
              <input type="text" name="withdrawAmount" value={formData.withdrawAmount} onChange={handleChange} placeholder="Enter Withdraw Amount" required />
            </InputField>

            <WithdrawButton type="submit" onClick={handleSubmit}>
              {loading ? "Processing..." : "Proceed to Withdraw"}
            </WithdrawButton>
            {message && <p>{message}</p>}
          </FormContainer>
        </Wrapper>
      </Container>
      <ToastContainer position="top-right" autoClose={2000} />
    </MainContainer>
  );
};

export default WithdrawalForm;





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

export const WithdrawButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;