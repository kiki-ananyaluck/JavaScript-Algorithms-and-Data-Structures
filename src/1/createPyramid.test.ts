import { createPyramid } from "./createPyramid";

describe('createPyramidTest',() => {
    test('should create Pyramid leval 3', () => {
        expect(createPyramid(3)).toEqual([
            '  *  ',
            ' *** ',
            '*****'
        ])
    })

    test('should create Pyramid level 0', () => {
        expect(createPyramid(0)).toEqual([])
    })
})