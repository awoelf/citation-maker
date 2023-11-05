import { useState, ChangeEvent } from 'react';
import { formProps, contributor } from '@/@types/form';
import { PlusSquare, Trash } from 'react-bootstrap-icons';
import FormStorage from '../../storage/formStorage';
import { generateUid } from '@/utils/helpers';
import { Button, PressEvent, FormElement, Text, Collapse } from '@nextui-org/react';
import TextInput from './TextInput';

function OtherContributors(props: formProps) {
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
    function updateContributor(e: ChangeEvent<FormElement>) {
        const { value, name } = e.target;
        setContributor({ ...contributor, [name]: value });
    }

    // Adds contributor to form storage
    function addContributor() {
        const contributorsList = [];
        if (form.otherContributors) contributorsList.push(...form.otherContributors);
        contributor.id = generateUid();
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
    }

    function removeContributor(e: PressEvent) {
        const { id } = e.target;
        const filteredContributors = otherContributors?.filter((item) => item.id != id);
        setForm({ ...form, otherContributors: filteredContributors });
    }

    return (
        <div className='min-w-full'>
            <Collapse.Group bordered borderWeight={'normal'} className='m-2 mt-4'>
                <Collapse
                    data-test='other-contributors-dropdown'
                    title={<Text size='$sm'>Other Contributors</Text>}
                >
                    <div
                        aria-labelledby={props.inputName}
                        className='grid grid-cols-2 sm:flex items-center'
                    >
                        <TextInput
                            formValue={contributor.firstName}
                            inputName={'firstName'}
                            label={'First Name'}
                            updateForm={updateContributor}
                            cols={4}
                            mobileCols={12}
                            dataTest={'other-contributors-first'}
                        />
                        <TextInput
                            formValue={contributor.middleInitial}
                            inputName={'middleInitial'}
                            updateForm={updateContributor}
                            cols={3}
                            mobileCols={12}
                            dataTest={'other-contributors-middle'}
                        />
                        <TextInput
                            formValue={contributor.lastName}
                            inputName={'lastName'}
                            updateForm={updateContributor}
                            cols={4}
                            mobileCols={12}
                            dataTest={'other-contributors-last'}
                        />
                        <TextInput
                            formValue={contributor.suffix}
                            inputName={'suffix'}
                            updateForm={updateContributor}
                            cols={2}
                            mobileCols={12}
                            dataTest={'other-contributors-suffix'}
                        />
                    </div>
                    <Button
                        auto
                        onPress={addContributor}
                        className='flex m-auto mt-2'
                        disabled={!(contributor.firstName || contributor.lastName)}
                        data-test='add-contributor-button'
                    >
                        <PlusSquare className='h-4 w-auto opacity-50 transition ease-in-out hover:opacity-100 pr-2' />
                        Add Contributor
                    </Button>
                    {otherContributors?.length ? (
                        <div className='p-2'>
                            {otherContributors.map((item) => (
                                <div
                                    className='border-b last:border-b-0 flex justify-between items-center'
                                    key={item.id}
                                >
                                    <p className='pl-2'>
                                        {item.firstName}{' '}
                                        {item.middleInitial ? `${item.middleInitial}.` : null}{' '}
                                        {item.lastName} {item.suffix}
                                    </p>
                                    <Button
                                        data-test={`remove-contributor-button-${item.firstName}-${item.middleInitial}-${item.lastName}`}
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
                </Collapse>
            </Collapse.Group>
        </div>
    );
}

export default OtherContributors;
