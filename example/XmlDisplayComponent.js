;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.XmlDisplayComponent = require('./src/index');
},{"./src/index":5}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{"./OpeningTag":3}],5:[function(require,module,exports){
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

},{"./ClosingTag":2,"./OpeningTagLink":4}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXkvZGV2L3dvcmsvZ2l0aHViL1JlYWN0VHV0b3JpYWwvYm93ZXJpZnkuanMiLCIvVXNlcnMvYW5kcmV5L2Rldi93b3JrL2dpdGh1Yi9SZWFjdFR1dG9yaWFsL3NyYy9DbG9zaW5nVGFnLmpzIiwiL1VzZXJzL2FuZHJleS9kZXYvd29yay9naXRodWIvUmVhY3RUdXRvcmlhbC9zcmMvT3BlbmluZ1RhZy5qcyIsIi9Vc2Vycy9hbmRyZXkvZGV2L3dvcmsvZ2l0aHViL1JlYWN0VHV0b3JpYWwvc3JjL09wZW5pbmdUYWdMaW5rLmpzIiwiL1VzZXJzL2FuZHJleS9kZXYvd29yay9naXRodWIvUmVhY3RUdXRvcmlhbC9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuWG1sRGlzcGxheUNvbXBvbmVudCA9IHJlcXVpcmUoJy4vc3JjL2luZGV4Jyk7IiwidmFyIHNwYWNlID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxNjApO1xudmFyIGRvdWJsZVNwYWNlID0gc3BhY2UgKyBzcGFjZTtcbnZhciBjeCA9IFJlYWN0LmFkZG9ucy5jbGFzc1NldDtcblxudmFyIENsb3NpbmdUYWcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiQ2xvc2luZ1RhZ1wiLFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjbGFzc2VzID0gY3goe1xuICAgICAgICAgICAgJ2hpZGRlbic6IHRoaXMucHJvcHMuZGF0YS5leHBhbmQgIT0gdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHRhZyA9IGRvdWJsZVNwYWNlICsgXCI8L1wiICsgdGhpcy5wcm9wcy5kYXRhLm5hbWUgKyBcIj5cIjtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS5ub2RlcyAhPSBudWxsICYmXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KHtjbGFzc05hbWU6IGNsYXNzZXN9LFxuICAgICAgICAgICAgICAgIFJlYWN0LkRPTS5zcGFuKHtjbGFzc05hbWU6IFwieG1sLWVsZW1lbnRcIn0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LkRPTS5saShudWxsLCB0YWcpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDbG9zaW5nVGFnOyIsInZhciBzcGFjZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTYwKTtcbnZhciBkb3VibGVTcGFjZSA9IHNwYWNlICsgc3BhY2U7XG5cbnZhciBPcGVuaW5nVGFnID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIk9wZW5pbmdUYWdcIixcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgICAgdmFyIGljb24gPSBkb3VibGVTcGFjZTtcbiAgICAgICAgaWYgKGRhdGEubm9kZXMpIHtcbiAgICAgICAgICAgIGljb24gPSBkYXRhLmV4cGFuZCA/IFwiLSBcIiA6IFwiKyBcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBiYWNrU2x1c2ggPSBkYXRhLnZhbHVlIHx8IGRhdGEubm9kZXMgPyBcIlwiIDogXCIvXCI7XG4gICAgICAgIHZhciBjbG9zaW5nVGFnID0gZGF0YS52YWx1ZSA/IFwiPC9cIiArIGRhdGEubmFtZSArIFwiPlwiIDogXCJcIjtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBcIlwiO1xuICAgICAgICBfLmVhY2goZGF0YS5hdHRycywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgYXR0cmlidXRlcyArPSAnICcgKyBrZXkgKyAnPVwiJyArIHZhbHVlICsgJ1wiJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LkRPTS5saShudWxsLFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIFJlYWN0LkRPTS5zcGFuKHtjbGFzc05hbWU6IFwieG1sLWVsZW1lbnRcIn0sXG4gICAgICAgICAgICAgICAgXCI8XCIsIGRhdGEubmFtZSwgXG4gICAgICAgICAgICAgICAgUmVhY3QuRE9NLnNwYW4oe2NsYXNzTmFtZTogXCJ4bWwtYXR0cmlidXRlXCJ9LCBhdHRyaWJ1dGVzKSwgXG4gICAgICAgICAgICAgICAgICAgIGJhY2tTbHVzaCwgXCI+XCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBzcGFjZSwgZGF0YS52YWx1ZSwgc3BhY2UsXG4gICAgICAgICAgICBSZWFjdC5ET00uc3Bhbih7Y2xhc3NOYW1lOiBcInhtbC1lbGVtZW50XCJ9LFxuICAgICAgICAgICAgICAgIGNsb3NpbmdUYWdcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBPcGVuaW5nVGFnOyIsInZhciBPcGVuaW5nVGFnID0gUmVhY3QuY3JlYXRlRmFjdG9yeShyZXF1aXJlKCcuL09wZW5pbmdUYWcnKSk7XG5cbnZhciBPcGVuaW5nVGFnTGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJPcGVuaW5nVGFnTGlua1wiLFxuICAgIGhhbmRsZUNsaWNrOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkxpbmtDbGljaygpO1xuICAgIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG4gICAgICAgIGlmIChkYXRhLm5vZGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuRE9NLmEoe29uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssIGhyZWY6XCJcIn0sXG4gICAgICAgICAgICAgICAgT3BlbmluZ1RhZygge2RhdGE6IGRhdGF9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPcGVuaW5nVGFnKCB7ZGF0YTogZGF0YX0pO1xuICAgICAgICB9XG5cbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBPcGVuaW5nVGFnTGluazsiLCJ2YXIgT3BlbmluZ1RhZ0xpbmsgPSBSZWFjdC5jcmVhdGVGYWN0b3J5KHJlcXVpcmUoJy4vT3BlbmluZ1RhZ0xpbmsnKSk7XG52YXIgQ2xvc2luZ1RhZyA9IFJlYWN0LmNyZWF0ZUZhY3RvcnkocmVxdWlyZSgnLi9DbG9zaW5nVGFnJykpO1xuXG52YXIgY3ggPSBSZWFjdC5hZGRvbnMuY2xhc3NTZXQ7XG5cblxudmFyIFRyZWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7ZGlzcGxheU5hbWU6IFwiVHJlZVwiLFxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24obmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgIT0gbmV4dFN0YXRlO1xuICAgIH0sXG4gICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtleHBhbmRlZDogdGhpcy5wcm9wcy5leHBhbmRlZCB8fCBmYWxzZX07XG4gICAgfSxcbiAgICB0b2dnbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWR9KTtcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gXy5tYXAodGhpcy5wcm9wcy5kYXRhLm5vZGVzLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHJlZSwge2RhdGE6IG5vZGUsIGV4cGFuZGVkOiBzZWxmLnByb3BzLmV4cGFuZGVkfSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucHJvcHMuZGF0YS5leHBhbmQgPSB0aGlzLnN0YXRlLmV4cGFuZGVkO1xuXG4gICAgICAgIHZhciBjbGFzc2VzID0gY3goe1xuICAgICAgICAgICAgJ2hpZGRlbic6IHRoaXMuc3RhdGUuZXhwYW5kZWQgIT0gdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuRE9NLnVsKHtjbGFzc05hbWU6IFwieG1sXCJ9LFxuICAgICAgICAgICAgT3BlbmluZ1RhZ0xpbmsoe29uTGlua0NsaWNrOiB0aGlzLnRvZ2dsZSwgZGF0YTogdGhpcy5wcm9wcy5kYXRhfSksXG4gICAgICAgICAgICBSZWFjdC5ET00uZGl2KHtjbGFzc05hbWU6IGNsYXNzZXN9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDbG9zaW5nVGFnLCB7ZGF0YTogdGhpcy5wcm9wcy5kYXRhfSlcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUcmVlO1xuIl19
;