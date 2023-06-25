import { Grid, Input, Tooltip } from '@nextui-org/react';
import { formProps } from '@/@types/form';
import { QuestionSquare } from 'react-bootstrap-icons';
import { capitalize, addSpace } from '@/utils/helpers';

const TextInput: React.FC<formProps> = (props) => {
  return (
    <Grid xs={props.cols || 12 } direction='column' aria-labelledby={props.inputName}>
      <Input
        label={capitalize(addSpace(props.inputName))}
        name={props.inputName}
        value={props.formValue}
        onChange={props.updateForm}
        fullWidth={props.fullWidth || true}
        type={props.type || 'text'}
        clearable
        bordered
        contentLeftStyling={false}
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
    </Grid>
  );
};

export default TextInput;
