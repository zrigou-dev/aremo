import React from "react";
import "./Contact.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const Submit = (e)=>{

    e.preventDefault();
    if(name !='' && email != '' && phone !='' && message !=''){
      const formEle = document.querySelector("form");
      const formData = new FormData(formEle);
      fetch(
        "https://script.google.com/macros/s/AKfycbxAXyu-ggVul_QYTFTpsos7PYCe0KxXjT6U2_Pd6rBDkNMJhrwmwO0HX4tfjG8NVAnxzQ/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          
        })
        
        .catch((error) => console.log(error));
        setShow(false)
    }
  }

  return (
    <div className="contact">
      <Button onClick={handleShow} className="btn-nav-contact">
        CONTACT
      </Button>

      <Modal show={show} onHide={handleClose} className="content-contact">
        <Modal.Header closeButton>
          <div>
            <Modal.Title>ENVOYEZ-NOUS UN MESSAGE</Modal.Title>
            <p>
              Nous restons à votre disposition pour tout renseignement
              complémentaire
            </p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <form className="form" onSubmit={(e) => Submit(e)}>
            <input type="text" placeholder="Votre nom et prénom" name="Name"  onChange={(e) => {
              setName(e.target.value);
            }}/>
            <br />
            <input type="email" placeholder="Votre Email" name="Email" onChange={(e) => {
              setEmail(e.target.value);
            }} />
            <br />
            <input type="text" placeholder="Votre numéro du téléphone" name="Phone" onChange={(e) => {
              setPhone(e.target.value);
            }} />
            <br />
            <textarea placeholder="Votre Sujet" name="Message" onChange={(e) => {
              setMessage(e.target.value);
            }}></textarea>
            <br />
            <div className="btn-contact-popup">
              <button onClick={(e) => Submit(e)} type="submit">Envoyer</button>
            </div>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default Contact;
