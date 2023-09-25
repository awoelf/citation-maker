import { Key } from 'react';
import { formProps, formChangeDropdown } from '@/@types/form';
import { QuestionSquare } from 'react-bootstrap-icons';
import { capitalize, addSpace } from '../../utils/helpers';
import {
  Grid,
  Input,
  Tooltip,
  Dropdown,
} from '@nextui-org/react';

const DropdownInput: React.FC<formProps> = (props) => {
  const updateForm = props.updateForm as formChangeDropdown;

  const setSelectedValue = (keys: 'all' | Set<Key>): any => {
    updateForm(props.inputName, Array.from(keys)[0] as number);
  };

  return (
    <Grid
      xs={props?.mobileCols || props.cols || 12}
      sm={props.cols || 12}
      direction='column'
      aria-labelledby={props.inputName}
      className='place-content-end'
    >
      <Dropdown>
        <Dropdown.Trigger>
          <Input
            className='text-clip'
            label={props.label || capitalize(addSpace(props.inputName))}
            name={props.inputName}
            value={props.formValue as string}
            bordered
            readOnly
            type='text'
            contentLeftStyling={false}
            placeholder={props.placeholder}
            contentLeft={
              props.tooltipMessage ? (
                <Tooltip
                  color='invert'
                  className='pl-4'
                  trigger='hover'
                  placement='right'
                  content={props.tooltipMessage}
                >
                  <QuestionSquare className='opacity-50' />
                </Tooltip>
              ) : null
            }
          />
        </Dropdown.Trigger>
        <Dropdown.Menu
          aria-label='month dropdown'
          onSelectionChange={setSelectedValue}
          selectionMode='single'
        >
          <Dropdown.Item key='01'>01 - January</Dropdown.Item>
          <Dropdown.Item key='02'>02 - February</Dropdown.Item>
          <Dropdown.Item key='03'>03 - March</Dropdown.Item>
          <Dropdown.Item key='04'>04 - April</Dropdown.Item>
          <Dropdown.Item key='05'>05 - May</Dropdown.Item>
          <Dropdown.Item key='06'>06 - June</Dropdown.Item>
          <Dropdown.Item key='07'>07 - July</Dropdown.Item>
          <Dropdown.Item key='08'>08 - August</Dropdown.Item>
          <Dropdown.Item key='09'>09 - September</Dropdown.Item>
          <Dropdown.Item key='10'>10 - October</Dropdown.Item>
          <Dropdown.Item key='11'>11 - November</Dropdown.Item>
          <Dropdown.Item key='12'>12 - December</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Grid>
  );
};

export default DropdownInput;
