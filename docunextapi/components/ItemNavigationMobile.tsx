import Link from 'next/link';
import { useRouter } from 'next/router';

const ItemNavigationMobile = ({lien, titre}) => {
    const router = useRouter();
    const style = router.asPath === lien ? "block text-sm px-2 py-4 text-white bg-green-500 font-semibol" : "block text-sm px-2 py-4 hover:bg-green-500 transition duration-300";

    return ( 
        <Link href={lien}>
            <a className={style}>{titre}</a>
        </Link>
    )
}

export default ItemNavigationMobile;