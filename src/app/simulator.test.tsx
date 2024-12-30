import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Simulator from './simulator'
import { describe } from 'node:test'

describe('Simulator', () => {
    render(<Simulator />)

    test('Title', () => {
        expect(screen.getByRole('heading', { level: 1, name: 'Bloodborne ビルドシミュレータ' })).toBeDefined()
    })
})