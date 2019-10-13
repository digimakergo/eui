import * as React from 'react';
import Moment from 'react-moment';
import Config from '../../config.json';

export default class Image extends React.Component<{definition:any, validation:any},{}> {

constructor(props:any) {
      super(props);
      this.state = {};
    }

    render(){
        return (
            <div>
                <label htmlFor={this.props.definition.identifier}>{this.props.definition.name}:</label>
                <input type="text" id={this.props.definition.identifier} className="form-control" name={this.props.definition.identifier} />
            </div>
        )
    }
}