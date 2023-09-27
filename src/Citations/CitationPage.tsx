import { Citations } from '../storage/citationStorage';
import FormStorage from '../storage/formStorage';
import { form } from '@/@types/form';
import { copyCitation } from '@/utils/helpers';
import { useRouter } from 'next/router';
import DeleteButton from './components/DeleteButton';
import CopyButton from './components/CopyButton';
import { Card, Grid, Tooltip, Button } from '@nextui-org/react';
import MLAStyle from './MLA/MLAStyle';
import { Trash, Clipboard, Pencil } from 'react-bootstrap-icons';

function CitationPage() {
  const { citations, deleteCitationById } = Citations();
  const { setForm } = FormStorage();
  const router = useRouter();

  return (
    <div className='citation-page'>
      {citations ? (
        <div className='grid gap-2'>
          <div className='flex justify-between'>
            <div className='flex gap-2 pb-2'>{/* <CopyButton /> */}</div>
            <DeleteButton />
          </div>
          {citations.map((item: form) => (
            <Card variant='flat' className='flex citation-card' key={item.id}>
              <Grid.Container justify='space-between' alignItems='center'>
                <Grid xs={8} sm={10}>
                  <MLAStyle data={item} />
                </Grid>
                <Grid xs={4} sm={2} justify='center' className='gap-2'>
                  <Tooltip content={'Copy citation'} color='invert' trigger='hover' className='citation-copy-button'>
                    <Button
                      icon={<Clipboard />}
                      auto
                      light
                      className='transition ease-in-out hover:-translate-y-1 hover:scale-110'
                      onPress={() => copyCitation(item.id)}
                    />
                  </Tooltip>
                  <Tooltip content={'Edit citation'} color='invert' trigger='hover' className='citation-edit-button'>
                    <Button
                      icon={<Pencil />}
                      auto
                      light
                      className='transition ease-in-out hover:-translate-y-1 hover:scale-110'
                      onPress={() => {
                        setForm(item);
                        router.push('/');
                      }}
                    />
                  </Tooltip>
                  <Tooltip content={'Delete citation'} color='invert' trigger='hover' className='citation-delete-button'>
                    <Button
                      icon={<Trash />}
                      auto
                      light
                      className='transition ease-in-out hover:-translate-y-1 hover:scale-110'
                      onPress={() => deleteCitationById(item.id)}
                    />
                  </Tooltip>
                </Grid>
              </Grid.Container>
            </Card>
          ))}
        </div>
      ) : (
        <p className='text-center'>Return to the home page to start creating citations!</p>
      )}
    </div>
  );
}

export default CitationPage;
