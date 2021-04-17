document.body.innerHTML = `
<div id="dive">Test</div>
<div id="point"></div>
`
let dive = document.querySelector('#dive')
dive.style.border = "1px solid black"

let point = document.querySelector('#point')
point.style.border = "3px solid black"


let rectangle = {
    xTop: '12',
    yTop: '14',
    xBottom: '300',
    yBottom: '140',
}
                                // Information about object
// function rectanglePos (obj){
//    for(let key in obj){
//     console.log(key +": "+ obj[key])
//    }
// }
// rectanglePos(rectangle)

                                //Width object
// function rectanglePos (obj){
//     return(obj.xBottom - obj.xTop)
//  }
//  dive.style.width = `${rectanglePos(rectangle)}px` 
                                //Height object
// function rectanglePos (obj){
//     return(obj.yBottom - obj.yTop)
//  }
// dive.style.height = `${rectanglePos(rectangle)}px`

                                //Area object
//     let widthObj, heightObj 
// function rectanglePos (obj){
//     widthObj = (obj.xBottom - obj.xTop)
//     heightObj = (obj.yBottom - obj.yTop)
//     console.log("Area "+(obj.xBottom - obj.xTop)*(obj.yBottom - obj.yTop))
//  }
//  rectanglePos(rectangle)
// dive.style.width = `${widthObj}px`
// dive.style.height = `${heightObj}px`

                                //Perimeter
//     let widthObj, heightObj 
// function rectanglePos (obj){
//     widthObj = (obj.xBottom - obj.xTop)
//     heightObj = (obj.yBottom - obj.yTop)
//     console.log("Perimeter "+((obj.xBottom - obj.xTop)+(obj.yBottom - obj.yTop))*2)
//  }
//  rectanglePos(rectangle)
// dive.style.width = `${widthObj}px`
// dive.style.height = `${heightObj}px`

                                // Change width
// function rectanglePos (obj,change){
//     return((obj.xBottom - obj.xTop)+change)
// }
// dive.style.width = `${rectanglePos(rectangle,100)}px`

                                //Change height
// function rectanglePos (obj,change){
//     return ((obj.yBottom - obj.yTop)+change)
// }
// dive.style.height = `${rectanglePos(rectangle,100)}px`

                                //CHange height and width
// let widthObj, heightObj 
// function rectanglePos (obj, height, width){
//     heightObj = ((obj.yBottom - obj.yTop)+height)
//     widthObj = ((obj.xBottom - obj.xTop)+width)
//     dive.style.height = `${heightObj}px`
//     dive.style.width = `${widthObj}px`
//     console.log("height: "+heightObj+"\n"+"width: "+widthObj)
// }
// rectanglePos(rectangle, 40,60)

                                //Displacement X
// function rectanglePos (obj, moveX){
//     heightObj = (obj.yBottom - obj.yTop)
//     widthObj = (obj.xBottom - obj.xTop)
//     dive.style.marginLeft = `${moveX}px`
//     dive.style.height = `${heightObj}px`
//     dive.style.width = `${widthObj}px`
//     console.log("height: "+heightObj+"\n"+"width: "+widthObj+"\n"+"margin-left: "+moveX)
// }
// rectanglePos(rectangle, 40)

                                //Displacement Y
// function rectanglePos (obj, moveY){
//     heightObj = (obj.yBottom - obj.yTop)
//     widthObj = (obj.xBottom - obj.xTop)
//     dive.style.marginTop = `${moveY}px`
//     dive.style.height = `${heightObj}px`
//     dive.style.width = `${widthObj}px`
//     console.log("height: "+heightObj+"\n"+"width: "+widthObj+"\n"+"margin-top: "+moveY)
// }
// rectanglePos(rectangle, 40)

// function rectanglePos (obj, xPoint, yPoint){
//     let heightObj = (obj.yBottom - obj.yTop)
//     let widthObj = (obj.xBottom - obj.xTop)

//     dive.style.height = `${heightObj}px`
//     dive.style.width = `${widthObj}px`
//     dive.style.position = 'absolute'

//     point.style.marginTop = `${yPoint}px`
//     point.style.marginLeft = `${xPoint}px`
//     point.style.position = 'fixed'

//     if(xPoint>=obj.xTop&&xPoint<=obj.xBottom&&yPoint>=obj.yTop&&yPoint<=obj.yBottom){
//         console.log("Point: ("+xPoint+", "+yPoint+") on the area of the rectangle!")
//     }else{console.log("Point: ("+xPoint+", "+yPoint+")\n"+"is outside")}
// }
// rectanglePos(rectangle,270,39)



