import { tooltipProps } from '@/@types/form';
import { QuestionSquare } from 'react-bootstrap-icons';
import { Tooltip } from '@nextui-org/react';

const TooltipInput: React.FC<tooltipProps> = (props) => {
  return (
    <Tooltip
      color='invert'
      className='pl-4'
      trigger='hover'
      placement='right'
      content={props.tooltipMessage}
    >
      <QuestionSquare className='opacity-50' />
    </Tooltip>
  );
};

export default TooltipInput;
