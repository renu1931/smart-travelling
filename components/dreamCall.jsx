import React from 'react'
import styles from '../styles/dreamCall.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import Image from 'next/image';
import group1 from '../public/images/home/Group 22104.png';
import group2 from '../public/images/home/Group 22103.png'
import group3 from '../public/images/home/Rectangle 4566.png'
import group4 from '../public/images/home/Rectangle 4567.png'
import circle from '../public/images/home/Ellipse 293.png'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function DreamCall() {
    const responsive = {

        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className={styles.home_dream}>
                    <div className={styles.home_div_1}>Don’t call it a dream,</div>
                    <div className={styles.home_div_2}>call it a plan</div>
                    <p>Check out these trending attractions</p>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className="col-12">
                    <Carousel responsive={responsive} className={styles.demo} keyBoardControl={styles.arrow} >
                        <div className={styles.home_carousal_card}>
                            <div className={styles.bca}>
                            
                                <Image src={group1} height="382px" width="351px" alt="group"></Image>
                            </div>
                            <div className={styles.abc}>245 trips booked in last week</div>
                            <div className={styles.home_carousal_title}>DREAM VILLAGE</div>
                        </div>
                        <div className={styles.home_carousal_card}>
                            <div className={styles.bca}>
                                <Popup
                                    trigger={<Image src={group2} className="button" height="382px" width="351px" alt="group2"></Image>}
                                    modal
                                    contentStyle={{ borderRadius: "20px", width: "70%" }}
                                 >
                                    {close => (
                                        <div className={styles.modal}>
                                            <button className={styles.close} onClick={close}>
                                                &times;
                                            </button>
                                            <div className={styles.content}>
                                                <div className='row justify-content-center pt-3'>
                                                    <div className='col-8'>
                                                        <div><Image src={group3} height="365px" width="645px" alt="group3"></Image></div>
                                                    </div>
                                                    <div className='col-4 '>
                                                        <div><Image src={group4} height="520px" alt="group4"></Image></div>
                                                    </div>
                                                </div>
                                                <div className='row justify-content-center'>

                                                    <div className={styles.home_popup_title}>
                                                        <h2>Manali</h2>
                                                    </div>
                                                    <div className={styles.home_popup_para}>
                                                        <div><Image src={circle} width="15px" height="15px" alt="circle"></Image> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></div>
                                                        <div><Image src={circle} height="15px" width="15px" alt="circle2"></Image> <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></div>
                                                    </div>
                                                    <div className={styles.home_popup_para}>

                                                    </div>
                                                    <div className={styles.Popup_bottom_button}>
                                                        <Link href="/tripOne">
                                                            <a className="btn" id={styles.home_popup_planYourTrip} type="button">
                                                                <span>Plan your Trip</span>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                            </div>
                            <div className={styles.abc}>Sssh, hidden gem just for you</div>
                            <div className={styles.home_carousal_title}>MANALI</div>
                        </div>
                        <div className={styles.home_carousal_card}>
                            <div className={styles.bca}>
                                <Image src={group1} height="382px" width="351px" alt="bca"></Image>
                            </div>
                            <div className={styles.abc}>245 trips booked in last week</div>
                            <div className={styles.home_carousal_title}>DREAM VILLAGE</div>
                        </div>
                    </Carousel>
                </div>
            </div>

        </div>
    )
}

export default DreamCall