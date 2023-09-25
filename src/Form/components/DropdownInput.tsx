import { Key } from 'react';
import { formProps, formChangeDropdown } from '@/@types/form';
import { QuestionSquare } from 'react-bootstrap-icons';
import { capitalize, addSpace } from '../../utils/helpers';
import { Grid, Input, Tooltip, Dropdown } from '@nextui-org/react';

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
            onChange={() => {}}
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
          <Dropdown.Item key=''>None</Dropdown.Item>
          <Dropdown.Item key='1'>1 - January</Dropdown.Item>
          <Dropdown.Item key='2'>2 - February</Dropdown.Item>
          <Dropdown.Item key='3'>3 - March</Dropdown.Item>
          <Dropdown.Item key='4'>4 - April</Dropdown.Item>
          <Dropdown.Item key='5'>5 - May</Dropdown.Item>
          <Dropdown.Item key='6'>6 - June</Dropdown.Item>
          <Dropdown.Item key='7'>7 - July</Dropdown.Item>
          <Dropdown.Item key='8'>8 - August</Dropdown.Item>
          <Dropdown.Item key='9'>9 - September</Dropdown.Item>
          <Dropdown.Item key='10'>10 - October</Dropdown.Item>
          <Dropdown.Item key='11'>11 - November</Dropdown.Item>
          <Dropdown.Item key='12'>12 - December</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Grid>
  );
};

export default DropdownInput;
