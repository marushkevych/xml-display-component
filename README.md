# xml-display-component

Render xml as expandable tree using ultrafast React.js

Here is how it looks in the browser:

![example](https://raw.githubusercontent.com/marushkevych/xml-display-component/master/exmple.png)

> Note: starting from version 0.1.0, its compatible with Angular.js (not using `<a>` tag)

## Install

`bower install xml-display-component --save`

```html
<script src="bower_components/react/react-with-addons.min.js"></script>
<script src="bower_components/underscore/underscore-min.js"></script>
<script src="bower_components/xml-display-component/xml-display-component.js"></script>
```

## Usage
This package exposes global variable `XmlDisplayComponent`

Say you have following html
```html
<body>
    <div id="content"></div>
</body>
```

Use following script to render xml in content div:
```js
React.render(
    React.createElement(XmlDisplayComponent, {data: xml, expanded: true}),
    document.getElementById('content')
);
```

where xml is JSON object - representation of xml file. See below...

#### Using with Angular.js
React.js integrates nicely with Angular, simply wrap React component with angular directive:
```js
// angular directive
function displayXmlTree() {
    return {
        scope: {
            xml: '=displayXmlTree'
        },
        link: function(scope, el) {
            React.render(
                React.createElement(XmlDisplayComponent, {data: scope.xml, expanded: true}),
                el[0]
            );
        }
    };
}
```

## JSON representation of xml

#### The following xml:
```xml
<rootNode>  
    <child foo="bar">  
        <element1> value </element1>
        <element2> another value </element2>
    </child>
    <emptyElement/>  
</rootNode>
```

#### Must be represented as:

```JSON
{
  "name": "rootNode",
  "nodes": [
    {
      "name": "child",
      "attrs": {"foo":"bar"},
      "nodes": [
        {
          "name": "element1",
          "value": "value"
        },
        {
          "name": "element2",
          "value": "another value"
        },
      ]
    },
    {
       "name": "emptyElement"
    }
  ]
};
```
See `example/xml.js`

## Example
To run the example 
- change to example folder
- install dependencies

    ```
    bower install
    ```
- then navigate to index.html in your browser

## Styling
See `example/styles.css` for recommended styling

To enable folding of elements use:
```css
div.hidden {
  display: none;
}
```
