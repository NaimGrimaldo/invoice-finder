import { tss } from "tss-react/mui";

export const useStyles = tss.create(({ theme }) => ({
    mediumImg: {
        height: 100,
        width: 100,
        '& svg': {
            height: 100,
            width: 100,
        },
        '& g': {
            height: 100,
            width: 100,
        },
        '& path': {
            height: 100,
            width: 100,
        }
    },
    largeImg: {
        height: 190,
        width: 190,
    },
    text: {
        fontWeight: 500,
        color: theme.palette.text.secondary,
        marginTop: 24,
        textAlign: 'center',
        fontSize: 14
    },
    mediumText: {
        fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        }
    },
    largeText: {
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        }
    },
    secondaryText: {
        fontWeight: 400,
        fontSize: 12,
        color: '#8892A0',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        }
    },
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(8, 6)
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
            height: 100
        }
    },
    children: {
        padding: '24px 0px'
    }
}));