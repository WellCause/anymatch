import Image from 'next/image'

export default function NavLogo() {
  return (
    <>
    <div className="flex justify-center w-full">
      <Image src="/logo.svg" alt="logo" width={100} height={100}/>
    </div>
    </>
  )
}