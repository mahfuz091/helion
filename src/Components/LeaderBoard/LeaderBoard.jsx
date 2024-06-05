import React from "react";
import { Container } from "react-bootstrap";
import arrow from "../../app/assets/images/fi_271228.png";
import network from "../../app/assets/images/Rectangle 3467615.png";
import vault from "../../app/assets/images/image 888.png";

const LeaderBoard = () => {
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
                  $1.173
                </td>
                <td className='tw-bg-black-medium' style={{ color: "#000" }}>
                  $1.173
                </td>
                <td className='tw-bg-black-medium' style={{ color: "#DE0A0A" }}>
                  0.07%
                </td>
                <td className='tw-bg-black-medium' style={{ color: "#000" }}>
                  $1.173
                </td>

                <td className='tw-bg-black-medium' style={{ color: "#01A412" }}>
                  8.1%
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
                  9.16%
                </td>
              </tr>
              <tr>
                <td scope='row'>
                  <img src={network.src} alt='' />
                </td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <div>
                    <img src={vault.src} alt='' />
                  </div>
                  <div>
                    <h5>Helion InnoVault</h5>
                    <p>dHEDGE</p>
                  </div>
                </td>
                <td style={{ color: "#000" }}>$1.173</td>
                <td style={{ color: "#DE0A0A" }}>0.07%</td>
                <td style={{ color: "#01A412" }}>0.37%</td>
                <td style={{ color: "#01A412" }}>0.85%</td>
                <td style={{ color: "#01A412" }}>8.1%</td>
                <td style={{ color: "#000" }}>9.16%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default LeaderBoard;
