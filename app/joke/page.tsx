import React, {Suspense} from 'react';
import {CacheStateWatcher} from "../[timezone]/components/cache-state-watcher";
import RevalidatePage from "../[timezone]/components/revalidate-page";
import Link from "next/link";
import JokeClient from "./JokeClient";

const Page = () => {
    return (
        <>
            <header className="header">
                Lets have some fun
            </header>

            <main className="widget">
                <Suspense fallback={null}>
                    <JokeClient/>
                </Suspense>
            </main>

            <div style={{margin: '0 auto', width: 'fit-content', marginBottom: '10px'}}>
                Page was cached at {(new Date()).getTime()}
            </div>
            <RevalidatePage/>

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
        </>
    );
};

export default Page;