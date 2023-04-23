import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AreaChartByDate = () => {
  const [data, setData] = useState([]);
  const [fromDate, setFromDate] = useState('2022-06-01');
  const [toDate, setToDate] = useState('2022-06-03');

  const fetchData = async () => {
    const apiKey = 'woope1Pei5zieg'; // Replace with your actual API key
    try {
      const response = await axios.get(`https://demo-api.adtriba.app/v1/api/partitions/932561105d21a54d3d1d2a941164ffec321cd76b/data?from_date=${fromDate}&to_date=${toDate}`, {
        headers: { 'X-API-Key': apiKey },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  },);

  return (
    <div>
      <label htmlFor="fromDate">From Date:</label>
      <input type="date" id="fromDate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
      <label htmlFor="toDate">To Date:</label>
      <input type="date" id="toDate" value={toDate} onChange={(e) => setToDate(e.target.value)} />

      <ResponsiveContainer width={900} height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar type="monotone" dataKey="attributed_revenue" stroke="#1B48FF" fill="#1B48FF" />
          <Bar type="monotone" dataKey="spends" stroke="#FE5F34" fill="#FE5F34" />
          <Bar type="monotone" dataKey="attributed_conversions" stroke="#FFA51B" fill="#FFA51B" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartByDate;
