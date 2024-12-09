
import Dropdown from "./dropdown"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ButtonIcons = () => {
    return (
        <div className='flex md:justify-end gap-5  items-center  p-5 md:p-10 md:gap-10'>
            <Dropdown />
            <Button variant='ghost'>
                <Link href='/login'>Sign In</Link>
            </Button>
            <Button variant='outline'>
                <Link href='register'>Register</Link>
            </Button>
        </div>
    )
}

export default ButtonIcons