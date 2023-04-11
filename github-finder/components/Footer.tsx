const Footer = () => {
  return (
    <footer className="p-2 w-full grid items-center ccntent-center">
      <p className="text-sm text-center">
        Oscar Ventura Ortiz,{' '}
        <span className="text-primary px-2">{new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}

export default Footer
