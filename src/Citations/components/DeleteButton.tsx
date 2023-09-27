import { Button, Tooltip } from '@nextui-org/react';
import ConfirmDelete from './ConfirmDelete';

function DeleteButton() {
  return (
    <Tooltip trigger='click' placement='bottom' className='delete-all-button' content={ConfirmDelete()}>
      <Button auto>Delete All</Button>
    </Tooltip>
  );
}

export default DeleteButton;
