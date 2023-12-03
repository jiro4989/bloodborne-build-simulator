"use client"
import Image from 'next/image'
import { useState } from 'react'

type OriginKey = "milquetoast" | "loneSurvivor" | "troubledChildhood" | "violentPast" | "professional" | "militaryVeteran" | "nobleScion" | "cruelFate" | "wasteOfSkin"

// 過去
type Origin = {
  name: string
  key: OriginKey

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

const originMilquetoast: Origin = {
  name: "特筆なし",
  key: "milquetoast",
  level: 10,
  vitality: 11,
  endurance: 10,
  strength: 12,
  skill: 10,
  bloodtinge: 9,
  arcane: 8,
}

const originLoneSurvivor: Origin = {
  name: "村の生き残り",
  key: "loneSurvivor",
  level: 10,
  vitality: 14,
  endurance: 11,
  strength: 11,
  skill: 10,
  bloodtinge: 7,
  arcane: 7,
}

const originTroubledChildhood: Origin = {
  name: "悲惨な幼年期",
  key: "troubledChildhood",
  level: 10,
  vitality: 9,
  endurance: 14,
  strength: 9,
  skill: 13,
  bloodtinge: 6,
  arcane: 9,
}

const originViolentPast: Origin = {
  name: "暴力的過去",
  key: "violentPast",
  level: 10,
  vitality: 12,
  endurance: 11,
  strength: 15,
  skill: 9,
  bloodtinge: 6,
  arcane: 7,
}

const originProfessional: Origin = {
  name: "プロフェッショナル",
  key: "professional",
  level: 10,
  vitality: 9,
  endurance: 12,
  strength: 9,
  skill: 15,
  bloodtinge: 7,
  arcane: 8,
}

const originMilitaryVeteran: Origin = {
  name: "従軍経験",
  key: "militaryVeteran",
  level: 10,
  vitality: 10,
  endurance: 10,
  strength: 14,
  skill: 13,
  bloodtinge: 7,
  arcane: 6,
}

const originNobleScion: Origin = {
  name: "一族の末裔",
  key: "nobleScion",
  level: 10,
  vitality: 7,
  endurance: 8,
  strength: 9,
  skill: 13,
  bloodtinge: 14,
  arcane: 9,
}

const originCruelFate: Origin = {
  name: "過酷な運命",
  key: "cruelFate",
  level: 10,
  vitality: 10,
  endurance: 12,
  strength: 10,
  skill: 9,
  bloodtinge: 5,
  arcane: 14,
}

const originWasteOfSkin: Origin = {
  name: "生まれるべきではなかった",
  key: "wasteOfSkin",
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

const numberToOrigin: Origin[] = [
  originMilquetoast,
  originLoneSurvivor,
  originTroubledChildhood,
  originViolentPast,
  originProfessional,
  originMilitaryVeteran,
  originNobleScion,
  originCruelFate,
  originWasteOfSkin,
]

export default function Home() {
  const [selected, setSelected] = useState<string>("milquetoast")

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
                <td>
                  <select value={selected} onChange={e => setSelected(e.target.value)}>
                    {
                      numberToOrigin.map((v,i) => <option key={v.key} value={v.key}>{v.name}</option>)
                    }
                  </select>
                </td>
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
    </main>
  )
}
