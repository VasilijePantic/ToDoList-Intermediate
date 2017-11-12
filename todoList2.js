var todos = ["pocetak"];

var input = prompt("what would you like to do?");


while(input !== "quit") {

	if (input === "list") {
		listTodos();
	}
	else if(input === "new") {
		addTodo();
	}
	else if(input === "delete") {
		deleteTodo();
	}
	input = prompt("what would you like to do?");

}
console.log("YOU QUIT")

function listTodos(){
	console.log("****")
	todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
	console.log("****");
}

function addTodo() {
	var newTodo = prompt("add new todo");
	todos.push(newTodo);
	console.log("Todo Added");
}

function deleteTodo(){
	var index = prompt("enter index od todo to delete");
		//xxx.splice() - da obrisemo podatak iz arraya
	todos.splice(index,1);
	console.log("Todo Deleted");
}