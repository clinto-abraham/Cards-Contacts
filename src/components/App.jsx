import React from "react";
import Card from "./Cards.jsx";
import { contacts } from "../contacts.js";
import Avatar from "./Avatar.jsx";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <h2 className="heading"> My Profile </h2>
      <Avatar img={contacts[3].imgURL} />
      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
