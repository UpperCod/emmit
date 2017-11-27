# Emmit

It is a small library for the management of events, this is based on the library [mitt](https://github.com/developit/mitt), but it is built according to a class.

```bash
yarn add -D emmit
```

```npm
npm install -D emmit
```

## Instance

Emmitt operates like any event manager

```javascript
import Emmit from 'emmit';

let events = new Emmit;

let jumpUnsubscribe = events.on('jump',(argument)=>{
   // listener event jump
})

let anyUnsubscribe = events.on('*',(argument)=>{
   // listener any event
})

events.emit('jump',10);

```

> as you will notice every time you store an event emmit returns an unsubscribe for the stored event.

## Subscribers in the instance

You can define an object that already stores events from the instance of emmit

```javascript
let events = new Emmit({
   jump : [()=>{
       // listener event jump
   }]
})
```
