// Let's build a pyramid using JavaScript basics:
//     #    
//    ###   
//   #####  
//  ####### 
// #########

export const createPyramid = (levels: number) => {
    const reseult: string[] = [];
    for (let i = 0; i < levels; i++) {
        const space = ' '.repeat(levels - i - 1)
        const star = '*'.repeat(2 * i + 1);
        reseult.push(space + star + space)
        console.log(space + star + space)
    }
    return reseult;
}
