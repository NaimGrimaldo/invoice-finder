import { tss } from "tss-react/mui";

export const useStyles = tss.create(({ theme }) => ({
    paper: {
        width: '100%',
        padding: theme.spacing(2, 3)
    },
    row: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        cursor: 'pointer',
        '&:hover': {
            background: 'rgba(117, 139, 183, 0.04)'
        },
        backgroundColor: '#fff',
    },
    container: {
        marginBottom: 16
    },
    tableBody: {
        '& .MuiTableCell-root': {
            borderBottom: 'none'
        }
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-star',
        padding: theme.spacing(1, 2),
        margin: theme.spacing(1, 0)
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
    },
    desktop: {
        display: 'table',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    mobile: {
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            padding: 8,
            width: '100%'
        }
    },
    header: {
        fontSize: 14,
        fontWeight: 600,
        paddingTop: 0,
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    paginationContainer: {
        paddingTop: 24,
        '& > div': {
            displat: 'flex',
            alignItems: 'center',
        }
    },
    totals: {
        fontSize: 12,
    }
}));