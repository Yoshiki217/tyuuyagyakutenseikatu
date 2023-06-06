import { Inter } from '@next/font/google'
import { Montserrat } from "@next/font/google";

const inter = Inter({variable: '--font-inter', subsets: ['latin'] })
const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
  });
  
export default function Concept() {
  return (
    <>
        <div className={montserrat.className}>
            <p className='flex justify-center text-center bg-white py-40 px-auto'>
                stillness and motion , mininal and maximal , mode and tradition.
                <br></br><br></br>
                「無から有へ。そのはざまの部分を表現する。」
            </p>
        </div>
    </>
  )
}