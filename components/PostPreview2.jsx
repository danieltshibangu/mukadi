import React from 'react'
import { Card, Image } from 'react-bootstrap'
import Link from 'next/link'
import { useState } from 'react'

const PostPreview2 = ({mostPopularPost}) => {
  
  return (
    <div style={{ paddingBottom: '10%'}}>
        <div style={{ 
            position: 'relative', marginTop: '17%' }}>

                <div>
                  <img src={mostPopularPost.image} style={{ height: '33vh', borderRadius: 10}} />
                </div>


            <Card style={{ 
              width: '80%',
              left: '9%',
              minHeight: '13vh',
              position: 'absolute', 
              bottom: '-20%', 
              
              background: '#fff', 
              filter: 'drop-shadow(0px 3.38629px 5.64383px rgba(176, 190, 197, 0.7))',
              borderRadius:  7, 

              }}>
              <Card.Body>
                <Card.Title>
                  <h3 style={{
                  fontFamily: 'Raleway', 
                  fontSize: '1.3rem',
                  textAlign: 'center', 
                  marginTop: '5%'
              }}>
                  <Link href="">{mostPopularPost.header}</Link>
                  </h3>  
                </Card.Title>
                <Card.Text style={{ fontSize: '.9rem', textAlign: 'center'}}>You'd be surprise how many...</Card.Text>
                <div style={{ display:'flex', alignItems: 'center', margin: '8% auto auto 10%'}}>
                  <div style={{ display:'flex', alignItems: 'center'}}>
                    <i class='bx bx-heart' style={{ margin: '0 3%'}} ></i>
                    <p style={{ margin: '0 50%'}}>{mostPopularPost.likes}</p>
                  </div>

                  <div style={{ display:'flex', alignItems: 'center', margin: '0 20%'}}>
                  <i class='bx bx-chat' ></i>
                    <p style={{ margin: '0 50%'}}>{mostPopularPost.comments}</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
        </div>
    </div>
  )
}

export default PostPreview2