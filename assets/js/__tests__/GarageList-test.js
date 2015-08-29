import React from 'react/addons';
import * as _ from 'lodash';
import { expect } from 'chai';

const TestUtils = React.addons.TestUtils;

import GarageList from './../components/GarageList';
import { ListItem } from 'material-ui';

describe('<GarageList />', function () {

  const defaultProps = {
    searchText: '',
    vehicles: [],
    searchVehicles: _.noop
  };

  it('is renderable', function () {
    const component = React.findDOMNode(
      TestUtils.renderIntoDocument(<GarageList {...defaultProps} />)
    );

    expect(component).to.not.equal(null);
  });

  it('renders vehicles', function () {
    const vehicles = [
      {
        year: 2015,
        mileage: 10,
        vin: 'abc123',
        links: {
          make: {id: 1, name: 'Ford'}, 
          model: {id: 2, name: 'Mustang'}
        }
      }
    ];
    const component = TestUtils.renderIntoDocument(
      <GarageList 
        {...defaultProps}
        vehicles={vehicles}
        />
    );

    const vehiclesNodes = TestUtils.scryRenderedComponentsWithType(component, ListItem);

    expect(vehiclesNodes.length).to.equal(vehicles.length);
  });

});