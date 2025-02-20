import React, { useState } from "react";
import styled from "styled-components";
import { useProfile } from "../../../context/ProfileContext";
import Swal from 'sweetalert2';
import axios from "axios";

const VirtualAccountDetails = () => {

  const handleDepositChange = (event) => {
    setDepositAmount(event.target.value);
  };
  const upiID = "20221229583742@yesbank";
  const [copied, setCopied] = useState(false);
  const [imageURL, setImageURL] = useState(""); // Store uploaded image link
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState(null);
  const { profile } = useProfile();
  const [depositAmount, setDepositAmount] = useState("");
  const [phoneNo, setPhoneNo] = useState('')
  const [userName, setUserName] = useState("")
  const [email, setemail] = useState("")

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiID).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    if (!file) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please upload a screenshot before submitting!",
      });
      return;
    }

    if (!profile) {
      console.error("❌ Profile data not available!");
      Swal.fire({
        icon: "error",
        title: "Profile Error",
        text: "User profile is missing. Please refresh and try again!",
      });
      return;
    }

    const formData = new FormData();
    formData.append("screenShotPic", file);
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("user", profile?.userId);
    formData.append("phoneNumber", phoneNo || "N/A");
    formData.append("deposite", depositAmount);
    // formData.append("upi_id", upiID);
    // formData.append("account_No", "11122220221229865310");
    // formData.append("accoundHolderName", "Easebuzz");
    console.log("✅ FormData Before Sending:");

    for (let pair of formData.entries()) {
      console.log(`🔹 ${pair[0]}:`, pair[1]);
    }

    try {
      const response = await axios.post("http://localhost:4000/api/add-more-points", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        console.log(response.data.result.screenShotPic)
        setImageURL(response.data.result.screenShotPic);
        sendToWhatsApp(response.data.result.screenShotPic);
        Swal.fire("Submitted!", "Your payment proof has been sent successfullyt till Approve. Wai", "success");
      }
    } catch (error) {
      console.error("❌ Error uploading image:", error.response ? error.response.data : error);
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: error.response?.data?.error || "There was an error uploading the screenshot. Please try again.",
      });
    }
  };

  const sendToWhatsApp = (imageURL) => {
    const phoneNumber = "917249648596";
    const message = `📌 *Virtual Account Details*\n\n💰 *UPI Handle*: ${upiID}\n🏦 *A/c Number / IFSC*: 11122220221229865310\n\n📎 *Screenshot*: ${imageURL ? imageURL : "No file uploaded"}\n\n✅ *Please verify the details above. \n\n *Deposit Amout ${depositAmount} \n\n *StatusPending`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <VirtualAccountContainer>
      <Header>
        <span>Virtual Account Details</span>
        <CopyButton onClick={copyToClipboard}>{copied ? "Copied!" : "Copy"}</CopyButton>
      </Header>
      <AccountDetails>
        <DetailRow><span>Account Name</span><strong>Easebuzz</strong></DetailRow>
        <DetailRow><span>A/c Number / IFSC</span><strong>11122220221229865310</strong></DetailRow>
        <DetailRow><span>UPI Handle</span><strong>{upiID}</strong></DetailRow>
      </AccountDetails>
      <QRContainer>
        <QRCode src={`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${upiID}`} alt="QR Code" />
      </QRContainer>

      <ExtraDetails>
        <DetailRow>
          <span>UserName</span>
          <StyledInput type="text" placeholder="Enter Username" onChange={(e)=>{setUserName(e.target.value)}}/>
        </DetailRow>
        <DetailRow>
          <span>Email</span>
          <StyledInput type="email" placeholder="Enter Email"  onChange={(e)=>{setemail(e.target.value)}}/>
        </DetailRow>
        <DetailRow>
          <span>Mobile No</span>
          <StyledInput type="number" placeholder="Enter Mobile Number"  onChange={(e)=>{setPhoneNo(e.target.value)}}/>
        </DetailRow>
        <DetailRow>
          <span>Deposit</span>
          <StyledInput
            type="number"
            value={depositAmount}
            onChange={handleDepositChange}
            placeholder="Enter deposit amount"
            
          />
        </DetailRow>
        <DetailRow>
          <span>Screenshot</span>
          <StyledFileInput type="file" accept="image/*" onChange={handleFileChange} />
        </DetailRow>
      </ExtraDetails>




      {uploading && <p>Uploading image...</p>}
      {imageURL && <PreviewContainer><PreviewImage src={imageURL} alt="Uploaded Screenshot" /></PreviewContainer>}
      <SubmitButton onClick={handleSubmit} disabled={uploading}>{uploading ? "Uploading..." : "Submit"}</SubmitButton>
    </VirtualAccountContainer>
  );
};

export default VirtualAccountDetails;



const ExtraDetails = styled.div`
  background: #f9f9f9;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 12px;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  width: 60%;
  outline: none;
  &:focus {
    border-color: #007bff;
    box-shadow: 0px 0px 4px rgba(0, 123, 255, 0.4);
  }
`;

const StyledFileInput = styled.input`
  font-size: 14px;
`;

const SubmitButton = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-top: 12px;
  box-sizing:border-box;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;


const VirtualAccountContainer = styled.div`
  width: 440px;
  border-radius: 10px;
  padding: 16px;
   box-sizing:border-box;
  //  max-width:300px;
  background: white;
  // box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  margin: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const CopyButton = styled.button`
  background: #f1f1f1;
  border: none;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: #ddd;
  }
`;

const AccountDetails = styled.div`
  background: #f8f8f8;
  padding: 12px;
  border-radius: 5px;
  font-size: 16px;
`;



const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

const QRCode = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid #ddd;
  padding: 5px;
  border-radius: 5px;
`;


const PreviewContainer = styled.div`
  margin-top: 12px;
  text-align: center;
`;

const PreviewImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 5px;
  margin-top: 5px;
`;
const ActionLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
  color: blue;
  cursor: pointer;

  span {
    text-decoration: underline;
  }

  span:hover {
    color: darkblue;
  }
`;