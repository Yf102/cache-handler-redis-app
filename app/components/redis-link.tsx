import React from 'react';
import Link from "next/link";

const RedisLink = () => {
    return (
        <footer className="footer">
            <Link
                href='http://localhost:8001/redis-stack/browser'
                className="link"
                target="_blank"
                rel="noopener noreferrer"
            >
                View RedisInsight &#x21AA;
            </Link>
        </footer>
    );
};

export default RedisLink;