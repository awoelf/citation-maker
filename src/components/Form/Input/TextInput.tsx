import { useMemo } from 'react';
import { formProps, formChange } from '@/@types/form';
import { QuestionSquare } from 'react-bootstrap-icons';
import { capitalize, addSpace } from '../../../utils/helpers';

// Components
import { Grid, Input, Tooltip, useInput, SimpleColors,  } from '@nextui-org/react';

const TextInput: React.FC<formProps> = (props) => {
  const updateForm = props.updateForm as formChange;

  const validate = (value: string) => {
    // return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = useMemo(() => {
    if (!props.formValue)
      return {
        text: '',
        color: '',
      };
    const isValid = validate(props.formValue as string);
    return {
      text: isValid ? '' : props.errorMsg,
      color: isValid ? 'default' : 'error',
    };
  }, [props.formValue]);

  return (
    <Grid
      xs={props?.mobileCols || props.cols || 12}
      sm={props.cols || 12}
      direction='column'
      aria-labelledby={props.inputName}
    >
      <Input
        className='text-clip'
        label={capitalize(addSpace(props.inputName))}
        name={props.inputName}
        value={props.formValue}
        onChange={updateForm}
        fullWidth={props.fullWidth || true}
        type={props.type || 'text'}
        bordered
        status={helper.color as SimpleColors}
        color={helper.color as SimpleColors}
        helperColor={helper.color as SimpleColors}
        helperText={helper.text}
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
