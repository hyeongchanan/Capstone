import { Spinner, SpinnerWrapper } from "./Loading.styled"

const Loading = ({ loading = true }: { loading?: boolean }) => {
    if (loading) return (
        <SpinnerWrapper>
            로딩로딩중
            <Spinner />
        </SpinnerWrapper>
    )
    return null
}

export default Loading