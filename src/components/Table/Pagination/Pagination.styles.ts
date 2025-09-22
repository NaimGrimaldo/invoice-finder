import { tss } from "tss-react/mui";

export const useStyles = tss.create(() => ({
    container: {
    },
    pagination: {
        '& .Mui-selected': {
            background: 'rgba(117, 139, 183, 0.08)'
        },
    },
    item: {
        fontWeight: 500,
        background: '#fff',
    }
}));