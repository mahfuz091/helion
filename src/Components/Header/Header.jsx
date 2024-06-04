"use client";
import React, { useContext, useState } from "react";
import { Button, Container, Modal, Offcanvas } from "react-bootstrap";
import main_logo from "../../app/assets/images/main-logo.png";
import DarkMode from "../DarkMode/DarkMode";
import { RxHamburgerMenu } from "react-icons/rx";
import light_logo from "../../app/assets/images/footer_logo.png";
import { ThemeContext } from "@/ThemeProvider/ThemeProvider";
import close from "../../app/assets/images/close.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => setShowModal(true);
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className='header'>
      <Container>
        <div className='d-flex align-items-center gap-60'>
          {theme === "dark" ? (
            <img
              style={{ width: "130px" }}
              src={light_logo.src}
              alt='main_logo'
            />
          ) : (
            <img src={main_logo.src} alt='main_logo' />
          )}
          {/* <img src={main_logo.src} alt='main_logo' /> */}
          <ul className='main_menu d-none d-lg-block'>
            <li>
              <a href=''>Explore</a>
            </li>
          </ul>
        </div>
        <div className='d-flex align-items-center gap-4'>
          <DarkMode></DarkMode>
          <div className=' d-lg-none' onClick={handleShow}>
            <RxHamburgerMenu />
          </div>
          <button
            onClick={handleShowModal}
            className='thm_btn d-none d-lg-block'
          >
            <a href='#'>Contact Us</a>
          </button>
        </div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src={main_logo.src} alt='main_logo' />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className='main_menu'>
              <li>
                <a href=''>Explore</a>
              </li>
            </ul>
            <button
              onClick={handleShowModal}
              className='thm_btn '
              style={{ marginTop: "10px" }}
            >
              <a href=''>Contact Us</a>
            </button>
          </Offcanvas.Body>
        </Offcanvas>
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          backdrop='static'
          keyboard={false}
        >
          <Modal.Header>
            <img
              style={{ marginLeft: "auto" }}
              onClick={handleCloseModal}
              src={close.src}
              alt=''
            />
          </Modal.Header>
          <Modal.Body>
            <h4>Contact Us</h4>

            <form action=''>
              <div className=''>
                <label htmlFor=''>Full Name*</label>
                <input type='text' placeholder='Enter your name' />
              </div>
              <div className=''>
                <label htmlFor=''>Email Address*</label>
                <input type='email' placeholder='Enter your email' />
              </div>
              <div className=''>
                <label htmlFor=''>Phone Number*</label>
                <input type='number' placeholder='Enter your phone number' />
              </div>
              <div className=''>
                <input className='thm_btn' type='submit' value='Contact Us' />
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Header;