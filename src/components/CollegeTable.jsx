import React, { useState, useMemo } from 'react';
import CollegeTableHeader from './CollegeTableHeader';
import CollegeTableRow from './CollegeTableRow';
import InfiniteScroll from 'react-infinite-scroll-component';
import dummyData from './dummyData';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./College.module.css";
import Modal from './Modal/Modal';
import { truncateText } from './Utils';

const CollegeTable = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'user_reviews.rate', direction: 'descending' });
    const [loadedItems, setLoadedItems] = useState(10);
    const [rankModal, setRankModal] = useState(false);
    const [currData, setCurrData] = useState(null);
    const [modalType, setModalType] = useState("rank");

    function getValueByPath(obj, path) {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    }


    const sortedData = useMemo(() => {
        let sorted = [...dummyData];
        if (sortConfig.key) {
            sorted.sort((a, b) => {
                if (getValueByPath(a, sortConfig.key) < getValueByPath(b, sortConfig.key)) return sortConfig.direction === 'ascending' ? -1 : 1;
                if (getValueByPath(a, sortConfig.key) > getValueByPath(b, sortConfig.key)) return sortConfig.direction === 'ascending' ? 1 : -1;
                return 0;
            });
        }
        return sorted;
    }, [sortConfig]);

    const filteredData = useMemo(() => {
        return sortedData?.filter(e =>
            e?.college?.college_name?.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, sortedData]);

    const fetchMoreData = () => {
        setTimeout(() => {
            setLoadedItems(prev => prev + 10);
        }, 200);
    };


    const handleRankModal = (e, modal_name) => {
        setCurrData(e);
        setModalType(modal_name);
        setRankModal(true);

    }
    return (
        <>
            <div className="container-fluid mt-4">
                <div className="row align-items-center mb-3">
                    <div className="col-md-6">
                        <h1 className="text-start">CollegeDunia</h1>
                    </div>
                    <div className="col-md-6 text-end">
                        <h5>Total Colleges: {filteredData.length}</h5>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by college name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6 text-right my-auto text-end">
                        <div className="d-inline-block">
                            <label className="me-3">Sort by </label>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="sortOption"
                                    id="ratingAsc"
                                    value="rating-ascending"
                                    onChange={() => setSortConfig({ key: 'user_reviews.rate', direction: 'ascending' })}
                                />
                                <label className="form-check-label" htmlFor="ratingAsc">Rating Asc</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="sortOption"
                                    id="ratingDesc"
                                    value="rating-descending"
                                    defaultChecked
                                    onChange={() => setSortConfig({ key: 'user_reviews.rate', direction: 'descending' })}
                                />
                                <label className="form-check-label" htmlFor="ratingDesc">Rating Desc</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="sortOption"
                                    id="feesAsc"
                                    value="fees-ascending"
                                    onChange={() => setSortConfig({ key: 'course_fees.amount', direction: 'ascending' })}
                                />
                                <label className="form-check-label" htmlFor="feesAsc">Fees Asc</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="sortOption"
                                    id="feesDesc"
                                    value="fees-descending"
                                    onChange={() => setSortConfig({ key: 'course_fees.amount', direction: 'descending' })}
                                />
                                <label className="form-check-label" htmlFor="feesDesc">Fees Desc</label>
                            </div>
                        </div>
                    </div>
                </div>
                <InfiniteScroll
                    dataLength={loadedItems}
                    next={fetchMoreData}
                    hasMore={loadedItems < filteredData.length}
                    loader={<h4>Loading...</h4>}
                    endMessage={<p className='text-center'>No more colleges to show</p>}
                >
                    <table className={`table table-striped table-bordered ${styles.table_css}`}>
                        <CollegeTableHeader />
                        <tbody>
                            {filteredData.slice(0, loadedItems).map((e, index) => {
                                return (
                                    (
                                        console.log(e, "map"),
                                        <CollegeTableRow key={index} index={index} data={e} modalFunction={handleRankModal} />
                                    )
                                )
                            })}
                        </tbody>
                    </table>
                </InfiniteScroll>
            </div>
            {
                rankModal && <Modal title={truncateText(filteredData[currData]?.college?.college_name, 25)} handleClose={() => setRankModal(false)}>
                    {
                        modalType === "rank" && filteredData[currData]?.ranks?.ranks?.map((e, index) => {
                            return (
                                <p className={styles.rank_modal_text}><img src={e?.image} alt={e?.name} /><strong> Ranked {e?.current_rank}</strong> for Overall by {e?.name} 2025 </p>
                            )
                        })
                    }
                    {
                    modalType === "review" && (
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Categories</th>
                                <th>Overall</th>
                            </tr>
                        </thead>
                        <tbody className={styles.modal_table}>
                            {
                                Object.keys(filteredData[currData]?.user_reviews?.ratings)?.map((e, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{e}</td>
                                            <td>{filteredData[currData]?.user_reviews?.ratings[e] + "/5"}</td>
                                            
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    )
                    }

{
                    modalType === "college" && (
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Courses</th>
                                <th>Cuttoff 2024</th>
                                <th>Cuttoff 2023</th>
                            </tr>
                        </thead>
                        <tbody className={styles.modal_table}>
                            {
                                Object.keys(filteredData[currData]?.college?.cut_off)?.map((e, index) => {
                                    console.log(e, "data");
                                    return (
                                        <tr key={index}>
                                            <td>{filteredData[currData]?.college?.cut_off[e]?.courses}</td>
                                            <td>{filteredData[currData]?.college?.cut_off[e].years[0]?.cuttoff}</td>
                                            <td>{filteredData[currData]?.college?.cut_off[e].years[1]?.cuttoff  || "--"}</td>
                                            
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    )
                    }
                </Modal>
            }
        </>
    );
};

export default CollegeTable;
