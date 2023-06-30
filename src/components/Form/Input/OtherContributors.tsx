import { useState, ChangeEvent } from 'react';
import { Grid, Input, Tooltip, Button, PressEvent, FormElement } from '@nextui-org/react';
import { formProps } from '@/@types/form';
import { QuestionSquare, PlusSquare, Trash } from 'react-bootstrap-icons';
import { capitalize, addSpace, filterList } from '@/utils/Helpers';
import { nanoid } from 'nanoid';
import FormStorage from '@/utils/FormStorage';

const OtherContributors: React.FC<formProps> = (props) => {
  const [contributor, setContributor] = useState<string>('');
  const { form, setForm } = FormStorage();
  const otherContributors = form.otherContributors as [string];

  // Updates contributor state when user types in text input
  const updateContributor = (e: ChangeEvent<FormElement>) => {
    const { value } = e.target;
    setContributor(value);
  };

  // Adds contributor to form storage
  const addContributor = (e: PressEvent) => {
    const contributorsList = [];
    // Only push current form data if otherContributors contains valid data
    if (form.otherContributors) contributorsList.push(...form.otherContributors);
    contributorsList.push(contributor);
    setForm({ ...form, otherContributors: contributorsList as [string] });

    // Clear text input after contributor is added
    setContributor('');
  };

  const removeContributor = (e: PressEvent) => {
    const { id } = e.target;
    const filteredContributors = filterList(otherContributors, id);
    setForm({ ...form, otherContributors: filteredContributors as [string] });
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
            <PlusSquare className='h-4 w-auto opacity-50 transition ease-in-out hover:opacity-100' />
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
          {otherContributors.map((item) => (
            <div className='border-b last:border-b-0 flex justify-between' key={nanoid()}>
              <p className='pl-2'>{item}</p>
              <Button id={item} onPress={removeContributor} icon={<Trash className='h-4 w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110' />} auto light />
            </div>
          ))}
        </div>
      ) : null}
    </Grid>
  );
};

export default OtherContributors;
