// Strict mode aplies some restrictions so we could not make stupid things (which are obviously allowed in JS by default), e.g., creating variables without specifying their type, i.e., const / let
'use strict'
// -------------------------------------
let todoInput // place to input the task
let errorInfo // info about no tasks / no text in input
let addBtn // ADD button - adding new elements to list
let ulList // task list, li tags
let newTodo // new li element / task / todo

let popup // popup window
let popupInfo // text inside the popup window
let todoToEdit // edit the task
let popupInput // input inside the popup
let popupAddBtn // confirm button
let popupCloseBtn // cancel button

const main = () => {
	// calling functions
	prepareDOMElements()
	prepareDOMEvents()
}
const prepareDOMElements = () => {
	// acquiring all elements
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')

    popup = document.querySelector('div.popup')
    popupInfo = popup.querySelector('.popup-info')
    popupInput = popup.querySelector('.popup-input')
    popupAddBtn = popup.querySelector('.popup-btn.accept')
    popupCloseBtn = popup.querySelector('.popup-btn.cancel')
}
const prepareDOMEvents = () => {
	// listeners
	addBtn.addEventListener('click', addNewTask)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)

}

const addNewTask = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
        createToolsArea()
		ulList.append(newTodo)
		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

const createToolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
    
	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'
    
	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	toolsPanel.append(completeBtn, editBtn, deleteBtn)
    // toolsPanel.addEventListener('click', checkClick)

	newTodo.append(toolsPanel)
}

const checkClick = (e) => {
    if (e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.edit')) {
        editTodo()
    } else if (e.target.matches('.delete')) {

    } else {

    }
}

const editTodo = () => {
    popup.style.display = 'flex'
}

const closePopup = () => {
    popup.style.display = 'none'
}

document.addEventListener('DOMContentLoaded', main)
