import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
    const router = useRouter();
    return (
        <div onClick={() => router.push("/")} 
        className="
            h-20
            w-20
            rounded-full
            p-4
            flex
            items-center
            justify-center
            hover:bg-blue-300
            hover:bg-opacity-10
            cursor-pointer
            transition">
                <img 
                    src="/X_logo.jpg.webp"
                    alt="X Logo"
                    width={64}
                    height={64}
                />
         </div>
    )
}

export default SidebarLogo;