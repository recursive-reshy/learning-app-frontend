import { type FC } from 'react'
import { Root, Thumb } from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'

// Icons
// import { Icon, type Icon as IconType } from "@/components"

// interface SwitchProps extends React.ComponentProps< typeof Root > {
//   checkedIcon?: IconType
//   unCheckedIcon?: IconType
// }

// const Switch: FC< SwitchProps > = ( {
const Switch: FC< React.ComponentProps< typeof Root > > = ( {
  // checkedIcon,
  // unCheckedIcon,
  className,
  ...props
} ) => {
  return (
    <Root
      data-slot="switch"
      className={ cn(
        'peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-9 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className
      ) }
      { ...props }
    >
      {/* { checkedIcon &&
        <Icon 
          icon={ checkedIcon } 
          className="absolute top-0 left-0 w-[16px] h-[16px] text-white"
          size="small"
        />
      } 
      { unCheckedIcon &&
        <Icon 
          icon={ unCheckedIcon } 
          className="absolute top-0 right-0 w-[16px] h-[16px]"
          size="small"
        />
      } */}
      <Thumb
        data-slot="switch-thumb"
        className={ cn(
          'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-4.5 data-[state=unchecked]:translate-x-0'
        ) }
      />
    </Root>
  )
}

export default Switch