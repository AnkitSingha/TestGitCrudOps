import React from "react";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
//import styles from './Style';
import styles from './Button.Component.js';



class CreateAccount extends React.Component {
   


    constructor(props) {
        super(props);
       
    };
   

    render() {
        console.log(styles)
        
        return (


            <Container maxWidth="md">
                <h1>Create an Account</h1>
                <Typography component="div" style={{ backgroundColor: '#50597b', height: '100vh' }}>
                    <form  noValidate autoComplete="off">

                        <TextField
                            label="First Name"
                            margin="normal"
                            type="text"

                        />
                        <TextField
                            label="MiddleName"
                            margin="normal"
                            type="text"
                        />
                        <TextField
                            label="SurName"
                            margin="normal"
                            type="text"
                        />
                        <br></br>

                        <TextField
                            label="Gender"
                            margin="normal"
                            type="text"
                        />
                        <TextField
                            label="DOB"
                            margin="normal"
                            type="date"

                        />
                        <br></br>

                        <TextField
                            label="EmailID"
                            margin="normal"
                            type="text"
                        />
                        <TextField
                            label="Mobile"
                            margin="normal"
                            type="number"

                        />
                        <br></br>

                        <TextField
                            label="Address"
                            margin="normal"
                            type="text"
                        />
                        <TextField
                            label="Pin"
                            margin="normal"
                            type="number"

                        />
                    </form>

                </Typography>

            </Container>

        );
    }


}

export default CreateAccount;