import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard!");
    } catch (err) {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy to clipboard.");
    }
};

export const handleCopyClick = (text: string) => () => {
    copyToClipboard(text);
};