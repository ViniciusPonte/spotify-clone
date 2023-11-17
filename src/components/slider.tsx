'use client'
import React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'
import { tv, VariantProps } from 'tailwind-variants'

const slider = tv({
  base: ['relative flex items-center select-none touch-none h-5'],

  variants: {
    variant: {
      sm: 'w-[150px]',
      md: 'w-[500px]',
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
      <SliderPrimitive.Track className="grow relative rounded-full h-[3px] bg-spotifyGray600">
        <SliderPrimitive.Range className="absolute bg-white rounded-full h-full" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="block w-5 h-5 bg-white shadow rounded-xl"
        aria-label="Volume"
      />
    </SliderPrimitive.Root>
  )
}
