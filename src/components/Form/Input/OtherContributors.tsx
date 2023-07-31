import { useState, ChangeEvent } from 'react';
import { formProps } from '@/@types/form';
import { PlusSquare, Trash } from 'react-bootstrap-icons';
import { capitalize, addSpace, filterList } from '../../../utils/helpers';
import { nanoid } from 'nanoid';
import FormStorage from '../../../utils/formStorage';

// Components
import { Grid, Input, Button, PressEvent, FormElement, Text } from '@nextui-org/react';

const OtherContributors: React.FC<formProps> = (props) => {
  const [contributor, setContributor] = useState<string>('');
  const { form, setForm } = FormStorage();
  const otherContributors = form.otherContributors;

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
      
      <Text size="$sm" className='pb-1 pl-1'>Other Contributors</Text>
      <div className='flex items-center'>
        <Input
          name={props.inputName}
          value={contributor}
          onChange={updateContributor}
          fullWidth={props.fullWidth || true}
          type={props.type || 'text'}
          bordered
          contentLeftStyling={false}
          contentClickable={true}
          contentRightStyling={false}
        />
        <Button light auto onPress={addContributor}>
          <PlusSquare className='h-4 w-auto opacity-50 transition ease-in-out hover:opacity-100' />
        </Button>
      </div>

      {props.formValue ? (
        <div className='pt-3'>
          {otherContributors.map((item) => (
            <div className='border-b last:border-b-0 flex justify-between' key={nanoid()}>
              <p className='pl-2'>{item}</p>
              <Button
                id={item}
                onPress={removeContributor}
                icon={
                  <Trash className='h-4 w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110' />
                }
                auto
                light
              />
            </div>
          ))}
        </div>
      ) : null}
    </Grid>
  );
};

export default OtherContributors;
