import { getPost, getPosts } from '../../../lib/getJsonPlaceholder';
import styles from '../../page.module.css';

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
        <h1 className={styles.title}>
            {title}
        </h1>
        <div className={styles.article}>

            {bodys.map((body, i) => (

                <p key={i}>{body}</p>

            ))}

        </div>
    </main>

  );
};
export default page;

export const dynamicParams = false;