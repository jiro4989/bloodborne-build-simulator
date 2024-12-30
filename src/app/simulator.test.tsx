import { expect, test, vi, vitest } from 'vitest'
import { render } from '@testing-library/react'
import Simulator from './simulator'
import { after, afterEach, before, beforeEach, describe } from 'node:test'

// モックは定義位置にかかわらず先頭で呼び出される。
// モックが返す値を切り替えるためには工夫が必要。
const useSearchParams = vi.hoisted(() => {
    return vi.fn().mockReturnValue(new URLSearchParams())
})
vi.mock('next/navigation', () => ({
    useSearchParams,
}))

// describe('正常系: クエリストリングが空の場合は', () => {
//     const { getByRole } = render(<Simulator />)

//     test('サイト名が h1 に設定される', () => {
//         expect(getByRole('heading', { level: 1, name: 'Bloodborne ビルドシミュレータ' })).toBeDefined()
//     })

//     test('document.title にサイト名が設定される', () => {
//         expect(document.title).toBe('Bloodborne ビルドシミュレータ')
//     })
// })

describe('正常系: クエリストリングが設定されている場合は', () => {
    useSearchParams.mockReturnValue(new URLSearchParams({
        bld: 'sushi',
        org: '1',
        vit: '2',
        end: '3',
        str: '4',
        skl: '3',
        blt: '1',
        arc: '2',
    }))
    // useSearchParams.mockReturnValue({
    //     get: (key: string) => {
    //         const data = new Map(Object.entries({
    //             bld: 'sushi',
    //             org: '0',
    //             vit: '0',
    //             end: '0',
    //             str: '0',
    //             skl: '0',
    //             blt: '0',
    //             arc: '0',
    //         }))
    //         return vi.fn().mockReturnValue(data.get(key))
    //     },
    // })

    const { container, getByRole } = render(<Simulator />)

    test('サイト名が h1 に設定される', () => {
        expect(getByRole('heading', { level: 1, name: 'Bloodborne ビルドシミュレータ' })).toBeDefined()
    })

    test('document.title に bld と一緒にサイト名が設定される', () => {
        expect(document.title).toBe('sushi | Bloodborne ビルドシミュレータ')
    })

    test('過去は「村の生き残り」である', () => {
        const got = container.querySelector<HTMLSelectElement>('[data-testid="originText"]')
        expect(got?.selectedOptions.item(0)?.text).toBe('村の生き残り')
    })

    const paramTests = [
        {
            desc: '体力は 16 (14+2) である',
            id: 'vitalityText',
            want: '16',
        },
        {
            desc: '持久力は 14 (11+3) である',
            id: 'enduranceText',
            want: '14',
        },
        {
            desc: '筋力は 15 (11+4) である',
            id: 'strengthText',
            want: '15',
        },
        {
            desc: '技術は 13 (10+3) である',
            id: 'skillText',
            want: '13',
        },
        {
            desc: '血質は 8 (7+1) である',
            id: 'bloodtingeText',
            want: '8',
        },
        {
            desc: '神秘は 9 (7+2) である',
            id: 'arcaneText',
            want: '9',
        },
    ]
    test.each(paramTests)(`$desc`, ({ id, want }) => {
        const got = container.querySelector<HTMLElement>(`[data-testid="${id}"]`)
        expect(got?.textContent).toBe(want)
    })
})