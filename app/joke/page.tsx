import { Suspense } from 'react'
import RedisLink from '../components/redis-link'
import RevalidatePage from '../components/revalidate-page'
import JokeClient from './components/JokeClient'

const Page = () => {
  return (
    <>
      <header className='header'>Lets have some fun</header>

      <main className='widget'>
        <Suspense fallback={null}>
          <JokeClient />
        </Suspense>
      </main>

      <div
        style={{ margin: '0 auto', width: 'fit-content', marginBottom: '10px' }}
      >
        Page was cached at {new Date().getTime()}
      </div>
      <RevalidatePage />

      <RedisLink />
    </>
  )
}

export default Page
