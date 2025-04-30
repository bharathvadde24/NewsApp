// "use client";

import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import NavLink from './nav-link';

export default function MainHeader() {
    // const path = usePathname();

    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink href="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink href="/archive">Archive</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}










// import Link from "next/link";
// import styles from "./main-header.module.css";

// export default function MainHeader() {
//     return (
//         <header className={styles.home}>
//             <nav>
//                 <ul>
//                     <li><Link href="/" className={styles.item}>Home</Link></li>
//                     <li><Link href="/news" className={styles.item}>News</Link></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }
















// import Link from "next/link";

// export default function MainHeader() {
//     return (
//         <header>
//             <ul>
//                 <li><Link href="/">Home</Link></li>
//                 <li><Link href="/news">News</Link></li>
//             </ul>
//         </header>
//     )
// }