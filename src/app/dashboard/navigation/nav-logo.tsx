import Image from 'next/image'

export default function NavLogo({ className }: { className?: string }) {
  return (
    <>
      <div className={`flex justify-center w-full ${className}`}>
        <Image src="/logo.svg" alt="logo" width={100} height={100}/>
      </div>
    </>
  )
}