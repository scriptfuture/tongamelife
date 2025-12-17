

export const secToObj = (s) => {
    let m = Math.trunc(s / 60) + ''
    s = (s % 60) + ''
    return ({m: Number(m.padStart(2, 0)), s: Number(s.padStart(2, 0))});
}