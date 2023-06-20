import Link from 'next/link';
import { getPosts } from '../../lib/getJsonPlaceholder';
import styles from '../page.module.css';

const page = async () => {

  const posts = await getPosts();

  return (

    <main className={styles.main}>
        <h1 className={styles.title}>
            Blog List
        </h1>
        <div className={styles.grid}>
            {posts.map(({ id, title }) => (

                <Link key={id} href={`/blog/${id}`} className={styles.card}>
                    <div>
                        {title}
                    </div>
                </Link>

            ))} 
        </div>
    </main>

  );

};

export default page;