let cart=[101,104]
let product=[{
    id:101,
    name:"carrot"
},{
    id:102,
    name:"carrot"
},{
    id:104,
    name:"carrot"
}]
let data=cart.flatMap((data)=>product.filter((p)=>p.id==data))
console.log(data)
let data2=cart.map((c)=>product.find((p)=>p.id==c))
console.log(data2)