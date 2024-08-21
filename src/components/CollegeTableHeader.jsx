import React from 'react';
import styles from "./College.module.css";

const CollegeTableHeader = ({ setSortConfig }) => {
    const handleSort = (key) => {
        setSortConfig(prev => {
            let direction = 'ascending';
            if (prev.key === key && prev.direction === 'ascending') {
                direction = 'descending';
            }
            return { key, direction };
        });
    };

    return (
        <thead>
            <tr className={styles.table_heading_bg}>
                <th>College Name</th>
                <th>Course Fees</th>
                <th>Placement</th>
                <th>User Reviews</th>
                <th>Ranking</th>
            </tr>
        </thead>
    );
};

export default CollegeTableHeader;
