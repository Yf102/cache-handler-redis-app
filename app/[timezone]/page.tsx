import { CacheStateWatcher } from "./components/cache-state-watcher";
import { Suspense } from "react";
import Link from "next/link";
import RevalidatePage from "./components/revalidate-page";

const timeZones = ["cet", "eet"];

export const revalidate = 500;

export async function generateStaticParams() {
    return timeZones.map((timezone) => ({ timezone }));
}

export default async function Page({ params }) {
    const { timezone } = await params

    return (
        <>
            <header className="header">
                {timeZones.map((timeZone) => (
                    <Link key={timeZone} className="link" href={`/${timeZone}`}>
                        {timeZone.toUpperCase()} Time
                    </Link>
                ))}
            </header>
            <main className="widget">
                <Suspense fallback={null}>
                    <CacheStateWatcher timezone={timezone}/>
                </Suspense>
            </main>

            <div style={{margin: '0 auto', width: 'fit-content', marginBottom: '10px'}}>
                Page was cached at {(new Date()).getTime()}
            </div>
            <RevalidatePage />

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
}
