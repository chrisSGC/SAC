import Link from 'next/link';
import { useRouter } from 'next/router';

const ItemNavigation = ({lien, titre}) => {
    const router = useRouter();
    const style = router.asPath === lien ? "py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold" : "py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300";

    return ( 
        <Link href={lien}>
            <a className={style}>{titre}</a>
        </Link>
    )
}

export default ItemNavigation;