import Dropdown from "./Dropdown";
import { FcGoogle } from 'react-icons/fc'
import { FaCheck } from 'react-icons/fa'
const iconLeft = < FcGoogle size={18} />
const iconRight = < FaCheck color='#0064ff' />

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
]

export default {
  title: 'Dropdown',
  component: Dropdown,
}

export const Simple = () => (
  <Dropdown
    options={options}
    label="Simple Dropdown"
    iconRight={iconRight}
  />
)

export const WithLeftIcon = () => (
  <Dropdown
    options={options}
    label="Dropdown with left icon"
    iconLeft={iconLeft}
    iconRight={iconRight}
  />
)

export const Focused = () => (
  <Dropdown
    options={options}
    label="Focused Dropdown"
    iconRight={iconRight}
    selectedOptionBackground="#9dc9ff"
  />
)
export const RadioTypeOption = () => (
  <Dropdown
    label="Dropdown Type Radio"
    options={options}
    type="radio"
    iconLeft={iconLeft}
  />
)
export const WithoutLabel = () => <Dropdown options={options} />
