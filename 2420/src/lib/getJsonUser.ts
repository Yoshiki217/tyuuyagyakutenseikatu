export type postType = {
    id: number;
    username: String;
    furigana: String;
    email: String;
    password: String;
    createdAt: String;
    updateAt: String;
  
  };
  
  type postsType = postType[];
  
  export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error('getPostsで異常が発生しました。');
    return res.json() as Promise<postsType>;
  };