angular.module('summApp', [])
  .controller('NumberListController', function() {
    var numberList = this;
    
    numberList.maxNumbers = 25;
    numberList.firstNumber = 8;
    numberList.secondNumber = 6;
    numberList.itemWidth = 39;
    
    numberList.numbers = new Array();
    for (i = 0; i <= numberList.maxNumbers; i++) {
      var style;
      if (i % 5 == 0) {
        style = 'font-weight: bold; font-size: 20px;';
      } else {
        style = '';
      }
      
      num = {
        numeric: i,
        style: style
      }
      numberList.numbers.push(num);
    }

    numberList.checkInput = function(inputNum, verifyNum, inputID) {     
      var elem = document.getElementById(inputID);

      if (parseInt(inputNum) == verifyNum) {
        elem.style.color = '#009900';
        elem.style.background = 'transparent';
        elem.style.border = 0;
        elem.disabled = true;
        
        if (inputID == 'ask-form-first-input') {
          document.getElementById('ask-form-arrow-number-1').style.display = 'inline-block';
        }
        
        if (inputID == 'ask-form-second-input') {
          document.getElementById('scale-sum-result').style.display = 'block';
        }
      } else {
        elem.style.color = 'red';
      }
    }
    
    numberList.calculateSumm = function(firstNum, secondNum, summaryID) {
      var elem = document.getElementById(summaryID);

      if (parseInt(numberList.summaryInput) == (parseInt(firstNum) + parseInt(secondNum))) {
        elem.style.color = '#009900';
        elem.style.background = 'transparent';
        elem.style.border = 0;
        elem.disabled = true;
      } else {
        elem.style.color = 'red';
      }
      

    }
    

    /*
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
    */
  });