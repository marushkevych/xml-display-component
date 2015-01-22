var space = String.fromCharCode(160);
var doubleSpace = space + space;

var OpeningTag = React.createClass({displayName: "OpeningTag",
    render: function() {
        var data = this.props.data;
        var icon = doubleSpace;
        if (data.nodes) {
            icon = data.expand ? "- " : "+ ";
        }

        var backSlush = data.value || data.nodes ? "" : "/";
        var closingTag = data.value ? "</" + data.name + ">" : "";
        var attributes = "";
        _.each(data.attrs, function(value, key) {
            attributes += ' ' + key + '="' + value + '"';
        });

        return React.DOM.li(null,
            icon,
            React.DOM.span({className: "xml-element"},
                "<", data.name, 
                React.DOM.span({className: "xml-attribute"}, attributes), 
                    backSlush, ">"
            ),
            space, data.value, space,
            React.DOM.span({className: "xml-element"},
                closingTag
            )
        );
    }
});

module.exports = OpeningTag;