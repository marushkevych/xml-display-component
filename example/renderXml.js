
React.render(
    React.DOM.div({className: "xml"},
        React.createElement(XmlDisplayComponent, {data: xml, expanded: true})
    ),
    document.getElementById('content')
);
