var data = {
  name: 'Andrey',
  expand: true,
  attrs: {attr: 'value', foo: 'bar'},
  nodes: [
    {
      name: 'Child',
      expand: true,
      nodes: [
        {
          name: "foo",
          attrs: {attr: 'value', foo: 'bar'},
          value: 2
        },

        {
          name: "bar",
          attrs: {attr: 'value', foo: 'bar'}
        },

        {
          name: "bla",
          nodes: [
            {
              name: 'Child',
              nodes: [
                {
                  name: "foo"
                },
                {
                  name: "bar"
                },
                {
                  name: "bla"
                }
              ]
            }
          ]
        }

      ]
    }
  ]
};

var OpeningTag = React.createClass({displayName: "OpeningTag",
  render: function(){
    var icon = "";
    if(this.props.data.nodes){
      icon = this.props.data.expand ? "- " : "+ ";
    }


    var backSlush = this.props.data.value ? "" : "/";
    var closingTag = this.props.data.value ? "</" + this.props.data.name + ">" : "";
    var attributes = "";
    _.each(this.props.data.attrs, function(value, key){
      attributes += ' ' + key + '="' + value + '"';
    });

    return (
      React.createElement("li", null, 
          icon, 
          React.createElement("span", {className: "xml-element"}, 
            "<", this.props.data.name, 
            React.createElement("span", {className: "xml-attribute"}, attributes), backSlush, ">"
          ), 
          this.props.data.value, 
          React.createElement("span", {className: "xml-element"}, 
            closingTag
          )
      )
    );
  }
});

var OpeningTagLink = React.createClass({displayName: "OpeningTagLink",
  render: function(){
    if(this.props.data.nodes){
      return (
        React.createElement("a", {href: ""}, 
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
  render: function(){
    var space = String.fromCharCode(160);
    return this.props.data.nodes != null && React.createElement("span", {className: "xml-element"}, React.createElement("li", null, space, space, "</", this.props.data.name, ">"))
  }
});

var Tree = React.createClass({displayName: "Tree",
  render: function() {

    // var children = "";
    // if(this.props.data.expand){
    //
    //   children = _.map(this.props.data.nodes, function(node){
    //     return (<Tree data={node} />);
    //   });
    // }

    var children = _.map(this.props.data.nodes, function(node){
      return (React.createElement(Tree, {data: node}));
    });


    return (
      React.createElement("ul", {className: "xml"}, 
        React.createElement(OpeningTagLink, {data: this.props.data}), 
          children, 
        React.createElement(ClosingTag, {data: this.props.data})
      )
    );
  }
});


React.render(
  React.createElement("div", {className: "xml"}, 
    React.createElement(Tree, {data: data})
  ),
  document.getElementById('content')
);
