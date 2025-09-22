import { tss } from "tss-react/mui";

export const useStyles = tss.create(({ theme }) => ({
    container: {
        padding: '24px 0px 16px 0px'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        paddingBottom: 8
    },
    divider: {
        width: '100%'
    }
}))