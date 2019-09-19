import React from 'react';
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';


class PeoplePlace extends React.Component {
  state = {
    value: null,
    setValue: null,
  };

  handleChangeMulti = (value) => {
    this.setState({
      setValue: value,
    })
    
  }

  render() {
 
    const { location } = this.props;
    console.log(location)
    const suggestions = location.map(suggestion => ({
      value: suggestion.address,
      label: suggestion.address,
    }));
    
    return (
      <div>
        <NoSsr>
          <Select
            inputId="react-select-multiple"
            TextFieldProps={{
              label: 'Countries',
              InputLabelProps: {
                htmlFor: 'react-select-multiple',
              },
            }}
            placeholder="Select multiple countries"
            options={suggestions}
            value={this.state.setValue}
            onChange={this.handleChangeMulti}
          />
        </NoSsr>
      </div>
    );
  }
  
}


// class PeoplePlace extends React.Component {
//   state = {
//     input: {
//       display: 'flex',
//       padding: 0,
//       height: 'auto',
//     },
//     setMulti: null,
//   }

//   handleChangeMulti = (value) => {
//     this.state.setMulti(value);
//   }

//   // selectStyles = {
//   //   input: base => ({
//   //     ...base,
//   //     color: blue,
//   //     '& input': {
//   //       font: 'inherit',
//   //     },
//   //   }),
//   // };

//   handleChange = (event) => {
//       this.setState(oldValues => ({
//         ...oldValues,
//         [event.target.name]: event.target.value,
//         text: event.target.value,
//       }));
//     }

//   render() {
//     const { location } = this.props;
//     console.log(location)

//     return (
//       <div className="shown-form">
//         <NoSsr>
//            <Select
//           styles={this.selectStyles}
//           inputId="react-select-multiple"
//           TextFieldProps={{
//             label: 'Countries',
//             InputLabelProps: {
//               htmlFor: 'react-select-multiple',
//               shrink: true,
//             },
//           }}
//           placeholder="Select multiple countries"
//           options={suggestions}
//           // components={components}
//           value={this.state.multi}
//           onChange={this.handleChangeMulti}
//           isMulti
//         />
//       </NoSsr>
//       </div>
//     );
//   }
// }
export default PeoplePlace;