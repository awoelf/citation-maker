import { useState, useEffect } from 'react';
import FormStorage from '../../storage/formStorage';
import { CalendarEvent } from 'react-bootstrap-icons';
import { Button, Tooltip, Grid } from '@nextui-org/react';

function UseTodayDate() {
  const { updateTodayDate, form } = FormStorage();
  const [dateExists, setDateExists] = useState(false);

  useEffect(() => {
    form.dayAccessed || form.monthAccessed || form.yearAccessed
      ? setDateExists(true)
      : setDateExists(false);
  }, [form]);

  return (
    <>
      {dateExists ? null : (
        <Grid xs={1}>
          <Tooltip content={"Use today's date"} color='invert' trigger='hover' placement='right'>
            <Button
              auto
              light
              className='transition ease-in-out hover:-translate-y-1 hover:scale-110 use-today-date-button'
              icon={<CalendarEvent />}
              onPress={() => updateTodayDate()}
            />
          </Tooltip>
        </Grid>
      )}
    </>
  );
};

export default UseTodayDate;
