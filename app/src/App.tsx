import React from 'react';
import { ProblemGenerator, Problem, Operation } from './Problem';
import AnswerField from './AnswerField'
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

type State = {
  problems: Array<Problem>,
  showAnswers: boolean
}

type Props = {operation: Operation}

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    var showAnswers: boolean = false
    var problems: Array<Problem> = generateProblems(this.props.operation)

    this.state = { problems: problems, showAnswers: showAnswers }

    // This binding is necessary to make `this` work in the callback    
    this.toggleAnswers = this.toggleAnswers.bind(this);
    this.regenerateProblems = this.regenerateProblems.bind(this);
  }

  toggleAnswers() {
    this.setState((state) => ({
      showAnswers: !state.showAnswers
    }));
  }

  regenerateProblems() {
    const newProblems = generateProblems(this.props.operation)
    this.setState((state) => ({
      problems: newProblems 
    }))
  }

  render() {
    return (
      <Grid container alignItems="center" direction="column">
        <Grid container item justify="center" spacing={1}>
          <Grid item>
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
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={this.regenerateProblems}>Refresh</Button>
          </Grid>
        </Grid>
        <Grid container item justify="center">
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
        </Grid>   
      </Grid>
    )
  }
}

function generateProblems(operation: Operation) : Array<Problem> {
  const problems: Array<Problem> = []
  for (var i = 0; i < 20; i++) {
    var problem: Problem
    do {
      problem = ProblemGenerator(operation)
    } while (problems.some(existingProblem => existingProblem.equals(problem)))
    problems.push(problem)
  }
  return problems
}

export default App;
