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
        if (data.nodes) {
            return React.DOM.a({onClick: this.handleClick},
                OpeningTag( {data: data})
            );
        } else {
            return OpeningTag( {data: data});
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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXkvZGV2L3dvcmsvZ2l0aHViL3htbC1kaXNwbGF5LWNvbXBvbmVudC9zcmMvQ2xvc2luZ1RhZy5qcyIsIi9Vc2Vycy9hbmRyZXkvZGV2L3dvcmsvZ2l0aHViL3htbC1kaXNwbGF5LWNvbXBvbmVudC9zcmMvT3BlbmluZ1RhZy5qcyIsIi9Vc2Vycy9hbmRyZXkvZGV2L3dvcmsvZ2l0aHViL3htbC1kaXNwbGF5LWNvbXBvbmVudC9zcmMvT3BlbmluZ1RhZ0xpbmsuanMiLCIvVXNlcnMvYW5kcmV5L2Rldi93b3JrL2dpdGh1Yi94bWwtZGlzcGxheS1jb21wb25lbnQvc3JjL2Jvd2VyaWZ5LmpzIiwiL1VzZXJzL2FuZHJleS9kZXYvd29yay9naXRodWIveG1sLWRpc3BsYXktY29tcG9uZW50L3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBzcGFjZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTYwKTtcbnZhciBkb3VibGVTcGFjZSA9IHNwYWNlICsgc3BhY2U7XG52YXIgY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXQ7XG5cbnZhciBDbG9zaW5nVGFnID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkNsb3NpbmdUYWdcIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY2xhc3NlcyA9IGN4KHtcbiAgICAgICAgICAgICdoaWRkZW4nOiB0aGlzLnByb3BzLmRhdGEuZXhwYW5kICE9IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB0YWcgPSBkb3VibGVTcGFjZSArIFwiPC9cIiArIHRoaXMucHJvcHMuZGF0YS5uYW1lICsgXCI+XCI7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGEubm9kZXMgIT0gbnVsbCAmJlxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdih7Y2xhc3NOYW1lOiBjbGFzc2VzfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5ET00uc3Bhbih7Y2xhc3NOYW1lOiBcInhtbC1lbGVtZW50XCJ9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5ET00ubGkobnVsbCwgdGFnKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xvc2luZ1RhZzsiLCJ2YXIgc3BhY2UgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDE2MCk7XG52YXIgZG91YmxlU3BhY2UgPSBzcGFjZSArIHNwYWNlO1xuXG52YXIgT3BlbmluZ1RhZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJPcGVuaW5nVGFnXCIsXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgIHZhciBpY29uID0gZG91YmxlU3BhY2U7XG4gICAgICAgIGlmIChkYXRhLm5vZGVzKSB7XG4gICAgICAgICAgICBpY29uID0gZGF0YS5leHBhbmQgPyBcIi0gXCIgOiBcIisgXCI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYmFja1NsdXNoID0gZGF0YS52YWx1ZSB8fCBkYXRhLm5vZGVzID8gXCJcIiA6IFwiL1wiO1xuICAgICAgICB2YXIgY2xvc2luZ1RhZyA9IGRhdGEudmFsdWUgPyBcIjwvXCIgKyBkYXRhLm5hbWUgKyBcIj5cIiA6IFwiXCI7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gXCJcIjtcbiAgICAgICAgXy5lYWNoKGRhdGEuYXR0cnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgKz0gJyAnICsga2V5ICsgJz1cIicgKyB2YWx1ZSArICdcIic7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5ET00ubGkobnVsbCxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBSZWFjdC5ET00uc3Bhbih7Y2xhc3NOYW1lOiBcInhtbC1lbGVtZW50XCJ9LFxuICAgICAgICAgICAgICAgIFwiPFwiLCBkYXRhLm5hbWUsIFxuICAgICAgICAgICAgICAgIFJlYWN0LkRPTS5zcGFuKHtjbGFzc05hbWU6IFwieG1sLWF0dHJpYnV0ZVwifSwgYXR0cmlidXRlcyksIFxuICAgICAgICAgICAgICAgICAgICBiYWNrU2x1c2gsIFwiPlwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc3BhY2UsIGRhdGEudmFsdWUsIHNwYWNlLFxuICAgICAgICAgICAgUmVhY3QuRE9NLnNwYW4oe2NsYXNzTmFtZTogXCJ4bWwtZWxlbWVudFwifSxcbiAgICAgICAgICAgICAgICBjbG9zaW5nVGFnXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gT3BlbmluZ1RhZzsiLCJ2YXIgT3BlbmluZ1RhZyA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkocmVxdWlyZSgnLi9PcGVuaW5nVGFnJykpO1xuXG52YXIgT3BlbmluZ1RhZ0xpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiT3BlbmluZ1RhZ0xpbmtcIixcbiAgICBoYW5kbGVDbGljazogZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMub25MaW5rQ2xpY2soKTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgICBpZiAoZGF0YS5ub2Rlcykge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LkRPTS5hKHtvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLCBocmVmOlwiXCJ9LFxuICAgICAgICAgICAgICAgIE9wZW5pbmdUYWcoIHtkYXRhOiBkYXRhfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gT3BlbmluZ1RhZygge2RhdGE6IGRhdGF9KTtcbiAgICAgICAgfVxuXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gT3BlbmluZ1RhZ0xpbms7Iiwid2luZG93LlhtbERpc3BsYXlDb21wb25lbnQgPSByZXF1aXJlKCcuL2luZGV4Jyk7IiwidmFyIE9wZW5pbmdUYWdMaW5rID0gUmVhY3QuY3JlYXRlRmFjdG9yeShyZXF1aXJlKCcuL09wZW5pbmdUYWdMaW5rJykpO1xudmFyIENsb3NpbmdUYWcgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KHJlcXVpcmUoJy4vQ2xvc2luZ1RhZycpKTtcblxudmFyIGN4ID0gUmVhY3QuYWRkb25zLmNsYXNzU2V0O1xuXG5cbnZhciBUcmVlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIlRyZWVcIixcbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlICE9IG5leHRTdGF0ZTtcbiAgICB9LFxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7ZXhwYW5kZWQ6IHRoaXMucHJvcHMuZXhwYW5kZWQgfHwgZmFsc2V9O1xuICAgIH0sXG4gICAgdG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmV4cGFuZGVkfSk7XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IF8ubWFwKHRoaXMucHJvcHMuZGF0YS5ub2RlcywgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFRyZWUsIHtkYXRhOiBub2RlLCBleHBhbmRlZDogc2VsZi5wcm9wcy5leHBhbmRlZH0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnByb3BzLmRhdGEuZXhwYW5kID0gdGhpcy5zdGF0ZS5leHBhbmRlZDtcblxuICAgICAgICB2YXIgY2xhc3NlcyA9IGN4KHtcbiAgICAgICAgICAgICdoaWRkZW4nOiB0aGlzLnN0YXRlLmV4cGFuZGVkICE9IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LkRPTS51bCh7Y2xhc3NOYW1lOiBcInhtbFwifSxcbiAgICAgICAgICAgIE9wZW5pbmdUYWdMaW5rKHtvbkxpbmtDbGljazogdGhpcy50b2dnbGUsIGRhdGE6IHRoaXMucHJvcHMuZGF0YX0pLFxuICAgICAgICAgICAgUmVhY3QuRE9NLmRpdih7Y2xhc3NOYW1lOiBjbGFzc2VzfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xvc2luZ1RhZywge2RhdGE6IHRoaXMucHJvcHMuZGF0YX0pXG4gICAgICAgICk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVHJlZTtcbiJdfQ==
;
