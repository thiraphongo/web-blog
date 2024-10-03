const Header = ({ color, children })) => {

  const colorVariants = {
    blue: 'bg-blue-600 hover:bg-blue-500',
    red: 'bg-red-600 hover:bg-red-500',
  }

    return (
        <>
 <button className={`${colorVariants[color]} ...`}>
      {children}
    </button>
        </>
    )
}

export default Header;