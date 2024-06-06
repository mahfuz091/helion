"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";

const StableEdgePriceYear = () => {
  const [data, setData] = useState([]);
  const [minTokenPrice, setMinTokenPrice] = useState(null); // State to store the minimum token price

  const fetchData = async () => {
    const query = `
      query GetTokenPriceHistory($fundAddress: String!, $period: String!) {
        tokenPriceHistory(address: $fundAddress, period: $period) {
          history {
            adjustedTokenPrice
            timestamp
            tokenPrice
          }
        }
      }
    `;
    const variables = {
      fundAddress: "0x1ec50880101022c11530a069690f5446d1464592",
      period: "1y",
    };
    const operationName = "GetTokenPriceHistory";

    try {
      const response = await axios.post("https://api-v2.dhedge.org/graphql", {
        query: query,
        variables: variables,
        operationName: operationName,
      });

      const formattedData = response.data.data.tokenPriceHistory.history.map(
        (item) => ({
          ...item,
          adjustedTokenPrice: parseFloat(
            (parseFloat(item.adjustedTokenPrice) / Math.pow(10, 18)).toFixed(4)
          ), // Convert 'adjustedTokenPrice' value to correct format with 4 decimal places
        })
      );

      setData(response.data.data.tokenPriceHistory.history);

      // Find the minimum adjustedTokenPrice value
      const minTokenPriceValue = Math.min(
        ...formattedData.map((item) => item.adjustedTokenPrice)
      );
      setMinTokenPrice(minTokenPriceValue);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error here, such as showing an error message to the user
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   const formatDate = (timestamp) => {
  //     const date = new Date(timestamp * 1000);
  //     const options = { month: "long", day: "numeric", year: "numeric" };
  //     return date.toLocaleDateString("en-US", options);
  //   };
  const formatDate = (timestamp) => {
    console.log(typeof timestamp);
    const num = parseFloat(timestamp);
    const date = new Date(num);
    const options = { month: "long", day: "numeric", year: "numeric" };

    return date.toLocaleDateString("en-US", options);
  };
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const convertTimestampToDate = (timestamp) => {
    const date = new Date(parseFloat(timestamp));
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  console.log("PP", formatDate(1716475800000));

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        background: "white",
        overflowX: "auto",
      }}
    >
      <AreaChart data={data} width={580} height={200}>
        <XAxis
          dataKey='timestamp'
          tickFormatter={(u) => convertTimestampToDate(u)}
          tick={{ fontSize: 10 }}
          interval={30}
        />
        <YAxis
          tickFormatter={(value) => (parseFloat(value) + 1).toFixed(2)}
          tick={{ fontSize: 10 }}
          domain={[minTokenPrice || "auto", "auto"]}
        />
        <Tooltip
          content={({ payload }) => {
            if (payload && payload.length > 0) {
              const tokenPrice = payload[0].payload.adjustedTokenPrice;
              console.log((parseFloat(tokenPrice) + 1).toFixed(4));

              const date = formatDate(payload[0].payload.timestamp);

              return (
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    fontSize: "15px",
                  }}
                >
                  <p style={{ marginBottom: "0" }}>Token Price</p>
                  <p style={{ marginBottom: "0" }}>{date}</p>
                  <p style={{ marginBottom: "0" }}>
                    {(parseFloat(tokenPrice) + 1).toFixed(4)}
                  </p>
                </div>
              );
            }
            return null;
          }}
        />
        <Area
          type='monotone'
          dataKey='adjustedTokenPrice'
          stroke='#38B6FF'
          fill='#38B6FF'
        />
      </AreaChart>
    </div>
  );
};

export default StableEdgePriceYear;
