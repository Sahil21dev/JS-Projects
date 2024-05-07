var arr = [
    {dp:"https://plus.unsplash.com/premium_photo-1663047342299-be7fdb28da60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80z",story:"https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHAlM0JpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHAlM0JpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",story:"https://media.istockphoto.com/id/1154903724/photo/beautiful-woman-with-red-lipstick-and-wearing-red-dress-holding-mobile-phone-outside.webp?s=170667a&w=0&k=20&c=7mO37AEsaUVYVOYflKzv_Pd1jsAI5Wj8UJ9N-QhgeqE="},
    {dp:"https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHAlM0JpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1552358155-515e264cb8b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1613053341193-2b7f654c155f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwJTNCaWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"},
]
var clutter=""
arr.forEach(function(elem,idx){
clutter+=` <div id="story"><img id=${idx} src="${elem.dp}" alt=""></div>`
})
document.querySelector("#storian").innerHTML=clutter
 var storian = document.querySelector("#storian")
 storian.addEventListener("click",function(dets){
   document.querySelector("#full-screen").style.display="block"
   document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`
   setTimeout(() => {
    document.querySelector("#full-screen").style.display="none"
   }, 3000);
 })