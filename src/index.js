var OpeningTagLink = React.createFactory(require('./OpeningTagLink'));
var ClosingTag = React.createFactory(require('./ClosingTag'));

var cx = React.addons.classSet;


var Tree = React.createClass({displayName: "Tree",
    shouldComponentUpdate: function(nextProps, nextState) {
        return this.state != nextState;
    },
    getInitialState: function() {
        // if we saved the expand state to the moel - use it
        if(this.props.data.expand != null){
            return {expanded: this.props.data.expand};
        }
        return {expanded: this.props.expanded || false};
    },
    toggle: function() {
        this.setState({expanded: !this.state.expanded});
    },
    render: function() {
        var self = this;
        var children = _.map(this.props.data.nodes, function(node) {
            return (React.createElement(Tree, {data: node, expanded: self.props.expanded}));
        });
        
        this.props.data.expand = this.state.expanded;

        var classes = cx({
            'hidden': this.state.expanded != true
        });

        return React.DOM.ul({className: "xml"},
            OpeningTagLink({onLinkClick: this.toggle, data: this.props.data}),
            React.DOM.div({className: classes},
                children
            ),
            React.createElement(ClosingTag, {data: this.props.data})
        );
    }
});

module.exports = Tree;
