import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class SimpleContainer extends React.Component{

    render(){
        return (
            <React.Fragment>
              <CssBaseline />
              <Container maxWidth="sm">
                <Typography align="inherit" component='div' style={{ padding: '25px',    backgroundColor: '#fff8dc', height: '100%' }} >
                    {this.props.children}
                </Typography>
                
              </Container>
            </React.Fragment>
          );
        }
    }
  
export default SimpleContainer;