import type { NextPage } from "next";
import Image from "next/image";
import Link from 'next/link';
import { getPosts } from '../../lib/getJsonPlaceholder';
import styles from '../page.module.css';


const page = async () => {

  const posts = await getPosts();

  return (
    <>
    <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-6 flex items-end justify-start gap-4">
                <div className={styles.grid}>

                    {posts.map(({ id, title }) => (

                        <Link key={id} href={`/brandList/${id}/brandConcept`} className={styles.card}>
                            <div>
                              {title}
                            </div>
                        </Link>
                        
                    ))}
                </div>    
            </div>
        </div>
    </div>    
    </>
  );
};

export default page;  