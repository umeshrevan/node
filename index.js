const prompt=require('prompt-sync')();
const fs = require('fs');
const getData = JSON.parse(fs.readFileSync('./data.json' , 'utf-8'));
console.log(getData);

class Register {
    constructor() {
        var name = prompt('Enter your name: ')
        var email = prompt('Enter your email: ')
        var password = prompt('Enter your password:')
        if (name=="" || email=="" || password == "") {
            console.log("Enter details...");
        }
        else if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)){
            console.log("Enter valid email address");
        }
        else {
            this.name=name;
            this.email=email;
            this.password=password;
            this.toDolist=[];
        }
    }
}

class Login {
    constructor(){
        var email =prompt("Enter your email address: ")
        var password =prompt("Enter your password: ")
        const indexx =getData.userData.findIndex((object) => (object.email==email && object.password == password));
        if (indexx==-1) {
            console.log("Enter valid email address and password");
        }
        else{
            this.toDolist(indexx);
        }   
    }
     
    toDolist(indexx) {
        console.log("Welcome to to do list task: ")
        var Tasks = getData.userData[indexx].toDolist
    let t =true;
    while (t) {
        console.log("Enter 1 for Add task: ");
        console.log("Enter 2 for Display task: ");
        console.log("Enter 3 for Update task: ");
        console.log("Enter 4 for Delete task: ");
        console.log("Enter 5 for Exit: ");
        var choice = prompt("Enter your choice: ");
        if(choice==1) {
            var addTask = prompt("Enter your task: ");
            Tasks.push(addTask);
            console.log(Tasks);
            console.log("Tasks Added successfully");
        }
        else if(choice==2) {
            console.log(Tasks)
        }
        else if(choice==3) {
            var updateTask = prompt("Enter task name to update: ");
            const index = Tasks.indexOf(updateTask)
            if(index == -1) {
                console.log("Task not found");
            }
            else{
            var newTask =prompt("Enter new task name: ");
            Tasks = newTask;
            console.log("Task Updated successfully");
            }
        }
        else if(choice==4) {
            var deleteTask = prompt("Enter task to delete: ");
            const index = Tasks.indexOf(deleteTask)
            if(index==-1) {
                console.log("Tasks does not exist");
            }
            else{
                Tasks.splice(index, 1);
                console.log("Task deleted successfully");
            }
        }
        else if (choice == 5){
            if(Tasks.length!=0){
                getData.userData.push(Tasks);
                const jsonObj=JSON.stringify(getData);
                fs.writeFileSync("./data.json", jsonObj);
            }
            t=false
        }
        else{
            console.log("Invalid choice");
        }
    }
}


}

let  t=true;
while (t) {
    console.log("Enter 1 for Login: ");
    console.log("Enter 2 for Registration: ");
    console.log("Enter 3 for Exit: ");
    var ch = prompt('Enter your choice...');
    if (ch == 2){
        const register = new Register();
        if(Object.keys(register).length!=0){
            getData.userData.push(register);
            const jsonObj=JSON.stringify(getData);
            fs.writeFileSync("./data.json", jsonObj);
        }
    }
    else if(ch == 3){
        t=false;
    }
    else if(ch == 1){
        const login = new Login();
    }
}