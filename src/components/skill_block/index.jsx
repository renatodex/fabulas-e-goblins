import React, { useState, useEffect, Fragment } from 'react'
import styles from './style.module.scss'
import { RiRulerLine } from 'react-icons/ri';
import { HiOutlineClock } from 'react-icons/hi';
import { useSpring, animated } from 'react-spring'

export function TagLabel ({ icon, children, mode = 'light', classNames }) {
    const themeClass = mode == 'light' ? 'taglabel--light' : 'taglabel--dark'
    return (
        <div className={`${styles['taglabel']} ${styles[themeClass]} ${classNames}`}>
            <span className={styles['taglabel__icon']}>
                {icon}
            </span>
            <span className={styles['taglabel__label']}>
                {children}
            </span>
        </div>
    )
}

export function Title ({ children, mode = 'light' }) {
    const themeClass = mode == 'light' ? 'spell-block__title--light' : 'spell-block__title--dark'
    return (
        <div className={`${styles['spell-block__title']} ${styles[themeClass]}`}>
            {children}
        </div>
    )
}

export function Icon ({ name, icon, mode = 'light' }) {
    const [IconComponent, setIconComponent] = useState(<div/>)
    const themeClass = mode == 'light' ? 'spell-block__icon--light' : 'spell-block__icon--dark'

    useEffect(() => {
        import(/* webpackChunkName: "chunkName" */ 'react-icons/gi').then(module => {
            setIconComponent(module[icon])
        })
    }, [icon])

    return (
        <div className={`${styles['spell-block__icon']} ${styles[themeClass]}`}>
            <div className={styles['spell-block__icon-wrapper']}>
                {IconComponent}
            </div>
        </div>
    )
}

export function SpellFromJson ({ spellData, selected, expanded = true, onClick = () => {} }) {
    return (
        <Spell
            name={spellData.name}
            magic_cost={spellData.magic_cost}
            duration_time={spellData.duration_time}
            attack_logic={spellData.attack_logic}
            action_type={spellData.action_type}
            cast_distance={spellData.cast_distance}
            range_amount={spellData.range_amount}
            range_type={spellData.range_type}
            icon={spellData.icon}
            element={spellData.element}
            tags={spellData.tags}
            expanded={expanded}
            selected={selected}
            onClick={e => onClick(spellData, e)}
        >
          <Fragment>
            <Caption>
                <div
                  dangerouslySetInnerHTML={{
                    __html: spellData.caption,
                  }}
                />
            </Caption>
            <Description>
                <div
                  dangerouslySetInnerHTML={{
                    __html: spellData.description,
                  }}
                />
            </Description>
          </Fragment>
        </Spell>
    )
}

export function Spell ({
    name,
    magic_cost,
    duration_time,
    cast_distance,
    attack_logic,
    action_type,
    range_amount,
    range_type,
    children,
    icon,
    expanded,
    selected,
    onClick,
    tags = [],
    element = 'default',
}) {
  const [expandToggle, setExpandToggle] = useState(expanded)
  const [selectedToggle, setSelectedToggle] = useState(selected)

  const props = useSpring({
    config: { duration: 180 },
    to: {
      opacity: (expandToggle ? 1 : 0),
      transform: (expandToggle ? 'scaleY(1)' : 'scaleY(0)'),
      maxHeight:  (expandToggle ? '2000px' : '0px'),
    },
    from: {
      opacity: (expandToggle ? 0 : 1),
      transform: (expandToggle ? 'scaleY(0)' : 'scaleY(1)'),
      maxHeight:  (expandToggle ? '0px' : '2000px'),
    },
  })

  let mode = 'light';
  if (element == 'eletric'  || element == 'chaos') {
    mode = 'dark'
  }

  const isSpecial = tags.includes('special') || tags.includes('ultimate')

  const elementMap = {
      'fire': 'Fogo',
      'ice': 'Gelo',
      'wind': 'Vento',
      'eletric': 'Elétrico',
      'holy': 'Luz',
      'darkness': 'Trevas',
      'chaos': 'Caos',
      'arcane': 'Arcano',
      'acid': 'Ácido',
      'materia': 'Matéria',
      'nature': 'Natureza',
      'water': 'Água',
  }[element]

  const backgroundColor = () => {
      if (selected) {
        return styles['spell-block--selected']
      } else {
        return styles[`spell-block--${element || 'default'}`]
      }
  }

  const isSacrifice = tags.includes('sacrifice')

  return (
    <div onClick={onClick} className={`${styles['spell-block']} ${backgroundColor()}`}>
        <div
          className={styles['spell-block__header']}
          onClick={e => { setExpandToggle(!expandToggle) }}
        >
            <div className={styles['spell-block__col1']}>
                <div className={styles['spell-block__iconleft']}>
                    {isSacrifice && (
                        <TagLabel mode={mode} classNames={`${styles['spell-block__sacrifice']}`}>Sacrifício</TagLabel>
                    )}
                </div>
                <div className={styles['spell-block__iconleft']}>
                    {attack_logic && (
                        <TagLabel mode={mode}>{attack_logic}</TagLabel>
                    )}
                </div>
                <div className={styles['spell-block__iconright']}>
                    {action_type && (
                        <TagLabel mode={mode}>{action_type}</TagLabel>
                    )}
                </div>
                {isSpecial && (
                    <div className={`${styles['spell-block__iconright']}`}>
                        <TagLabel mode={mode}>Especial</TagLabel>
                    </div>
                )}
            </div>
            <div className={styles['spell-block__col2']}>
                <Icon mode={mode} icon={icon}></Icon>
            </div>
            <div className={styles['spell-block__col3']}>
                <Title mode={mode}>{name}</Title>

                <div className={styles['spell-block__properties']}>
                    {magic_cost && (
                      <TagLabel mode={mode}>
                        {magic_cost}
                      </TagLabel>
                    )}

                    {duration_time && (
                        <TagLabel mode={mode}>
                            <HiOutlineClock />
                            &nbsp;
                            {duration_time}
                        </TagLabel>
                    )}

                    {(cast_distance || range_type || range_amount) && (
                        <TagLabel mode={mode}>
                            <RiRulerLine />
                            &nbsp;
                            {cast_distance} | {range_type} {range_amount}
                        </TagLabel>
                    )}

                    {elementMap && (
                        <TagLabel mode={mode}>
                            {elementMap}
                        </TagLabel>
                    )}
                </div>
            </div>
        </div>

           <animated.div style={props} className={styles['spell-block__body']}>
                {children}
           </animated.div>
    </div>
  )
}

export function Caption ({ children }) {
    return (
        <div className={styles['spell-block__epic_description']}>{children}</div>
    )
}

export function Description ({ children }) {
    return (
        <div className={styles['spell-block__mechanic_description']}>{children}</div>
    )
}
