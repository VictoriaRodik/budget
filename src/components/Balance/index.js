import { Typography } from "../styledComponents/Typography";

const Balance = ({ balance }) => {
    return (
        <Typography>
            Current balance: {balance}
        </Typography>
    )
}
export default Balance;