import React from 'react'

export default function Child(props) {
  console.log(props.data)

  const {data} = props;

  return ( 
    <>{data}</>
  )
}