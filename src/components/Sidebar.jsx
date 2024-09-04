import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react' 

export default function Sidebar(){
    return(
        <>
            <Sheet>
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent side={'left'}>
                <ul>
                    <li><a href="/">Teste</a></li>
                </ul>
            </SheetContent>
            </Sheet>
        </>
    )
}