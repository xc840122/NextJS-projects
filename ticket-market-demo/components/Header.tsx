import Image from "next/image"
import Link from "next/link"
import logo from "@/app/images/logo.png"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

const Header = () => {
  return (
    <div className="border-b">
      <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
        {/* logo */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="font-bold shrink-0">
            <Image
              className="w-24 lg:w-28"
              src={logo}
              alt="logo"
            // width={100}
            // height={100}
            />
          </Link>
          {/* user sign up/sign in */}
          <div className="lg:hidden">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-gray-100 text-gray-800 px-3 py-1.5
                text-sm rounded-full hover:bg-gray-200 transition 
                border border-gray-300">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header