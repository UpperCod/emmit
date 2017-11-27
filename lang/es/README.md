# Emmit

Es una pequeña librería para la gestión de eventos, esta se encuentra basada en la libreria [mitt](https://github.com/developit/mitt), pero esta se encuentra construida en función de una clase.

```bash
yarn add -D emmit
```

```npm
npm install -D emmit
```

## Instancia

Emmit opera como cualquier gestor de eventos

```javascript
import Emmit from 'emmit';

let events = new Emmit;

let jumpUnsubscribe = events.on('jump',(argument)=>{
   // escucha el evento jump
})

let anyUnsubscribe = events.on('*',(argument)=>{
   // escucha todos los evento
})

events.emit('jump',10);

```

> como notará cada vez que ud almacena un evento emmit devuelve un unsubscribe para el evento almacenado.

## Suscriptores en la instancia

Ud puede definir un objeto que ya almacene eventos desde la instancia de emmit

```javascript
let events = new Emmit({
   jump : [()=>{
        // escucha el evento jump
   }]
})
```
