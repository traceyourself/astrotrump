import React, {PropTypes} from 'react'
import style from './style'

import Avatar from 'atm.Avatar'

const avatarSize = {
  small: 100,
  big: 150
}

const TrumpConnection = ({avatarSrc, degrees, size = 'big'}) => (
  <div className={size === 'small' ? style['wrapper-small'] : style.wrapper}>
    <Avatar
      src='/images/trump.jpg'
      size={avatarSize[size]}
    />
    <div className={style.circleWrapper}>
      <img
        src='/images/connection-circle.svg'
        className={style.circle}
      />
      {
        degrees
        ? <div className={style.degreeWrapper}>
          <span className={style.degree}>{degrees}</span>
        </div>
        : undefined
      }
    </div>
    <Avatar
      src={avatarSrc}
      size={avatarSize[size]}
    />
  </div>
)

TrumpConnection.propTypes = {
  avatarSrc: PropTypes.string,
  degrees: PropTypes.number,
  size: PropTypes.oneOf(['small', 'big'])
}

export default TrumpConnection