import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";


const Home: NextPage = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 flex justify-center">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 flex flex-row">
        <div className="mb-6 flex items-end justify-start gap-4">
          
          <div className="flex flex-row">
            <div>
              <Link href="/look" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <Image src="/homelesstailor.png" width={334}height={500}alt="Homelestailor" className="wobject-cover object-center transition duration-200 group-hover:scale-110"/>
                <span className="text-gray-500">Homelestailor  ルック</span>
              </Link>
              
              <Link href="" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <Image src="/homelesstailor.png" width={334}height={500}alt="Homelestailor" className="wobject-cover object-center transition duration-200 group-hover:scale-110"/>
                <span className="text-gray-500">Homelestailor  ルック</span>
              </Link>
              
            </div>
          </div>

          <div>
            <div>
              <Link href="" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <Image src="/homelesstailor.png" width={334}height={500}alt="Homelestailor" className="wobject-cover object-center transition duration-200 group-hover:scale-110"/>
                <span className="text-gray-500">Homelestailor  ルック</span>
              </Link>
              <Link href="" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <Image src="/homelesstailor.png" width={334}height={500}alt="Homelestailor" className="wobject-cover object-center transition duration-200 group-hover:scale-110"/>
                <span className="text-gray-500">Homelestailor  ルック</span>
              </Link>
              
            </div>
          </div>

          <div>
            <div>
              <Link href="" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <Image src="/homelesstailor.png" width={334}height={500}alt="Homelestailor" className="wobject-cover object-center transition duration-200 group-hover:scale-110"/>
                <span className="text-gray-500">Homelestailor  ルック</span>
              </Link>

              <Link href="" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <Image src="/homelesstailor.png" width={334}height={500}alt="Homelestailor" className="wobject-cover object-center transition duration-200 group-hover:scale-110"/>
                <span className="text-gray-500">Homelestailor  ルック</span>
              </Link>
              
            </div>
          </div>
          
          <div>
            <div>
              <Link href="" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <Image src="/homelesstailor.png" width={334}height={500}alt="Homelestailor" className="wobject-cover object-center transition duration-200 group-hover:scale-110"/>
                <span className="text-gray-500">Homelestailor  ルック</span>
              </Link>

              <Link href="" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <Image src="/homelesstailor.png" width={334}height={500}alt="Homelestailor" className="wobject-cover object-center transition duration-200 group-hover:scale-110"/>
                <span className="text-gray-500">Homelestailor  ルック</span>
              </Link>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>    
  );
};

export default Home;