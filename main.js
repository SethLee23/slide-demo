
let n 
initposition()
setInterval(()=>{
    beLeave(getImageN(n))
    .one('transitionend',(e)=>{
        beEnter($(e.currentTarget))
    })
   beCurrent(getImageN(n+1)) 
    n += 1
},3000)

//工具函數
function x(n){
    if( n > 5){
        n = n % 5
        if(n === 0){
            n = 5
        }
    }
    return n
}
function beLeave($node){
    $node
    .removeClass('enter current').addClass('leave')
    return $node
}
function beEnter($node){
    $node
    .removeClass('current leave').addClass('enter')
    return $node
}
function beCurrent($node){
    $node
    .removeClass('enter leave').addClass('current')
    return $node
}
function initposition(){
    n = 1
    $(`.images>img:nth-Child(${n})`).addClass('current')
    .siblings().addClass('enter')
}
function getImageN(n){
   return $(`.images>img:nth-Child(${x(n)}`)
}