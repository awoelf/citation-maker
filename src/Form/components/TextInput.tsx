import { useMemo } from 'react';
import { formProps, formChange } from '@/@types/form';
import { capitalize, addSpace, validateInput } from '../../utils/helpers';
import { Grid, Input, SimpleColors } from '@nextui-org/react';

const TextInput: React.FC<formProps> = (props) => {
  const updateForm = props.updateForm as formChange;

  const validate = (value: string) => {
    return validateInput(value);
  };

  const helper = useMemo(() => {
    if (!props.formValue)
      return {
        text: '',
        color: '',
      };
    const isValid = validate(props.formValue as string);
    return {
      text: isValid ? '' : 'Please use only alphanumeric or punctuation characters.',
      color: isValid ? 'default' : 'warning',
    };
  }, [props.formValue]);

  return (
    <Grid
      xs={props?.mobileCols || props.cols || 12}
      sm={props.cols || 12}
      direction='column'
      aria-labelledby={props.inputName}
      className='place-content-end'
    >
      <Input
        className='text-clip'
        label={props.label || capitalize(addSpace(props.inputName))}
        name={props.inputName}
        value={props.formValue}
        onChange={updateForm}
        type={props.type || 'text'}
        bordered
        status={helper.color as SimpleColors}
        color={helper.color as SimpleColors}
        helperColor={helper.color as SimpleColors}
        helperText={helper.text}
        contentLeftStyling={false}
        placeholder={props.placeholder}
        contentLeft={props.contentLeft}
      />
    </Grid>
  );
};

export default TextInput;
