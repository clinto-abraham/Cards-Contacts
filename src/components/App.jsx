/*jslint es6:true*/
import React from "react";
import Card from "./Cards.jsx";
import { contacts } from "../contacts.js";
import Avatar from "./Avatar.jsx";
import { AvatarImg } from '../AvatarImg';

// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const createContact = (contact) => (
  <Card
      key={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
  />
)

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <h2 className="heading"> My Profile </h2>

      <Avatar img={AvatarImg[0].imgURL} />

      {contacts.map(createContact)}

    </div>
  );
}

export default App;
