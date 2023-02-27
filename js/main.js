// Strict mode aplies some restrictions so we could not make stupid things (which are obviously allowed in JS by default), e.g., creating variables without specifying their type, i.e., const / let
'use strict'
// -------------------------------------
let todoInput // place to input the task
let errorInfo // info about no tasks / no text in input
let addBtn // ADD button - adding new elements to list
let ulList // task list, li tags
let newTodo // new li element / task / todo

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
}
const prepareDOMEvents = () => {
	// listeners
	addBtn.addEventListener('click', addNewTask)
}

const addNewTask = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		ulList.append(newTodo)
		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!'
	}
}

document.addEventListener('DOMContentLoaded', main)
