import React, { ReactNode } from 'react';
import { Text, Button, Grid } from '@nextui-org/react';
import { CitationRaw } from '@/utils/citationStorage';

function ConfirmDelete(): ReactNode {
  const { removeItem } = CitationRaw();

  return (
    <Grid.Container
      css={{
        borderRadius: '14px',
        padding: '0.75rem',
        maxWidth: '330px',
      }}
    >
      <Text>
        Are you sure you want to delete your citations? This cannot be undone.
      </Text>
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
};

export default ConfirmDelete;