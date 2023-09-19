import FormStorage from '../../../utils/formStorage';
import { CalendarEvent } from 'react-bootstrap-icons';

// Components
import { Button, Tooltip, Grid } from '@nextui-org/react';

const UseTodayDate: React.FC = () => {
  const { updateTodayDate } = FormStorage();

  return (
    <Grid xs={1}>
      <Tooltip content={"Use today's date"} color='invert' trigger='hover'>
        <Button
          auto
          light
          className='transition ease-in-out hover:-translate-y-1 hover:scale-110'
          icon={<CalendarEvent />}
          onPress={() => updateTodayDate()}
        />
      </Tooltip>
    </Grid>
  );
};

export default UseTodayDate;
