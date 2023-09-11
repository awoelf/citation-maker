import { Citations } from '../../utils/citationStorage';
import { form } from '@/@types/form';
import { ThreeDots } from 'react-bootstrap-icons';

// Components
import DeleteButton from './Input/DeleteButton';
import CopyButton from './Input/CopyButton';
import StyleDropdown from '../Form/Input/StyleDropdown';
import { Card, Grid, Tooltip, Button } from '@nextui-org/react';
import MLAStyle from './MLA/MLAStyle';
import { Trash, Clipboard, Pencil } from 'react-bootstrap-icons';

function CitationPage() {
  const { citations } = Citations();
  return (
    <div>
      {citations ? (
        <div className='grid gap-2'>
          <div className='flex justify-between'>
            <div className='flex gap-2 pb-2'>
              {/* TO DO: Buttons will be hidden until features are supported. */}
              {/* <CopyButton /> */}
            </div>
            <DeleteButton />
          </div>
          {citations.map((item: form) => (
            <Card variant='flat' className='flex' key={item.id}>
              <Grid.Container justify='space-between' alignItems='center'>
                <Grid xs={8} sm={10}>
                  <MLAStyle data={item} />
                </Grid>
                <Grid xs={4} sm={2} justify='center' className='gap-2'>
                  <Tooltip content={'Copy citation'} color='invert' trigger='hover'>
                    <Button
                      icon={<Clipboard />}
                      auto
                      light
                      className='transition ease-in-out hover:-translate-y-1 hover:scale-110'
                    />
                  </Tooltip>
                  <Tooltip content={'Edit citation'} color='invert' trigger='hover'>
                    <Button
                      icon={<Pencil />}
                      auto
                      light
                      className='transition ease-in-out hover:-translate-y-1 hover:scale-110'
                    />
                  </Tooltip>
                  <Tooltip content={'Delete citation'} color='invert' trigger='hover'>
                    <Button
                      icon={<Trash />}
                      auto
                      light
                      className='transition ease-in-out hover:-translate-y-1 hover:scale-110'
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
