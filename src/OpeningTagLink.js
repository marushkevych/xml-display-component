var OpeningTag = React.createFactory(require('./OpeningTag'));

var OpeningTagLink = React.createClass({displayName: "OpeningTagLink",
    handleClick: function(e) {
        e.preventDefault();
        this.props.onLinkClick();
    },
    render: function() {
        var data = this.props.data;
        if (data.nodes) {
            return React.DOM.a({onClick: this.handleClick, href:""},
                OpeningTag( {data: data})
            );
        } else {
            return OpeningTag( {data: data});
        }

    }
});

module.exports = OpeningTagLink;