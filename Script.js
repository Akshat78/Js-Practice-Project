const taskContainer = document.querySelector(".task_container");

const newCard = (taskData) => `<div class="row task_container">
<div class="col-md-6 col-lg-4">
    <div class="card">
        <div class="card-header d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
            <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button></div>
        <img src=${taskData.imageUrl}
         class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">${taskData.taskTitle}</h5>
          <p class="card-text">${taskData.taskDescription}</p>
          <a href="#" class="btn btn-primary">${taskData.taskType}</a>
       </div>
       <div class="card-footer text-muted">
        <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
      </div>
      </div>
</div>

</div>`;

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value
    };
    taskContainer.insertAdjacentHTML("beforeend", newCard(taskData));
};