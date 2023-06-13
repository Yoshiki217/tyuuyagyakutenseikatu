import Link from 'next/link';

const header = () => {
  return (
    <header className="z-50 w-full bg-white text-sm py-5 dark:bg-gray-800">
        <div className='flex flex-wrap justify-center'>
            <div className="flex items-center justify-between">
                <a className="flex-none text-3xl font-semibold dark:text-white" href="#">SAMPLE</a>
            </div>
        </div>
        <div className="flex flex-row items-end gap-5 mt-5 justify-end px-5 sm:mt-0 sm:pl-5">
            <a className="justify-end font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/brandList">Brand一覧</a>
            <a className="justify-end font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">季節ごとのLOOK</a>
            <a className="justify-end font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">検索</a>
            <a className="justify-end font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/brandCreate">ブランドはこちら</a>
            <a className="justify-end font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/userMypage">マイページ</a>
            <a className="justify-end font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#">Instagram</a>
            
        </div>
    </header>
  );
};

export default header;