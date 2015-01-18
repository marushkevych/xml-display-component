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

var OpeningTag = React.createClass({
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
      <li>
    {icon}
        <span className="xml-element">
          &lt;{this.props.data.name}
          <span className="xml-attribute">{attributes}</span>{backSlush}&gt;
        </span>
      {this.props.data.value}
        <span className="xml-element">
          {closingTag}
        </span>
      </li>
    );
  }
});

var ClosingTag = React.createClass({
  render: function(){
    var space = String.fromCharCode(160);
    return this.props.data.nodes != null &&
      <span className="xml-element"><li>{space}{space}&lt;&#47;{this.props.data.name}&gt;</li></span>
  }
});

var Tree = React.createClass({
  render: function() {

    var children = "";
    if(this.props.data.expand){

      children = _.map(this.props.data.nodes, function(node){
        return (<Tree data={node} />);
      });
    }


    return (
      <ul className="xml">
        <OpeningTag data={this.props.data} />
          {children}
        <ClosingTag data={this.props.data} />
      </ul>
    );
  }
});


React.render(
  <div className="xml">
    <Tree data={data} />
  </div>,
  document.getElementById('content')
);
