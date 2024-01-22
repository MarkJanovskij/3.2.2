Берем ссылку на репозиторий из github. 2.
на нашем компьютере переходим в любую удобную для работы папку, например Desktop (cd Desktop) 3. Клонируем репозиторий (git clone тут ссылка на наш репозиторий из гитхаб) 4. переходим в наш только что скаченный проект, это папка (cd название папки) 5. устанавливаем зависимости проекта (npm install) 6. запускаем тесты (npx jest) или с измерением покрытия (npx jest --coverage)
1 Creat packeje.jason with coman in terminal npm init and finish it
2 packeje.jason change "scripts": {
"test": "jest"
},
