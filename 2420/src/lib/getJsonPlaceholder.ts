export type postType = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  
  type postsType = postType[];
  
  export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error('getPostsで異常が発生しました。');
    return res.json() as Promise<postsType>;
  };

  export const getPost = async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) throw new Error('getPostで異常が発生しました。');
    return res.json() as Promise<postType>;
  };