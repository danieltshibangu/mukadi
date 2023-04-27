import '/styles/globals.css'
import Head from 'next/head'
import { Fragment } from 'react'
import {AuthProvider} from '/context/user'
import "react-widgets/scss/styles.scss";
import { SSRProvider } from 'react-bootstrap';




function MyApp({ Component, pageProps }) {

    return (
        <SSRProvider>
        
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider> 
        </SSRProvider>

    )
}

export default MyApp
