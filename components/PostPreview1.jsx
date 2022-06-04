import React from 'react'
import { Card, Image } from 'react-bootstrap'
import Link from 'next/link'
import { useState } from 'react'

const PostPreview1 = ({mostPopularPost}) => {
  
  return (
    <div>
        <div style={{ 
            position: 'relative' }}>

            <Card>
                <Card.Img src={mostPopularPost.image} alt="recent-post" style={{ height: '55vh'}} />
                <Card.ImgOverlay>
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
                </Card.ImgOverlay>
            </Card>
        </div>
    </div>
  )
}

export default PostPreview1