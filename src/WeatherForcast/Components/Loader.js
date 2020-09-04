import React from 'react';
import LoaderIcon from 'react-loader-spinner';

class Loader extends React.Component{

    render(){
        return(
            <div
                style={{
                    width: "25%",
                    height: "100",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "50px"
                }}
                >
            <LoaderIcon type="Circles" color="#2BAD60" height="50" width="50"/>
        </div>
        );
    }
}

export default Loader
