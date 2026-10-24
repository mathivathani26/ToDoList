var taskInput = document.getElementById("taskInput");
var taskList  = document.getElementById("taskList");

// add a task dynamically
function addTask() {
  var text = taskInput.value.trim();
  if (text === "") { alert("Please enter a task."); return; }

  var li = document.createElement("li");

  var span = document.createElement("span");
  span.textContent = text;
  span.onclick = function () { toggleTask(li); };

  var doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.className = "done-btn";
  doneBtn.onclick = function () { toggleTask(li); };

  var delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "del-btn";
  delBtn.onclick = function () { deleteTask(li); };

  var btns = document.createElement("div");
  btns.appendChild(doneBtn);
  btns.appendChild(delBtn);

  li.appendChild(span);
  li.appendChild(btns);
  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();
}

// update task status (completed / not completed)
function toggleTask(li) {
  li.classList.toggle("completed");
}

// remove task from the list
function deleteTask(li) {
  taskList.removeChild(li);
}

// press Enter to add
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});
