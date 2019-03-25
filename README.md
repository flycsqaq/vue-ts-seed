# seed
这是一个vue使用TypeScript的种子项目，该项目的结构参照Angular的结构。

## src结构
### 1. core
1. models: 模型，定义的typescript数据模型。
2. services: 服务，由axios提供的http服务
3. interceptors: 服务的全局拦截器
### 2. mixin
混入
### 3. shared
公共组件、复用组件
### 4. store
Vuex
### 5. styles
全局css样式
### 6. views
视图组件
### 7. directives
自定义指令

## 疑问
### 1.路由预加载
vue有路由预加载功能吗

## 功能
### 1. header
根据$router.options.routes创建header, 
todo: header关联子路由。

## TypeScript
[github](https://github.com/kaorun343/vue-property-decorator)
### 1. vue-class-component
1. Components
2. Minxins
### 2. vue-property-decorator
1. Prop
2. Model
3. Watch
4. Emit
5. Inject
6. Provide