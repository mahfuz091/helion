"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import img from "../../app/assets/images/Rectangle 3467615.png";
import img_1 from "../../app/assets/images/Frame1413372731.png";
import axios from "axios";
import Charts from "../Charts/Charts";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import InnoVault from "../Vaults/InnoVault/InnoVault";
import PerpetualVault from "../Vaults/PerpetualVault/PerpetualVault";
import StableEdgeVault from "../Vaults/StableEdgeVault/StableEdgeVault";
import Link from "next/link";
import EtherumVault from "../Vaults/EtherumVault/EtherumVault";

const OurVault = () => {
  return (
    <div className='our_vault'>
      <Container>
        <h2>Our Vaults</h2>
        <Row className='vault_row'>
          <Col xs={12} xl={6}>
            <InnoVault />
          </Col>
          <Col xs={12} xl={6}>
            <PerpetualVault />
          </Col>
          <Col xs={12} xl={6}>
            <StableEdgeVault />
          </Col>
          {/* <Col xs={12} lg={6}>
            <EtherumVault />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default OurVault;
