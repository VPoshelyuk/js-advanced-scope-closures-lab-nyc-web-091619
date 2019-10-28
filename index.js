function produceDrivingRange(rng) {
    return function(arg1, arg2){
        let diff = parseInt(arg2) - parseInt(arg1)
        if (rng > diff) {
            return `within range by ${rng - diff}`
        } else {
            return `${diff - rng} blocks out of range`
        }
    }
}

function produceTipCalculator(tip_percentage) {
    return function(price) {
        return price * tip_percentage
    }
}

function createDriver() {
    let driverId = 0
    return class {
        constructor(name) {
        this.name = name
        this.id = ++driverId
        }
    }
}