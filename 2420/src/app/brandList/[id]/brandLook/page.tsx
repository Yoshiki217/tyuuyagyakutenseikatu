import { getPost, getPosts } from '../../../../lib/getJsonPlaceholder';
import styles from '../../../page.module.css';
import Image from "next/image";
import Link from "next/link";

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

  const { title, body } = await getPost(params.id);
  const bodys = body.split('\n');

  return (

    <main className={styles.main}>
        <div className='float: left'>
            <Link href="https://homeless.official.ec/">Homelesstailor</Link>
            <h1>ホームレステイラー 2023年春夏コレクション</h1>

            <h3 className="text-gray-500">ルック</h3><br/>
            <div className="flex flex-row space-x-0.5 border-t pt-6">
                <Image src="/sample-homelesstailor.jpg" width={200}height={400} alt="Homelesstailor"></Image>
                <Image src="/sample-homelesstailor.jpg" width={200}height={400} alt="Homelesstailor"></Image>
                <Image src="/sample-homelesstailor.jpg" width={200}height={400} alt="Homelesstailor"></Image>
                <Image src="/sample-homelesstailor.jpg" width={200}height={400} alt="Homelesstailor"></Image>
                <Image src="/sample-homelesstailor.jpg" width={200}height={400} alt="Homelesstailor"></Image>
                <Image src="/sample-homelesstailor.jpg" width={200}height={400} alt="Homelesstailor"></Image><br/>
                
            </div>
        </div>
    </main>
  );
};
export default page;

export const dynamicParams = false;