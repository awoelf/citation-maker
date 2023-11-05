import { Citations } from '../storage/citationStorage';
import FormStorage from '../storage/formStorage';
import { form } from '@/@types/form';
import { copyCitation } from '@/utils/helpers';
import { useRouter } from 'next/router';
import DeleteButton from './components/DeleteButton';
import { Card, Grid, Tooltip, Button } from '@nextui-org/react';
import MLAStyle from './MLA/MLAStyle';
import { Trash, Clipboard, Pencil } from 'react-bootstrap-icons';
// import CopyButton from './components/CopyButton';

function CitationPage() {
    const { citations, deleteCitationById } = Citations();
    const { setForm } = FormStorage();
    const router = useRouter();

    return (
        <div className='citation-page'>
            {citations ? (
                <div className='grid gap-2'>
                    <div className='flex justify-between'>
                        {/* Copy all button will be implemented after citations are able to be sorted alphabetically*/}
                        {/* <div className='flex gap-2 pb-2'><CopyButton /></div> */}
                        <DeleteButton />
                    </div>
                    {citations.map((item: form) => (
                        // Each citation is displayed in a card
                        <Card variant='flat' className='flex citation-card' key={item.id}>
                            <Grid.Container justify='space-between' alignItems='center'>
                                <Grid xs={8} sm={10}>
                                    {/* All citations are run through the MLA style, which formats the data based on source */}
                                    <MLAStyle data={item} />
                                </Grid>
                                {/* Buttons for copying, editing, or deleting a citation */}
                                <Grid xs={4} sm={2} justify='center' className='gap-2'>
                                    <Tooltip
                                        content={'Copy citation'}
                                        color='invert'
                                        trigger='hover'
                                    >
                                        <Button
                                            icon={<Clipboard />}
                                            auto
                                            light
                                            className='transition ease-in-out hover:-translate-y-1 hover:scale-110'
                                            onPress={() => copyCitation(item.id)}
                                            data-test={`copy-citation-button-${item.id}`}
                                        />
                                    </Tooltip>
                                    <Tooltip
                                        content={'Edit citation'}
                                        color='invert'
                                        trigger='hover'
                                    >
                                        <Button
                                            
                                            icon={<Pencil />}
                                            auto
                                            light
                                            className='transition ease-in-out hover:-translate-y-1 hover:scale-110'
                                            onPress={() => {
                                                setForm(item);
                                                router.push('/');
                                            }}
                                            data-test={`edit-citation-button-${item.id}`}
                                        />
                                    </Tooltip>
                                    <Tooltip
                                        content={'Delete citation'}
                                        color='invert'
                                        trigger='hover'
                                    >
                                        <Button
                                            icon={<Trash />}
                                            auto
                                            light
                                            className='transition ease-in-out hover:-translate-y-1 hover:scale-110'
                                            onPress={() => deleteCitationById(item.id)}
                                            data-test={`delete-citation-button-${item.id}`}
                                        />
                                    </Tooltip>
                                </Grid>
                            </Grid.Container>
                        </Card>
                    ))}
                </div>
            ) : (
                // If no citations, then this message appears
                <p className='text-center px-4'>
                    Return to the home page to start creating citations!
                </p>
            )}
        </div>
    );
}

export default CitationPage;
