[![Tests](../../actions/workflows/tests.yml/badge.svg)](../../actions/workflows/tests.yml)

# react-mesto-api-full

Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Деплой на виртуальной машине Yandex Cloud.

Адрес репозитория: https://github.com/Segodnya/react-mesto-api-full-gha

## Ссылки на проект

IP 158.160.26.188

Frontend https://segodnya.nomoredomains.rocks

Backend https://api.segodnya.nomoredomains.rocks

## TODO

- Реализовать логирование запросов и ошибок
- Объединить фронтенд и бэкенд части приложения
- Создать облачный сервер и развернуть API
- Проверить, что вся функциональность сохранена
- Создать .env-файл (NODE_ENV=production, JWT_SECRET)
- Создать домен и прикрепить его к серверу
- Выпустить SSL-сертификат и подключить их
- Добавить код для краш-тест сервера (pm2)
- Добавить ссылку на репозиторий, а также публичный IP-адрес сервера и домен, по которому к нему можно обратиться, в файл README

## Последовательность действия по деплою на облачный сервер

Спасибо @EvgenyTomson

1. [Готово] Проверить, что у бек и фронт на локальной машине дружат, все эндпойнты отрабатывают и т.д. CORS при этом оставить открытым для всех origin.
2. [Готово] Залить бек на сервер (фронт не трогать), развернуть там, получить доменные имена, настроить nginx и проверить, что локальный фронтенд работает с api на сервере также без ошибок.
3. [Готово] Сбилдить фронтенд локально и проверить, что все по-прежнему работает хорошо в связке с api на сервере.
4. [Готово] Залить сбилженный фронтенд на сервер, настроить nginx, проверить, что по http все работает в связке.
5. [Готово] Выпустить сертификат и проверить, что все работает и по https.
6. Поменять настройки CORS на сервере, оставив в разрешенных origins только свой домен фронта, после чего все перепроверить еще раз на работоспособность.
7. Добавить на сервер .env с настройками и перепроверить еще раз.
