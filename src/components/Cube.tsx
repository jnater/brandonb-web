import { useEffect, useRef, useState } from 'react'

import { Canvas, useFrame } from '@react-three/fiber'

import { Mesh } from 'three'

function WireframeBox(props: any) {
  const mesh = useRef<Mesh>(null!)

  useFrame(
    () =>
      mesh.current &&
      (mesh.current.rotation.x = mesh.current.rotation.y += 0.01),
  )

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={props.color} wireframe />
    </mesh>
  )
}

export default function WireframeBoxComponent() {
  const [isDark, setDark] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('dark') === 'true') {
      setDark(true)
    } else {
      setDark(false)
    }
  })
  return (
    <div className="left-0 right-0 m-auto h-20 w-20 rounded-lg bg-zinc-400 transition-colors dark:bg-zinc-800">
      <Canvas>
        <WireframeBox
          position={[0, 0, 0]}
          scale={[3, 3, 3]}
          color={isDark ? '#eee' : '#111'}
        />
      </Canvas>
    </div>
  )
}
