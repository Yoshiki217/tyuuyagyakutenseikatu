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

  const { title, body, id } = await getPost(params.id);
  const bodys = body.split('\n');
  const looks = ['/sample-homelesstailor.jpg','/sample-homelesstailor.jpg','/sample-homelesstailor.jpg',
                '/sample-homelesstailor.jpg','/sample-homelesstailor.jpg','/sample-homelesstailor.jpg']

  const lookList = looks.map((look,i)=>{
    return <div key={i}><Image src={look} width={200}height={400} alt={'Homelesstailor'} className='transition duration-300 opacity-100 hover:opacity-80'></Image></div>
  })

  return (

    <main className={styles.main}>
      <Link href="https://homeless.official.ec/" className='text-4xl flex justify-centerhover:text-gray-800'>Homelesstailor</Link>

      <div className='float: left leading-10'>
        <p className="text-2xl font-semibold">ホームレステイラー 2023年春夏コレクション</p>
        <Link href="/brandList/1/brandLook" className="text-gray-500 m-1">ルック</Link>

        <div className="border-t pt-6">
          <div className="flex flex-row space-x-0.5 space-y-0.5">
            {lookList}
          </div>

          <div className="flex flex-row space-x-0.5 space-y-0.5">
            {lookList}
          </div>

          <div className="flex flex-row space-x-0.5 space-y-0.5">
          {lookList}
          </div>
        </div>

      </div>

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