
const par = (a) => a%2 == 0 ? true : false 
const parArray = (a) => {
    let v = true
    a.forEach((e) => {
        if(e%2 !== 0){
            v = false
        }
    })
    return v
}
module.exports = {
    par,
    parArray
}