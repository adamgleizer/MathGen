import React from 'react';
import { ProblemGenerator, Problem, Operation } from './Problem';
import './App.css';
import AnswerField from './AnswerField'
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';

type State = {
  problems: Array<Problem>,
  showAnswers: boolean
}

type Props = {operation: Operation}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    var showAnswers: boolean = false
    var problems: Array<Problem> = []

    for (var i = 0; i < 20; i++) {
      var problem: Problem
      do {
        problem = ProblemGenerator(this.props.operation)
      } while (problems.some(existingProblem => existingProblem.equals(problem)))
      problems.push(problem)
    }

    this.state = { problems: problems, showAnswers: showAnswers }

    // This binding is necessary to make `this` work in the callback    
    this.toggleAnswers = this.toggleAnswers.bind(this);
  }

  toggleAnswers() {
    this.setState((state) => ({
      showAnswers: !state.showAnswers
    }));
  }

  render() {
    return (
      <React.Fragment>
        <FormControlLabel
          control={
            <Switch
              checked={this.state.showAnswers}
              onChange={this.toggleAnswers}
              name="checkedB"
              color="primary"
            />
          }
          label="Toggle Answers"
        />
        <ol>
          {this.state.problems.map(problem => (
            <li key={`${problem.firstOperand}${problem.secondOperand}`}>
              <Box width={290}>
                <Grid container justify="space-between" alignItems="center" spacing={0}>
                  <Grid item>
                    {problem.expressionEquals}
                  </Grid>
                  <Grid item>
                    <AnswerField
                      answer={problem.result}
                      showAnswer={this.state.showAnswers} 
                      />
                  </Grid>
                </Grid>
              </Box>

            </li>
          ))}
        </ol>
      </React.Fragment>
    )
  }
}

export default App;
