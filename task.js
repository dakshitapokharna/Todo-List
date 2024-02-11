const form = document.getElementById("form");
    const input = document.getElementById("name");
    const number = document.getElementById("rollno")
    const list = document.getElementById("list");
    const list2 = document.getElementById("list2");
     form.addEventListener("submit",(e) => {
        e.preventDefault();
        const task = number.value.trim();
        if (task!==''){
           
            addTodoItem(task);
            number.value = '';
                }
               
     });
    function addTodoItem(task){
        const item = document.createElement('li');
        item.textContent = task;

         const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
         deleteButton.addEventListener('click',() => {
            deleteTodoItem(item);
            deleteButton.remove();
         }
         );

        list2.appendChild(deleteButton);
        list2.appendChild(item);
      
    }
     function deleteTodoItem(item) {
         item.remove();
        
     }
     form.addEventListener("submit",(e) => {
        e.preventDefault();
        const task = input.value.trim();
        if (task!==''){
           
            addTodoItem(task);
            input.value = '';
                }
               
     });
    function addTodoItem(task){
        const item = document.createElement('li');
        item.textContent = task;

         const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
         deleteButton.addEventListener('click',() => {
            deleteTodoItem(item);
            deleteButton.remove();
            
         }
         );

        list.appendChild(deleteButton);
        list.appendChild(item);
      
    }
     function deleteTodoItem(item) {
         item.remove();
        
     }

    //  const input1 = getElementById(calc1);
    //  const input2 = getElementById(calc2);
    //  form.addEventListener("submit",(e) => {
    //     e.preventDefault();
    //     const task1 = input1.value.trim();
    //     const task2 = input2.value.trim();
    //     if (task1!=='' && task2!==''){
           
    //         addTodoItem(task1,task2);
    //         input1.value = '';
    //         input2.value = '';
    //             }
               
    //  });
     
    //  function addTodoItem(task1,task2){
    //     const item = document.createElement('input');
    //     item.textContent = task1+task2;

    //     //  const func = document.createElement('button');
    //     // deleteButton.textContent = 'Delete';
    //     //  func.addEventListener('click',() => {
            
    //     //  }
    //     //  );

       
    //     input.appendChild(item);
      
    // }
    