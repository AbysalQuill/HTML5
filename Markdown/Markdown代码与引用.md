# Markdown代码与引用

## 1. 行内代码

### 基本语法

```markdown
使用 `console.log()` 输出日志
```

说明：单个反引号包裹代码，适合在段落中标记代码片段

## 2. 代码块

### 缩进式代码块

```markdown
    function hello() {
        console.log("Hello");
    }
```

说明：每行缩进4个空格或1个Tab创建代码块（旧式语法）

### 围栏式代码块

```markdown
```javascript
function hello() {
    console.log("Hello");
}
```
```

说明：三个反引号包裹代码块，支持指定语言实现语法高亮

### 多语言支持

````markdown
```python
print("Hello")
```

```html
<div>Hello</div>
```

```css
body { color: red; }
```
````

说明：支持JavaScript、Python、HTML、CSS等常见语言的语法高亮

## 3. 引用

### 基本引用

```markdown
> 这是一段引用文本
> 可以换行继续
```

说明：使用大于号创建引用，每行前加>符号

### 引用中包含其他元素

```markdown
> ## 引用中的标题
> 
> - 引用中的列表
> - 列表项2
> 
> **加粗文字**
```

说明：引用块内可使用标题、列表、强调等所有Markdown语法

### 嵌套引用

```markdown
> 第一层引用
> > 第二层引用
> > > 第三层引用
```

说明：多个>符号实现嵌套引用效果

### 引用中的段落

```markdown
> 第一段引用内容
> 
> 第二段引用内容
```

说明：空行后继续>可创建引用中的新段落
