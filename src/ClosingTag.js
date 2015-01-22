var space = String.fromCharCode(160);
var doubleSpace = space + space;
var cx = React.addons.classSet;

var ClosingTag = React.createClass({displayName: "ClosingTag",
    render: function() {
        var classes = cx({
            'hidden': this.props.data.expand != true
        });
        var tag = doubleSpace + "</" + this.props.data.name + ">";
        return this.props.data.nodes != null &&
            React.DOM.div({className: classes},
                React.DOM.span({className: "xml-element"},
                    React.DOM.li(null, tag)
                )
            );
    }
});

module.exports = ClosingTag;