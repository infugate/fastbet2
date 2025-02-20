import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ChangePasswordWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  background: linear-gradient(#0b66ff, #0057d9);
`;

const LeftContainer = styled.div`
  width: 30%;
  min-width: 320px;
  background-color: #003c7b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  color: #fff;
`;

const RightContainer = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  background: yellow;
`;

const SubHeading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: left;
  margin-bottom: 0.25rem;
  font-weight: bold;
  color: #fff;
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #0b66ff;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  &:hover {
    background-color: #005ce6;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  text-align: center;
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  text-align: center;
`;

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.newPassword !== formData.confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    console.log("📤 Sending Change Password Data:", formData);

    try {
      const response = await fetch("https://fastbett-api.vercel.app/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming authentication
        },
        body: JSON.stringify({
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.json();
      console.log("✅ Received Response:", data);

      if (response.ok) {
        setSuccess("Password changed successfully! Redirecting...");
        setTimeout(() => navigate("/dashboard"), 2000);
      } else {
        setError(data.message || "Failed to change password");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <ChangePasswordWrapper>
      <LeftContainer>
        <Logo />
        <SubHeading>Change Your Password</SubHeading>
        <FormContainer onSubmit={handleSubmit}>
          <Label>Old Password</Label>
          <Input
            type="password"
            name="oldPassword"
            placeholder="Enter Old Password"
            value={formData.oldPassword}
            onChange={handleChange}
            required
          />

          <Label>New Password</Label>
          <Input
            type="password"
            name="newPassword"
            placeholder="Enter New Password"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />

          <Label>Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <SubmitButton type="submit"  >Change Password</SubmitButton>

          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
        </FormContainer>
      </LeftContainer>

      <RightContainer />
    </ChangePasswordWrapper>
  );
};

export default ChangePasswordForm;
