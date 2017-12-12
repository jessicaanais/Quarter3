import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: '#183452'}}>
          <NavbarBrand className="mr-auto">reactstrap</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
