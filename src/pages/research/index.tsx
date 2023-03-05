import WireframeBox from '@/components/Cube'
import ResearchMDX from '@/content/research.mdx'
import type { NextPage } from 'next'

const ResearchPage: NextPage = () => {
  return (
    <div className="absolute left-0 right-0 m-auto my-14 h-auto w-[50%] min-w-[400px] items-center justify-center rounded-lg bg-zinc-300/80 p-4 transition-colors dark:bg-zinc-900/80">
      <WireframeBox />
      <ResearchMDX />
    </div>
  )
}

export default ResearchPage
