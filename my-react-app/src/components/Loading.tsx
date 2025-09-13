import { Spinner, SpinnerWrapper } from "./Loading.styled"

const Loading = ({ loading = true }: { loading?: boolean }) => {
    if (loading) return (
        <SpinnerWrapper>
            <Spinner />
        </SpinnerWrapper>
    )
    return null
}

export default Loading