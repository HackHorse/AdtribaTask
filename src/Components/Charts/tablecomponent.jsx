import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [selectedSource, setSelectedSource] = useState('affiliate_prospecting');

  useEffect(() => {
    const apiKey = 'woope1Pei5zieg'; // Replace with your actual API key

    // Fetch data from API with API key in header
    axios.get('https://demo-api.adtriba.app/v1/api/partitions/932561105d21a54d3d1d2a941164ffec321cd76b/report/performance', {
      headers: { 'X-API-Key': apiKey }
    }).then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch data:', error);
      });
  }, [selectedSource]);
// Handle source selection
const handleSourceSelection = (event) => {
  setSelectedSource(event.target.value);
};

const formatNumber = (value) => {
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
};

// Extract unique source names from data
const uniqueSources = [...new Set(data.map(item => item.source))];

// Filter data based on selected source
const filteredData = data.filter(item => item.source === selectedSource);

  return (
    <div>
    <p>Select Source of marketing:</p>
      {/* Render source selection dropdown */}
      <select onChange={handleSourceSelection}>
        {/* Render unique source names in dropdown */}
        {uniqueSources.map(source => (
          <option key={source} value={source}>{source}</option>
        ))}
      </select>
      {/* Render table with filtered data */}
      <table>
        <thead>
          <tr>
            <th className='rev'>Revenue</th>
            <th className='con'>Conversions</th>
            <th className='spe'>Spend</th>
            <th className='roa'>Roas</th>
            <th className='cpa'>CPA</th>
            {/* Add additional table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td className='rev'>{formatNumber(item.revenue)}</td>
              <td className='con'>{formatNumber(item.conversions)}</td>
              <td className='spe'>{formatNumber(item.spend)}</td>
              <td className='roa'>{item.roas !== null ? formatNumber(item.roas) : '0.00'}</td>
              <td className='cpa'>{formatNumber(item.cpa)}</td>
              {/* Render additional table cells with corresponding data as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
