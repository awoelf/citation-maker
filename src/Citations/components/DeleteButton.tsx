import { Button, Tooltip } from '@nextui-org/react';
import ConfirmDelete from './ConfirmDelete';

function DeleteButton() {
    return (
        <Tooltip
            trigger='click'
            placement='bottom'
            data-test='delete-all-button'
            content={ConfirmDelete()}
        >
            <Button auto>Delete All</Button>
        </Tooltip>
    );
}

export default DeleteButton;
