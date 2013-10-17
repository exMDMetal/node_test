Install application
!Если не установлена нода, устанавливаем. http://nodejs.org/download/ 
1. Клонировать репозиторий. 
2. В директории проэкта запустить команду npm install 
3. В WebStorm IDE настраиваем конфигурацию сервера: 
        1) Добавляем конфигурацию NodeJS; 
        2) Node interpreter: Если не указан путь к node.exe - указываем :) 
        3) Working directory: Указываем директорию проэкта(если не указана); 
        4) JavaScript file: Указываем входящий файл приложенния (в нашем случае app.js в корне проэкта); 
        5) Environment variables: 
              - создаём новое поле: NODE_PATH, значение . ; 
              - создаём новое поле: NODE_ENV, значение development ;

Качаем и устанавливаем MongoDB. http://www.mongodb.org/downloads
Создаём директорию где будет лежать база.
Из директории bin в mongo запускаем демон командой: mongod --dbpath /example --port 8100 
(/example -относительный путь к директории созданой для базы, в нашем случае указываем порт 8100)
