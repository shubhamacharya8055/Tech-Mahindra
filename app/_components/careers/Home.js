import Link from "next/link";

export default function Home() {
  return (
    <div className='w-fit h-10 flex items-center gap-1 justify-center text-xs'>
                <Link className='hover:underline underline-offset-2 hover:text-blue-800' href={"/"} > Home </Link>
                <span className='mt-[1.9px]'>&gt;</span>
                <p className='font-semibold mt-[1.5px]'>Careers</p>
    </div>
  )
}
