import * as React from 'react';
import Config from '../config.json';
import Moment from 'react-moment';
import { Link } from "react-router-dom";

export default class Actions extends React.Component<{content:any}> {




  render () {
    var type = this.props.content.content_type;
    var newTypes = [];
    var actions = [];
    if( type )
    {
        newTypes = Config.main[type]["new"];
        actions = Config.main[type]["actions"];
    }

    return (
       <div className="tool-block">
         <div className="block-title">Actions</div>
         <div className="block-body">
            {newTypes.length>0?
             <div>
             <i className="fas fa-plus"></i> Create &nbsp;
             {newTypes.map((value)=>{return (
                 <Link to={`/create/${this.props.content.id}/${value}`} title={value}>
                     <i className={"icon icon-"+value}></i> &nbsp;
                 </Link>
                )})}
             </div>:''
            }
         <hr />

            {actions.map( (value) => {
                return (<div>
                 <a href="#"><i className="fas fa-tools"></i> {value}</a>
                </div>)

                } )}

<hr />
<div>
             <a href="#"><i className="fas fa-tools"></i> Sync with clusers</a>
            </div>

         </div>
       </div>
    );
  }
}