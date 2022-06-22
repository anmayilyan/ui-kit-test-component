import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import { components } from 'react-select'

export const StyledSelectContainer = styled.div`
display:flex;
flex-direction:column;
padding:0.5rem
position: relative;
`
export const StyledOptionsDiv = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

& > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props) => props.selected && css`
    option {
      font-weight: bold !important;
    }
  `}
}

// & > * {
//   height: 100%;
// }

svg {
  margin-right: 2px;
}
`
  ;

export const SelectedOptionContainer = styled.div`                                                                               
  display: flex;
  align-items: center;

  svg {
    margin-right: 2px;
  }
`;

export const StyledOption = styled.option`                                                                               
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSpinner = styled(Spinner)`
  z-index: 500;
  position: absolute;
  top: 80px;
  left: 50%; 
`
export const StyledMenu = styled(components.Menu)`
  min-height: 100px !important;
`

export const StyledLabel = styled.h3``

export const focusedBackgroundColor = (selected, selectedOptionBackground) => ({
 
  menu: (base) => ({
    ...base,
    marginTop: "6px"
  }),
  option: (styles) => ({
    ...styles,
    color: 'black',
    fontWeight: 'bold'

  }),
  singleValue: (styles, state) => ({
    ...styles,
    backgroundColor: selected && selectedOptionBackground,
  }),
})

export const customSelectStyles = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#f3f4f5',
    primary50: '#f3f4f5',
    primary: '#ededed',

  },
})
