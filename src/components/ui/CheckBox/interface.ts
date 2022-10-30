export interface CheckBoxProps {
    color: 'primary-black' | 'primary-blue';
    bgcolor: 'white' | 'primary-light_blue';
    text: string;
    checked: boolean;
    toggleChecked(): void;
}