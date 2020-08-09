import React from 'react';
import List from './List';

class ListwithHeader extends React.Component{

    render(){
        const {headerVal, ...rest} = this.props;
        console.log(rest);
        console.log(this.props);
        return(
            <div>
                <h2>{headerVal}</h2>
                <List
                    {...rest}
                />
            </div>
        )

    }
}

export default ListwithHeader;