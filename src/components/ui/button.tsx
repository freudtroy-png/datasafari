import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-r2 text-sm font-semibold transition-all duration-200 cursor-pointer font-sans leading-none',
  {
    variants: {
      variant: {
        default: 'bg-ds-green text-ds-ink hover:bg-ds-lime',
        primary: 'bg-ds-green text-ds-ink hover:bg-ds-lime',
        outline: 'bg-transparent text-ds-ink border border-ds-line hover:border-ds-green hover:text-ds-green-dark',
        ghost: 'bg-transparent text-ds-ink hover:bg-ds-wash',
        white: 'bg-white text-ds-ink hover:bg-ds-wash',
      },
      size: {
        default: 'h-11 px-7',
        sm: 'h-9 px-[18px] text-xs',
        lg: 'h-14 px-9 text-sm',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
