import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowUp } from 'react-icons/fa';

const SingleTotalValue = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiKey = 'woope1Pei5zieg'; 
    const fetchData = async () => {
      try {
        const response = await axios.get("https://demo-api.adtriba.app/v1/api/partitions/932561105d21a54d3d1d2a941164ffec321cd76b/totals", {
          headers: { 'X-API-Key': apiKey } // Add your API key here
        });
      setData(response.data);
      } catch (error) {
        console.error("Failed to fetch data from API:", error);
      }
    };

    fetchData();
  }, []);

  const formatNumber = (value) => {
    return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
  };


  return (
    <div>
    <h2>Maximum</h2>
   <div className="maximumName">
    <h4>Revenue</h4>
    <p className="maximumValue">{formatNumber(data.revenue)} <FaArrowUp /></p>
   </div>
   <div className="maximumName">
    <h4>Spend</h4>
    <p className="maximumValue">{formatNumber(data.spend)} <FaArrowUp /></p>
   </div>
   <div className="maximumName">
    <h4>Conversions</h4>
    <p className="maximumValue">{formatNumber(data.conversions)} <FaArrowUp /></p>
   </div>
  </div>
  );
};

export default SingleTotalValue;
