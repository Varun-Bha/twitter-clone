import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton =() => {
    const router = useRouter();
    return (
    <div onClick={() => router.push('/')}>
        <div className="
            mt-6
            lg:hidden
            rounded-full
            h-14
            w-24
            p-4
            flex
            items-center
            justify-center
            bg-black
            hover:bg-opacity-80
            transition
            cursor-pointer
            ">
                <FaFeather size={24} color="white" />
        </div>
        <div className="
            mt-6
            hidden
            lg:block
            px-4
            py-2
            flex
            rounded-full
            bg-white
            hover:bg-opacity-80
            cursor-pointer
            transition
        ">
            <p className="
            hidden
            lg:block
            text-center
            font-semibold
            text-black
            text-[20px]
            ">Post</p>
        </div>
    </div>
    )
}
export default SidebarTweetButton;