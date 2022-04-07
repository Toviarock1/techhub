import React from 'react'
import Footer from '../../views/Footer/Footer'
import Header from '../../views/Header/Header'

type Props = {
    children: JSX.Element;
    navLinkColor: boolean
}

const Layout = ({ children, navLinkColor }: Props) => {
    return (
        <>
            <Header navLinkWhite={navLinkColor} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout