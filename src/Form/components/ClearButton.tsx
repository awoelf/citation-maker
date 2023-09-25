import FormStorage from '../../storage/formStorage';
import { CitationStyle } from '../../storage/citationStorage';
import { Button } from '@nextui-org/react';

function ClearButton() {
  const formStorage = FormStorage();
  const citationStyle = CitationStyle();
  return (
    <Button
      auto
      onPress={() => {
        formStorage.removeItem();
        citationStyle.removeItem();
      }}
    >
    Clear Form
    </Button>
  );
}

export default ClearButton;
