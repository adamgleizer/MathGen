import React from 'react'
import {Operation} from './Problem'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import App from './App'

type State = {operation : null | Operation}

export default class choice extends React.Component<{},State> {
    constructor({}) {
        super({})
        this.state = {operation: null}
        this.pickOperation = this.pickOperation.bind(this);
    }

    pickOperation(param: Operation) {
        var context = this
        return function(e: any) {
            context.setState({operation: param})
        }
    }

    render() {
        if (this.state.operation) {
            return (
                <App operation={this.state.operation}/>
            )
        } else {
            return(
                <React.Fragment>
                    <h2>Please Select An Operation</h2>
                    <Grid>
                        <Button variant="contained" onClick={this.pickOperation("+")}>+</Button>
                        <Button variant="contained" onClick={this.pickOperation("×")}>×</Button>
                    </Grid>
                </React.Fragment>
            )
        }
    }
}