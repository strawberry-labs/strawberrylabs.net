import React, { ReactNode } from "react"
import Footer from "./footer"
import Navbar from "./navbar"

export default function Layout({ modalOpen, children }: { modalOpen: any, children: ReactNode }) {
    return (
        <>
            <Navbar modalOpen={modalOpen} />
            {children}
            <Footer />
        </>
    )
}