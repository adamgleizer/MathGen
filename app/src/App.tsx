import React from 'react';
import {ProblemGenerator, Problem} from './Problem';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


function App() {
  var problems : Array<Problem> = []

  for (var i = 0; i < 10; i++) {
    problems.push(ProblemGenerator("+"))
  }
  for (var i = 0; i < 10; i++) {
    problems.push(ProblemGenerator("-"))
  }

  return (
    <ol>
      {problems.map(problem => (
        <li>
          <Grid container justify="flex-start" alignItems="center" spacing={1}>
            <Grid item>
              {problem.expressionEquals}
            </Grid>
            <Grid item xs={1}>
              <form>
                <TextField id="standard-basic" />
              </form>
            </Grid>
          </Grid>
        </li>
      ))}
    </ol>
  );
}

export default App;
