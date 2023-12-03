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
  const [vitality, setVitality] = useState<number>(0)
  const [endurance, setEndurance] = useState<number>(0)
  const [strength, setStrength] = useState<number>(0)
  const [skill, setSkill] = useState<number>(0)
  const [bloodtinge, setBloodtinge] = useState<number>(0)
  const [arcane, setArcane] = useState<number>(0)

  const maxVitality = 99 - origins.get(selected)!.vitality
  const maxEndurance = 99 - origins.get(selected)!.endurance
  const maxStrength = 99 - origins.get(selected)!.strength
  const maxSkill = 99 - origins.get(selected)!.skill
  const maxBloodtinge = 99 - origins.get(selected)!.bloodtinge
  const maxArcane = 99 - origins.get(selected)!.arcane

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

  const VitalityButton = ({value, text}: {value: number, text: string}) => {
    return (
      <button type="button" onClick={e => setValueWithValidation(vitality + value, setVitality, 0, maxVitality)}>{text}</button>
    )
  }

  const EnduranceButton = ({value, text}: {value: number, text: string}) => {
    return (
      <button type="button" onClick={e => setValueWithValidation(endurance + value, setEndurance, 0, maxEndurance)}>{text}</button>
    )
  }

  const StrengthButton = ({value, text}: {value: number, text: string}) => {
    return (
      <button type="button" onClick={e => setValueWithValidation(strength + value, setStrength, 0, maxStrength)}>{text}</button>
    )
  }

  const SkillButton = ({value, text}: {value: number, text: string}) => {
    return (
      <button type="button" onClick={e => setValueWithValidation(skill + value, setSkill, 0, maxSkill)}>{text}</button>
    )
  }

  const BloodtingeButton = ({value, text}: {value: number, text: string}) => {
    return (
      <button type="button" onClick={e => setValueWithValidation(bloodtinge + value, setBloodtinge, 0, maxBloodtinge)}>{text}</button>
    )
  }

  const ArcaneButton = ({value, text}: {value: number, text: string}) => {
    return (
      <button type="button" onClick={e => setValueWithValidation(arcane + value, setArcane, 0, maxArcane)}>{text}</button>
    )
  }

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
                  <select value={selected} onChange={e => resetStatus(e.target.value)}>
                    {
                      numberToOrigin.map((v,i) => <option key={v.key} value={v.key}>{v.name}</option>)
                    }
                  </select>
                </td>
              </tr>

              <tr>
                <th>体力</th>
                <td>
                  {origins.get(selected)!.vitality + vitality}
                </td>
                <td>
                  <VitalityButton value={-10} text="-10"/>
                  <VitalityButton value={-1} text="-1"/>
                  <input
                    type="range"
                    min="0"
                    max={maxVitality}
                    step="1"
                    value={vitality}
                    onChange={e => setVitality(Number(e.target.value))}
                    />
                  <VitalityButton value={+1} text="+1"/>
                  <VitalityButton value={+10} text="+10"/>
                </td>
              </tr>

              <tr>
                <th>持久力</th>
                <td>
                  {origins.get(selected)!.endurance + endurance}
                </td>
                <td>
                  <EnduranceButton value={-10} text="-10"/>
                  <EnduranceButton value={-1} text="-1"/>
                  <input
                    type="range"
                    min="0"
                    max={maxEndurance}
                    step="1"
                    value={endurance}
                    onChange={e => setEndurance(Number(e.target.value))}
                    />
                  <EnduranceButton value={+1} text="+1"/>
                  <EnduranceButton value={+10} text="+10"/>
                </td>
              </tr>

              <tr>
                <th>筋力</th>
                <td>
                  {origins.get(selected)!.strength + strength}
                </td>
                <td>
                  <StrengthButton value={-10} text="-10"/>
                  <StrengthButton value={-1} text="-1"/>
                  <input
                    type="range"
                    min="0"
                    max={maxStrength}
                    step="1"
                    value={strength}
                    onChange={e => setStrength(Number(e.target.value))}
                    />
                  <StrengthButton value={+1} text="+1"/>
                  <StrengthButton value={+10} text="+10"/>
                </td>
              </tr>

              <tr>
                <th>技術</th>
                <td>
                  {origins.get(selected)!.skill + skill}
                </td>
                <td>
                  <SkillButton value={-10} text="-10"/>
                  <SkillButton value={-1} text="-1"/>
                  <input
                    type="range"
                    min="0"
                    max={maxSkill}
                    step="1"
                    value={skill}
                    onChange={e => setSkill(Number(e.target.value))}
                    />
                  <SkillButton value={+1} text="+1"/>
                  <SkillButton value={+10} text="+10"/>
                </td>
              </tr>

              <tr>
                <th>血質</th>
                <td>
                  {origins.get(selected)!.bloodtinge + bloodtinge}
                </td>
                <td>
                  <BloodtingeButton value={-10} text="-10"/>
                  <BloodtingeButton value={-1} text="-1"/>
                  <input
                    type="range"
                    min="0"
                    max={maxBloodtinge}
                    step="1"
                    value={bloodtinge}
                    onChange={e => setBloodtinge(Number(e.target.value))}
                    />
                  <BloodtingeButton value={+1} text="+1"/>
                  <BloodtingeButton value={+10} text="+10"/>
                </td>
              </tr>

              <tr>
                <th>神秘</th>
                <td>
                  {origins.get(selected)!.arcane + arcane}
                </td>
                <td>
                  <ArcaneButton value={-10} text="-10"/>
                  <ArcaneButton value={-1} text="-1"/>
                  <input
                    type="range"
                    min="0"
                    max={maxArcane}
                    step="1"
                    value={arcane}
                    onChange={e => setArcane(Number(e.target.value))}
                    />
                  <ArcaneButton value={+1} text="+1"/>
                  <ArcaneButton value={+10} text="+10"/>
                </td>
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
