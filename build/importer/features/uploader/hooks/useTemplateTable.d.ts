import { TemplateColumn } from "../../../types";
export default function useTemplateTable(fields?: TemplateColumn[]): {
    [x: string]: {
        raw: string;
        content: string | import("react/jsx-runtime").JSX.Element;
    } | {
        raw: number;
        content: import("react/jsx-runtime").JSX.Element;
    };
}[];
