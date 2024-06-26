import * as React from 'react';

const buttonVariant =
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        return (
            <button
                className={`${buttonVariant} ${className}`}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = 'Button';

export { Button };
