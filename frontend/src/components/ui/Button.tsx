import { FC, ButtonHTMLAttributes }                    from 'react';
import { cva, type VariantProps }                       from 'class-variance-authority';
import { Slot }                                         from '@radix-ui/react-slot';
import { cn }                                           from '@/lib/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold transition-all duration-200 active:scale-95 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                primary: 'bg-primary text-primary-foreground hover:brightness-110 hover:shadow-lg',
                secondary: 'bg-secondary text-secondary-foreground hover:brightness-110 hover:shadow-lg',
                destructive: 'bg-destructive text-destructive-foreground hover:brightness-110 hover:shadow-lg',
                accent: 'bg-accent text-accent-foreground hover:brightness-110 hover:shadow-lg hover:translate-y-[-2px]',
                outline: 'border-2 border-border bg-transparent text-foreground hover:bg-muted hover:border-foreground hover:shadow-md',
                ghost: 'bg-transparent text-foreground hover:bg-muted',
                link: 'text-accent underline-offset-4 hover:underline bg-transparent',
            },
            size: {
                default: 'px-6 py-3',
                sm: 'px-4 py-2 text-sm',
                lg: 'px-8 py-4 text-lg',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        },
    }
);

interface IProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export const Button: FC<IProps> = ({
    className,
    variant,
    size,
    asChild = false,
    ...props
}) => {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp
            className = {cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
};
