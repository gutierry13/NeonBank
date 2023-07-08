import Image from 'next/image'
import Logo from '../assets/logo.svg' 
export default function Home() {
  return (
    <header className="w-full absolute top-0 left-0 h-[88px] flex">
      <div className="w-full max-w-[124.5rem] px-4 mx-auto bg-blue flex justify-between items-center ">
        <a href="/">
        <Image src={Logo} alt='Logo' />
        </a>
        <nav className='flex justify-center items-center '>
          <ul className='flex items-center gap-12 font-poppins text-base leading-tight text-white font-medium'>
            <li>
              <a href="" className='hover:text-yellow transition' >
                Produtos neon
              </a>
            </li>
            <li>
              <a href="" className='hover:text-yellow transition'>
                Conta Digital
              </a>
            </li>
            <li>
              <a href="" className='hover:text-yellow transition'>
                Quem somos
              </a>
            </li>
            <li>
              <a href="" className='hover:text-yellow transition'>
                Blog
              </a>
            </li>
            <li>
              <a href="" className='hover:text-yellow transition'>
                Ajuda
              </a>
            </li>
            </ul>
            <button className='ml-14 font-medium inline-block leading-[48px] bg-transparent px-6 rounded-[122px] font-poppins text-base border-solid border-[1px] border-white text-white hover:text-blueLight hover:bg-white transition'>Abra sua conta digital</button>
        </nav>
      </div>
    </header>
  )
}
{/* <h1 className="font-poppins font-bold text-6xl leading-5 text-gray500">Title</h1>
<h2 className="font-poppins font-bold text-4xl leading-5 text-gray500">Title 2</h2>
<h3 className="font-poppins text-2xl leading-6 text-gray500">Title 3</h3>
<h4 className="font-poppins text-xl leading-5 text-gray500">Title 4</h4> */}
{/* <button className='inline-block leading-[48px] bg-yellow px-6 rounded-[122px] font-poppins text-base text-[#855b35]  hover:bg-[#ffdc5c] transition'>Abra sua conta digital</button> */}