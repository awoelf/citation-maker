import FormStorage from '../../../utils/formStorage';
import { CitationStyle } from '../../../utils/citationStorage';

// Components
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
