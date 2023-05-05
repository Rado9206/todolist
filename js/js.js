let todoInput //input
let errorInfo //error messenge
let addBtn // add button
let ulList // takslist

const main = () => {
	prepareDOMelements()
	prepareDOMevents()

}
const prepareDOMelements = () => {
todoInput = document.querySelector('.todo-input')
errorInfo = document.querySelector('.error-info')
addBtn = document.querySelector('.btn-add')
ulList = document.querySelector('.todolist ul')
}
const prepareDOMevents = () => {

}

document.addEventListener('DOMContentloaded', main)