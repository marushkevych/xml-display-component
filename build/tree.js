var space = String.fromCharCode(160);
var doubleSpace = space + space;
var cx = React.addons.classSet;

var OpeningTag = React.createClass({displayName: "OpeningTag",
    render: function() {
        var icon = "";
        if (this.props.data.nodes) {
            icon = this.props.data.expand ? "- " : "+ ";
        } else {
            icon = doubleSpace;
        }

        var backSlush = this.props.data.value || this.props.data.nodes ? "" : "/";
        var closingTag = this.props.data.value ? "</" + this.props.data.name + ">" : "";
        var attributes = "";
        _.each(this.props.data.attrs, function(value, key) {
            attributes += ' ' + key + '="' + value + '"';
        });

        return (
            React.createElement("li", null,
                icon,
                React.createElement("span", {className: "xml-element"},
                    "<", this.props.data.name, 
                    React.createElement("span", {className: "xml-attribute"}, attributes), 
                        backSlush, ">"
                ),
                space, this.props.data.value, space,
                React.createElement("span", {className: "xml-element"},
                    closingTag
                )
            )
        );
    }
});

var OpeningTagLink = React.createClass({displayName: "OpeningTagLink",
    handleClick: function(e) {
        e.preventDefault();
        this.props.onLinkClick();
    },
    render: function() {
        if (this.props.data.nodes) {
            return (
                React.createElement("a", {onClick: this.handleClick},
                    React.createElement(OpeningTag, {data: this.props.data})
                )
            );
        } else {
            return (
                React.createElement(OpeningTag, {data: this.props.data})
            );
        }

    }
});

var ClosingTag = React.createClass({displayName: "ClosingTag",
    render: function() {
        var classes = cx({
            'hidden': this.props.data.expand != true
        });
        var tag = doubleSpace + "</" + this.props.data.name + ">";
        return this.props.data.nodes != null &&
            React.DOM.div({className: classes},
                React.createElement("span", {className: "xml-element"},
                    React.createElement("li", null, tag)
                )
            )
    }
});


var Tree = React.createClass({displayName: "Tree",
    shouldComponentUpdate: function(nextProps, nextState) {
        return this.state != nextState;
    },
    getInitialState: function() {
        return {expanded: this.props.data.expand === true};
    },
    toggle: function() {
        this.setState({expanded: !this.state.expanded})
        this.props.data.expand = this.props.data.expand ? false : true;
    },
    render: function() {
        var children = _.map(this.props.data.nodes, function(node) {
            return (React.createElement(Tree, {data: node}));
        });

        var classes = cx({
            'hidden': this.state.expanded != true
        });

        return (
            React.createElement("ul", {className: "xml"},
                React.createElement(OpeningTagLink, {onLinkClick: this.toggle, data: this.props.data}),
                React.createElement("div", {className: classes},
                    children
                ),
                React.createElement(ClosingTag, {data: this.props.data})
            )
        );
    }
});

module.exports = Tree;

