function calcUnit() {
    let cUnit = Number(document.getElementById("cUnit").value)

    const generalUnit = 20;
    const localUnit = 35;
    const standardUnit = 56;
    const commercialUnit = 70;
    
    const subsity = 170;
    // range 50 - 199
    if ( cUnit >= 50 && cUnit <= 199 ) {

        let cost = cUnit * generalUnit
        cost = cost - subsity
        console.log("Bill cost is:", cost)

        // range 200 - 240
    } else if (cUnit >= 200 && cUnit <= 240 ) {

        let cost = cUnit * localUnit
        console.log("Bill cost is:", cost)

        // range 241 - 300
    } else if(cUnit >= 241 && cUnit <= 300) {

        let cost = cUnit * standardUnit
        console.log("Bill cost is:", cost)

    } else {

        let cost = cUnit * commercialUnit
        console.log("Bill cost is:", cost)
        
    }
}