import React, { Component } from 'react';
import './EventPage.scss';
import MuuriGrid from 'react-muuri';

class EventPage extends Component {
  constructor () {
    super();

    this.removeElement = this.removeElement.bind(this);
  }

  componentDidMount () {
    this.grid = new MuuriGrid({
      node: this.gridElement,
      defaultOptions: {
        dragEnabled: true // See Muuri's documentation for other option overrides.
      },
    });

    // An example of how to use `getEvent()` to make `synchronize()` update the grid.
    this.grid.getEvent('dragEnd');
  }

  componentWillUnmount () {
    this.grid.getMethod('destroy'); // Required: Destroy the grid when the component is unmounted.
  }

  removeElement () {
    // An example of how to use `getMethod()` to remove an element from the grid.
    if (this.gridElement && this.gridElement.children.length) {
      this.grid.getMethod('remove', this.gridElement.children[0], {removeElements: true});
    }
  }

  render() {
    //new Muuri('.grid');
    
    return <div className="p page event">
      <div>
        {/* Assign a ref to the grid container so the virtual DOM will ignore it for now (WIP). */}
        <div ref={gridElement => this.gridElement = gridElement}>
          {/* Required: `item` and `item-content` classNames */}
          <div className="item box1">
            <div className="item-content">
              <h2 class="p">Salon 1</h2>
            </div>
          </div>
          <div className="item box2">
            <div className="item-content">
            <h2 class="p">Salon 2</h2>
            </div>
          </div>
        </div>
        <button
          className="button"
          onClick={() => this.removeElement()}
        >
          Remove 1st Element
        </button>
      </div>
    </div>
  }
}

export default EventPage;