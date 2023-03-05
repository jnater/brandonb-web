import Image from 'next/image'

const ResponsiveImage = (props: any) => (
  <Image
    alt={props.alt}
    className="rounded-lg"
    width={180}
    height={180}
    {...props}
  />
)

export const components = {
  img: ResponsiveImage,
  h1: (props: any) => (
    <h1
      className="text-4xl font-bold transition-colors dark:text-zinc-300"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-3xl font-bold transition-colors dark:text-zinc-300"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="text-md my-4 text-zinc-900 transition-colors dark:text-zinc-300"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre className="rounded-lg bg-zinc-900 p-4" {...props} />
  ),
  code: (props: any) => <code className="text-zinc-300" {...props} />,
  a: (props: any) => <a className="text-zinc-300" {...props} />,
}
