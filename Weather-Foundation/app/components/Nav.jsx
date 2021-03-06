var React = require('react');

var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Weather Oracle</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="location" placeholder="Search by location" />
              </li>
              <li>
                <button className="button hollow">Consult the Oracle</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  },
  onSearch: function (e) {
    var location = this.refs.location.value,
        encoded   = encodeURIComponent(location);

    e.preventDefault();

    if(location && location.length > 0) {
      this.refs.location.value = '';

      window.location.hash = `#/?location=${encoded}`;
    }
  }
});

module.exports = Nav;
