import React from 'react'

export function Effect({}) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: "1fr 1fr",
      gridGap: '1em',
    }}>
      <div style={{border: '3px solid #000', padding: '1em'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 4fr'}}>
          <div><img src="https://s3.us-west-2.amazonaws.com/fabulas-e-goblins-book/%5Cvscode%5Ca20c1cc7-83bb-470f-b6b6-3f60a9c63c3b.png" width="70" /></div>
          <div>
            <h1>Veneno X/Y</h1>
            <div>
              O X representa quanto de Dano você receberá por turno com o Veneno.<br/>
              O Y representa quantos turnos ele durará.
              <p>O efeito Veneno causa dano fixo contínuo por turno.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}