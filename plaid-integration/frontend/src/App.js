

// APP COMPONENT
// Upon rendering of App component, make a request to create and
// obtain a link token to be used in the Link component
import React, { useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';

const App = () => {

  // trying to get the link token from the plaid server
  // Link token set to nothing 
  const [linkToken, setLinkToken] = useState(null);

  const generateToken = async () => {
    // responses fetches data from our api into plaid 
    // returns a promise
    const response = await fetch('api/create_link_token', {
      method: 'POST',
    });
    console.log(response);
    // if the promise is completed, it gets parsed by json function 
    // and a json file is returned 
    const data = await response.json();
    // we set the setLinkToken to the linkToken part of the json:
    // {
    // "expiration": "2022-07-17T19:10:43Z",
    // "link_token": "link-development-09eeed87-9082-4dce-959a-1fe30b76a3bd",
    // "request_id": "up0twPk7tvDA8JH"
    // }
    setLinkToken(data.link_token);
  };

  useEffect(() => {
    generateToken();
  })


  const { open, ready, exit, error } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      // send public_token to server
    },
    onExit: (err, metadata) => {},
    onEvent: (eventName, metadata) => {},
  });
  return (
    <h1>{linkToken}hh</h1>
    // <button onClick={() => open()} disabled={!ready}>
    //   Connect a bank account
    // </button>
  );
};
export default App;
