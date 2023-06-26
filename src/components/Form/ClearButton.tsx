import { Button } from '@nextui-org/react';
import FormStorage from '@/utils/FormStorage';

function ClearButton() {
  const { form, setForm, removeItem } = FormStorage();
  return (<Button auto onPress={removeItem}>Clear Form</Button>)
}

export default ClearButton;