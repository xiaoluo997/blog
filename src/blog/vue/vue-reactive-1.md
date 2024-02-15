`Vue`作为前端主流的前端框架之一，改变了传统的命令式操作 Dom 的方式，释放了开发者的“双手”，其模板语法和双向绑定可以让开发者快速上手，无需了解底层的原理便可进行开发，极大的提高了开发效率。那么你知道 Vue 的双向绑定是怎么做的吗？

# 数据劫持

## Object.defineProperty

[Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 静态方法会直接在一个对象上定义一个新属性，或修改其现有属性，并返回此对象。
这个方法的第三个参数传递一个配置，其值有

```js
const obj = { name: 'xiaoluo' }

Object.defineProperty(obj, age, {
  configurable: true,
  enumerable: true,
  value: 18,
  writable: true,
  get: function getter() {
    // 读取 age 属性的时候会触发
    console.log('读取了age')
    return 18
  },
  set: function setter(newVal) {
    // 给 age 属性设置值的时候会触发
    console.log('设置了age')
  },
})
```

上面的例子是给 `obj` 对象新添加一个 `age` 属性，当我们 `obj.age` 的时候就会触发 `getter` 函数，当我们 `obj.age = 20` 的时候就会触发 `setter` 函数。我们可以在 `getter` 函数中收集“那些地方用到了” `age` 这个变量。当 age 的值变化的时候，我们再去通知“用到 age 变量”的地方重新执行。这便是 Vue 响应式的核心。
::: tip
用专业术语来讲在`getter`中收集的是依赖，在`setter`中触发依赖，至于什么事依赖，请看 [Watcher](./watcher)
:::

## 递归处理 Data

在 Vue2 中我们以 options Api 配置的 Data 都会被递归的将属性处理成 `getter`、`setter`函数的写法。
举一个 🌰，以下面的 `person` 对象。我们首先会拿到 `person` 对象所有的 key,然后循环调用 `Object.defineProperty`就可以啦。

```js
const person = { name: '小洛', age: 18, gender: '1' }

const keys = Object.keys(person)

for (let key in keys) {
  Object.defineProperty(person, key, {
    configurable: true,
    enumerable: true,
    get: function getter() {
      return person[key]
    },
    set: function setter() {
      // 这里设置值
    },
  })
}
```

上面这样就可以将 `person` 对象的属性处理为 `getter`、`setter` 的写法了。我们可以发现，在 for 循环里直接调用 defineProperty 代码量有点臃肿，我们可以将其封装为一个函数。

```js
function defineReactive(obj, key, val) {
  if (arguments.length === 2) {
    val = obj[key]
  }
  Object.defineProperty(obj, key, {
    enumerable: true, // 可以被枚举
    configurable: true, // 可以被修改
    get: function defineReactiveGetter() {
      const value = val
      // 收集依赖
      return value
    },
    set: function defineReactiveSetter(newVal) {
      val = newVal
      // 通知依赖去更新
    },
  })
}
```

上面 for 循环中所做的事情是将一个便利一个对象，最后调用 Object.defineProperty()处理成`getter`,`setter`写法。我们可以将便利对象的功能封装到 Observer 类中。该类的功能就是传入一个对象或数组，将其处理为响应式。

```js
class Observer {}


const observe = () {
  
}
```
