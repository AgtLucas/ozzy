var React = require('react');
var ReactDOM = require('react-dom');

var StorePicker = React.createClass({

  render: function() {
    return(
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <input type="text" ref="storeId" required />
        <input type="submit" />
      </form>
    );
  }

});

ReactDOM.render(<StorePicker />, document.getElementById('main'));
