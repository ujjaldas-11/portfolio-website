"use client";
import { ModeToggle } from "@/components/ModeToggle"
// import { NavigationMenu } from "./ui/navigation-menu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Navbar() {



    return (
        <div className="flex justify-between items-center border-none rounded-2x h-[5rem] p-10 ">
            {/* <h1>Ujjal Das</h1> */}
            <div>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="flex justify-center items-center lg:gap-10 sm:gap-2">
                            <NavigationMenuTrigger>pages</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink href={'/pages/about'}>About</NavigationMenuLink>
                                <NavigationMenuLink href={'/pages/projects'}>Projects</NavigationMenuLink>
                                <NavigationMenuLink href={'/pages/skills'}>Skills</NavigationMenuLink>
                                <NavigationMenuLink href={'/pages/github'}>Github</NavigationMenuLink>
                            </NavigationMenuContent>
                            <NavigationMenuLink href={'/'}>Home</NavigationMenuLink>
                            <NavigationMenuLink href={'/pages/contacts'}>Contacts</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

            </div>
            <ModeToggle />
        </div>
    )
}