

//how to examine dom

// console.log(document)
// console.dir(document)

//how to access dom properties(keys)

// console.log(document.all)
// console.log(document.URL)
// console.log(document.doctype)
// console.log(document.forms)
// console.log(document.links)
// console.log(document.title)

//How to select dom nodes /elements

// ID

// var para = document.getElementById('myid')

// console.log(para)

// para.innerText = 'updated para'
// para.style.background = 'red'

// class

// var paras = document.getElementsByClassName('myclass')
// console.log(paras)

// paras[0].style.color = 'red'
// paras[1].style.color = 'red'

//tag name

// var paras = document.getElementsByTagName('p')
// console.log(paras)

// paras[0].innerText = 'hello world'
// paras[1].innerText = 'hello world'
// paras[2].innerText = 'hello world'
// paras[3].innerText = 'hello world'

//query selector

// var para = document.querySelector('#myid')
// var para = document.querySelector('.myclass')
// var para = document.querySelector('p')
// console.log(para)

// query selector all

// var para = document.querySelectorAll('#myid')
// var para = document.querySelectorAll('.myclass')
// console.log(para)
// para[0].style.background = 'yellow'
// para[1].style.background = 'yellow'

//Traversing of DOM

// var currentDiv = document.getElementById('current-div')

// console.log(currentDiv)

//parent

// console.log(currentDiv.parentElement)
// currentDiv.parentElement.style.background = 'yellow'

//childs

// console.log(currentDiv.firstElementChild)
// console.log(currentDiv.lastElementChild)
// console.log(currentDiv.children)

//sibling

// console.log(currentDiv.previousElementSibling)
// console.log(currentDiv.nextElementSibling)

//Dom manipulation

// how to create new element by using js

// var h2 = document.createElement('h2')
// console.log(h2)

// h2.id = 'myh2id'
// h2.className = 'myh2class'

// h2.innerHTML = 'this is heading two'

// var h2text = document.createTextNode('this is heading two')
// console.log(h2text)

// h2.appendChild(h2text)

// var body = document.getElementById('body')

// console.log(body)

//add to dom

// body.appendChild(h2)


// var para = document.createElement('p')
// para.id = 'mypara'

// para.innerHTML = 'This is para'

// console.log(para)

// body.appendChild(para)
// body.insertBefore(para, h2)

//Replacing in dom

// var div = document.createElement('div')
// div.id = 'mydivid'

// var divText = document.createTextNode('This is div')
// div.appendChild(divText)
// console.log(div)
// body.replaceChild(div, para)

//delete dom element

// h2.remove()
// body.removeChild(h2)

// var button = document.createElement('button')
// console.log(button)
// button.id = 'mybtn'

// button.innerHTML = 'Click'

// var body = document.getElementById('body')
// body.appendChild(button)

//how to attach events to dom elements

// var button = document.getElementById('mybtn')
// console.log(button)

// var btnClick = () => {
//   console.log('btn clicked')
// }

// button.addEventListener('click', btnClick)


var parent = document.getElementById('parent')
var child = document.getElementById('child')
var subchild = document.getElementById('subchild')

//event bubling phase

// var parentFun = () => {
//   console.log('parent')
// }

// parent.addEventListener('click', parentFun, false)

// var childFun = (e) => {
//   console.log('child')
//   // e.stopPropagation()
// }

// child.addEventListener('click', childFun, false)

// var subChildFun = (e) => {
//   console.log(e)
//   console.log(e.target)
//   console.log(e.clientX)
//   console.log(e.clientY)
//   console.log(e.offsetX)
//   console.log(e.offsetY)
//   console.log('sub child')
// }

subchild.addEventListener('click', subChildFun, false)


//event capturing phase

// var parentFun = () => {
//   console.log('parent')
// }

// parent.addEventListener('click', parentFun, true)

// var childFun = () => {
//   console.log('child')
// }

// child.addEventListener('click', childFun, true)

// var subChildFun = () => {
//   console.log('sub child')
// }

// subchild.addEventListener('click', subChildFun, true)

//event delegation

// var table = document.getElementById('table')

// var btnClick = () => {
//   console.log('click')
// }

// table.addEventListener('click', btnClick)







