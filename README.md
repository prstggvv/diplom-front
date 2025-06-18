# Дипломный проект для универа

Приложение которое строит расписание, для ВУЗОВ.

____

## Содержание
- [Статус проекта](#статус-проекта)
- [Технологии](#используемые-технологии)
- [Что планируется дальше?](#что-планируется-дальше)
- [Установка проекта](#установка-проекта)
- [Запуск проекта](#запуск-проекта)
- [Проверка линтинга](#проверка-линтинга)

___

## Статус проекта

В разработке!
___

## Технологии

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%238DD6F9.svg?style=for-the-badge&logo=vite&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

____
## Что планируется дальше?
- Добавить разделение админ и пользователь
- Улучшить дизайн вывода расписания
- Добавить удобное управление таблицей для расписания

____
## Установка проекта
Клонирование проекта SSH:
```sh
$ git clone git@github.com:prstVanya/portfolio.git
```

Установка зависимостей:
```sh
$ npm i
```
___

## Запуск проекта
Запуск проекта:
```sh
npm run start
```

development сборка:
```sh
npm run build:dev
```

production сборка: 
```sh
npm run build
```
____

## Проверка линтинга
Для проверки TypeScript-файлов используется ESLint с конфигурацией airbnb-base.

Проверка ts-файлов:
```sh
npm run lint:ts
```

Исправить ts-файлы:
```sh
npm run lint:ts:fix
```

Для проверки CSS-файлов используется Stylelint.

Проверить css-файлы:
```sh
npm run lint:css
```

Исправить css-файлы:
```sh
npm run lint:css:fix
```
___