exports.dice = (nb,max) => {
    let res = [];
    for(let i = 0; i < nb; i++){
        res.push(Math.floor(Math.random()*Math.floor(max)+1))
    }
    return res;
};