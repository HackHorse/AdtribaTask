import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
//import rangeData from "../../Data/rangedata";

export default function RevenueLineChart(){
    const [data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState('affiliate_prospecting');

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Replace 'YOUR_API_KEY' with your actual API key
          //const keys = 'woope1Pei5zieg';
          const response = await axios.get('https://demo-api.adtriba.app/v1/api/partitions/932561105d21a54d3d1d2a941164ffec321cd76b/data', {
            headers: {
                'x-api-key': 'woope1Pei5zieg'
            }
          });
          setData(response.data);
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
      };
  
      fetchData(); // Call the fetch function
    }, []);

    const handleDataChange = (e) => {
        setSelectedOption(e.target.value);
      };
    
      // Remove duplicates from label values
  const uniqueLabels = [...new Set(data.map((option) => option.source))];

    return (
<>
<h2>Revenue & Spend </h2>
<p>Select Source of marketing:</p>
{data.length > 0 && (
        <select onChange={handleDataChange}>
          {uniqueLabels.map((label, index) => (
            <option key={index} value={label}>
              {label}
            </option>
          ))}
        </select>
      )}

<LineChart width={900} height={183} data={data.filter((option) => option.source === selectedOption)}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="attributed_revenue" stroke="#345CFE" dot={null} />
        <Line type="monotone" dataKey="spends" stroke="#FE5F34" dot={null}/>
      </LineChart>
</>
    );
}