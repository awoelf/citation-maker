import { Button, Tooltip } from '@nextui-org/react';

// Components
import ConfirmDelete from './ConfirmDelete';

function DeleteButton() {
  return (
    <Tooltip trigger='click' placement='bottom' content={ConfirmDelete()}>
      <Button auto>
        Delete All
      </Button>
    </Tooltip>
  );
}

export default DeleteButton;
