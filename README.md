# xml-display-component

Render xml as expandable tree using ultrafast React.js

## Install

`bower install marushkevych/xml-display-component --save`

## Usage (see 'example' folder)
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

where xml is JSON object - representation of xml file. See `example/xml.js' for JSON example.
