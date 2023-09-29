import { tooltipProps } from '@/@types/form';
import { QuestionSquare } from 'react-bootstrap-icons';
import { Tooltip } from '@nextui-org/react';

function TooltipInput(props: tooltipProps) {
    return (
        <Tooltip
            color='invert'
            className='pl-4 tooltip-component'
            trigger='hover'
            placement='right'
            content={props.tooltipMessage}
        >
            <QuestionSquare className='opacity-50' />
        </Tooltip>
    );
}

export default TooltipInput;
