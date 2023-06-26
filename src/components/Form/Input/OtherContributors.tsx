import { useState, ChangeEvent } from 'react';
import { Grid, Input, Tooltip, Button, PressEvent, FormElement } from '@nextui-org/react';
import { formProps, formSetContributors } from '@/@types/form';
import { QuestionSquare, PlusSquare } from 'react-bootstrap-icons';
import { capitalize, addSpace } from '@/utils/helpers';

const OtherContributors: React.FC<formProps> = (props) => {
  const [contributor, setContributor] = useState<string>('');
  const updateForm = props.updateForm as formSetContributors;

  const updateContributor = (e: ChangeEvent<FormElement>) => {
    const { value } = e.target;
    setContributor(value);
  }

  const addContributor = (e: PressEvent) => {
    updateForm(contributor);
  };

  const handleRemoveContributor = () => {};

  return (
    <Grid xs={props.cols || 12} direction='column' aria-labelledby={props.inputName}>
      <Input
        label={capitalize(addSpace(props.inputName))}
        name={props.inputName}
        value={contributor}
        onChange={updateContributor}
        fullWidth={props.fullWidth || true}
        type={props.type || 'text'}
        bordered
        contentLeftStyling={false}
        contentClickable={true}
        contentRightStyling={false}
        contentRight={
          <Button light auto onPress={addContributor}>
            <PlusSquare className='h-4 w-auto' />
          </Button>
        }
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

export default OtherContributors;
