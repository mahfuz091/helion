"use client";

import React, { useEffect, useState } from "react";

const page = () => {
  const [tokenPriceCandles, setTokenPriceCandles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log(farmingHistory);
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api-v2.dhedge.org/graphql";
      const query = `
        query GetTokenPriceCandles($address: String!, $period: String!, $interval: String) {
          tokenPriceCandles(address: $address, period: $period, interval: $interval) {
            timestamp
            open
            close
            max
            min
          }
        }
      `;

      const variables = {
        address: "0x49bf093277bf4dde49c48c6aa55a3bda3eedef68",
        period: "1m",
        interval: "1d",
      };

      const requestBody = {
        operationName: "GetTokenPriceCandles",
        query: query,
        variables: variables,
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
        const result = await response.json();
        setTokenPriceCandles(result.data.tokenPriceCandles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const convertToReadableDate = (largeNumber) => {
    const adjustedTimestamp = parseFloat(largeNumber) / 1e6;
    const date = new Date(adjustedTimestamp);
    return date?.toISOString();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <h1>Token Price Candles</h1>
      <ul>
        {tokenPriceCandles.map((candle, index) => (
          <li key={index}>
            <p>Timestamp: {convertToReadableDate(1717531200000)}</p>
            <p>Open: {candle.open}</p>
            <p>Close: {candle.close}</p>
            <p>Max: {candle.max}</p>
            <p>Min: {candle.min}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
