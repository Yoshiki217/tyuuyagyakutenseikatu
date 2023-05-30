import type { NextPage } from "next";
import Image from "next/image";


const Home: NextPage = () => {
  return (
    <>
      <div>
        <span>アンセルム</span> <span>2023年春夏</span> <span>メンズ</span>
          <Image className="w-344 h-229 "
            src="/ancellm.jpg"
            width={344}
            height={229}
            alt="Ancellm"
            
          />
        <a href="https://www.fashion-press.net/collections/17053">ルック</a>
        <div>
          <span>シュタイン</span> <span>2023-24年秋冬</span> <span>ウィメンズ&メンズ</span>
          <Image
            src="/stein.jpg"
            width={344}
            height={229}
            alt="Stein"
          />
        </div>
        <a href="https://www.fashion-press.net/collections/18176">ルック</a>

        <div>
          <Image
            src="/stein.jpg"
            width={344}
            height={229}
            alt="Stein"
          />
        </div>  
        <a href="https://www.fashion-press.net/collections/18176">ルック</a>
      </div>
    </>
  );
};

export default Home;