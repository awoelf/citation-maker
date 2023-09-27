import React, { ReactNode } from 'react';
import { Citations } from '../../storage/citationStorage';
import { Text, Button, Grid } from '@nextui-org/react';

function ConfirmDelete(): ReactNode {
  const { removeItem } = Citations();

  return (
    <Grid.Container
      css={{
        borderRadius: '14px',
        padding: '0.75rem',
        maxWidth: '330px',
      }}
    >
      <Text>Are you sure you want to delete all of your citations? This cannot be undone.</Text>
      <Grid.Container justify='space-between' alignContent='center'>
        <Grid>
          <Button size='sm' light>
            Cancel
          </Button>
        </Grid>
        <Grid>
          <Button size='sm' color='error' onPress={removeItem}>
            Delete
          </Button>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
}

export default ConfirmDelete;
