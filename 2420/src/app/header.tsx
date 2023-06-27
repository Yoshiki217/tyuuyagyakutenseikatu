import Link from 'next/link';

const header = () => {
  return (

    <header className="z-50 w-full bg-white text-sm py-5 dark:bg-gray-800">
        <script src="https://unpkg.com/mailgo@0.12.2/dist/mailgo.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/mailtoui@1.0.2/dist/mailtoui-min.js"></script>
        <div className='flex flex-wrap justify-center'>
            <div className="flex items-center justify-between">
                <a className="flex-none text-3xl font-semibold dark:text-white" href="/">
                    know brand
                </a>
            </div>
        </div>
        <div className="flex flex-row items-end gap-5 mt-5 justify-end px-5 sm:mt-0 sm:pl-5">
            <a className="justify-end font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/">home</a>
            <a className="justify-end font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/brandList">BrandList</a>
            <a className="justify-end font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/brandLogin">for Brand</a>
            <a className="justify-end font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/userMypage">for User</a>
            <a className="justify-end font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="/userLogin">login</a>
            <a className="justify-end font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" href="#mailgo" data-address="hello" data-domain="example.com">contact</a>
        </div>
    </header>
    
  );
};

export default header;