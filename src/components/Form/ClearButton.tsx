import { Button } from '@nextui-org/react';
import FormStorage from '@/utils/FormStorage';
import { CitationStyle, CitationSource } from '@/utils/CitationStorage';

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
