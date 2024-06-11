"use client";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import arrow from "../../app/assets/images/fi_271228.png";
import network from "../../app/assets/images/Rectangle 3467615.png";
import vault from "../../app/assets/images/image 888.png";
import PerpetualRow from "./PerpetualRow";
import StableEdgeRow from "./StableEdgeRow";
import EtherumEdgeRow from "./EtherumEdgeRow";

const LeaderBoard = () => {
  const [innoVault, setInnoVault] = useState([]);
  const [perpetualVault, setPerpetualVault] = useState([]);

  const [etherumEdgeVault, setEtherumEdgeVault] = useState([]);

  console.log(innoVault?.d);

  const fetchInnoVaultData = async () => {
    const apiEndpoint = "https://api-v2.dhedge.org/graphql";

    // Constructing the GraphQL query
    const graphqlQuery = `
        query GetFundData($address: String!) {
            fund(address: $address) {
               
                id
                name
                tokenPrice
                totalValue
                riskFactor
                performanceMetrics {
                  day
                  week
                  month
                  quarter
                  halfyear
                  year
              }
              apy{
                monthly
                weekly
              }

            
               
            }
        }
    `;

    // Address provided in the query
    const address = "0x49bf093277bf4dde49c48c6aa55a3bda3eedef68";
    // const address = "0xb9243c495117343981ec9f8aa2abffee54396fc0";

    // Define the request options
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: graphqlQuery,
        variables: {
          address: address,
        },
      }),
    };

    try {
      // Fetching data from the API
      const response = await fetch(apiEndpoint, requestOptions);
      const responseData = await response.json();

      // Do something with the data...
      // Convert performance metrics to "1d", "1w", "1m", "6m", "1y" format
      const performanceMetrics = responseData.data.fund.performanceMetrics;

      // Function to format percentage change with sign
      const calculatePercentage = (value) => {
        return ((parseFloat(value) / 10 ** 18 - 1) * 100).toFixed(2);
      };

      // Calculate percentage change for each performance metric and format it with sign
      const formattedPerformanceMetrics = {
        "1d": calculatePercentage(performanceMetrics.day),

        "1w": calculatePercentage(performanceMetrics.week),
        "1m": calculatePercentage(performanceMetrics.month),
        "1q": calculatePercentage(performanceMetrics.quarter),
        "6m": calculatePercentage(performanceMetrics.halfyear),
        "1y": calculatePercentage(performanceMetrics.year),
      };

      const formatLargeNumber = (number) => {
        if (number >= 1e24) {
          // Handle numbers between 1e21 and 1e24, scale to "M"
          const scaledNumber = number / 1e24;
          return scaledNumber.toFixed(2) + "M";
        } else if (number >= 1e21) {
          // Handle very large numbers and scale to "K"
          const scaledNumber = number / 1e21;
          return scaledNumber.toFixed(1) + "K";
        } else {
          // General case
          const units = ["", "K", "M", "B", "T"];
          const unitIndex = Math.min(
            Math.floor(Math.log10(number) / 3),
            units.length - 1
          );
          const scaledNumber = number / Math.pow(1000, unitIndex);
          return scaledNumber.toFixed(2) + units[unitIndex];
        }
      };

      const data = {
        performanceMetrics: formattedPerformanceMetrics,
        d: formattedPerformanceMetrics["1d"],
        w: formattedPerformanceMetrics["1w"],
        m: formattedPerformanceMetrics["1m"],
        y: formattedPerformanceMetrics["1y"],
        total: calculatePercentage(responseData.data.fund.tokenPrice),
        managed: formatLargeNumber(responseData.data.fund.totalValue),
      };

      console.log(data.performanceMetrics);

      setInnoVault(data);
    } catch (error) {
      console.error("Error fetching GraphQL data:", error);
    }
  };

  useEffect(() => {
    fetchInnoVaultData();
  }, []);

  return (
    <div className='leader_board'>
      <Container>
        <h2>Leaderboard</h2>
        <div className='d-lg-flex justify-content-between'>
          <button className='btn_all'>
            <div className='inside'>All</div>
          </button>
          <div className='search'>
            <input type='text' placeholder='Search Vault' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              className='search_icon'
            >
              <path
                d='M20.7263 19.3951L16.289 14.9395C17.4299 13.6301 18.055 11.9826 18.055 10.2675C18.055 6.26026 14.6781 3 10.5275 3C6.37691 3 3 6.26026 3 10.2675C3 14.2747 6.37691 17.535 10.5275 17.535C12.0857 17.535 13.5706 17.0812 14.8401 16.2199L19.3111 20.7093C19.498 20.8967 19.7494 21 20.0187 21C20.2737 21 20.5156 20.9062 20.6992 20.7355C21.0893 20.3731 21.1017 19.7721 20.7263 19.3951ZM10.5275 4.89587C13.5955 4.89587 16.0913 7.30552 16.0913 10.2675C16.0913 13.2295 13.5955 15.6391 10.5275 15.6391C7.45956 15.6391 4.9637 13.2295 4.9637 10.2675C4.9637 7.30552 7.45956 4.89587 10.5275 4.89587Z'
                fill='black'
              />
            </svg>
          </div>
        </div>
        <div className='table-responsive'>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Network</th>
                <th scope='col'>Vault</th>
                <th scope='col'>
                  Managed <img src={arrow.src} alt='' />
                </th>
                <th scope='col'>
                  1D <img src={arrow.src} alt='' />
                </th>
                <th scope='col'>
                  1W <img src={arrow.src} alt='' />
                </th>
                <th scope='col'>
                  1M <img src={arrow.src} alt='' />
                </th>
                <th scope='col'>
                  1Y <img src={arrow.src} alt='' />
                </th>
                <th scope='col'>
                  Total <img src={arrow.src} alt='' />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='tw-bg-black-medium' scope='row'>
                  <img src={network.src} alt='' />
                </td>
                <td
                  className='tw-bg-black-medium'
                  style={{ display: "flex", gap: "10px" }}
                >
                  <div>
                    <img src={vault.src} alt='' />
                  </div>
                  <div>
                    <h5>Helion InnoVault</h5>
                    <p>dHEDGE</p>
                  </div>
                </td>
                <td className='tw-bg-black-medium' style={{ color: "#000" }}>
                  ${innoVault.managed}
                </td>
                <td className='tw-bg-black-medium' style={{ color: "#000" }}>
                  {innoVault.d}
                </td>
                <td className='tw-bg-black-medium' style={{ color: "#DE0A0A" }}>
                  {innoVault.w}
                </td>
                <td className='tw-bg-black-medium' style={{ color: "#000" }}>
                  {innoVault.m}
                </td>

                <td className='tw-bg-black-medium' style={{ color: "#01A412" }}>
                  {innoVault.y}
                </td>
                <td
                  className='tw-p-3
                tw-whitespace-nowrap
                tw-text-sm
                tw-text-black-dark
                tw-text-white
                tw-bg-white-medium
                tw-bg-black-medium
                tw-text-center
                tw-rounded-l-lg
                group-hover:tw-bg-white-dark
                group-hover:tw-bg-black-light
                tw-cursor-pointer'
                  style={{ color: "#000" }}
                >
                  {innoVault.total}
                </td>
              </tr>
              <PerpetualRow />
              <StableEdgeRow />
              <EtherumEdgeRow />
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default LeaderBoard;
