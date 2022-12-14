import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/TripThree.module.css";
import left_arrow from "../public/images/trip/left_arrow.png";

function TripDetails() {
    const [destinationPlace, setDestinationPlace] = useState([])
    const [interest11, setInterest11] = useState([]);
    const [userDetails, setUserDetails] = useState([])

    useEffect(() => {
        const user_dest = JSON.parse(localStorage.getItem('trip_one'));
        if (user_dest) {
            setDestinationPlace(user_dest)
        }
        const user_interest = JSON.parse(localStorage.getItem('trip_two'));
        if (user_interest) {
            setInterest11(user_interest)
        }
        const three = JSON.parse(localStorage.getItem('trip_three'));
        if (three) {
            setUserDetails(three)
        }
    }, []);

    return (
        <div>
            <div className={styles.main_container}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={styles.happy_travling}>
                                <div>
                                    <p className={styles.happy_travel_p1}>Happy Travelling!</p>
                                </div>
                                <p className={styles.happy_travel_p2}>Erat egestas diam felis eget sit lectus.</p>
                                <div className={styles.main_back_btn11}>
                                    <Link href="/"><button className={styles.back_home_btn}><Image src={left_arrow} alt="arrow" /><span className={styles.back_btn11}>Back To Home</span></button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" id={styles.main_card_div}>
                            <div>
                                <p className={styles.trip_details_p}>Trip Detail</p>
                                <div className={styles.hr_line}></div>
                                <div className='d-flex'>
                                    <div className={styles.trip_user_p}>
                                        <p>Name</p>
                                        <p>Mobile</p>
                                        <p>Destination</p>
                                        <p>Guests</p>
                                        <p>Interest</p>
                                        <p>Budget</p>
                                        <p>Start & End Date</p>
                                    </div>
                                    <div className={styles.trip_user_p}>
                                        <p>:</p>
                                        <p>:</p>
                                        <p>:</p>
                                        <p>:</p>
                                        <p>:</p>
                                        <p>:</p>
                                        <p>:</p>

                                    </div>
                                    <div className={styles.trip_user_p}>
                                        <p>{!!userDetails ? userDetails.name : null}</p>
                                        <p>+{!!userDetails ? userDetails.mobile : null}</p>
                                        <p>{destinationPlace.destination}</p>
                                        <p>{!!destinationPlace ? destinationPlace.guests : null}</p>
                                        <p>{!!interest11 ? interest11.user_interest : null}</p>
                                        <p>??? {!!interest11 ? interest11.budget : null}</p>
                                        <p>{!!destinationPlace ? destinationPlace.startdate : null}, {!!destinationPlace ? destinationPlace.enddate : null}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default TripDetails;