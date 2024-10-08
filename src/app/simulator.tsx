"use client"
import { useState, useEffect } from 'react'
import { HPs, Staminas } from './data'
import { useSearchParams  } from "next/navigation";

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
  if (process.browser) {
    if (name !== "") {
      document.title = `${name} | Bloodborne ビルドシミュレータ`
    } else {
      document.title = "Bloodborne ビルドシミュレータ"
    }
  }
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

  const buttonClass = "bg-white text-black p-0.5 md:p-1 m-0.5 md:m-1 rounded w-10 md:w-12"

  const VitalityButton = ({value, text}: {value: number, text: string}) => {
    return (
      <button type="button" className={buttonClass} onClick={e => setValueWithValidation(vitality + value, setVitality, 0, maxVitality)}>{text}</button>
    )
  }

  const EnduranceButton = ({value, text}: {value: number, text: string}) => {
    return (
      <button type="button" className={buttonClass} onClick={e => setValueWithValidation(endurance + value, setEndurance, 0, maxEndurance)}>{text}</button>
    )
  }

  const StrengthButton = ({value, text}: {value: number, text: string}) => {
    return (
      <button type="button" className={buttonClass} onClick={e => setValueWithValidation(strength + value, setStrength, 0, maxStrength)}>{text}</button>
    )
  }

  const SkillButton = ({value, text}: {value: number, text: string}) => {
    return (
      <button type="button" className={buttonClass} onClick={e => setValueWithValidation(skill + value, setSkill, 0, maxSkill)}>{text}</button>
    )
  }

  const BloodtingeButton = ({value, text}: {value: number, text: string}) => {
    return (
      <button type="button" className={buttonClass} onClick={e => setValueWithValidation(bloodtinge + value, setBloodtinge, 0, maxBloodtinge)}>{text}</button>
    )
  }

  const ArcaneButton = ({value, text}: {value: number, text: string}) => {
    return (
      <button type="button" className={buttonClass} onClick={e => setValueWithValidation(arcane + value, setArcane, 0, maxArcane)}>{text}</button>
    )
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

  const sliderClass = "w-28 md:w-40 lg:w-60 m-2"
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
                  <input className="w-80 text-black" type="text" value={buildName} onChange={e => setBuildName(e.target.value)} />
                </td>
              </tr>

              <tr>
                <th>過去</th>
                <td></td>
                <td>
                  <select className="text-black" value={selected} onChange={e => resetStatus(e.target.value)}>
                    {
                      numberToOrigin.map((v,i) => <option key={v.key} value={v.key}>{v.name}</option>)
                    }
                  </select>
                </td>
              </tr>

              <tr>
                <th>体力</th>
                <td>
                  {selectedOrigin.vitality + vitality}
                </td>
                <td>
                  <VitalityButton value={-10} text="-10"/>
                  <VitalityButton value={-1} text="-1"/>
                  <input
                    className={sliderClass}
                    type="range"
                    min="0"
                    max={maxVitality}
                    step="1"
                    value={vitality}
                    onChange={e => setVitality(parseInt(e.target.value))}
                    />
                  <VitalityButton value={+1} text="+1"/>
                  <VitalityButton value={+10} text="+10"/>
                </td>
              </tr>

              <tr>
                <th>持久力</th>
                <td>
                  {selectedOrigin.endurance + endurance}
                </td>
                <td>
                  <EnduranceButton value={-10} text="-10"/>
                  <EnduranceButton value={-1} text="-1"/>
                  <input
                    className={sliderClass}
                    type="range"
                    min="0"
                    max={maxEndurance}
                    step="1"
                    value={endurance}
                    onChange={e => setEndurance(parseInt(e.target.value))}
                    />
                  <EnduranceButton value={+1} text="+1"/>
                  <EnduranceButton value={+10} text="+10"/>
                </td>
              </tr>

              <tr>
                <th>筋力</th>
                <td>
                  {selectedOrigin.strength + strength}
                </td>
                <td>
                  <StrengthButton value={-10} text="-10"/>
                  <StrengthButton value={-1} text="-1"/>
                  <input
                    className={sliderClass}
                    type="range"
                    min="0"
                    max={maxStrength}
                    step="1"
                    value={strength}
                    onChange={e => setStrength(parseInt(e.target.value))}
                    />
                  <StrengthButton value={+1} text="+1"/>
                  <StrengthButton value={+10} text="+10"/>
                </td>
              </tr>

              <tr>
                <th>技術</th>
                <td>
                  {selectedOrigin.skill + skill}
                </td>
                <td>
                  <SkillButton value={-10} text="-10"/>
                  <SkillButton value={-1} text="-1"/>
                  <input
                    className={sliderClass}
                    type="range"
                    min="0"
                    max={maxSkill}
                    step="1"
                    value={skill}
                    onChange={e => setSkill(parseInt(e.target.value))}
                    />
                  <SkillButton value={+1} text="+1"/>
                  <SkillButton value={+10} text="+10"/>
                </td>
              </tr>

              <tr>
                <th>血質</th>
                <td>
                  {selectedOrigin.bloodtinge + bloodtinge}
                </td>
                <td>
                  <BloodtingeButton value={-10} text="-10"/>
                  <BloodtingeButton value={-1} text="-1"/>
                  <input
                    className={sliderClass}
                    type="range"
                    min="0"
                    max={maxBloodtinge}
                    step="1"
                    value={bloodtinge}
                    onChange={e => setBloodtinge(parseInt(e.target.value))}
                    />
                  <BloodtingeButton value={+1} text="+1"/>
                  <BloodtingeButton value={+10} text="+10"/>
                </td>
              </tr>

              <tr>
                <th>神秘</th>
                <td>
                  {selectedOrigin.arcane + arcane}
                </td>
                <td>
                  <ArcaneButton value={-10} text="-10"/>
                  <ArcaneButton value={-1} text="-1"/>
                  <input
                    className={sliderClass}
                    type="range"
                    min="0"
                    max={maxArcane}
                    step="1"
                    value={arcane}
                    onChange={e => setArcane(parseInt(e.target.value))}
                    />
                  <ArcaneButton value={+1} text="+1"/>
                  <ArcaneButton value={+10} text="+10"/>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="m-2">
          <h2 className="text-xl">計算結果</h2>
          <table className="m-4">
            <tbody>
              <tr>
                <th>レベル</th>
                <td>{selectedOrigin.level + vitality + endurance + strength + skill + bloodtinge + arcane}</td>
              </tr>

              <tr>
                <th>HP</th>
                <td>{HPs[selectedOrigin.vitality + vitality]}</td>
              </tr>

              <tr>
                <th>スタミナ</th>
                <td>{Staminas[selectedOrigin.endurance + endurance]}</td>
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
              <a className="text-cyan-300" href={shareURL}>{shareURL}</a>
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
