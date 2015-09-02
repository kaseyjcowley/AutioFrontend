const React        = require('react');
const mui          = require('material-ui');
const ThemeManager = new mui.Styles.ThemeManager();

module.exports = {
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
};
