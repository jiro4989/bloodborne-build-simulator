import Image from 'next/image'

// 過去
type Origin = {
  // レベル
  level: number
  // 体力
  vitality: number
  // 持久力
  endurance: number
  // 筋力
  strength: number
  // 技術
  skill: number
  // 血質
  bloodtinge: number
  // 神秘
  arcane: number
}

// 特筆なし
const originMilquetoast: Origin = {
  level: 10,
  vitality: 11,
  endurance: 10,
  strength: 12,
  skill: 10,
  bloodtinge: 9,
  arcane: 8,
}

// 村の生き残り
const originLoneSurvivor: Origin = {
  level: 10,
  vitality: 14,
  endurance: 11,
  strength: 11,
  skill: 10,
  bloodtinge: 7,
  arcane: 7,
}

// 悲惨な幼年期
const originTroubledChildhood: Origin = {
  level: 10,
  vitality: 9,
  endurance: 14,
  strength: 9,
  skill: 13,
  bloodtinge: 6,
  arcane: 9,
}

// 暴力的過去
const originViolentPast: Origin = {
  level: 10,
  vitality: 12,
  endurance: 11,
  strength: 15,
  skill: 9,
  bloodtinge: 6,
  arcane: 7,
}

// プロフェッショナル
const originProfessional: Origin = {
  level: 10,
  vitality: 9,
  endurance: 12,
  strength: 9,
  skill: 15,
  bloodtinge: 7,
  arcane: 8,
}

// 従軍経験
const originMilitaryVeteran: Origin = {
  level: 10,
  vitality: 10,
  endurance: 10,
  strength: 14,
  skill: 13,
  bloodtinge: 7,
  arcane: 6,
}

// 一族の末裔
const originNobleScion: Origin = {
  level: 10,
  vitality: 7,
  endurance: 8,
  strength: 9,
  skill: 13,
  bloodtinge: 14,
  arcane: 9,
}

// 過酷な運命
const originCruelFate: Origin = {
  level: 10,
  vitality: 10,
  endurance: 12,
  strength: 10,
  skill: 9,
  bloodtinge: 5,
  arcane: 14,
}

// 生まれるべきではなかった
const originWasteOfSkin: Origin = {
  level: 4,
  vitality: 10,
  endurance: 9,
  strength: 10,
  skill: 9,
  bloodtinge: 7,
  arcane: 9,
}

const origins = new Map<string, Origin>([
  ["milquetoast", originMilquetoast],
  ["loneSurvivor", originLoneSurvivor],
  ["troubledChildhood", originTroubledChildhood],
  ["violentPast", originViolentPast],
  ["professional", originProfessional],
  ["militaryVeteran", originMilitaryVeteran],
  ["nobleScion", originNobleScion],
  ["cruelFate", originCruelFate],
  ["wasteOfSkin", originWasteOfSkin],
])

const numberToOriginKey: string[] = [
  "milquetoast",
  "loneSurvivor",
  "troubledChildhood",
  "violentPast",
  "professional",
  "militaryVeteran",
  "nobleScion",
  "cruelFate",
  "wasteOfSkin",
]

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1>Bloodborne ビルドシミュレータ</h1>
      </header>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <section>
          <h2>入力</h2>
          <table>
            <tbody>
              <tr>
                <th>過去</th>
                <td>Select box</td>
              </tr>

              <tr>
                <th>体力</th>
                <td></td>
              </tr>

              <tr>
                <th>持久力</th>
                <td></td>
              </tr>

              <tr>
                <th>筋力</th>
                <td></td>
              </tr>

              <tr>
                <th>技術</th>
                <td></td>
              </tr>

              <tr>
                <th>血質</th>
                <td></td>
              </tr>

              <tr>
                <th>神秘</th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>計算結果</h2>
          <table>
            <tbody>
              <tr>
                <th>レベル</th>
                <td>TODO</td>
              </tr>

              <tr>
                <th>HP</th>
                <td>TODO</td>
              </tr>

              <tr>
                <th>スタミナ</th>
                <td>TODO</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
