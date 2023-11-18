'use client'
import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { tv, VariantProps } from 'tailwind-variants'

const slider = tv({
  base: ['relative flex items-center select-none touch-none h-5 group'],

  variants: {
    variant: {
      sm: 'w-28',
      md: 'w-100',
    },
  },

  defaultVariants: {
    variant: 'md',
  },
})

type SliderProps = VariantProps<typeof slider>

export function Slider({ variant }: SliderProps) {
  return (
    <SliderPrimitive.Root
      className={slider({ variant })}
      defaultValue={[50]}
      max={100}
      step={1}
    >
      <SliderPrimitive.Track className="grow relative rounded-full h-[4px] bg-spotifyGray500">
        <SliderPrimitive.Range className="absolute bg-white rounded-full h-full group-hover:bg-spotifyGreen" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="none w-[11px] h-[11px] bg-white shadow rounded-xl group-hover:block outline-none"
        aria-label="Volume"
      />
    </SliderPrimitive.Root>
  )
}
