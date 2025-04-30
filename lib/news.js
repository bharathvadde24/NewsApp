import sql from 'better-sqlite3';

const db = sql('data.db');

export async function getAllNews() {
    const news = db.prepare('SELECT * FROM news').all();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return news;
}

export async function getNewsItem(slug) {
    const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return newsItem;
}

export async function getLatestNews() {
    const latestNews = db
        .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
        .all();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return latestNews;
}

export async function getAvailableNewsYears() {
    const years = db
        .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
        .all()
        .map((year) => year.year);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return years;
}

export function getAvailableNewsMonths(year) {
    return db
        .prepare(
            "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
        )
        .all(year)
        .map((month) => month.month);
}

export async function getNewsForYear(year) {
    const news = db
        .prepare(
            "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
        )
        .all(year);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return news;
}

export async function getNewsForYearAndMonth(year, month) {
    const news = db
        .prepare(
            "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
        )
        .all(year, month);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return news;
}






















// import sql from 'better-sqlite3';

// import { DUMMY_NEWS } from '@/dummy-news';

// const db = sql('data.db');

// export async function getAllNews() {
//     // return DUMMY_NEWS;
//     const news = db.prepare('SELECT * FROM news').all();
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     return news;
// }

// export function getLatestNews() {
//     return DUMMY_NEWS.slice(0, 3);
// }

// export function getAvailableNewsYears() {
//     return DUMMY_NEWS.reduce((years, news) => {
//         const year = new Date(news.date).getFullYear();
//         if (!years.includes(year)) {
//             years.push(year);
//         }
//         return years;
//     }, []).sort((a, b) => b - a);
// }

// export function getAvailableNewsMonths(year) {
//     return DUMMY_NEWS.reduce((months, news) => {
//         const newsYear = new Date(news.date).getFullYear();
//         if (newsYear === +year) {
//             const month = new Date(news.date).getMonth();
//             if (!months.includes(month)) {
//                 months.push(month + 1);
//             }
//         }
//         return months;
//     }, []).sort((a, b) => b - a);
// }

// export function getNewsForYear(year) {
//     return DUMMY_NEWS.filter(
//         (news) => new Date(news.date).getFullYear() === +year
//     );
// }

// export function getNewsForYearAndMonth(year, month) {
//     return DUMMY_NEWS.filter((news) => {
//         const newsYear = new Date(news.date).getFullYear();
//         const newsMonth = new Date(news.date).getMonth() + 1;
//         return newsYear === +year && newsMonth === +month;
//     });
// }