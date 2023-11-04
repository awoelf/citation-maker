import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FormStorage from '../storage/formStorage';
import { Citations, CitationStyle } from '../storage/citationStorage';
import { Grid, Button, Loading, Tooltip } from '@nextui-org/react';
import StyleDropdown from './components/StyleDropdown';
import SourceDropdown from './components/SourceDropdown';
import ClearButton from './components/ClearButton';
import { generateUid } from '@/utils/helpers';
import SourceHandler from './components/SourceHandler';

function CitationForm() {
    const [mounted, setMounted] = useState(false);
    const { form, removeItem } = FormStorage();
    const { citationStyle } = CitationStyle();
    const { updateCitation, addCitation } = Citations();
    const router = useRouter();

    // Prevent hydration errors
    useEffect(() => {
        setMounted(true);
    }, []);

    async function handleSubmit() {
        try {
            if (form.id === '') {
                // If this is a new citation, generate id and add to citations
                form.id = generateUid();
                addCitation(form);
            } else {
                // If editing this citation, use update function
                updateCitation(form);
            }

            // Clear form contents
            removeItem();

            // Route to citation dashboard
            setMounted(false);
            router.push('/citations');
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    return mounted ? (
        <div className='grid' id='form'>
            <div className='flex justify-between gap-2 px-3'>
                <div className='flex gap-2'>
                    {/* Dropdowns for style (MLA) and source (website, journal, etc.) */}
                    <StyleDropdown />
                    <SourceDropdown />
                </div>
                <div className='sm:align-self-end'>
                    <ClearButton />
                </div>
            </div>
            <Grid.Container gap={2} data-test={`form-page-${form.citationSource}`}>
                {/* Based on source (website, journal, etc.) the source handler will display the appropriate input fields */}
                <SourceHandler/>
                <Grid xs={12} className='justify-center'>
                    {/* Only allowed to press submission button if a style is selected */}
                    <Tooltip
                        color='invert'
                        content={'Citation style is required to create a citation.'}
                        isDisabled={!!citationStyle}
                    >
                        <Button onPress={handleSubmit} disabled={!citationStyle}>
                            {form.id ? 'Edit Citation' : 'Create Citation'}
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid.Container>
        </div>
    ) : (
        <Loading type='points-opacity' />
    );
}

export default CitationForm;
