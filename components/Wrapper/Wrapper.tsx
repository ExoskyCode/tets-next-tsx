import React from 'react'
import Navbar from 'components/Navbar/Navbar'

export default function Wrapper({ children }: any) {
  return (
        <Navbar>
            {children}
        </Navbar>
  )
}
