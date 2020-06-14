import React from 'react';
import TextField from '@material-ui/core/TextField';
import {compoundNumber} from './Problem'

export default function AnswerField(props: {answer: compoundNumber, showAnswer: boolean}) {
    if (props.showAnswer) {
        return (
            <DisplayAnswerField answer={props.answer} />
        )
    } else {
        return (
            <InputAnswerField answer={props.answer} />
        )
    }
}

function DisplayAnswerField(props: {answer: compoundNumber} ) {
  var answer;
  if (props.answer.remainder != null) {
    answer = `${props.answer.whole} rem: ${props.answer.remainder}`
  }
  else {
    answer = props.answer.whole;
  }
  return (
      <form>
      <TextField
          id="standard-basic"
          value={answer}
      >
      </TextField>
      </form>
  )
}

type Props = { answer: compoundNumber }
type State = { currentVal: string, correct: boolean }

class InputAnswerField extends React.Component<Props
  , State> {
  constructor(props: Props) {
    super(props)
    this.state = { currentVal: '', correct: false }
  }

  onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    console.log(typeof event)
    if (event.target.value === this.props.answer.toString()) {
      this.setState({ correct: true })
    }
    else {
      this.setState({ correct : false })
    }
  }
  render() {
    var color : "primary" | "secondary" = this.state.correct ? "primary" : "secondary"
    return (
      <TextField
        color={color}
        name="phone"
        onChange={this.onChange.bind(this)}
      />
    )
  }
}