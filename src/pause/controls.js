import React from 'react';

import { ControlsTab } from '@webrcade/app-common';

export class GamepadControlsTab extends ControlsTab {
  render() {
    return (
      <>
        {this.renderControl('select', 'Power')}
        {this.renderControl('dpad', 'Move')}
        {this.renderControl('lanalog', 'Move')}
        {this.renderControl('a', 'B')}
        {this.renderControl('b', 'A')}
        {this.renderControl('lbump', 'Shake')}
        {this.renderControl('rbump', 'C')}
      </>
    );
  }
}

export class KeyboardControlsTab extends ControlsTab {
  render() {
    return (
      <>
        {this.renderKey('ShiftRight', 'Power')}
        {this.renderKey('ArrowUp', 'Up')}
        {this.renderKey('ArrowDown', 'Down')}
        {this.renderKey('ArrowLeft', 'Left')}
        {this.renderKey('ArrowRight', 'Right')}
        {this.renderKey('KeyX', 'A')}
        {this.renderKey('KeyZ', 'B')}
        {this.renderKey('KeyQ', 'Shake')}
        {this.renderKey('KeyW', 'C')}            
      </>
    );
  }
}
