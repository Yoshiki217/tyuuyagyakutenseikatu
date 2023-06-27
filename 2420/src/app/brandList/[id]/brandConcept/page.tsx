import { getPost, getPosts } from '../../../../lib/getJsonPlaceholder';
import styles from '../../../page.module.css';
import Image from "next/image";
import Link from 'next/link';

type paramsType = {

  id: string;

};

export async function generateStaticParams(): Promise<paramsType[]> {

  const posts = await getPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));

}

const page = async ({ params }: { params: paramsType }) => {

  const { title, body, id } = await getPost(params.id);
  const bodys = body.split('\n');

  return (

    <main className={styles.main}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <div className={styles.article}>

            {bodys.map((body, i) => (
                <p key={i}>
                    {body}
                </p>
            ))}
            
        </div>

        <h2>all Season</h2>
        <Link href={`brandList/${id}/brandLook`} className={styles.card}>
            <Image src="/homelesstailor.png" width={334}height={500}alt="Homelestailor" className="wobject-cover object-center transition duration-200 group-hover:scale-110"/>
            <span className="text-gray-500">
                AW/SS
            </span>
        </Link>
    </main>

  );
};
export default page;

export const dynamicParams = false;