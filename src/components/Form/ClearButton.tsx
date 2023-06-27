import { Button } from '@nextui-org/react';
import FormStorage from '@/utils/FormStorage';

function ClearButton() {
  const { removeItem } = FormStorage();
  return (<Button auto onPress={removeItem}>Clear Form</Button>)
}

export default ClearButton;