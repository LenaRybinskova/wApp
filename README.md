# wApp 
## В проекте использовались библиотеки:
- React
- React - Redux
- RTK Query
- React-router-dom

- Vite (инструмент сборки)

https://lenarybinskova.github.io/wApp/

С старта проекта Вы попадаете на страницу регистрации.
Валидация: все поля обязательно должны быть заполнены.

После нажатия кнопки Login, при успешной отправки запроса на сервер, происходит редирект на страницу /chat.
Введенные данные сохраняются в localStorage и далее используются для отправки запросов на сервер.

На странице /chat необходимо ввести номер телефона собеседника, начиная с 7 ( 11 цифр), нажать кнопку "создать чат".
После чего ние появится поле для отображения сообщений и форма для введения нового сообщения.
Проверка на наличие новых сообщений от собеседника происходит каждые 5 секунд.

![Image alt](https://github.com/LenaRybinskova/wApp/blob/main/auth.bmp)









