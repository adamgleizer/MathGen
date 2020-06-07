import React from 'react'
import {Operation} from './Problem'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import App from './App'

type State = {operation : null | Operation, subtractionPicked : boolean | null}
type Props = {}

export default class choice extends React.Component<Props,State> {
    constructor(props: Props) {
        super(props)
        this.state = {operation: null, subtractionPicked: null}
        this.pickOperation = this.pickOperation.bind(this);
    }

    pickOperation(param: Operation | "subtraction") {
        var context = this
        if (param === "subtraction") {
            return function(e: any) {
                context.setState({subtractionPicked: true})
            }
        }
        else {
            return function(e: any) {
                context.setState({operation: param})
            }
        }
    }

    render() {
        if (this.state.operation) {
            return (
                <App operation={this.state.operation}/>
            )
        } 
        else if (this.state.subtractionPicked) {
            return (
                <Container>
                    <Grid container justify="center" alignItems="center" direction="column" spacing={3}>
                        <Grid item>
                            <Typography variant="h4">Allow Negative Numbers?</Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={this.pickOperation("-")}>Yes</Button>
                            <Button variant="contained" onClick={this.pickOperation("- nonNegative")}>No</Button>
                        </Grid>
                    </Grid>
                </Container>
            )
        }
        else {
            return(
                <Container>
                    <Grid container justify="center" alignItems="center" direction="column" spacing={3}>
                        <Grid item>
                            <Typography variant="h4">Please select an operation</Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={this.pickOperation("+")}>+</Button>
                            <Button variant="contained" onClick={this.pickOperation("×")}>×</Button>
                            <Button variant="contained" onClick={this.pickOperation("÷")}>÷</Button>
                            <Button variant="contained" onClick={this.pickOperation("subtraction")}>-</Button>
                        </Grid>
                    </Grid>
                </Container>
            )
        }
    }
}