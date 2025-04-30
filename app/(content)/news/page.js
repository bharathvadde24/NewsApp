
import NewsList from "@/components/news-list";

export default async function NewsPage() {
    const response = await fetch('http://localhost:8080/news');

    if (!response.ok) {
        throw new Error('Failed to fetch news.');
    }

    const news = await response.json();
    return (
        <>
            <h1>News Page</h1>
            <NewsList news={news} />
        </>
    )
}






































// // 'use client';
// import NewsList from "@/components/news-list";
// import { getAllNews } from "@/lib/news";

// export default async function NewsPage() {
//     const news = getAllNews();
//     return (
//         <>
//             <h1>News Page</h1>
//             <NewsList news={news} />
//         </>
//     );
// }













// <li>
// <Link href="/news/first-news" className={styles.item}>First News Item</Link>
// </li>
// <li>
// <Link href="/news/second-news" className={styles.item}>Second News Item</Link>
// </li>
// <li>
// <Link href="/news/third-news" className={styles.item}>Third News Item</Link>
// </li>