import { LocalizationProvider, DatePicker, type DatePickerProps, type DateView } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { type InputProps, type onChangeEvent } from "src/types";
import { FormControl, FormLabel } from '@mui/material';
import { useStyles } from './Date.styles';
import dayjs, { Dayjs } from "dayjs"


export type DateInputProps = Omit<Omit<DatePickerProps<any>, 'value'>, 'onChange'> & InputProps & {
    value: Date | null
    onChange: (event: onChangeEvent) => void
    config?: {
        views?: DateView[],
        minDate?: Dayjs,
        maxDate?: Dayjs
    }
}

export function DateInput({ label, onChange, value, name, error, touched, config, ...rest }: DateInputProps) {
    const { classes } = useStyles()

    return (
        <FormControl fullWidth error={Boolean(touched && error)}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">

                {label && (
                    <FormLabel
                        htmlFor={name}
                        className={classes.label}
                    >
                        {label}
                    </FormLabel>
                )}

                <DatePicker
                    // @ts-ignore
                    value={dayjs(value)}
                    // @ts-ignore
                    onChange={(newValue: Date) => onChange({ target: { name, value: newValue } })}
                    // @ts-ignore
                    slotProps={{
                        textField: {
                            size: "small",
                        },
                        field: {
                            clearable: true
                        }
                    }}
                    // slots={{
                    //     openPickerIcon: CalendarIcon as any
                    // }}
                    {...config}
                    {...rest}
                />
            </LocalizationProvider>
        </FormControl>
    );
}