const curfewRed = 'var(--active-curfew-red)'
const totalHeight = 350

/**
 *
 * @param {moment.Moment} start Start time of the current curfew
 * @param {moment.Moment} end End time of the previous curfew
 * @return {JSX.Element}
 * @constructor
 */
const CurfewLine = ({end, start}) => {

  const endHour = end?.hour() || 0
  const prevHeight = (endHour / 24) * totalHeight

  const currentHour = 24 - start?.hour() || 0
  const currentHeight = (currentHour / 24) * totalHeight

  const freeMovementHeight = totalHeight - prevHeight - currentHeight

  const styles = {
    visualizer: {
      display: 'flex',
      justifyContent: 'space-around',
      width: 280,
      marginTop: 24,
    },

    column: {
      display: 'flex',
      flexDirection: 'column',
      width: 111
    },

    rightColumn: {},

    line: {
      background: 'var(--free-movement-green)',
      height: totalHeight,
      width: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },

    prev: {
      background: curfewRed,
      height: prevHeight,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      position: 'relative',
    },

    prevBulb: {
      display: prevHeight === 0 ? 'none': 'unset',
      background: curfewRed,
      width: 26,
      height: 26,
      borderRadius: '50%',
      position: 'absolute',
      bottom: -16,
    },

    prevCurfew: {
      textAlign: 'right',
      width: 100,
      height: prevHeight,
      display: prevHeight === 0 ? 'none': 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },

    free: {
      textAlign: 'right',
      width: 100,
      height: freeMovementHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },

    current: {
      background: curfewRed,
      height: currentHeight,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
    },

    currentBulb: {
      background: curfewRed,
      width: 26,
      height: 26,
      borderRadius: '50%',
      position: 'absolute',
      top: -16,
    },

    currentCurfew: {
      textAlign: 'right',
      width: 100,
      height: currentHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },

    timeHolder: {
      display: 'flex',
      alignItems: 'flex-end',
      width: 'fit-content',
    },

    prevTimeHolder: {
      display: prevHeight === 0 ? 'none': 'flex',
      height: prevHeight + 19,
    },

    currentTimeHolder: {
      height: prevHeight === 0 ? freeMovementHeight + 19 : freeMovementHeight
    },

    horizontalLine: {
      height: 1,
      margin: '19px 0',
      width: 32,
      background: 'white'
    },

    timeDetails: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginLeft: 16,
      width: 100,
    },

    timeTitle: {
      fontWeight: 'bold',
      fontSize: 18
    },

    timeDesc: {
      fontSize: 12
    },
  }

  return (
    <div style={styles.visualizer}>
      <div style={styles.column}>
        <span style={styles.prevCurfew}>Curfew</span>
        <span style={styles.free}>Free Movement</span>
        <span style={styles.currentCurfew}>Curfew</span>
      </div>
      <div style={styles.line}>
        <div style={styles.prev}>
          <div style={styles.prevBulb}/>
        </div>
        <div style={styles.current}>
          <div style={styles.currentBulb}/>
        </div>
      </div>
      <div style={styles.column}>
        <div style={{
          ...styles.timeHolder,
          ...styles.prevTimeHolder
        }}>
          <div style={styles.horizontalLine}/>
          <div style={styles.timeDetails}>
            <span style={styles.timeTitle}>{end?.format('h:mma')}</span>
            <span style={styles.timeDesc}>Previous curfew ends</span>
          </div>
        </div>
        <div style={{
          ...styles.timeHolder,
          ...styles.currentTimeHolder
        }}>
          <div style={styles.horizontalLine}/>
          <div style={styles.timeDetails}>
            <span style={styles.timeTitle}>{start.format('h:mma')}</span>
            <span style={styles.timeDesc}>Curfew begins</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurfewLine