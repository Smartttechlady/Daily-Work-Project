import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Clientinvoice() {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center">
        <img src={("./..//images/Daily work logo 3.svg")} alt="Logo" style={{ height: '50px' }} />
        <button className="btn btn-link">Back</button>
      </div>
      <hr />

      {/* Invoice Info Section */}
      <div className="text-center my-4">
        <h4>Invoice #863014</h4>
        <p>Mon 19th Aug, 2024</p>
      </div>
      <hr />

      {/* Address Section */}
      <div className="row text-start mb-4">
        <div className="col-md-6 mb-3 mb-md-0">
          <p className="text-muted">To: ID0835297</p>
          <h6>Winson Alex</h6>
          <p>20, Westgate Villa,<br />Ikeja, Lagos.</p>
        </div>
        <div className="col-md-6 text-md-end">
          <p className="text-muted">From: ID715DE85</p>
          <h6>Amada Thompson</h6>
          <p>20, Joel Ogunnaike.<br />Ikeja, Lagos.</p>
        </div>
      </div>

      {/* Items Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Rate</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Piping for plumbing work</td>
            <td>N17,300</td>
            <td>01</td>
            <td>N17,300</td>
          </tr>
          <tr>
            <td>WC</td>
            <td>N56,900</td>
            <td>01</td>
            <td>N56,900</td>
          </tr>
          <tr>
            <th colSpan="3" className="text-end">Grand Total</th>
            <th>N74,200</th>
          </tr>
        </tbody>
      </table>

      {/* Payment Button */}
      <div className="text-end mt-4">
        <button className="btn btn-success btn-lg">Pay N 74,200</button>
      </div>
    </div>
  );
}

export default Clientinvoice;