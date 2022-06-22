import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Select, { components } from 'react-select'
import { BiRadioCircleMarked, BiRadioCircle } from 'react-icons/bi';
import * as S from './styles'

const DropDown = ({
  options,
  iconLeft,
  iconRight,
  type,
  label,
  selectedOptionBackground,
  onChange,
  ...props
}) => {

  const [selected, setSelected] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isOptionsLoaded, setOptionsLoaded] = useState(false)


  const Option = ({ children, ...props }) => {
    const renderLeftIcon = () => {
      if (type === "radio") {
        return selected.label === props.data.label
          ? (
            <BiRadioCircleMarked
              size={24}
              color='#0064ff'
            />
          )
          : (
            <BiRadioCircle
              color="#ededed"
              size={24}
            />
          )
      }

      if (iconLeft) {
        return iconLeft
      }

      return null
    }

    const renderRightIcon = () => {
      if (!iconRight) {
        return null
      }

      if (selected && selected.label === props.data.label) {
        return (
          <span>
            {iconRight}
          </span>
        )
      }

      return null

    }

    return (
      <components.Option {...props}>
        <S.StyledOptionsDiv selected={selected.label === props.data?.label}>
          <div>
            {renderLeftIcon()}
            <S.StyledOption value={props.data?.value}>{props.data?.label}</S.StyledOption>
          </div>
          {renderRightIcon()}
        </S.StyledOptionsDiv>
      </components.Option >
    )
  }

  const Menu = ({ children, ...props }) => (
    <S.StyledMenu {...props}>
      {children}
    </S.StyledMenu>
  )

  const handleMenuOpen = () => {
    !isOptionsLoaded &&
      setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setOptionsLoaded(true)
    }, 1000)
  }

  const customComponents = {
    LoadingIndicator: () => <S.StyledSpinner animation="border" variant="primary" />,
    Option,
    Menu
  }

  const getOptionLabel = () => (
    selected.label
      ? <S.SelectedOptionContainer>{type !== "radio" && iconLeft} {selected.label}</S.SelectedOptionContainer>
      : null
  )

  const propsForCustomization = {
    theme: S.customSelectStyles,
    getOptionLabel: getOptionLabel,
    styles: S.focusedBackgroundColor(selected, selectedOptionBackground),
    components: customComponents,
  }

  const handleOnChange = (event) => {
    onChange(event)
    setSelected(event)
  }


  return (
    <S.StyledSelectContainer>
      {label && <S.StyledLabel>{label}</S.StyledLabel>}
      <Select
        options={isLoading ? [] : options}
        onChange={handleOnChange}
        onMenuOpen={handleMenuOpen}
        isLoading={isLoading}
        loadingMessage={() => ""}
        value={selected.value ? selected : null}
        placeholder={'Select...'}
        {...propsForCustomization}
        {...props}
      />
    </S.StyledSelectContainer >
  );
}

export default DropDown

DropDown.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  options: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ),

  /**
   * Icon to show on left part of options
   */
  iconLeft: PropTypes.node,

  /**
   * Icon to show on right part of options
   */
  iconRight: PropTypes.node,

  /**
   * The type of dropdown
   */
  type: PropTypes.string,

  /**
   * The label of dropdown
   */
  label: PropTypes.string,

  /**
   * The color to show when option is selected
   */
  selectedOptionBackground: PropTypes.string,

  /**
   * Optional change handler
   */
  onChange: PropTypes.func,
};

DropDown.defaultProps = {
  options: [{ label: "", value: "" }],
  iconLeft: null,
  iconRight: null,
  type: "",
  label: "",
  selectedOptionBackground: "",
  onChange: () => { },
};