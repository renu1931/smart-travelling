import React from "react";
import Image from "next/image";
import styles from "../styles/Contact.module.css";
import contact_img from "../public/images/contact/Rectangle 4564.png";
import user_one from "../public/images/contact/Rectangle 4409.png";
import user_two from "../public/images/contact/Rectangle 4411.png";
import envelope_img from "../public/images/contact/envelope.png";
import group_img from "../public/images/contact/Group.png";
import vector_img from "../public/images/contact/Vector.png";
import contact_img11 from "../public/images/contact/contact_phone.png";
import mail_img from "../public/images/contact/mail.png";
import linkdin_img from "../public/images/contact/linkdin.png";
import insta_img from "../public/images/contact/insta.png";
import facebook_img from "../public/images/contact/facebook.png";
import Navbar from "../components/navbar"

function Contact() {
    return (
        <div>
            <Navbar />
            <div className="container-fluid" id={styles.main_contact_container}>
                <Image src={contact_img} width={1440} height={520} alt="contact_img" className={styles.contact_image} />
                <div className="text-center">
                    <h1 className={styles.contact_tourist_care}>TOURIST CARE</h1>
                </div>
            </div>
            <div className={styles.contact_all_div11}>
                <div className={styles.contact_second_div}>
                    <div className="container" id={styles.contact_second_container}>
                        <h1 className={styles.contact_founding_team}>Founding Team</h1>
                        <div className={styles.contact_all_card}>
                            <div className="row text-center">
                                <div className="col-lg-6">
                                    <div className="card" id={styles.contact_card_one}>
                                        <div className={styles.contact_user_one}>
                                            <Image src={user_one} width="214px" height="214px" alt="user-one" />
                                        </div>
                                        <div className="card-body text-center">
                                            <p className="card-title" id={styles.contact_card_title}>Nihal Choudhary</p>
                                            <div className={styles.text_div}>
                                                <small className="card-text" id={styles.contact_card_text}>Co-Founder, Product IITK'21</small>
                                            </div>
                                            <div className={styles.all_icons}>
                                                <div id={styles.user_icons}>
                                                    <Image src={envelope_img} alt="envelope" />
                                                </div>
                                                <div id={styles.user_icons}>
                                                    <Image src={group_img} alt="envelope" />
                                                </div>
                                                <div id={styles.user_icons}>
                                                    <Image src={vector_img} alt="envelope" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card" id={styles.contact_card_one}>
                                        <div>
                                            <Image src={user_two} width="214px" height="214px" alt="user-two" />
                                        </div>
                                        <div className="card-body text-center">
                                            <p className="card-title" id={styles.contact_card_title}>Dhruv Sihag</p>
                                            <div className={styles.text_div}>
                                                <small className="card-text" id={styles.contact_card_text}>Co-Founder, Operations IITK'21</small>
                                            </div>
                                            <div className={styles.all_icons}>
                                                <div id={styles.user_icons}>
                                                    <Image src={envelope_img} alt="envelope" />
                                                </div>
                                                <div id={styles.user_icons}>
                                                    <Image src={group_img} alt="envelope" />
                                                </div>
                                                <div id={styles.user_icons}>
                                                    <Image src={vector_img} alt="envelope" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" id={styles.contact_info_container}>
                    <div className="text-center" id={styles.contact_parent_div}>
                        <p className={styles.contact_user_h1}>Contact Us</p>
                        <p className={styles.contact_user_para}>Our team is here to help you make the most of your time with us!</p>
                    </div>
                    <div className={styles.contact_info11}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="">
                                    <span><Image src={contact_img11} width="20.64px" height="20.64px" alt="contact" /></span>
                                    <span className={styles.contact_number}>+91 7807021868</span>
                                </div>
                                <div className="" id={styles.contact_main_mail}>
                                    <span className={styles.contact_mail_img11}><Image src={mail_img} width="24.45px" height="15.px" alt="mail" /></span>
                                    <span className={styles.contact_gmail}>smartestraveller@gmail.com</span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={styles.contact_main_channel}>
                                    <p className={styles.contact_channel_text}>Our Channel</p>
                                </div>
                                <div className="d-flex justify-content-end" id={styles.contact_social11}>
                                    <div className={styles.contact_social_icon}>
                                        <Image src={facebook_img} alt="facebook" />
                                    </div>
                                    <div className={styles.contact_social_icon}>
                                        <Image src={insta_img} alt="insta" />
                                    </div>
                                    <div className={styles.contact_social_icon}>
                                        <Image src={linkdin_img} alt="linkdin" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.contact_your_details}>
                        <p className={styles.contact_your_text}>Your Details:</p>
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" placeholder="Your name" name="name" className={styles.contact_inputs11} />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" placeholder="Phone number" name="phone" className={styles.contact_inputs22} />
                            </div>
                            <div className="col-lg-12">
                                <textarea type="text" placeholder="Message" className={styles.contact_message_input} />
                            </div>
                        </div>
                        <div className={styles.contact_main_btn}>
                            <button className={styles.contact_submit_btn}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
