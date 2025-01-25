declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare module 'lucide-react' {
    export const IconName: React.ComponentType<any>;
    const content: any;
    export default content;
}