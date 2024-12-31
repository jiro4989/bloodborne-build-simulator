"use client"
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { HPs, Staminas } from './data'
import { useSearchParams } from "next/navigation";

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

function searchOriginIndex(key: string): number {
  for (let i=0; i<numberToOrigin.length; i++) {
    const org = numberToOrigin[i]
    if (org.key === key) {
      return i
    }
  }
  return 0
}

function fixQueryParam(value: string | null): number {
  if (value == null) {
    return 0
  }
  return parseInt(value)
}

function setDocumentTitle(name: string) {
  if (window) {
    if (name !== "") {
      document.title = `${name} | Bloodborne ビルドシミュレータ`
    } else {
      document.title = "Bloodborne ビルドシミュレータ"
    }
  }
}

const sliderClass = "w-28 md:w-40 lg:w-60 m-2"
const buttonClass = "bg-white text-black p-0.5 md:p-1 m-0.5 md:m-1 rounded w-10 md:w-12"

function setValueWithValidation(value: number, setValue: any, min: number, max: number) {
  if (value < min) {
    setValue(min)
    return
  }

  if (max < value) {
    setValue(max)
    return
  }

  setValue(value)
}

const IncreaseAndDecreaseButton = ({currentValue, value, max, text, setValue}: {currentValue: number, value: number,  max: number, text: string, setValue: Dispatch<SetStateAction<number>>}) => {
  return (
    <button type="button" className={buttonClass} onClick={e => setValueWithValidation(currentValue + value, setValue, 0, max)}>{text}</button>
  )
}

const Slider = ({value, max, setValue}: {value: number, max: number, setValue: Dispatch<SetStateAction<number>>}) => {
  return (
    <input
      className={sliderClass}
      type="range"
      min="0"
      max={max}
      step="1"
      value={value}
      onChange={e => setValue(parseInt(e.target.value))}
      />
  )
}

const ChangeParameterInputs = ({currentValue, max, setValue}: {currentValue: number, max: number, setValue: Dispatch<SetStateAction<number>>}) => {
  return (
    <>
      <IncreaseAndDecreaseButton currentValue={currentValue} value={-10} max={max} text='-10' setValue={setValue} />
      <IncreaseAndDecreaseButton currentValue={currentValue} value={-1} max={max} text='-1' setValue={setValue} />
      <Slider value={currentValue} max={max} setValue={setValue}/>
      <IncreaseAndDecreaseButton currentValue={currentValue} value={+1} max={max} text='+1' setValue={setValue} />
      <IncreaseAndDecreaseButton currentValue={currentValue} value={+10} max={max} text='+10' setValue={setValue} />
    </>
  )
}

export default function Simulator() {
  const searchParams = useSearchParams()
  const defaultBuild = searchParams.get("bld") || ""
  const defaultOrigin = fixQueryParam(searchParams.get("org"))
  const defaultVitality = fixQueryParam(searchParams.get("vit"))
  const defaultEndurance = fixQueryParam(searchParams.get("end"))
  const defaultStrength = fixQueryParam(searchParams.get("str"))
  const defaultSkill = fixQueryParam(searchParams.get("skl"))
  const defaultBloodtinge = fixQueryParam(searchParams.get("blt"))
  const defaultArcane = fixQueryParam(searchParams.get("arc"))

  const [selected, setSelected] = useState<string>(numberToOrigin[defaultOrigin].key)
  const [buildName, setBuildName] = useState<string>(decodeURI(defaultBuild))
  const [vitality, setVitality] = useState<number>(defaultVitality)
  const [endurance, setEndurance] = useState<number>(defaultEndurance)
  const [strength, setStrength] = useState<number>(defaultStrength)
  const [skill, setSkill] = useState<number>(defaultSkill)
  const [bloodtinge, setBloodtinge] = useState<number>(defaultBloodtinge)
  const [arcane, setArcane] = useState<number>(defaultArcane)

  const selectedOrigin: Origin = origins.get(selected)!
  const maxVitality = 99 - selectedOrigin.vitality
  const maxEndurance = 99 - selectedOrigin.endurance
  const maxStrength = 99 - selectedOrigin.strength
  const maxSkill = 99 - selectedOrigin.skill
  const maxBloodtinge = 99 - selectedOrigin.bloodtinge
  const maxArcane = 99 - selectedOrigin.arcane

  function resetStatus(value: string) {
    setSelected(value)
    setVitality(0)
    setEndurance(0)
    setStrength(0)
    setSkill(0)
    setBloodtinge(0)
    setArcane(0)
  }

  function generateURL(build: string, origin: number, vitality: number, endurance: number, strength: number, skill: number, bloodtinge: number, arcane: number): string {
    const encodedBuild = encodeURIComponent(build)
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const url = `${baseURL}?bld=${encodedBuild}&org=${origin}&vit=${vitality}&end=${endurance}&str=${strength}&skl=${skill}&blt=${bloodtinge}&arc=${arcane}`
    return url
  }

  useEffect(() => {
    setDocumentTitle(buildName)
  })

  const shareURL = generateURL(buildName, searchOriginIndex(selected), vitality, endurance, strength, skill, bloodtinge, arcane)

  return (
    <main className="flex flex-col items-center justify-between">
      <header className="p-8 text-xl md:text-2xl">
        <h1><a href="https://jiro4989.github.io/bloodborne-build-simulator/">Bloodborne ビルドシミュレータ</a></h1>
      </header>

      <div className="border rounded p-2 text-sm md:text-base">
        <section className="m-2 border-b-2 border-dotted">
          <h2 className="text-xl">入力</h2>
          <table className="m-4">
            <tbody>
              <tr>
                <th className="w-20">ビルド名</th>
                <td className="w-8"></td>
                <td>
                  <input className="w-80 text-black" type="text" value={buildName} autoFocus placeholder='例：上質ビルド' aria-label='分かりやすいビルド名を入力します' onChange={e => setBuildName(e.target.value)} />
                </td>
              </tr>

              <tr>
                <th>過去</th>
                <td></td>
                <td>
                  <select data-testid="originText" className="text-black" value={selected} aria-label='過去を選択します' onChange={e => resetStatus(e.target.value)}>
                    {
                      numberToOrigin.map((v,i) => <option key={v.key} value={v.key}>{v.name}</option>)
                    }
                  </select>
                </td>
              </tr>

              {
                [
                  {desc: '体力', id: 'vitalityText', selected: selectedOrigin.vitality, currentValue: vitality, max: maxVitality, setValue: setVitality},
                  {desc: '持久力', id: 'enduranceText', selected: selectedOrigin.endurance, currentValue: endurance, max: maxEndurance, setValue: setEndurance},
                  {desc: '筋力', id: 'strengthText', selected: selectedOrigin.strength, currentValue: strength, max: maxStrength, setValue: setStrength},
                  {desc: '技術', id: 'skillText', selected: selectedOrigin.skill, currentValue: skill, max: maxSkill, setValue: setSkill},
                  {desc: '血質', id: 'bloodtingeText', selected: selectedOrigin.bloodtinge, currentValue: bloodtinge, max: maxBloodtinge, setValue: setBloodtinge},
                  {desc: '神秘', id: 'arcaneText', selected: selectedOrigin.arcane, currentValue: arcane, max: maxArcane, setValue: setArcane},
                ].map((v) => (
                  <tr key={v.id}>
                    <th>{v.desc}</th>
                    <td data-testid={v.id}>
                      {v.selected + v.currentValue}
                    </td>
                    <td>
                      <ChangeParameterInputs currentValue={v.currentValue} max={v.max} setValue={v.setValue} />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </section>

        <section className="m-2">
          <h2 className="text-xl">計算結果</h2>
          <table className="m-4">
            <tbody>
              <tr>
                <th>レベル</th>
                <td data-testid="levelText">{selectedOrigin.level + vitality + endurance + strength + skill + bloodtinge + arcane}</td>
              </tr>

              <tr>
                <th>HP</th>
                <td data-testid="hpText">{HPs[selectedOrigin.vitality + vitality]}</td>
              </tr>

              <tr>
                <th>スタミナ</th>
                <td data-testid="staminaText">{Staminas[selectedOrigin.endurance + endurance]}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="m-2">
          <h2 className="text-xl">共有</h2>
          <p className="m-4">
            以下のURLをブックマークすることで、今のビルドを保存できます。<br/>
            URLをコピーして共有すれば、他の人にビルドを紹介できます。
          </p>
          <details>
            <summary>折りたたみを展開する</summary>
            <p className="m-4 w-80 break-words">
              <a data-testid="urlText" className="text-cyan-300" href={shareURL}>{shareURL}</a>
            </p>
          </details>
        </section>
      </div>

      <footer className="m-4">
        Copyright (C) 2023 <a className="text-cyan-300" href="https://github.com/jiro4989">jiro4989</a> |{' '}
        <a className="text-cyan-300" href="https://github.com/jiro4989/bloodborne-build-simulator">
          Repository
        </a>
      </footer>
    </main>
  )
}
