import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
class Search extends Component
{
constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
         List Of Stocks
        </DropdownToggle>
        <DropdownMenu>

          <DropdownItem>AAPL</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>MSFT</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>IBN</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>HVDB</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>PYPL</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>TSLA</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>FB</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>AXP</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>RO</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>BABA</DropdownItem>
        <DropdownItem divider />
          <DropdownItem>VOD</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}
export default Search;