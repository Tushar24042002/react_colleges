import React from 'react';
import styles from "./College.module.css";
import { IoIosArrowDown, IoIosCheckmark, IoMdCheckmark } from 'react-icons/io';
import { MdCurrencyRupee } from 'react-icons/md';
import ImageDisplay from './ImageDisplay';
const CollegeTableRow = ({ data }) => {
    return (
        <tr>
            <td>
                <div className={styles.college}>
                    <div className={styles.left_side} title={data?.college?.college_name}>
                        <div className={styles.img_box}>
                            <img src={data?.college?.logo} alt={data?.college?.college_name} />
                        </div>
                    </div>
                    <div className={styles.right_side}>
                        <div className={styles.name}>
                            <h4>{data?.college?.college_name}</h4>
                            <p>{data?.college?.location} | {data?.college?.approved_by}</p>
                        </div>
                        <div className={styles.cut_off_badge}>
                            <div className={styles.course}>{data?.college?.cut_off[0]?.courses} <IoIosArrowDown />
                            </div>
                            <p className={styles.year}>JEE Main{data?.college?.cut_off[0]?.years[0].year} Cutoff: {data?.college?.cut_off[0]?.years[0].cuttoff}</p>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className={styles.fees}>
                    <h6><MdCurrencyRupee />
                    {data?.course_fees?.amount}</h6>
                    <p>{data?.course_fees?.course}</p>
                    <p>-{data?.course_fees?.year}</p>
                </div>
            </td>
            <td><div className={styles.placements}>
                <div className={styles.package}>
                    <h6><MdCurrencyRupee />
                    {data?.placements?.average_package}</h6>
                    <p>Average Package</p>
                </div>
                <div className={styles.package}>
                    <h6><MdCurrencyRupee />
                    {data?.placements?.highest_package}</h6>
                    <p>Highest Package</p>
                </div>
            </div></td>
            <td>
                <div className={styles.user_reviews}>
                    <h6>{`${data?.user_reviews?.rate}/5`}</h6>
                    <p>Based on   {data?.user_reviews?.users} User <br />Reviews</p>
                    {/* <p>-{data?.course_fees?.year}</p> */}
                    <div className={styles.review_badge}>
                        <span><IoMdCheckmark />
                        </span>
                        <span>{Object.keys(data?.user_reviews?.ratings)[0]}</span>
                        <span><IoIosArrowDown /></span>
                    </div>
                </div>

            </td>
            <td>
                <div className={styles.ranks}>
                    <h6>#{data?.ranks?.rank}<sup>th</sup>/<span>{data?.ranks?.overall_rank}</span> in India <br /><img src={data?.ranks?.ranks[0]?.image} /> 2024 </h6>
                    <div className={styles.rank_badge}><ImageDisplay images={data?.ranks?.ranks}/></div>
                </div>
            </td>
        </tr>
    );
};

export default CollegeTableRow;
