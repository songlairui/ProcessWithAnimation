# 动画演示JS执行过程  

## 使用方法  

```bash
npm install 
gulp serve && gulp watch
```

## 示例代码

《JavaScript高级程序设计》 6.3.1 章 原型链：

```javascript
function SuperType(){
        this.property = true;
}
SuperType.prototype.getSuperValue = function(){
  return this.property;
};
function SubType(){
    this.subproperty = false;
}
//    SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function (){
    return this.subproperty;
  };
var instance = new SubType();
alert(instance.getSuperValue());
//true
```

## 准备  

- [x] 6.3 章阅读
- [x] 图示手稿


## PROGRESS

1. 动画尝试

