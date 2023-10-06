![ljo](https://github.com/lorens-osman-dev/ljo/blob/main/ljo.png?raw=true)

# ljo( )

`ljo()` is a small JavaScript package that allows you to console log just once. This is particularly useful when you're console logging within a loop but only want the message to appear once.

### Installation

You can install `ljo` using npm:

```bash
npm install ljo
```

### Usage

The syntax for using  `ljo()`  is as follows:

```javascript
ljo(id, message, color, backgroundColor)
```

Here’s an example of how to use  `ljo()`:

```javascript
ljo(1,"hi","#ccc","#000")
```

In this example;

-  `1`  is the ID of the log message.
-  `"hi"`  is the message to be logged.
-  `"#ccc"`  sets the font color.
-  `"#000"`  sets the font background color.

>If you use the same ID for another log message,  `ljo()`  will not log it again. This means that each unique ID will only be logged once.

>If you didn't set font color or font background color, The default font color is  `"#13826D"`  and the default font background color is  `"#15221E"`.

Full example :
```javascript
import { ljo } from "ljo";

for (let  i  =  0; i  <  5; i++) {

	ljo(1, "hi", "#ccc", "#000")
	console.log(i)
}
/* 
Output is :
hi
0
1
2
3
4

*/
```
