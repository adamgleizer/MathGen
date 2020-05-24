import React from 'react';
import {ProblemGenerator, Problem} from './Problem';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

type State = {
  problems: Array<Problem>,
  showAnswers: boolean
}

type Props = {}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    var showAnswers: boolean = false
    var problems : Array<Problem> = []

    for (var i = 0; i < 20; i++) {
      var problem: Problem
      do {
        problem = ProblemGenerator("+")
      } while (problems.some(existingProblem => existingProblem.equals(problem)))
      problems.push(problem)
    }

    this.state = {problems: problems, showAnswers: showAnswers}

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
              <Grid container justify="flex-start" alignItems="center" spacing={1}>
                <Grid item>
                  {problem.expressionEquals}
                </Grid>
                <Grid item xs={1}>
                  <AnswerField 
                    answer={this.state.showAnswers ? problem.result : ""}
                  />
                </Grid>
              </Grid>
            </li>
          ))}
        </ol>
      </React.Fragment>
    )
  }
}

function AnswerField(props: {answer: number | string}) {

  return (
    <form>
      <TextField
        id="standard-basic"
        value={props.answer}
      >
      </TextField>
    </form>
  )
}

export default App;
