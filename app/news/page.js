import Link from "next/link";
import styles from "./page.module.css";

import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";


export default function NewsApp() {
    return (
        <>
            <h1 className={styles.title}>News Page</h1>
            <NewsList news={DUMMY_NEWS} />
            {/* <ul className="news-list">
                {DUMMY_NEWS.map((newsItem) => (
                    <li key={newsItem.id}>
                        <Link href={`/news/${newsItem.slug}`}>
                            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                            <span>{newsItem.title}</span>
                        </Link>
                    </li>
                ))}
            </ul> */}
        </>
    );
}













// <li>
// <Link href="/news/first-news" className={styles.item}>First News Item</Link>
// </li>
// <li>
// <Link href="/news/second-news" className={styles.item}>Second News Item</Link>
// </li>
// <li>
// <Link href="/news/third-news" className={styles.item}>Third News Item</Link>
// </li>