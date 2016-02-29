import React from 'react'

/* StorePicker */
var StorePicker = React.createClass({

  mixins: [History],

  gotToStore: function(event) {
    event.preventDefault()
    var storeId = this.refs.storeId.value
    this.history.pushState(null, '/store/' + storeId)
  },

  render: function() {

    return(
      <form className="store-selector" onSubmit={this.gotToStore}>
        <h2>Please enter a store</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
        <input type="submit" />
      </form>
    )
  }

})
