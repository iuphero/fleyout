# Fleyout 
Fleyout is a easy, declarative, compatible CSS flexbox layout.   

## Benefits
- **Easy** — Only using two attributes(`layout` and `flex`) in html 
- **Declaravtive** - Semantic syntax makes you understand what happened 
- **Compatible** - Supported old version flexbox, it is compatible with many old browser include `<Android 4.4`


## Basic example

```
<div layout="row center-center">
    <div flex="1">flex-grow is 1</div>
    <div flex="2">flex-grow is 2</div>
</div>
```

## Two attributes
Use `layout` and `flex` attribute in HTML control layout.  
using `layout` in parent container, using `flex` in child.


### layout  
`layout` can contain multi values.

value | meaning
----- |  ------
`row` | `flex-direction: row`  
`col` | `flex-direction: column` 
`rows`| `flex-direction: row` and `flex-wrap: wrap` 
`cols`| `flex-direction: col` and `flex-wrap: wrap` 
`inline` | `display: inline-flex` 
`start-end` and so on. Format is `mainAxis-crossAxis`  | Main axis(justify-content) is flex-start , cross axis(align-items) is end. Main axis placeholder can be `start`, `end`, `center`, `around`, `between`, cross axis placeholder can be `start`, `end`, 
`center`, `baseline`, `stretch`. 


Example:  

```
<div layout="rows inline center-stretch">
    ...
</div>


<div layout="col end-start">
    ...
</div>
```


### flex 
`flex` can be value from 1 to 12.   
`flex="1"` means `flex-grow: 1`   


Example: 

```
<div layout="row  center-stretch">
    <div flex="1"> flex-grow is 1 </div>
    <div flex="2"> flex-grow is 2 </div>
</div>
```
