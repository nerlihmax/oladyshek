# Oladyshek

Площадка для распространения кулинарных рецептов.

## Сервисы

### [recepies-service](https://github.com/nerlihmax/oladyshek/tree/main/recepies-service)

Отдает и обрабатывает данные рецептов.


### [gql-gateway-service](https://github.com/nerlihmax/oladyshek/tree/main/gql-gateway-service)

Предоставляет GraphQL API для любых клиентов.

### [auth-service](https://github.com/nerlihmax/oladyshek/tree/main/auth-service)

Отвечает за авторизацию/аутентификацию.


### [profiles-service](https://github.com/nerlihmax/oladyshek/tree/main/profiles-service)

Отвечает за пользователей и их профайлы.

## Клиенты

### [mobile](https://github.com/nerlihmax/oladyshek/tree/main/mobile)

Мобильное нативное приложения для Android.


### [mobile-render](https://github.com/nerlihmax/oladyshek/tree/main/mobile-render)

Рендерит DivKit-верстку для мобильных устройств.


### [super-admin](https://github.com/nerlihmax/oladyshek/tree/main/super-admin)

Мониторинг, логи, аналитика, статистика, CMS.


## gRPC

-   Папки сервисов должны заканчиваться на `-service` для подхвата кодгена.
-   Proto-файлы держим в корне репозитория в [`/proto`](https://github.com/nerlihmax/oladyshek/tree/main/proto).
-   Скрипт для кодгена [`/scripts/proto-generate.sh`](https://github.com/nerlihmax/oladyshek/tree/main/scripts/proto-generate.sh).
-   Сгенерированный код будет лежать в папке `proto-gen`.
-   Скрипт для копирования /proto в корень каждого сервиса : [`/scripts/copy-proto.sh`](https://github.com/nerlihmax/oladyshek/tree/main/scripts/copy-proto.sh)
