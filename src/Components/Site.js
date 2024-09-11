import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Site.css'; // Importing the CSS file

function Site() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <>
      {/* Back Arrow */}
      <div className="back-arrow" onClick={handleBackClick}>
        &#8592; {/* Unicode for left arrow */}
      </div>

      {/* Content */}
      <center><h1>BETHAPUDI PONDS</h1></center>
      <div className="container">
        <div className="left">
          <p><b>Owner :</b> Kadiyam Nagabhushnam</p>
          <p><b>Tank No 01, 02, 03 :</b> 2.75 Acres each</p>
          <p><b>Tank No 5 :</b> 1.00 Acres</p>
          <p><b>Reserve Tank :</b> 0.25 Acres</p>
          <p><b>Lease :</b> Rs.75,000/- per acre per year</p>
          <p><b>Lease Time : </b>01-09-2022 to 31-08-2029</p>
          <p><b>Lease Settlement :</b> 1st Term on Sep 1st - 3,75,000/-</p>
          <p><b>Lease Settlement :</b> 2nd Term on Mar 1st - 3,75,000/-</p>
        </div>
        <div className="right">
          <p><b>Tank No 04 :</b> 3.30 Acres</p>
          <p><b>Owner :</b> Kadiyam Tulasi Rao(0.75 Acres)(Rs.50,000/- per acre per year)</p>
          <p><b>Owner :</b> Kadiyam Venkateswara Rao(0.55 Acres)(Rs.60,000/- per acre per year)</p>
          <p><b>Owner :</b> Samatam Rama Krishna(2.00 Acres)(Rs.60,000/- per acre per year)</p>
        </div>
      </div>
    </>
  );
}

export default Site;
