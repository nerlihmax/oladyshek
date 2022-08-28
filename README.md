# Oladyshek

## Сервисы

### [recepies-service](https://github.com/nerlihmax/oladyshek/tree/main/recepies-service)

Отдает и обрабатывает данные рецептов.

-   ответственный: [@nerlihmax](https://github.com/nerlihmax)

### [gql-gateway-service](https://github.com/nerlihmax/oladyshek/tree/main/gql-gateway-service)

Предоставляет GraphQL API для любых клиентов.

-   ответственный: [@nerlihmax](https://github.com/nerlihmax)

### [auth-service](https://github.com/nerlihmax/oladyshek/tree/main/auth-service)

Отвечает за авторизацию/аутентификацию.

-   ответственный: [@kheynov](https://github.com/kheynov)

### [profiles-service](https://github.com/nerlihmax/oladyshek/tree/main/profiles-service)

Отвечает за пользователей и их профайлы.

-   ответственный: [@kheynov](https://github.com/kheynov)

## Клиенты

### [mobile](https://github.com/nerlihmax/oladyshek/tree/main/mobile)

-   ответственный: [@kheynov](https://github.com/kheynov)

### [mobile-render](https://github.com/nerlihmax/oladyshek/tree/main/mobile-render)

Рендерит DivKit-верстку для мобильных устройств

-   ответственный: [@nerlihmax](https://github.com/nerlihmax)

## gRPC

-   Сервисы должны общаться между собой только через gRPC.
-   Папки сервисов должны заканчиваться на `-service` для подхвата кодгена.
-   Proto-файлы держим в корнях папки сервиса в папке `proto`.
-   Скрипт для кодгена [`./scripts/proto-generate.sh`](https://github.com/nerlihmax/oladyshek/tree/main/scripts/proto-generate.sh).
-   Сгенерированный код будет лежать в папке `proto-gen`.
