import { useState, ChangeEvent } from 'react';
import { formProps, contributor } from '@/@types/form';
import { PlusSquare, Trash } from 'react-bootstrap-icons';
import { nanoid } from 'nanoid';
import FormStorage from '../../../utils/formStorage';

// Components
import { Grid, Button, PressEvent, FormElement, Text } from '@nextui-org/react';
import TextInput from './TextInput';

const OtherContributors: React.FC<formProps> = (props) => {
  // State for storing single contributor before adding to form data.
  const [contributor, setContributor] = useState<contributor>({
    id: '',
    role: '',
    firstName: '',
    middleInitial: '',
    lastName: '',
    suffix: '',
  });
  const { form, setForm } = FormStorage();
  const otherContributors = form.otherContributors;

  // Updates contributor state when user types in text input
  const updateContributor = (e: ChangeEvent<FormElement>) => {
    const { value, name } = e.target;
    setContributor({ ...contributor, [name]: value });
  };

  // Adds contributor to form storage
  const addContributor = (e: PressEvent) => {
    const contributorsList = [];
    // TO DO: Rewrite for simplicity.
    // Only push current form data if otherContributors contains valid data
    if (form.otherContributors) contributorsList.push(...form.otherContributors);
    contributor.id = nanoid();
    contributorsList.push(contributor);
    setForm({ ...form, otherContributors: contributorsList as Array<contributor> });

    // Clear text input after contributor is added
    setContributor({
      id: '',
      role: '',
      firstName: '',
      middleInitial: '',
      lastName: '',
      suffix: '',
    });
  };

  const removeContributor = (e: PressEvent) => {
    const { id } = e.target;
    // const filteredContributors = filterList(otherContributors, id);
    const filteredContributors = otherContributors?.filter((item) => {
      return item.id != id;
    });
    setForm({ ...form, otherContributors: filteredContributors });
  };

  return (
    <Grid xs={props.cols || 12} direction='column' aria-labelledby={props.inputName}>
      <Text size='$sm' className='pb-1 pl-1'>
        Other Contributors
      </Text>
      <div className='flex items-center'>
        <TextInput
          formValue={contributor.firstName}
          inputName={'firstName'}
          label={'Author First Name'}
          updateForm={updateContributor}
          cols={4}
          mobileCols={6}
        />
        <TextInput
          formValue={contributor.middleInitial}
          inputName={'middleInitial'}
          updateForm={updateContributor}
          cols={2}
          mobileCols={6}
        />
        <TextInput
          formValue={contributor.lastName}
          inputName={'lastName'}
          updateForm={updateContributor}
          cols={4}
          mobileCols={6}
        />
        <TextInput
          formValue={contributor.suffix}
          inputName={'suffix'}
          updateForm={updateContributor}
          cols={2}
          mobileCols={6}
          tooltipMessage='Do not list titles (Dr., Sir, Saint, etc.) or degrees (PhD, MA, DDS, etc.) with names. Do include suffixes like "Jr." or "II."'
        />
          {/* Button can only be pressed if at least first or last name is added. */}
          <Button
            light
            auto
            onPress={addContributor}
            className='mt-7'
            disabled={!(contributor.firstName || contributor.lastName)}
          >
            <PlusSquare className='h-4 w-auto opacity-50 transition ease-in-out hover:opacity-100' />
          </Button>
      </div>

      {otherContributors?.length ? (
        <div className='p-2'>
          {otherContributors.map((item) => (
            <div className='border-b last:border-b-0 flex justify-between' key={nanoid()}>
              <p className='pl-2'>
                {item.firstName} {item.middleInitial ? `${item.middleInitial}.` : null} {item.lastName} {item.suffix}
              </p>
              <Button
                id={item.id}
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
