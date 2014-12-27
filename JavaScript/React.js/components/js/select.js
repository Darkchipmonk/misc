var SelectOption = React.createClass({
  render: function() {
    var className = this.props.selected ? "rc-select--option rc-select--option_selected" : "rc-select--option";

    return (
      <li value={this.props.value} className={className}>
        <div className="rs-selection--option-label">{this.props.label}</div>
      </li>
    );
  }
});

var SelectOptionList = React.createClass({
  render: function() {
    var options = this.props.options.map(function(option, index) {
      return (
        <SelectOption label={option.label} value={option.value} selected={option.selected} key={index} />
      );
    });

    return (
      <div className={this.props.active ? "rc-select--options fade-in-fast" : "rc-select--options"}>
        <ul>
          {options}
        </ul>
      </div>
    );
  }
});

var Select = React.createClass({
  getInitialState: function() {
    return {
      active: false
    };
  },
  toggle: function() {
    this.setState({active: !this.state.active});
  },
  render: function() {
    var selectedOption = this.props.options.filter(function(option) {
      return option.selected;
    })[0];

    return (
      <div onClick={this.toggle} className={this.state.active ? "rc-select rc-select_active" : "rc-select"}>
        <div className="rc-select--field">
          <div className="rc-select--input">{selectedOption.label}</div>
          <div className="rc-select--arrow"></div>
        </div>
        <SelectOptionList options={this.props.options} active={this.state.active}/>
      </div>
    );
  }
});