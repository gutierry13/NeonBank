import Image from 'next/image'
import Logo from '../assets/logo.svg'
import iconAnuidade from '../assets/icon-anuidade.svg'
import iconConta from '../assets/icon-conta-digital.svg'
import iconDinheiro from '../assets/icon-dinheiro.svg'
import cardNeon from '../assets/card-neon-frnt.png'
import cardNeonBack from '../assets/card-neon-back.png'
import cardCircle from '../assets/circle-cards-neon.svg'
export default function Home() {
  return (
    <div className=''>
      <header className="w-full absolute top-0 left-0 h-[88px] flex border-b-2 border-[rgba(255,255,255,0.2)]">
        <div className="w-full max-w-[1245px] px-4 mx-auto flex justify-between items-center ">
          <a href="/">
            <Image
              src={Logo}
              alt="Logo"
            />
          </a>
          <nav className="flex justify-center items-center ">
            <ul className="flex items-center gap-12 font-poppins text-base leading-tight text-white font-medium">
              <li>
                <a
                  href=""
                  className="hover:text-yellow transition"
                >
                  Produtos neon
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-yellow transition"
                >
                  Conta Digital
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-yellow transition"
                >
                  Quem somos
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-yellow transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-yellow transition"
                >
                  Ajuda
                </a>
              </li>
            </ul>
            <button className="ml-14 font-medium inline-block leading-[48px] bg-transparent px-6 rounded-[122px] font-poppins text-base border-solid border-[1px] border-white text-white hover:text-blueLight hover:bg-white transition">
              Abra sua conta digital
            </button>
          </nav>
        </div>
      </header>
      <section className="w-full h-[786px] bg-heroPattern pt-44">
        <div className="w-full max-w-[1245px] mx-auto px-4">
          <div className='w-full max-w-[684px]'>
            <h3 className="font-poppins text-2xl leading-6 text-white opacity-80 font-semibold mb-8">Abra sua conta, é so baixar o app!</h3>
            <h1 className="font-poppins font-semibold text-6xl leading-[112%] text-white mb-9">A conta digital certa pra cuidar bem do seu dinheiro</h1>
            <button className="inline-block leading-[48px] bg-yellow px-6 rounded-[122px] font-poppins text-base text-[#855b35]  hover:bg-[#ffdc5c] transition">
              Abra sua conta digital
            </button>
            <ul className='flex items-center justify-between mt-16  w-full max-w-[621px]'>
            <li className='flex items-center'>
              <div className='w-12 rounded-full flex items-center justify-center h-12 bg-gradient-to-b from-[rgba(53,202,226,0.2)] from-0%  to-[rgba(53,202,226,0)] to-100%'><Image src={iconAnuidade} alt="Icone anuidade "  /></div> <span>Cartão sem anuidade</span>
            </li>
            <li className='flex items-center'>
          <div  className='w-12 rounded-full flex items-center justify-center h-12 bg-gradient-to-b from-[rgba(53,202,226,0.2)] from-0%  to-[rgba(53,202,226,0)] to-100%'><Image src={iconConta} alt="Icone conta digital" /></div> <span>Conta digital 100% grátis</span>
            </li>
            <li className='flex items-center'>
          <div className='w-12 rounded-full flex items-center justify-center h-12 bg-gradient-to-b from-[rgba(53,202,226,0.2)] from-0%  to-[rgba(53,202,226,0)] to-100%'><Image src={iconDinheiro} alt="Icone dinheiro" /></div> <span>Seu dinheiro rendendo mais</span>
            </li>
          </ul>
          </div>
          <div>
            <h2>Banco 100% digital</h2>
            <Image src={cardNeon} alt="" />
            <Image src={cardNeonBack} alt="" />
            <Image src={cardCircle} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}
{
  /* <h1 className="font-poppins font-bold text-6xl leading-5 text-gray500">Title</h1>
<h2 className="font-poppins font-bold text-4xl leading-5 text-gray500">Title 2</h2>
<h3 className="font-poppins text-2xl leading-6 text-gray500">Title 3</h3>
<h4 className="font-poppins text-xl leading-5 text-gray500">Title 4</h4> */
}
{
  /* <button className='inline-block leading-[48px] bg-yellow px-6 rounded-[122px] font-poppins text-base text-[#855b35]  hover:bg-[#ffdc5c] transition'>Abra sua conta digital</button> */
}
