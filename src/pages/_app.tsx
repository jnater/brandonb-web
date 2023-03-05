import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { components } from '@/utils/mdx_components'
import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'

import { animated as a, useSpring } from '@react-spring/web'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { roboto } from '@/utils/font'
import { Icon } from '@iconify/react'
import Head from 'next/head'
import { useRouter } from 'next/router'

function App({ Component, pageProps }: AppProps) {
  const mainRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  const router = useRouter()
  const [isDark, setDark] = useState(false)

  useEffect(() => {
    if (mainRef.current) {
      if (localStorage.getItem('dark') === 'true') {
        mainRef.current.classList.add('dark')
        setDark(true)
      } else {
        mainRef.current.classList.remove('dark')
        setDark(false)
      }
    }
  }, [])

  const [bgSpring, bgSpringApi] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    opacity: 0,
    config: { friction: 20 },
  }))

  useEffect(() => {
    // get bgImage size

    window.onscroll = () => {
      if (imgRef.current) {
        bgSpringApi.start({
          y: -window.scrollY * 0.2 * (imgRef.current.height / 1080),
        })
      }
    }
    bgSpringApi.start({
      x:
        router.asPath === '/'
          ? 100
          : router.asPath === '/research'
          ? 0
          : router.asPath === '/projects'
          ? -100
          : 0,
    })
  }, [router.asPath])

  return (
    <>
      <Head>
        <title>
          {(router.asPath === '/'
            ? String.fromCharCode(0x2139) + ' About'
            : router.asPath === '/research'
            ? '🪐 Research'
            : router.asPath === '/projects'
            ? '🗒️ Projects'
            : 'About') + ' | brandonb.info'}
        </title>
      </Head>
      <main ref={mainRef} className={roboto.className}>
        <div className="fixed h-full w-full bg-zinc-800 dark:bg-zinc-900" />
        <a.div style={bgSpring} className="fixed h-full w-full">
          <Image
            ref={imgRef}
            onLoadingComplete={() => {
              bgSpringApi.start({
                opacity: 1,
                scale: 1.5,
              })
            }}
            className="fixed h-full w-full object-cover blur-sm"
            src="https://i.imgur.com/zA7xI0g_d.webp"
            alt="windsor"
            fill
          />
        </a.div>
        <div className="vignette fixed h-full w-full" />
        <div className="fixed h-full w-full bg-zinc-800/90 saturate-150 transition-colors dark:bg-zinc-900/90" />
        <button
          className="fixed top-0 right-0 m-4 rounded-lg bg-zinc-300/80 p-2 transition-colors dark:bg-zinc-900/80"
          onClick={() => {
            mainRef.current?.classList.toggle('dark')
            localStorage.setItem(
              'dark',
              mainRef.current?.classList.contains('dark') ? 'true' : 'false',
            )
            setDark(!isDark)
          }}
        >
          <Icon
            icon={isDark ? 'ph:sun-fill' : 'ph:moon-fill'}
            className="text-zinc-900 dark:text-zinc-300"
          />
        </button>
        <Navbar />
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </main>
    </>
  )
}

export default App
