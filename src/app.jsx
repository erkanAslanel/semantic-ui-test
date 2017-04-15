
import React from 'react'
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';

var  ButtonExampleEmphasis = ()  =>
{
 return  <div> <Button primary>Primary</Button><Button secondary>Secondary</Button></div>;
}

ReactDOM.render(<ButtonExampleEmphasis />, document.getElementById('app'));
