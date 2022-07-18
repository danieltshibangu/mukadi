import React from 'react'
import { usePlaidLink } from 'react-plaid-link';

const Link = () => {

    // LINK COMPONENT
// Use Plaid Link and pass link token and onSuccess function
// in configuration to initialize Plaid Link

interface LinkProps {
    linkToken: string | null;
  }
  
  const Link: React.FC<LinkProps> = (props: LinkProps) => {
    const onSuccess = React.useCallback((public_token, metadata) => {
      // send public_token to server
      const response = fetch('/api/set_access_token', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({public_token}),
      });
      //Handle response
    }, []);
  
    const config: Parameters<typeof usePlaidLink>[0] = {
      token: props.linkToken!, 
      receivedRedirectUri: window.location.href, 
      onSuccess,
    };
    const { open, ready } = usePlaidLink(config);
    return (
      <button onClick={() => open()} disabled={!ready}>
        Link account
      </button>
    )
  }
}

export default Link
