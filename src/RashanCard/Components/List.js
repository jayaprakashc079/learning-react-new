import React from 'react';
import NestList from './NestList'
import _ from 'lodash';

class List extends React.Component{

    render(){
        return(
            <>
            {
                this.props.config.map((headFamily, idx)=>
                    <NestList 
                        config={headFamily}
                        idx={idx}
                        editFamily={this.props.editFamily}
                    />
                )
            }
                
            </>

        );
    }
}

export default List;