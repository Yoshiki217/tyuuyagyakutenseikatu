import { getPost, getPosts } from "../../../lib/getJsonPlaceholder";
import styles from "../../../page.module.css";
import Image from "next/image";
import Link from "next/link";

const brandMypage = () => {
  return (

    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">

        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Brand My Page
        </h2>
  
        <div className="max-w-lg border rounded-lg mx-auto">
            <div className="flex flex-col gap-4 p-4 md:p-8">
                <div>
                    <label htmlFor="user_id" className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                        user_id
                    </label>
                </div>
        
                <div>
                    <label htmlFor="password" className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                        Password
                    </label>
                </div>

                <div>
                    <label htmlFor="brandname" className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                        brandname
                    </label>
                </div>

                <div>
                    <label htmlFor="furigana" className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                        furigana
                    </label>
                </div>

                <div>
                    <label htmlFor="concept" className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                        concept
                    </label>
                </div>

                <div>
                    <label htmlFor="store_url" className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                        store_url
                    </label>
                </div>

                <div>
                    <label htmlFor="sns_url" className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                        sns_url
                    </label>
                </div>
                
            </div>
            
        </div>
        <a href="brandLogin" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">
            ブランド情報編集
        </a>
        <a href="brandLogin" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">
            LOOK追加
        </a>
        <a href="brandLogin" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">
            LOOK編集    
        </a>
    </div>
    
  );
};
export default brandMypage;