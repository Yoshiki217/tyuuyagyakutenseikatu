import { getPost, getPosts } from '../../../../lib/getJsonPlaceholder';
import styles from '../../../page.module.css';
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "@next/font/google";

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
  const looks = ['/homelesstailor-sample1.png','/homelesstailor-sample2.png','/homelesstailor-sample3.png','/homelesstailor-sample4.png','/homelesstailor-sample5.png','/sample-homelesstailor.jpg',
                 '/sample-homelesstailor.jpg','/sample-homelesstailor.jpg','/sample-homelesstailor.jpg','/sample-homelesstailor.jpg','/sample-homelesstailor.jpg','/sample-homelesstailor.jpg',
                 '/sample-homelesstailor.jpg','/sample-homelesstailor.jpg','/sample-homelesstailor.jpg','/sample-homelesstailor.jpg','/sample-homelesstailor.jpg','/sample-homelesstailor.jpg',
                 '/sample-homelesstailor.jpg','/sample-homelesstailor.jpg',]
              
  const rows = looks.map((image, i) => {
    if (i % 6 === 0) {
      return <div key={i} className='flex flex-row space-x-0.5'>
        {looks.slice(i, i + 6).map((image) => (
          <Image src={image} width={200}height={300} alt='image' className='transition duration-300 opacity-100 hover:opacity-80'></Image>
        ))}
      </div>
    } else {
      return null;
    }
  });

  return (
    <main className={styles.main}>
      <Image src="/homeless-tailor.png" width={300}height={300} alt="Homelesstailor"className='justify-centerhover:text-gray-800'></Image>

      <div className='float: left leading-10'>
        <p className="text-2xl font-normal">ホームレステイラー 2023年春夏コレクション</p>
        <Link href="/brandList/1/brandLook" className="text-gray-500 m-1">ルック</Link>

        <div className="border-t pt-6">
          <div className="space-y-0.5 white-space: pre-wrap">
            {rows}
          </div>
        </div>
      
      </div>

      <Link href="https://homelesstailor.tumblr.com/" className='text-2x1 text-gray-500'>Homelesstailor 公式サイト</Link>

      <h2>other Season</h2>
      <Link href={`brandList/${id}/brandLook`} className={styles.card}>
        <Image src="/homelesstailor.png" width={334}height={500}alt="Homelestailor" className="wobject-cover object-center transition duration-200 group-hover:scale-110"/>
        <span className="text-gray-500">
          AW/SS
        </span>
      </Link>

      <Link key={id} href={`/brandList/${id}/brandConcept`}>
        <div>
          brandConcept
        </div>
      </Link>
    </main>
  );
};

export default page;

export const dynamicParams = false;
