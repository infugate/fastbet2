import React, { useState, useEffect } from "react";
import "./payment.css";

const Payment = () => {
  const [currentDepositPage, setCurrentDepositPage] = useState(1); // Independent page state for deposit
  const [currentWithdrawPage, setCurrentWithdrawPage] = useState(1); // Independent page state for withdraw
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [upiId, setUpiId] = useState(""); // state to store the updated UPI ID

  // On component mount, check for stored UPI ID and reset the state if necessary
  useEffect(() => {
    const storedUpiId = localStorage.getItem("upiId");
    const storedFile = localStorage.getItem("selectedFile");
    const storedImagePreview = localStorage.getItem("imagePreview");

    if (storedUpiId) {
      setUpiId(storedUpiId);
    }

    if (storedFile && storedImagePreview) {
      setSelectedFile(storedFile);
      setImagePreview(storedImagePreview);
    }
  }, []);

  const handleUpiUpdate = () => {
    const newUpiId = document.getElementById("upi-input").value;
    setUpiId(newUpiId); // Update the UPI ID state
    localStorage.setItem("upiId", newUpiId); // Store UPI ID in localStorage
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set image preview
        localStorage.setItem("selectedFile", file.name); // Store file name in localStorage
        localStorage.setItem("imagePreview", reader.result); // Store image preview URL
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadFile = () => {
    if (selectedFile) {
      alert(`File "${selectedFile.name}" uploaded successfully.`);
    } else {
      alert("No file selected.");
    }
  };

  // Reset UPI ID and QR code (e.g., on logout or another event)
  const clearUpiAndQrCode = () => {
    setUpiId("");
    setSelectedFile(null);
    setImagePreview(null);
    localStorage.removeItem("upiId");
    localStorage.removeItem("selectedFile");
    localStorage.removeItem("imagePreview");
  };

  // Sample Data for Deposit and Withdraw sections
  const depositData = [
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", withdrawAmount: "$100", status: "Completed", exposure: "$50", createdAt: "2023-01-03" },
    { name: "Jane Smith", balance: "$150", withdrawAmount: "$50", status: "Pending", exposure: "$30", createdAt: "2023-01-04" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
  ];

  const withdrawData = [
    { name: "John Doe", balance: "$200", withdrawAmount: "$100", status: "Completed", exposure: "$50", createdAt: "2023-01-03" },
    { name: "Jane Smith", balance: "$150", withdrawAmount: "$50", status: "Pending", exposure: "$30", createdAt: "2023-01-04" },
    { name: "John Doe", balance: "$200", withdrawAmount: "$100", status: "Completed", exposure: "$50", createdAt: "2023-01-03" },
    { name: "Jane Smith", balance: "$150", withdrawAmount: "$50", status: "Pending", exposure: "$30", createdAt: "2023-01-04" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
    { name: "Jane Smith", balance: "$150", status: "Pending", exposure: "$30", depositAt: "2023-01-02", transactionId: "TX12346" },
    { name: "John Doe", balance: "$200", status: "Completed", exposure: "$50", depositAt: "2023-01-01", transactionId: "TX12345" },
  ];

  // Pagination logic
  const recordsPerPage = 5;

  const currentDepositData = depositData.slice((currentDepositPage - 1) * recordsPerPage, currentDepositPage * recordsPerPage);
  const currentWithdrawData = withdrawData.slice((currentWithdrawPage - 1) * recordsPerPage, currentWithdrawPage * recordsPerPage);

  const goToNextDepositPage = () => {
    if (currentDepositPage * recordsPerPage < depositData.length) {
      setCurrentDepositPage(currentDepositPage + 1);
    }
  };

  const goToPreviousDepositPage = () => {
    if (currentDepositPage > 1) {
      setCurrentDepositPage(currentDepositPage - 1);
    }
  };

  const goToNextWithdrawPage = () => {
    if (currentWithdrawPage * recordsPerPage < withdrawData.length) {
      setCurrentWithdrawPage(currentWithdrawPage + 1);
    }
  };

  const goToPreviousWithdrawPage = () => {
    if (currentWithdrawPage > 1) {
      setCurrentWithdrawPage(currentWithdrawPage - 1);
    }
  };

  return (
    <div className="component-space">
      {/* Deposit Section */}
      <div className="card">
        <div className="card-header">
          <h3>Deposit</h3>
        </div>
        <div className="card-body">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Current Balance</th>
                  <th>Status</th>
                  <th>Exposure</th>
                  <th>Deposit At</th>
                  <th>Transaction ID</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentDepositData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.balance}</td>
                    <td>{item.status}</td>
                    <td>{item.exposure}</td>
                    <td>{item.depositAt}</td>
                    <td>{item.transactionId}</td>
                    <td>
                      <button className="btn btn-primary">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Deposit Pagination */}
          <div className="pagination">
            <button className="btn" onClick={goToPreviousDepositPage} disabled={currentDepositPage === 1}>
              Previous
            </button>
            <span>{currentDepositPage}</span>
            <button className="btn" onClick={goToNextDepositPage} disabled={currentDepositPage * recordsPerPage >= depositData.length}>
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Withdraw Section */}
      <div className="card">
        <div className="card-header">
          <h3>Withdraw</h3>
        </div>
        <div className="card-body">
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Current Balance</th>
                  <th>Withdraw Amount</th>
                  <th>Status</th>
                  <th>Exposure</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentWithdrawData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.balance}</td>
                    <td>{item.withdrawAmount}</td>
                    <td>{item.status}</td>
                    <td>{item.exposure}</td>
                    <td>{item.createdAt}</td>
                    <td>
                      <button className="btn btn-primary">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Withdraw Pagination */}
          <div className="pagination">
            <button className="btn" onClick={goToPreviousWithdrawPage} disabled={currentWithdrawPage === 1}>
              Previous
            </button>
            <span>{currentWithdrawPage}</span>
            <button className="btn" onClick={goToNextWithdrawPage} disabled={currentWithdrawPage * recordsPerPage >= withdrawData.length}>
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Update UPI Section */}
      <div className="card">
        <div className="card-body">
          <label>Update UPI ID</label>
          <input id="upi-input" type="text" className="input" placeholder="Enter UPI ID" />
          <button onClick={handleUpiUpdate} className="btn btn-success">
            Update
          </button>
          <div id="showid" className="mt-3">
            <p>Current UPI ID: {upiId}</p>
          </div>
        </div>
      </div>

      {/* Update QR Code Section */}
      <div className="card">
        <div className="card-header">
          <h3>Update QR Code</h3>
        </div>
        <div className="card-body">
          <label className="upload-label">
            <input type="file" onChange={handleFileSelect} />
            {selectedFile ? selectedFile.name : "No file chosen"}
          </label>
          <button onClick={uploadFile} className="btn btn-primary">
            Upload
          </button>
          
          {/* Display QR code preview */}
          {imagePreview && (
            <div className="image-preview-container">
              <img src={imagePreview} alt="QR Code Preview" className="image-preview" />
            </div>
          )}
        </div>
      </div>

    
    </div>
  );
};

export default Payment;
