import React, { Component } from 'react';
import { Segment, Input, Form } from 'semantic-ui-react'

import NavBar from './NavBar'
import Group from './Group'

const options = [
  { key: 'NA', text: 'Any Size', value: 'NA'},
  { key: '1', text: '1', value: '1' },
  { key: '2', text: '2', value: '2' },
  { key: '3', text: '3', value: '3' },
  { key: '4', text: '4', value: '4' },
  { key: '5', text: '5', value: '5' },
  { key: '6', text: '6', value: '6' },
  { key: '7', text: '7', value: '7' },
  { key: '8', text: '8', value: '8' },
  { key: '9', text: '9', value: '9' },
  { key: '11', text: '11', value: '11' },
  { key: '12', text: '12', value: '12' },
  { key: '13', text: '13', value: '13' },
  { key: '14', text: '14', value: '14' },
  { key: '15', text: '15', value: '15' },
]


export default class EecomeTutor extends Component{
  state = {
    course_id: "",
    class_number: "",
    group_size: "",
    course_id_error: false,
    class_num_error: false
  }

  // onSubmit = () => {
  //   this.setState({ course_id_error: this.state.course_id === "" })
  //   this.setState({ class_num_error: this.state.class_number === ""})
  // }
  //
  // onCourseIdChange = (ev, data) => {
  //   this.setState({ course_id: data.value})
  // }
  //
  // onClassNumChange = (ev, data) => {
  //   this.setState({ class_number: data.value})
  // }

  render(){
    const { value } = this.state
        return (

          <React.Fragment>
            <NavBar page='become-tutor'/>
            <div style={{ padding: 100}}>
              <Segment raised>
                <Form>
                  <Form.Group widths='4'>
                    <Form.Input fluid label='Course ID' placeholder='(eg: SWEN-101)'/>
                  </Form.Group>
                  <Form.Select width='2' fluid label='Ideal Group size' options={options} placeholder='(eg: 5)' />

                  <Form.Checkbox label='NTID student' />
                  <Form.Button onClick={this.onSubmit}>Submit</Form.Button>
                </Form>
              </Segment>
            </div>
          </React.Fragment>

        )


    const InputCourseID = () => <Input focus placeholder='Course ID (eg: SWEN-101)' />
    const InputClassNumber = () => <Input focus placeholder= 'Class number (eg: 03)' />

    // export default InputExampleFocus
    const divStyle = {
      padding: 20
    }

    /* return (
      <React.Fragment>
        <NavBar page='add-course'/>
        <div style={divStyle}>
          <InputCourseID/>
          <InputClassNumber/>
        </div>
      </React.Fragment>
      // InputCourseID,
      // InputClassNumber
    )
    */
  }

}