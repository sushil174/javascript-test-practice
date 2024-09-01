import {capitalize,calculator,reverseString,analyzeArray,caesarCipher} from "./practice"

it('Captalize', () => {
    expect(capitalize("sushil")).toBe("Sushil")
})

it('Calculator', () => {
    expect(calculator.add(4,2)).toBe(6)
    expect(calculator.sub(4,2)).toBe(2)
    expect(calculator.div(4,2)).toBe(2)
    expect(calculator.mul(4,2)).toBe(8)
})

it('Reversing String', () => {
    expect(reverseString("sushil")).toBe("lihsus")
})

it('Analysing array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
        
    )
})

it('Ceaser cipher', () => {
    expect(caesarCipher('xyz',3)).toBe('abc')
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})