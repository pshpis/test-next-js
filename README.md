Make demo with render leaf component in server parent and client parent

Вопросы:
- пропс серверный лист в клиентскую мать
- use server и use client откуда
- какая магия реализована реактом, а какая некстом
- что полезного делает некст, кроме реакт сервер компонент
- что делает **_Suspense_** когда дети релоадится и как они общаются
- как общается бэк некста/реакта с фронтом
  - например в саспенсе
- **_renderToPipeableStream_** отличия с renderToStream
- убедиться, что Suspense - точка где реакт сегментирует рендеринг, то есть до него html дадут сразу, а внутри него html прилетит потом по ??вебсокетам??
- Дед серверный, папа-мама серверные, у родителей клиентские дети и дети хотят общаться
- Убедиться что клиенту в пропсы нельзя запустить порождающюю сервеный компонент функцию, но можно вставить уже готовый серверный компонент из пропсов

```
<ServerGranFather>
const fatherServer, motherServer = ...;
<ClientGrandFather props={mother, father}>
{MotherServer}
{Father}
</ClientGrandFather>
</ServerComponent>
```


