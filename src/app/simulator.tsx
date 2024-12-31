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
const textInputClass = "w-80 text-black p-1 rounded"

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

const IncreaseAndDecreaseButton = ({statusName, currentValue, additionalValue, value, max, text, setValue}: {statusName: string, currentValue: number, additionalValue: number, value: number,  max: number, text: string, setValue: Dispatch<SetStateAction<number>>}) => {
  const num = Math.abs(value)
  const op = 0 < value ? '加算' : '減算'
  return (
    <button
      type="button"
      className={buttonClass}
      aria-label={`${statusName}の値を ${num} ${op}します。現在の値は ${currentValue} です`}
      onClick={e => setValueWithValidation(additionalValue + value, setValue, 0, max)}
      >{text}</button>
  )
}

const Slider = ({statusName, currentValue, value, max, setValue}: {statusName: string, currentValue: number, value: number, max: number, setValue: Dispatch<SetStateAction<number>>}) => {
  return (
    <input
      className={sliderClass}
      type="range"
      min="0"
      max={max}
      step="1"
      value={value}
      aria-label={`${statusName}の値をスライダーで増減します。現在の値は ${currentValue} です`}
      onChange={e => setValue(parseInt(e.target.value))}
      />
  )
}

const ChangeParameterInputs = ({statusName, currentValue, additionalValue, max, setValue}: {statusName: string, currentValue: number, additionalValue: number, max: number, setValue: Dispatch<SetStateAction<number>>}) => {
  return (
    <>
      <IncreaseAndDecreaseButton statusName={statusName} currentValue={currentValue} additionalValue={additionalValue} value={-10} max={max} text='-10' setValue={setValue} />
      <IncreaseAndDecreaseButton statusName={statusName} currentValue={currentValue} additionalValue={additionalValue} value={-1} max={max} text='-1' setValue={setValue} />
      <Slider statusName={statusName} currentValue={currentValue} value={additionalValue} max={max} setValue={setValue}/>
      <IncreaseAndDecreaseButton statusName={statusName} currentValue={currentValue} additionalValue={additionalValue} value={+1} max={max} text='+1' setValue={setValue} />
      <IncreaseAndDecreaseButton statusName={statusName} currentValue={currentValue} additionalValue={additionalValue} value={+10} max={max} text='+10' setValue={setValue} />
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
          <h2 className="text-xl"><ruby>入力<rp>(</rp><rt>にゅうりょく</rt><rp>)</rp></ruby></h2>
          <div className='m-4'>
            <table>
              <tbody>
                <tr>
                  <th className="w-20">ビルド<ruby>名<rp>(</rp><rt>めい</rt><rp>)</rp></ruby></th>
                  <td className="w-8"></td>
                  <td>
                    <input className={textInputClass} type="text" value={buildName} autoFocus placeholder='例：上質ビルド' aria-label='分かりやすいビルド名を入力します' onChange={e => setBuildName(e.target.value)} />
                  </td>
                </tr>

                <tr>
                  <th><ruby>過去<rp>(</rp><rt>かこ</rt><rp>)</rp></ruby></th>
                  <td></td>
                  <td>
                    <select data-testid="originText" className="text-black p-1 rounded" value={selected} aria-label='過去を選択します' onChange={e => resetStatus(e.target.value)}>
                      {
                        numberToOrigin.map((v,i) => <option key={v.key} value={v.key}>{v.name}</option>)
                      }
                    </select>
                  </td>
                </tr>

                {
                  [
                    {desc: '体力', ruby: 'たいりょく', id: 'vitalityText', baseValue: selectedOrigin.vitality, additionalValue: vitality, max: maxVitality, setValue: setVitality},
                    {desc: '持久力', ruby: 'じきゅうりょく', id: 'enduranceText', baseValue: selectedOrigin.endurance, additionalValue: endurance, max: maxEndurance, setValue: setEndurance},
                    {desc: '筋力', ruby: 'きんりょく', id: 'strengthText', baseValue: selectedOrigin.strength, additionalValue: strength, max: maxStrength, setValue: setStrength},
                    {desc: '技術', ruby: 'ぎじゅつ', id: 'skillText', baseValue: selectedOrigin.skill, additionalValue: skill, max: maxSkill, setValue: setSkill},
                    {desc: '血質', ruby: 'けっしつ', id: 'bloodtingeText', baseValue: selectedOrigin.bloodtinge, additionalValue: bloodtinge, max: maxBloodtinge, setValue: setBloodtinge},
                    {desc: '神秘', ruby: 'しんぴ', id: 'arcaneText', baseValue: selectedOrigin.arcane, additionalValue: arcane, max: maxArcane, setValue: setArcane},
                  ].map((v) => (
                    <tr key={v.id}>
                      <th>
                        <ruby>
                          {v.desc}
                          <rp>(</rp><rt>{v.ruby}</rt><rp>)</rp>
                        </ruby>
                      </th>
                      <td data-testid={v.id}>
                        {v.baseValue + v.additionalValue}
                      </td>
                      <td>
                        <ChangeParameterInputs
                          statusName={v.desc}
                          currentValue={v.baseValue + v.additionalValue}
                          additionalValue={v.additionalValue}
                          max={v.max}
                          setValue={v.setValue}
                          />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </section>

        <section className="m-2">
          <h2 className="text-xl"><ruby>計算結果<rp>(</rp><rt>けいさんけっか</rt><rp>)</rp></ruby></h2>
          <div className="m-4">
            <table>
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
          </div>
        </section>

        <section className="m-2">
          <h2 className="text-xl"><ruby>共有<rp>(</rp><rt>きょうゆう</rt><rp>)</rp></ruby></h2>
          <div className='m-4'>
            <label>
              <p>
                <ruby>以下<rp>(</rp><rt>いか</rt><rp>)</rp></ruby>の URL をブックマークすることで、
                <ruby>今<rp>(</rp><rt>いま</rt><rp>)</rp></ruby>のビルドを<ruby>保存<rp>(</rp><rt>ほぞん</rt><rp>)</rp></ruby>できます。<br/>
                URL をコピーして<ruby>共有<rp>(</rp><rt>きょうゆう</rt><rp>)</rp></ruby>すれば、
                <ruby>他<rp>(</rp><rt>ほか</rt><rp>)</rp></ruby>の<ruby>人<rp>(</rp><rt>ひと</rt><rp>)</rp></ruby>にビルドを<ruby>紹介<rp>(</rp><rt>しょうかい</rt><rp>)</rp></ruby>できます。
              </p>
              <div className='m-4'>
                <ul className='list-disc'>
                  <li>
                    <input
                      data-testid="urlTextInput"
                      className={textInputClass}
                      type="text"
                      defaultValue={shareURL}
                      readOnly
                      onFocus={e => e.target.select()}
                      />
                    （<a data-testid="urlTextLink" className="text-cyan-300" href={shareURL}>共有用 URL</a>）
                  </li>
                </ul>
              </div>
            </label>
          </div>
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
