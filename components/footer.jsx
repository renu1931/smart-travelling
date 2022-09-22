import Image from 'next/image'
import React from 'react'
import styles from '../styles/footer.module.css'
import smart from '../public/images/home/Smart Traveller.png'
import media1 from '../public/images/home/Group 22067.png'
import media2 from '../public/images/home/Group 22068.png'
import media3 from '../public/images/home/Group 22069.png'
import Link from 'next/link'
function Footer() {
    return (
        <div className={styles.footer}>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-3'>
                        <div className={styles.footer_image}>
                            <Image src={smart} height="158px" width="158p"/>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className={styles.footer_image}>
                            <h4>Experience</h4>
                            <h4>My Trip</h4>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className={styles.footer_image}>
                            <h4>Contact Us</h4>
                            <h4>Blog</h4>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className={styles.footer_image3}>
                            <h4>Follow us on</h4>
                            <div>
                                <Link href="https://instagram.com/thesmartraveller.in?igshid=YmMyMTA2M2Y="><a target="_blank" className={styles.home_insta}><Image src={media2} width="60px" height="60px" /></a></Link>
                                <Link href="https://www.linkedin.com/company/the-smart-traveller/?viewAsMember=true"><a target="_blank" className={styles.home_facebook}><Image src={media1} width="60px" height="60px" /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className={styles.footer_copyright}>
                        <p>Copyright © 2022 Travel Company. All Rights Reserved</p>
                        <p>Web Design Melbourne  Make My Website</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer