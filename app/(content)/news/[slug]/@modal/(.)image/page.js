
import ModalBackDrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
// import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";


export default async function InterceptedImagePage({ params }) {
    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <ModalBackDrop />
            < dialog className="modal" open>
                <div className="fullscreen-image">
                    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
        </>
    )

    // return (

    //     <div className="fullscreen-image">
    //         <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    //     </div>
    // );
}