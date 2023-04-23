import React, { useState, useEffect } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const TotalRSC = () => {
  const [data, setData] = useState([]);
 // Define custom colors for each data item
 const COLORS = ['#1B48FF','#FFA51B','#FE5F34'];

  useEffect(() => {
    const apiKey = 'woope1Pei5zieg'; 
    const fetchData = async () => {
      try {
        const response = await axios.get("https://demo-api.adtriba.app/v1/api/partitions/932561105d21a54d3d1d2a941164ffec321cd76b/totals", {
          headers: { 'X-API-Key': apiKey } // Add your API key here
        });
        const dataArray = Object.keys(response.data).map(key => {
            return { name: key, value: response.data[key]};
          });
          setData(dataArray);
       // setData(response.data);
      } catch (error) {
        console.error("Failed to fetch data from API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{textAlign: 'center', display: 'inline-block'}}>
    <h2>Summary Statistics</h2>
    {data.length > 0 ? (
      <PieChart width={300} height={600}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" />
        <Tooltip />
      </PieChart>
    ) : (
      <p>Loading data...</p>
    )}
  </div>
  );
};

export default TotalRSC;
