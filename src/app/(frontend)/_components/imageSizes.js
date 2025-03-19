export function imageSizes(breakPoints) {
  const TAILWIND_UNIT = 4
  const defaultBreakPoints = {
    '2xl': 1536,
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640,
    xs: 380,
  }

  try {
    return Object.entries(breakPoints)
      .map(([key, { gap = 0, padding = 0, cols = 1 }]) => {
        const width = defaultBreakPoints[key]
        const gapPx = gap * TAILWIND_UNIT // 1 tailwind unit is 4px
        const paddingPx = padding * TAILWIND_UNIT * 2 //for both left and right
        const extraSpaces = paddingPx + gapPx * (cols - 1)

        if (width === 0) {
          return `calc(${Math.floor(100 / cols)}vw - ${extraSpaces / cols}px)`
        }
        return `(min-width: ${width}px) ${Math.floor((width - extraSpaces) / cols)}px`
      })
      .join(',')
  } catch (error) {
    console.error('Error calculating image sizes:', error)
    return '100vw'
  }
}

// const defaultBreakPoints = {
//     "2xl": 1536,
//     xl: 1280,
//     lg: 1024,
//     md: 768,
//     sm: 640,
//     xs: 0,
// }

//tailwind
// 'xs': "500px",
// "sm": "524px",
// 'lg': "990px",
// "wide": "1400px"

// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }
