import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Terms-conditions.css';




function Terms_conditions() {
  const handleBackClick = () => {
    window.history.back(); 
  };

    
  return (


    <div>
      <Container fluid className="terms-container">
      <Row className="mt-4">
        <Col xs={12} className="text-end">
          <Button variant="link" className="back-button" onClick={handleBackClick}>
            &lt; Back
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center text-center mt-3">
        <Col xs={12}>
          <img
            src={("./..//images/Daily work logo 3.svg")}
            alt="Daily Work Logo"
            className="terms-logo"
          />
        </Col>
      </Row>
      <Row className="justify-content-center text-center mt-2">
        <Col xs={12}>
          <h2>Terms and Condition</h2>
          <p>Last Updated: [28/08/2024]</p>
          <div className="terms-underline"></div>
          <div className="terms-underline"></div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4 mb-5">
        <Col xs={12} md={8} lg={6}>
          <div className="terms-content">
            <p>Welcome to Daily Work, a platform designed to connect service providers with clients. By accessing or using our platform, you agree to be bound by the following Terms and Conditions. Please read them carefully.</p>
            <p><strong>1. Definitions</strong></p>
            <ul>
              <li><strong>Platform:</strong> Refers to the Daily Work website, app, and any associated services.</li>
              <li><strong>Service Provider:</strong> An individual or business offering services through the Platform.</li>
              <li><strong>Client:</strong> An individual or business seeking to purchase services from Service Providers through the Platform.</li>
              <li><strong>User:</strong> Refers to both Service Providers and Clients.</li>
              <li><strong>Agreement:</strong> Refers to these Terms and Conditions.</li>
            </ul>
            <p><strong>2. Acceptance of Terms</strong></p>
            <ul>
              <li>By using the Platform, you agree to comply with and be legally bound by these Terms and Conditions.</li>
              <li>If you do not agree to these terms, you must not use the Platform.</li>
            </ul>
            <p><strong>3. User Accounts</strong></p>
            <ul>
              <li><strong>Registration:</strong> Users must create an account to access certain features of the Platform. You agree to provide accurate and complete information during the registration process.</li>
              <li><strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account information and are fully responsible for all activities that occur under your account.</li>
            </ul>
            <p><strong>4. Service Providers' Obligations</strong></p>
            <ul>
              <li><strong>Quality of Service:</strong> Service Providers must perform their services with reasonable skill and care.</li>
              <li><strong>Compliance:</strong> Service Providers must comply with all applicable laws and regulations.</li>
              <li><strong>Independence:</strong> Service Providers acknowledge that they are independent contractors and not employees of Daily Work.</li>
            </ul>
            <p><strong>5. Clients' Obligations</strong></p>
            <ul>
              <li><strong>Payment:</strong> Clients agree to pay for services rendered as agreed upon with the Service Provider. Payment terms are determined by Daily Work, where the payment remains on the platform until the Client acknowledges that the job has been completed. Once the job is confirmed as completed, the Service Provider will receive the payment due after Daily Work deducts its service charge.</li>
              <li><strong>Fair Use:</strong> Clients must use the Platform fairly and not engage in any activity that could harm the reputation or operations of the Platform or its Users.</li>
            </ul>
            <p><strong>6. Fees and Payments</strong></p>
            <ul>
              <li><strong>Platform Fees:</strong> Daily Work charges a 20% service fee per transaction, which is deducted from the payment made by the Client to the Service Provider for using the Platform.</li>
              <li><strong>Payment Processing:</strong> Payment processing services are provided by third-party payment processors, such as Paystack.</li>
              <li><strong>Refunds:</strong> Refunds are determined by the agreement between the Client and the Service Provider. Refunds are only possible if either party can provide concrete evidence justifying the refund, and the money is still within the platform.</li>
            </ul>
            <p><strong>7. Dispute Resolution</strong></p>
            <ul>
              <li><strong>Initial Resolution:</strong> Users are encouraged to resolve disputes directly between themselves.</li>
              <li><strong>Mediation:</strong> If disputes cannot be resolved, Daily Work may offer mediation services but is not obligated to do so.</li>
              <li><strong>Binding Arbitration:</strong> Any unresolved disputes shall be settled by binding arbitration, under the rules of the applicable arbitration association.</li>
            </ul>
            <p><strong>8. Prohibited Activities</strong></p>
            <ul>
              <li><strong>Misuse of Platform:</strong> Users may not engage in fraudulent activities, misrepresentation, or any illegal activity through the Platform.</li>
              <li><strong>No Circumvention:</strong> Users agree not to circumvent the Platform by engaging in direct transactions without involving Daily Work once an initial connection is made through the Platform.</li>
            </ul>
            <p><strong>9. Intellectual Property</strong></p>
            <ul>
              <li><strong>Platform Ownership:</strong> All content, trademarks, and intellectual property related to the Platform are owned by Daily Work or its licensors.</li>
              <li><strong>User Content:</strong> Users grant Daily Work a non-exclusive, royalty-free license to use, reproduce, and display content uploaded to the Platform.</li>
            </ul>
            <p><strong>10. Privacy Policy</strong></p>
            <ul>
              <li><strong>Privacy Policy:</strong> Daily Work's Privacy Policy outlines how your personal information is collected, used, and shared. By using the Platform, you consent to the data practices described in the Privacy Policy.</li>
            </ul>
            <p><strong>11. Limitation of Liability</strong></p>
            <ul>
              <li><strong>Service Provider and Client Liability:</strong> Daily Work is not liable for the actions, errors, or omissions of Service Providers or Clients. Users use the Platform at their own risk.</li>
              <li><strong>Platform Availability:</strong> Daily Work does not guarantee uninterrupted access to the Platform and is not liable for any loss of data or service interruption.</li>
            </ul>
            <p><strong>12. Indemnification</strong></p>
            <p><strong>13. Modification of Terms</strong></p>
            <ul>
              <li><strong>Modification of Terms:</strong> Daily Work reserves the right to modify these Terms and Conditions at any time. Users will be notified of any changes, and continued use of the Platform after changes constitutes acceptance of the new terms.</li>
            </ul>
            <p><strong>14. Termination</strong></p>
            <ul>
              <li><strong>User Termination:</strong> Users may terminate their accounts at any time by following the instructions on the Platform.</li>
              <li><strong>Platform Termination:</strong> Daily Work reserves the right to suspend or terminate access to the Platform for any User who violates these Terms and Conditions or engages in conduct harmful to the Platform or other Users.</li>
            </ul>
            <p><strong>15. Governing Law</strong></p>
            <ul>
              <li><strong>Governing Law:</strong> These Terms and Conditions are governed by and construed in accordance with the laws of [Insert Jurisdiction].</li>
            </ul>
            <p><strong>16. Contact Information</strong></p>
            <ul>
              <li><strong>Contact Information:</strong> For any questions or concerns regarding these Terms and Conditions, please contact Daily Work at [Insert Contact Information].</li>
            </ul>

          
            <p className="terms-footer">By using Daily Work, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
          </div>
        </Col>
      </Row>
    </Container>
      
      
      </div>
  )
}


export default Terms_conditions