export type postType = {
    colection_id: number;
    brand_id: number;
    description: String;
    season: String;
    sex: String;
    pic_filename: String;
    colection_openAt: String;
    updateAt: String;
    concept: String;
    };
    
    type postsType = postType[];
    
    export const getPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) throw new Error('getPostsで異常が発生しました。');
      return res.json() as Promise<postsType>;
    };