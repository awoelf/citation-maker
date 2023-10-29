import { useMemo, useState } from 'react';
import { formProps, formChange } from '@/@types/form';
import { capitalize, addSpace } from '../../utils/helpers';
import { Grid, Input, SimpleColors } from '@nextui-org/react';
import validator from 'validator';

function TextInput(props: formProps) {
    const updateForm = props.updateForm as formChange;
    const [isValid, setIsValid] = useState(true);

    const helper = useMemo(() => {
        if (!props.formValue)
            return {
                text: '',
                color: '',
            };

        setIsValid(validator.isAscii(props.formValue + ''));
        return {
            text: isValid ? '' : 'Input must be alphanumeric or punctuation.',
            color: isValid ? 'default' : 'error',
        };
    }, [props.formValue, isValid]);

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
                value={props.formValue as string}
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
                id={props.id}
            />
        </Grid>
    );
}

export default TextInput;
