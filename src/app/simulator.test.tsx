import { expect, test, vi, vitest } from 'vitest'
import { render, screen } from '@testing-library/react'
import Simulator from './simulator'
import { describe } from 'node:test'

describe('Simulator', () => {
    test('Title', () => {
        vi.mock('next/navigation', () => {
            return {
                useSearchParams: vitest.fn().mockReturnValue(new URLSearchParams({
                }))
            }
        })

        render(<Simulator />)
        expect(screen.getByRole('heading', { level: 1, name: 'Bloodborne ビルドシミュレータ' })).toBeDefined()
    })
})