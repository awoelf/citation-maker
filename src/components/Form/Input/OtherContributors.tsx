import { useState, ChangeEvent } from 'react';
import { Grid, Input, Tooltip, Button, PressEvent, FormElement } from '@nextui-org/react';
import { formProps, formSetContributors, formChange } from '@/@types/form';
import { QuestionSquare, PlusSquare, Trash } from 'react-bootstrap-icons';
import { capitalize, addSpace, filterList } from '@/utils/helpers';
import { nanoid } from 'nanoid';

const OtherContributors: React.FC<formProps> = (props) => {
  const [contributor, setContributor] = useState<string>('');
  const addContributors = props.addContributors as formSetContributors;
  const removeContributors = props.removeContributors as formSetContributors;
  const otherContributors = props.formValue as [string];

  const updateContributor = (e: ChangeEvent<FormElement>) => {
    const { value } = e.target;
    setContributor(value);
  };

  const addContributor = (e: PressEvent) => {
    addContributors([contributor]);
    setContributor('');
  };

  const handleRemoveContributor = (e: PressEvent) => {
    const { id } = e.target;
    const filteredContributors = filterList(otherContributors, id);
    removeContributors(filteredContributors);
  };

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
      {props.formValue ? (
        <div className='pt-3'>
          {otherContributors.map((item, count) => (
            <div className='border-b last:border-b-0 flex justify-between' key={nanoid()}>
              <p className='pl-2'>{item}</p>
              <Button id={item} value={item} onPress={handleRemoveContributor} icon={<Trash className='h-4 w-auto' />} auto light />
            </div>
          ))}
        </div>
      ) : null}
    </Grid>
  );
};

export default OtherContributors;
