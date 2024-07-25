// const scheduleDiv = document.getElementById("schedule");
// let data =  [
//         {
//         "id": 1,
//         "name": "Йога",
//         "time": "10:00 - 11:00",
//         "maxParticipants": 15,
//         "currentParticipants": 8,
//         "isBusy": false
        
//     },
//     {
//         "id": 2,
//         "name": "Пилатес",
//         "time": "11:30 - 12:30",
//         "maxParticipants": 10,
//         "currentParticipants": 5,
//         "isBusy": false
       
//     },
//     {
//         "id": 3,
//         "name": "Кроссфит",
//         "time": "13:00 - 14:00",
//         "maxParticipants": 20,
//         "currentParticipants": 15,
//         "isBusy": false
        
//     },
//     {
//         "id": 4,
//         "name": "Танцы",
//         "time": "14:30 - 15:30",
//         "maxParticipants": 12,
//         "currentParticipants": 10,
//         "isBusy": false
        
//     },
//     {
//         "id": 5,
//         "name": "Бокс",
//         "time": "16:00 - 17:00",
//         "maxParticipants": 8,
//         "currentParticipants": 6,
//         "isBusy": false
        
//         }
//     ]



// // function renderSchedule() {
// //     data.schedule.forEach(item => {
// //         const table = document.createElement("div");
// //         table.classList.add("table");
// //         table.innerHTML = `
// //         <td>${item.id}</td>
// //         <td>${item.name}</td>
// //         <td>${item.time}</td>
// //         <td>Максимум участников: ${item.maxParticipants}</td>
// //         <td>Записано участников: ${item.currentParticipants}</td>
// //         <button onclick="registerButton(${item.id})" ${item.currentParticipants >= item.maxParticipants ? "disabled" : ""}>Записаться</button>
// //         <button onclick="cancelButton(${item.id})">Отменить запись</button>
// //         `;
// //         scheduleContainer.appendChild(table);
// //     });
// // }


// // function register(id) {
// //     const item = data.schedule.find(item => item.id === id);
// //     if (item && item.currentParticipants < item.maxParticipants) {
// //         item.currentParticipants++;
// //         renderSchedule();
// //     } else{
// //         alert("Максимум участников.");
// //     }
// // }
// // console.log(register);

// // const registerButtonEl = document.querySelector("#registerButton");
// // registerButtonEl.addEventListener("click", () => {
// //     const item = data.schedule.find(item => item.id === id);
// //     if (item && item.currentParticipants < item.maxParticipants) {
// //         item.currentParticipants++;
// //         renderSchedule();
// //     } else{
// //         alert("Максимум участников.");
// //     }
// // })

// // function cancel(id) {
// //     const item = data.schedule.find(item => item.id === id);
// //     if (item.currentParticipants > 0) {
// //         item.currentParticipants--;
// //         renderSchedule();
// //     }
// // }

// // const cancelButtonEl = document.querySelector("#cancelButton");

// // cancelButtonEl.addEventListener("click",() => {
// //     const item = data.schedule.find(item => item.id === id);
// //     if (item.currentParticipants > 0) {
// //         item.currentParticipants--;
// //         renderSchedule();
// //     }
// // })

// // renderSchedule();





// // -------------------------------
// // schedule.forEach((item) => {
// //     const courseDiv = document.createElement('div');
// //     courseDiv.innerHTML = `${item.id} ${item.name} ${item.time} (${item.currentParticipants}/${item.maxParticipants})`;

// //     const registerButton = document.createElement('button');
// //     registerButton.textContent = 'Записаться';
// //     // if(item.currentParticipants === item.maxParticipants) {
// //     //     registerButton.disabled = false;
// //     // }

// //     registerButton.addEventListener('click', () =>{
// //         if (item.currentParticipants < item.maxParticipants) {
// //             item.currentParticipants++;
// //             // if (Number(item.currentParticipants) === Number(item.maxParticipants)) {
// //             //     registerButton.classList.add('disabled');
                
// //             // }
        
// //         courseDiv.innerHTML = `${item.id} ${item.name} ${item.time} (${item.currentParticipants}/${item.maxParticipants})`;
// //     }
// //     });
// //     // if (Number(item.maxParticipants) === Number(item.currentParticipants)) {
// //     //     const registerButton = document.getElementById(`${item.id}`);
// //     //     registerButton.classList.add('disabled');
// //     // }

// //     const cancelButton = document.createElement('button');
// //     cancelButton.textContent ='Отменить запись';
// //     // if(item.currentParticipants === 0) {
// //     //     cancelButton.disabled = true;
// //     // }
// //     cancelButton.addEventListener('click', () =>{
// //         if (item.currentParticipants > 0) {
// //             item.currentParticipants--;
// //             // if (item.currentParticipants < item.maxParticipants) {
// //             //     registerButton.disabled = false;
                
// //             // }
// //             courseDiv.innerHTML = `${item.id} ${item.name} ${item.time} (${item.currentParticipants}/${item.maxParticipants})`;
// //         }
// //     });
// //     courseDiv.appendChild(registerButton);
// //     courseDiv.appendChild(cancelButton);
// //     scheduleDiv.appendChild(courseDiv);
// // });




// // _______________________________________

// // Получение данных из LocalStorage
// const storedData = localStorage.getItem("data");
// if (storedData) {
//   data = JSON.parse(storedData);
// }

// // Функция обновления количества записанных участников и состояния кнопок
// function updateData(id, isBusy) {
//   const course = data.find((course) => course.id === id);
//   if (isBusy && course.currentParticipants < course.maxParticipants) {
//     course.currentParticipants++;
//   } else {
//     course.currentParticipants--;
//   }
//   course.isBusy = isBusy;
//   -
//   // Обновление LocalStorage
//   localStorage.setItem("data", JSON.stringify(data));
// }

// // Создание таблицы расписания занятий
// function createTable() {
//   const table = document.createElement("table");
//   const thead = document.createElement("thead");
//   const tbody = document.createElement("tbody");

//   thead.innerHTML = "<tr><th>id</th><th>Курс</th><th>Время</th><th>Макс. участников</th><th>Участники</th><th>Занят</th><th>Записаться/Отменить запись</th></tr>";
//   table.appendChild(thead);

//   for (const course of data) {
//     const row = document.createElement("tr");
//     row.innerHTML = `
//       <td>${course.id}</td>
//       <td>${course.name}</td>
//       <td>${course.time}</td>
//       <td>${course.maxParticipants}</td>
//       <td>${course.currentParticipants}/${course.maxParticipants}</td>
//       <td>${course.isBusy ? "Да" : "Нет"}</td>
//       <td>
//         ${course.isBusy ? `
//           <button class="btn btn-secondary" onclick="updateData(${course.id}, false)">Отменить запись</button>
//         ` : `
//           <button class="btn btn-primary" disabled>Записаться</button>
//           <button class="btn btn-success" onclick="updateData(${course.id}, true)">Записаться</button>
//         `}
//       </td>
//     `;
//     tbody.appendChild(row);
//   }
//   table.appendChild(tbody);

//   document.body.appendChild(table);
// }

// // Создание таблицы расписания занятий
// createTable();