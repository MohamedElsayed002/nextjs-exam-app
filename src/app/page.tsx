import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDownIcon, Search } from "lucide-react"
import Image from "next/image"

const HomePage = () => {
  return (
    <div className="md:w-[150%] p-10">
  <div className="grid grid-cols-[3fr,1fr] items-center gap-4 w-full max-w-screen-lg">
    <div className="flex items-center rounded-md  bg-white pl-3 border border-gray-200">
      <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
        <Search />
      </div>
      <input
        id="price"
        name="price"
        type="text"
        placeholder="Search Quiz"
        className="py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none w-full"
      />
    </div>
    <div className="flex gap-4 items-center">
      <Button className="">
        Start Quiz
      </Button>
      <div>
        <Image className="rounded-full w-8 h-8 object-cover" width={0} height={0} src='/bird.jpg' alt='dsd'  />
      </div>
    </div>
  </div>
</div>
  )
}


export default HomePage