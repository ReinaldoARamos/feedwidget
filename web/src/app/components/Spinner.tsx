import { CircleNotch } from "@phosphor-icons/react/dist/ssr";

export function Spinner() {
    return (
        <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
            <CircleNotch weight="bold" className="h-4 w-4 animate-spin"/>
        </div>
    )
}