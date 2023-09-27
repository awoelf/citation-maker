import FormStorage from '../../storage/formStorage';
import { Button } from '@nextui-org/react';

function ClearButton() {
  const { removeItem } = FormStorage();

  return (
    <Button className='clear-form-button' auto onPress={removeItem}>
      Clear Form
    </Button>
  );
}

export default ClearButton;
