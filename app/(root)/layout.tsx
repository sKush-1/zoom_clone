import React, { Children, ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      Navbar
      {children}
      Footer
    </main>
  )
}

export default layout
