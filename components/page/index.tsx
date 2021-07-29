import React from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import styles from './Page.module.css'

const Page:React.FC = ({children}) => {
    return (
        <div className={styles.container}>
            <Header/>
            <main className={styles.main}>
                {children}
            </main>
            <Footer />     
        </div>
    )
}

export default Page
