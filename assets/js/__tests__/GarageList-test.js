let React = require('react/addons');
let TestUtils = React.addons.TestUtils;

let expect = require('chai').expect;

describe('Garagelist', function () {
  let GarageList = require('../components/GarageList');
  let component;

  before('render component', function () {
    component = TestUtils.renderIntoDocument(<GarageList />);
  });

  it('renders without failure', function () {
    expect(component).to.exist;
  });

  it('loads with vehicle objects in state', function () {
    let state = component.state;

    expect(state.vehicles)
      .to.exist
      .to.be.an.instanceof(Array);

    if (state.vehicles.length > 0)
      state.vehicles.map(vehicle => expect(vehicle).to.be.an('object'));
  });

  it('renders a search bar', function () {
    let searchBar = TestUtils.findRenderedComponentWithType(component, GarageList.SearchBar);

    // Expect it to exist.
    expect(searchBar).to.exist;

    // Expect it to have props of "searchText"
    expect(searchBar.props).to.have.property('searchText');
    expect(searchBar.props.searchText).to.equal('');

    // Expect it to handle input
    TestUtils.Simulate.change(searchBar.getDOMNode(), {target: {value: 'hello'}});
    expect(searchBar.props.searchText).to.equal('hello');
  });
});
