# xml-display-component

Render xml as expandable tree using ultrafast React.js

## Install

`bower install marushkevych/xml-display-component --save`

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

where xml is JSON object - representation of xml file. See `example/xml.js` for JSON example.

## JSON representation of xml
The following xml should be represented as JSON below
```xml
<rootNode>  
    <child foo="bar">  
        <element1> value </element1>
        <element2> another value </element2>
    </child>
    <emptyElement/>  
</rootNode>
```

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
