import { Suspense } from 'react'
import Simulator from './simulator'

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Simulator />
      </Suspense>
    </>
  )
}
