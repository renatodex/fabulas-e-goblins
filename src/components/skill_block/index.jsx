import React, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import { RiRulerLine } from 'react-icons/ri';
import { HiOutlineClock } from 'react-icons/hi';

export function TagLabel ({ icon, children, mode = 'light' }) {
    const themeClass = mode == 'light' ? 'taglabel--light' : 'taglabel--dark'
    return (
        <div className={`${styles['taglabel']} ${styles[themeClass]}`}>
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

export function SpellFromJson ({ spellData }) {
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
        >
            <Caption>{spellData.caption}</Caption>
            <Description>
                <div
                    dangerouslySetInnerHTML={{
                        __html: spellData.description,
                    }}
                />
            </Description>
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
    element = 'default',
}) {
  let mode = 'light';
  if (element == 'eletric' || element == 'acid' || element == 'chaos') {
    mode = 'dark'
  }

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

  return (
    <div className={`${styles['spell-block']} ${styles[`spell-block--${element || 'default'}`]}`}>
        <div className={styles['spell-block__header']}>
            <div className={styles['spell-block__col1']}>
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

        <div className={styles['spell-block__body']}>
            {children}
        </div>
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