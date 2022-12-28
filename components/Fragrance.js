import Link from 'next/link';
import Image from 'next/image';
import classes from './Fragrance.module.css'

const Fragrance = ({ fragrance: {brandName, image450, rating, displayName, currentSku, productId } }) => (
    
    <Link href={`/fragrance/${productId}`} passHref>
        <div className={classes['wrapper']}>
            <div>
        <Image src={image450} width={450} height={450} alt={displayName}/>
            </div>
        {image450}
        </div>
    </Link>
)

export default Fragrance;