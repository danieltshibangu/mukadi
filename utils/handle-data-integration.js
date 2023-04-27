import axios from 'axios';
import React, {useState} from 'react'
import router from 'next/router'
import supabase from "/supabase/supabase-config";
import { useAuth } from '/context/user'


const DASHBOARD = 'http://localhost:5000/app';

const handleDataIntegration = async (req, res) => {

  const infoResponse = JSON.stringify(await axios.post('http://localhost:8000/info', {}))
  const accountsResponse = JSON.stringify(await axios.get('http://localhost:8000/accounts'))

  const encryptedInfoResponse = Buffer.from(infoResponse, 'utf8').toString('base64');
  const encryptedAccountsResponse = Buffer.from(accountsResponse, 'utf8').toString('base64');

  const addingPlaidData = await axios.post('/api/append-plaid-user', {}, {
    params: {
      acctResponse: encryptedAccountsResponse, 
      accessResponse: encryptedInfoResponse
    }
  } )

  const status = addingPlaidData.status;

      // if user is active, send to
  if (status == 200) {
    return status
  } else {
    console.log('some error happened')
  }
}

export default handleDataIntegration