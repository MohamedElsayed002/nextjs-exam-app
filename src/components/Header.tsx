

const Header = ({title} : {title : string}) => {
    return (
        <div className="bg-blue-500 w-full text-center p-5">
            <h1 className="text-white text-2xl font-bold">
                {title}
            </h1>
        </div>
    )
}

export default Header