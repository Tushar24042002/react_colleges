import React, { useEffect } from 'react';

const InfiniteScroll = ({ loadMore }) => {
    useEffect(() => {
        const handleScroll = () => {
            console.log("called")
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            loadMore();
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMore]);

    return null;
};

export default InfiniteScroll;
