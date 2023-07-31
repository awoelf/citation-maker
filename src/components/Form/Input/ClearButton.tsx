import FormStorage from '../../../utils/formStorage';
import { CitationStyle, CitationSource } from '../../../utils/citationStorage';

// Components
import { Button } from '@nextui-org/react';

function ClearButton() {
  const formStorage = FormStorage();
  const citationStyle = CitationStyle();
  const citationSource = CitationSource();
  return (
    <Button
      auto
      onPress={() => {
        formStorage.removeItem();
        citationStyle.removeItem();
        citationSource.removeItem();
      }}
    >
      Clear Form
    </Button>
  );
}

export default ClearButton;
