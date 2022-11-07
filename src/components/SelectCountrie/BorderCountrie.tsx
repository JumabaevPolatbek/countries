import Button from "@mui/material/Button"

type Props = {
    border:string
}

export default function BordersCountrie({border}:Props) {
    return (
        <Button variant="outlined" href={border.toLowerCase()}>
                {border}
        </Button>
    )
}