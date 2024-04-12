import { PropsWithChildren } from 'terra'

type SpacingUnits = 'px' | 'em' | 'rem'

type Props = {
  row?: boolean
  reverse?: boolean
  spacing?: number | `${number}${SpacingUnits}`
  className?: string | string[]
}

const Stack = (props: PropsWithChildren<Props>) => {
  const classes = Array.isArray(props.className) ? props.className : [props.className]
  const { row = false, reverse = false } = props
  classes.push(`terradom-stack-${row ? 'row' : 'column'}` + (reverse ? '-reverse' : ''))

  const styles = {
    gap: undefined
  }

  const { spacing = '1rem' } = props
  if (typeof spacing === 'number') {
    styles.gap = `${spacing}px`
  } else {
    styles.gap = spacing
  }

  return (
    <div>

    </div>
  )
}

export default Stack
