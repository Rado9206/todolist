let todoInput //input
let errorInfo //error messenge
let addBtn // add button
let ulList // takslist
let newTodo // new task

let popup //popup
let popupInfo //error messenge if add empty text
let todoToEdit // edited popup
let popupInput // input in popup
let popupAddBtn // button Zatwierdź into popup
let popupCloseBtn // button Anuluj into popup

const main = () => {
	prepareDOMelements() // pobiera nasze wszystkie elelmenty
	prepareDOMevents() //obsluguje addEventListenery
}

const prepareDOMelements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')

	popupPanel = document.querySelector('.add-todo-panel')
	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMevents = () => {
	addBtn.addEventListener('click', addNewTodo)
	ulList.addEventListener('click', checkClick)
	popupCloseBtn.addEventListener('click', closePopup)
	popupAddBtn.addEventListener('click', changeTodoText)
	todoInput.addEventListener('keyup', enterKeyCheck)
}

const addNewTodo = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		createTodoArea()
		ulList.append(newTodo)
		todoInput.value = ''
		errorInfo.textContent = ' '
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

const createTodoArea = () => {
	taskPanel = document.createElement('div')
	taskPanel.classList.add('tools')
	newTodo.append(taskPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	taskPanel.append(completeBtn, editBtn, deleteBtn)
}

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if (e.target.closest('button').classList.contains('edit')) {
		editTodo(e)
	} else if (e.target.matches('.delete')) {
		deleteTodo(e)
	}
}


const editTodo = e => {
	popupPanel.style.display = 'flex'
	todoToEdit = e.target.closest('li')
	popupInput.value = todoToEdit.firstChild.textContent
}

const closePopup = () => {
	popupPanel.style.display = 'none'
}

const changeTodoText = () => {
	if (popupInput.value !== '') {
		todoToEdit.firstChild.textContent = popupInput.value
		popupPanel.style.display = 'none'
		popupInfo.textContent = ''
	} else {
		popupInfo.textContent = 'Musisz podać jakąś treść!'
	}
}

const deleteTodo = e => {
	e.target.closest('li').remove()
	const allTodos = ulList.querySelectorAll('li')
	if (allTodos.length === 0) {
		errorInfo.textContent = 'Brak zadań na liście.'
	}
}

const enterKeyCheck = e => {
	if (e.key === 'Enter') {
		addNewTodo()
	}
}

document.addEventListener('DOMContentLoaded', main)
