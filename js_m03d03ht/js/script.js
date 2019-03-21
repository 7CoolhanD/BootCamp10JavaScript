'use strict'

/* ---------------------------------------------------------- Home work module 3 -------------------------------------------------------------------

  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
  
  Добавляемый логин должен:
    - проходить проверку на длину от 4 до 16-ти символов включительно
    - быть уникален, то есть отсутствовать в массиве logins
 
  🔔 Разбейте задачу на подзадачи с помощью функций.
  
  Напишите функцию isLoginValid(login), в которой проверьте количество символов 
  параметра login и верните true или false в зависимости от того, попадает ли длина параметра 
  в заданный диапазон от 4-х до 16-ти символов включительно.
 
  Создайте функцию isLoginUnique(allLogins, login), которая принимает логин и список 
  всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true 
  если такого логина еще нет и false если логин уже используется.
  Далее напишите функцию addLogin(allLogins, login) которая:
    - Принимает новый логин и массив всех логинов как параметры
    - Проверяет валидность логина используя вспомогательную функцию isLoginValid
    - Если логин не валиден, прекратить исполнение функции addLogin 
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    - Если логин валиден, функция addLogin проверяеть уникальность логина 
      с помощью функции isLoginUnique
    - Если isLoginUnique вернет true, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
    - Если isLoginUnique вернет false, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'
       
  🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это 
     позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
     не затрагивая работу программы в целом. Предикатные функции возвращают только true или 
     false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
      - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false. 
      - isLoginValid только проверяет валидный ли логин и возвращает true или false.
      - addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления 
        используются результаты вызовов других функций - isLoginUnique и isLoginValid.
*/

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const updatedLoginBase = [logins];
let login = prompt('Введите логин');
console.log('Existing logins database: ', logins);



const isLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};
const loginValidationResult = isLoginValid (login); 

const isLoginUnique = function(logins, login) {
if (logins.includes(login)) {
  return true;
}
return false
};

const checkIfLoginExistsResult = isLoginUnique(logins, login);

const addLogin = function(logins, login) {
  console.log('Entered login: ', login);
    console.log('login length:', login.length);
    isLoginValid(login);
    console.log('Length Validity (4-16):', loginValidationResult);

    if (!loginValidationResult) {
      return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  } else {
      console.log(
          `Checking login " ${login} " for existance in the base of logins...`,
      );
      isLoginUnique(logins, login);
  }
  if (!checkIfLoginExistsResult) {
      console.log('Данный логин отсутствует в базе логинов');
      console.log('Логин успешно добавлен!');
      logins.push(login);
  } else {
      console.log('Такой логин уже используется!');
  }
};

addLogin(logins, login);



console.log('updated base of logins: ', logins);

// Вызовы функции для проверки
// addLogin('Ajax'); // 'Логин успешно добавлен!'
// addLogin('robotGoogles'); // 'Такой логин уже используется!'
// addLogin('Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin('jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'



