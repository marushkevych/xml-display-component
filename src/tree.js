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
          expand: true,
          nodes: [
            {
              name: 'Child',
              expand: true,
              nodes: [
                {
                  name: "foo",
                  value: "no"
                },
                {
                  name: "bar",
                  value: ""
                },
                {
                  name: "bla",
                  value: "yes"
                }
              ]
            }
          ]
        }

      ]
    }
  ]
};

var space = String.fromCharCode(160);
var doubleSpace = space+space;

var OpeningTag = React.createClass({
  render: function(){
    var icon = "";
    if(this.props.data.nodes){
      icon = this.props.data.expand ? "- " : "+ ";
    }else{
      icon = doubleSpace;
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

var OpeningTagLink = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    this.props.onLinkClick();
  },
  render: function(){
    if(this.props.data.nodes){
      return (
        <a onClick={this.handleClick} href="">
          <OpeningTag data={this.props.data} />
        </a>
      );
    } else {
      return (
        <OpeningTag data={this.props.data} />
      );
    }

  }
});

var ClosingTag = React.createClass({
  render: function(){
    var tag = doubleSpace+"</"+this.props.data.name+">";
    return this.props.data.nodes != null && <span className="xml-element"><li>{tag}</li></span>
  }
});


var Tree = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState){
    // console.log(this.props.data.name, this.props, nextProps, this.state, nextState);

    return this.state != nextState;
  },
  getInitialState: function(){
    return {expanded: this.props.data.expand === true};
  },
  toggle: function(){
    this.setState({expanded: !this.state.expanded})
    this.props.data.expand = this.props.data.expand ? false : true;
  },
  render: function() {
    // console.log('rendering', this.props.data.name)
    var children = _.map(this.props.data.nodes, function(node){
      return (<Tree data={node} />);
    });

    var cx = React.addons.classSet;
    var classes = cx({
      'hidden': this.state.expanded != true
    });


    return (
      <ul className="xml">
        <OpeningTagLink onLinkClick={this.toggle} data={this.props.data} />
          <div className={classes}>
            {children}
          </div>
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
