import AboutMDX from '@/content/about.mdx'
import type { NextPage } from 'next'

import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="absolute left-0 right-0 m-auto my-14 h-auto w-[50%] min-w-[400px] items-center justify-center rounded-lg bg-zinc-300/75 p-4 backdrop-blur-lg transition-colors dark:bg-zinc-900/50">
      <div className="relative grid justify-center">
        <Image
          src={'https://avatars.githubusercontent.com/u/66580288?v=4'}
          className="rounded-lg"
          width={128}
          height={128}
          quality={100}
          alt="Brandon B"
        />
      </div>
      <AboutMDX />
    </div>
  )
}

export default Home
