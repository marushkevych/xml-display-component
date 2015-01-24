;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
var OpeningTag = React.createFactory(require('./OpeningTag'));

var OpeningTagLink = React.createClass({displayName: "OpeningTagLink",
    handleClick: function(e) {
        e.preventDefault();
        this.props.onLinkClick();
    },
    render: function() {
        var data = this.props.data;
        var style = {
            cursor: "pointer"
        };
        if (data.nodes) {
            return React.DOM.span({onClick: this.handleClick, style: style},
            OpeningTag({data: data})
                    );
        } else {
            return OpeningTag({data: data});
        }

    }
});

module.exports = OpeningTagLink;

},{"./OpeningTag":2}],4:[function(require,module,exports){
window.XmlDisplayComponent = require('./index');
},{"./index":5}],5:[function(require,module,exports){
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

},{"./ClosingTag":1,"./OpeningTagLink":3}]},{},[4])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXkvZGV2L3dvcmsvZ2l0aHViL3htbC1kaXNwbGF5LWNvbXBvbmVudC9zcmMvQ2xvc2luZ1RhZy5qcyIsIi9Vc2Vycy9hbmRyZXkvZGV2L3dvcmsvZ2l0aHViL3htbC1kaXNwbGF5LWNvbXBvbmVudC9zcmMvT3BlbmluZ1RhZy5qcyIsIi9Vc2Vycy9hbmRyZXkvZGV2L3dvcmsvZ2l0aHViL3htbC1kaXNwbGF5LWNvbXBvbmVudC9zcmMvT3BlbmluZ1RhZ0xpbmsuanMiLCIvVXNlcnMvYW5kcmV5L2Rldi93b3JrL2dpdGh1Yi94bWwtZGlzcGxheS1jb21wb25lbnQvc3JjL2Jvd2VyaWZ5LmpzIiwiL1VzZXJzL2FuZHJleS9kZXYvd29yay9naXRodWIveG1sLWRpc3BsYXktY29tcG9uZW50L3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3BhY2UgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDE2MCk7XG52YXIgZG91YmxlU3BhY2UgPSBzcGFjZSArIHNwYWNlO1xudmFyIGN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0O1xuXG52YXIgQ2xvc2luZ1RhZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJDbG9zaW5nVGFnXCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBjeCh7XG4gICAgICAgICAgICAnaGlkZGVuJzogdGhpcy5wcm9wcy5kYXRhLmV4cGFuZCAhPSB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdGFnID0gZG91YmxlU3BhY2UgKyBcIjwvXCIgKyB0aGlzLnByb3BzLmRhdGEubmFtZSArIFwiPlwiO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhLm5vZGVzICE9IG51bGwgJiZcbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoe2NsYXNzTmFtZTogY2xhc3Nlc30sXG4gICAgICAgICAgICAgICAgUmVhY3QuRE9NLnNwYW4oe2NsYXNzTmFtZTogXCJ4bWwtZWxlbWVudFwifSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuRE9NLmxpKG51bGwsIHRhZylcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENsb3NpbmdUYWc7IiwidmFyIHNwYWNlID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxNjApO1xudmFyIGRvdWJsZVNwYWNlID0gc3BhY2UgKyBzcGFjZTtcblxudmFyIE9wZW5pbmdUYWcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiT3BlbmluZ1RhZ1wiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICB2YXIgaWNvbiA9IGRvdWJsZVNwYWNlO1xuICAgICAgICBpZiAoZGF0YS5ub2Rlcykge1xuICAgICAgICAgICAgaWNvbiA9IGRhdGEuZXhwYW5kID8gXCItIFwiIDogXCIrIFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGJhY2tTbHVzaCA9IGRhdGEudmFsdWUgfHwgZGF0YS5ub2RlcyA/IFwiXCIgOiBcIi9cIjtcbiAgICAgICAgdmFyIGNsb3NpbmdUYWcgPSBkYXRhLnZhbHVlID8gXCI8L1wiICsgZGF0YS5uYW1lICsgXCI+XCIgOiBcIlwiO1xuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IFwiXCI7XG4gICAgICAgIF8uZWFjaChkYXRhLmF0dHJzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzICs9ICcgJyArIGtleSArICc9XCInICsgdmFsdWUgKyAnXCInO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuRE9NLmxpKG51bGwsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnNwYW4oe2NsYXNzTmFtZTogXCJ4bWwtZWxlbWVudFwifSxcbiAgICAgICAgICAgICAgICBcIjxcIiwgZGF0YS5uYW1lLCBcbiAgICAgICAgICAgICAgICBSZWFjdC5ET00uc3Bhbih7Y2xhc3NOYW1lOiBcInhtbC1hdHRyaWJ1dGVcIn0sIGF0dHJpYnV0ZXMpLCBcbiAgICAgICAgICAgICAgICAgICAgYmFja1NsdXNoLCBcIj5cIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHNwYWNlLCBkYXRhLnZhbHVlLCBzcGFjZSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5zcGFuKHtjbGFzc05hbWU6IFwieG1sLWVsZW1lbnRcIn0sXG4gICAgICAgICAgICAgICAgY2xvc2luZ1RhZ1xuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9wZW5pbmdUYWc7IiwidmFyIE9wZW5pbmdUYWcgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KHJlcXVpcmUoJy4vT3BlbmluZ1RhZycpKTtcblxudmFyIE9wZW5pbmdUYWdMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIk9wZW5pbmdUYWdMaW5rXCIsXG4gICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnByb3BzLm9uTGlua0NsaWNrKCk7XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICAgICAgICB9O1xuICAgICAgICBpZiAoZGF0YS5ub2Rlcykge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LkRPTS5zcGFuKHtvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLCBzdHlsZTogc3R5bGV9LFxuICAgICAgICAgICAgT3BlbmluZ1RhZyh7ZGF0YTogZGF0YX0pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT3BlbmluZ1RhZyh7ZGF0YTogZGF0YX0pO1xuICAgICAgICB9XG5cbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBPcGVuaW5nVGFnTGluaztcbiIsIndpbmRvdy5YbWxEaXNwbGF5Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9pbmRleCcpOyIsInZhciBPcGVuaW5nVGFnTGluayA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkocmVxdWlyZSgnLi9PcGVuaW5nVGFnTGluaycpKTtcbnZhciBDbG9zaW5nVGFnID0gUmVhY3QuY3JlYXRlRmFjdG9yeShyZXF1aXJlKCcuL0Nsb3NpbmdUYWcnKSk7XG5cbnZhciBjeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldDtcblxuXG52YXIgVHJlZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJUcmVlXCIsXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbihuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSAhPSBuZXh0U3RhdGU7XG4gICAgfSxcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBpZiB3ZSBzYXZlZCB0aGUgZXhwYW5kIHN0YXRlIHRvIHRoZSBtb2VsIC0gdXNlIGl0XG4gICAgICAgIGlmKHRoaXMucHJvcHMuZGF0YS5leHBhbmQgIT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm4ge2V4cGFuZGVkOiB0aGlzLnByb3BzLmRhdGEuZXhwYW5kfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2V4cGFuZGVkOiB0aGlzLnByb3BzLmV4cGFuZGVkIHx8IGZhbHNlfTtcbiAgICB9LFxuICAgIHRvZ2dsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2V4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZH0pO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfLm1hcCh0aGlzLnByb3BzLmRhdGEubm9kZXMsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChUcmVlLCB7ZGF0YTogbm9kZSwgZXhwYW5kZWQ6IHNlbGYucHJvcHMuZXhwYW5kZWR9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wcm9wcy5kYXRhLmV4cGFuZCA9IHRoaXMuc3RhdGUuZXhwYW5kZWQ7XG5cbiAgICAgICAgdmFyIGNsYXNzZXMgPSBjeCh7XG4gICAgICAgICAgICAnaGlkZGVuJzogdGhpcy5zdGF0ZS5leHBhbmRlZCAhPSB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5ET00udWwoe2NsYXNzTmFtZTogXCJ4bWxcIn0sXG4gICAgICAgICAgICBPcGVuaW5nVGFnTGluayh7b25MaW5rQ2xpY2s6IHRoaXMudG9nZ2xlLCBkYXRhOiB0aGlzLnByb3BzLmRhdGF9KSxcbiAgICAgICAgICAgIFJlYWN0LkRPTS5kaXYoe2NsYXNzTmFtZTogY2xhc3Nlc30sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENsb3NpbmdUYWcsIHtkYXRhOiB0aGlzLnByb3BzLmRhdGF9KVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyZWU7XG4iXX0=
;