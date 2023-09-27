import FormStorage from '../../storage/formStorage';
import { Button } from '@nextui-org/react';

function ClearButton() {
  const { removeItem } = FormStorage();

  return (
    <Button
      auto
      onPress={removeItem}
    >
    Clear Form
    </Button>
  );
}

export default ClearButton;
