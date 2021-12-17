var clicked = document.getElementById('Add')
var curRow = 0

function onClick(e){
    e.preventDefault()
   var task = document.getElementById('Task')
   if(task.value.trim().length == 0){
       alert('No Empty Values')
   } else {
    if(clicked.innerHTML == 'Name'){
        let location = clicked.innerHTML
        let value = task.value
        clicked.innerHTML = 'Task'
        task.placeholder = 'What is your task?'
        task.value = ''
        let index = addRow()
        curRow = index
        console.log(index,location,value)
        fillValue(index,location,value)
    } else
    if(clicked.innerHTML == 'Task'){
        let location = clicked.innerHTML
        let value = task.value
        clicked.innerHTML = 'Name'
        task.placeholder = 'What is your name?'
        task.value = ''
        console.log(curRow,location,value)
        fillValue(curRow,location,value)
        let complete = document.getElementById(`CompleteBtn-${curRow}`)
        complete.setAttribute('onClick','strike(this)')
    }
   }
}

function strike(item){
   let id = item.id.split('-')[1]
   let row = document.getElementById(id)
   row.setAttribute('class','strikeout')
}

function fillValue(index,location,value){
    let data = document.getElementById(`${location}-${index}`)
    data.innerHTML = value
}

function addRow(){
    let taskTable = document.getElementById('taskTable')
    let row = document.createElement('tr')
    let item1 = document.createElement('td')
    let item2 = document.createElement('td')
    let item3 = document.createElement('td')
    let complete = document.createElement('button')

    complete.innerHTML = 'Complete'

    taskTable.append(row)
    row.setAttribute('id',`${row.rowIndex}`)
    item1.setAttribute('id',`Name-${row.rowIndex}`)
    item2.setAttribute('id',`Task-${row.rowIndex}`)
    item3.setAttribute('id',`Complete-${row.rowIndex}`)
    row.append(item1)
    row.append(item2)
    row.append(item3)
    item3.append(complete)
    complete.setAttribute('id',`CompleteBtn-${row.rowIndex}`)
    return row.rowIndex
}

function addValue(){

}
clicked.addEventListener("click",onClick)