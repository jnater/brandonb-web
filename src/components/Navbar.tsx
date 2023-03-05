import { useRouter } from 'next/router'

import { Icon } from '@iconify/react'

export default function Navbar() {
  const router = useRouter()
  return (
    <header className="absolute left-0 right-0 m-auto my-2 grid w-96 grid-flow-col rounded-lg bg-zinc-300/50 text-center backdrop-blur-lg transition-colors dark:bg-zinc-900">
      <button
        onClick={() => router.push('/')}
        className={`rounded-l-lg p-2 font-bold transition-colors hover:bg-zinc-400 dark:text-zinc-300 dark:hover:bg-zinc-800 ${
          router.asPath === '/'
            ? 'bg-zinc-400 text-zinc-600 dark:bg-zinc-800'
            : 'text-zinc-900'
        }`}
      >
        <span>
          <Icon icon="flat-color-icons:about" className="mr-2 inline text-lg" />
          About
        </span>
      </button>
      <button
        onClick={() => router.push('/research')}
        className={`p-2 font-bold text-zinc-900 transition-colors hover:bg-zinc-400 dark:text-zinc-300 dark:hover:bg-zinc-800 ${
          router.asPath === '/research'
            ? 'bg-zinc-400 text-zinc-600 dark:bg-zinc-800'
            : 'text-zinc-900'
        }`}
      >
        <span>
          <Icon icon="emojione:atom-symbol" className="mr-2 inline text-lg" />
          Research
        </span>
      </button>
      <button
        onClick={() => router.push('/projects')}
        className={`rounded-r-lg p-2 font-bold text-zinc-900 transition-colors hover:bg-zinc-400 dark:text-zinc-300 dark:hover:bg-zinc-800 ${
          router.asPath === '/projects'
            ? 'bg-zinc-400 text-zinc-600 dark:bg-zinc-800'
            : 'text-zinc-900'
        }`}
      >
        <span>
          <Icon
            icon="ant-design:project-filled"
            className="mr-2 inline text-lg"
          />
          Projects
        </span>
      </button>
    </header>
  )
}
