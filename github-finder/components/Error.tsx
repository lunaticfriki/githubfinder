interface Props {
  message: string
}
const Error = ({ message }: Props) => {
  return <p className="m-4 flex items-center justify-center">{message}</p>
}

export default Error
